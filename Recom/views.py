from django.shortcuts import render
from sklearn.neighbors import NearestNeighbors
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
import sys
from tabulate import tabulate
import random
import os
import json
# from rest_framework.viewsets import modelviewset
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from collections import Counter
import numpy as np
import pandas as pd
from sklearn.preprocessing import OrdinalEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.multioutput import MultiOutputClassifier
from sklearn.multioutput import MultiOutputRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import Ridge
import random
# Create your views here.


def home(request):
    return JsonResponse({'foo':'bar'})

class DecisionTree():
    def __init__(self, x, y, n_features, f_idxs,idxs,depth=10, min_leaf=5):
        self.x, self.y, self.idxs, self.min_leaf, self.f_idxs = x, y, idxs, min_leaf, f_idxs
        self.depth = depth
        print(f_idxs)
#         print(self.depth)
        self.n_features = n_features
        self.n, self.c = len(idxs), x.shape[1]
        self.val = np.mean(y[idxs])
        self.score = float('inf')
        self.find_varsplit()
        
    def find_varsplit(self):
        for i in self.f_idxs: self.find_better_split(i)
        if self.is_leaf: return
        x = self.split_col
        lhs = np.nonzero(x<=self.split)[0]
        rhs = np.nonzero(x>self.split)[0]
        lf_idxs = np.random.permutation(self.x.shape[1])[:self.n_features]
        rf_idxs = np.random.permutation(self.x.shape[1])[:self.n_features]
        self.lhs = DecisionTree(self.x, self.y, self.n_features, lf_idxs, self.idxs[lhs], depth=self.depth-1, min_leaf=self.min_leaf)
        self.rhs = DecisionTree(self.x, self.y, self.n_features, rf_idxs, self.idxs[rhs], depth=self.depth-1, min_leaf=self.min_leaf)

    def find_better_split(self, var_idx):
        x, y = self.x.values[self.idxs,var_idx], self.y[self.idxs]
        sort_idx = np.argsort(x)
        sort_y,sort_x = y[sort_idx], x[sort_idx]
        rhs_cnt,rhs_sum,rhs_sum2 = self.n, sort_y.sum(), (sort_y**2).sum()
        lhs_cnt,lhs_sum,lhs_sum2 = 0,0.,0.

        for i in range(0,self.n-self.min_leaf-1):
            xi,yi = sort_x[i],sort_y[i]
            lhs_cnt += 1; rhs_cnt -= 1
            lhs_sum += yi; rhs_sum -= yi
            lhs_sum2 += yi**2; rhs_sum2 -= yi**2
            if i<self.min_leaf or xi==sort_x[i+1]:
                continue

            lhs_std = std_agg(lhs_cnt, lhs_sum, lhs_sum2)
            rhs_std = std_agg(rhs_cnt, rhs_sum, rhs_sum2)
            curr_score = lhs_std*lhs_cnt + rhs_std*rhs_cnt
            if curr_score<self.score: 
                self.var_idx,self.score,self.split = var_idx,curr_score,xi
def Start(car_data,price,displacement,fuel,power,suggestion_count=10):
    car_data = car_data.dropna(axis=0, how ='any')
    modified_data = car_data.copy(deep=True)
    del modified_data['Model']
    del modified_data['Make']
    del modified_data['Variant']
    del modified_data['Cylinders']
    del modified_data['Valves_Per_Cylinder']
    del modified_data['Fuel_Tank_Capacity']
    del modified_data['Fuel_Type']
    del modified_data['torque']
  
#scale values
    scaler = MinMaxScaler()
    scaler.fit_transform(modified_data)
    nn_classifier = NearestNeighbors(n_neighbors=int(suggestion_count)) 
    nn_classifier.fit(modified_data)
    neighbors = nn_classifier.kneighbors([[price,displacement,fuel,power]], return_distance=False)
    a=[]
    r1=[]
    for index in range(0,modified_data.size):
        if index  in neighbors:
            a.append(index)
    random.shuffle(a)

    for index in a:
        r1.append(car_data.iloc[index,1:4])
    return r1
class RandomForest():
    def __init__(self, x, y, n_trees, n_features, sample_sz, depth=10, min_leaf=5):
        np.random.seed(12)
        if n_features == 'sqrt':
            self.n_features = int(np.sqrt(x.shape[1]))
        elif n_features == 'log2':
            self.n_features = int(np.log2(x.shape[1]))
        else:
            self.n_features = n_features
        print(self.n_features, "sha: ",x.shape[1])    
        self.x, self.y, self.sample_sz, self.depth, self.min_leaf  = x, y, sample_sz, depth, min_leaf
        self.trees = [self.create_tree() for i in range(n_trees)]

    def create_tree(self):
        idxs = np.random.permutation(len(self.y))[:self.sample_sz]
        f_idxs = np.random.permutation(self.x.shape[1])[:self.n_features]
        return DecisionTree(self.x.iloc[idxs], self.y[idxs], self.n_features, f_idxs,
                    idxs=np.array(range(self.sample_sz)),depth = self.depth, min_leaf=self.min_leaf)
        
    def predict(self, x):
        return np.mean([t.predict(x) for t in self.trees], axis=0)

def start(car_data,price,displacement,fuel,power):
    df=car_data
    ine = df[['0','Ex-Showroom_Price','Displacement','Cylinders','Fuel_Tank_Capacity','Height','Length','Width','City_Mileage','Highway_Mileage','Kerb_Weight','Ground_Clearance','Front_Track','Rear_Track','Power','torque','Seating_Capacity','Wheelbase','Boot_Space','Minimum_Turning_Radius','Number_of_Airbags']]
    enc = OrdinalEncoder()
    Ma = df[['Make','Model', 'Variant', 'Emission_Norm', 'Engine_Location','Fuel_Type','Body_Type','Front_Suspension','Rear_Suspension',]]
    enc.fit(Ma)
    etra = pd.DataFrame(enc.transform(Ma))
    b = np.concatenate((etra,ine),axis=1)
    X=b[:,3:29].astype(int)
    a1=b[:,2:8]
    a2=b[:,10:30]
    x=np.concatenate((a1,a2),axis=1)
    y=b[:,0:2]
    Clf=RandomForestClassifier()
    Clf.fit(x,y)
    import random
    value1 = random.choice(df['Cylinders'])
    value2 = random.choice(df['Fuel_Tank_Capacity'])
    value3 = random.choice(df['Height'])
    value4 = random.choice(df['Length'])
    value5 = random.choice(df['Width'])
    value6 = random.choice(df['City_Mileage'])
    value7 = random.choice(df['Highway_Mileage'])
    value8 = random.choice(df['Kerb_Weight'])
    value9 = random.choice(df['Ground_Clearance'])
    value10 = random.choice(df['Front_Track'])
    value11 = random.choice(df['Rear_Track'])
    value12 = random.choice(df['torque'])
    value13 = random.choice(df['Seating_Capacity'])
    value14 = random.choice(df['Wheelbase'])
    value15 = random.choice(df['Boot_Space'])
    value16 = random.choice(df['Minimum_Turning_Radius'])
    value17 = random.choice(df['Number_of_Airbags'])
    value18 = random.choice(etra[3])
    value19 = random.choice(etra[4])
    value20 = random.choice(etra[6])
    value21 = random.choice(etra[7])
    value22 = random.choice(etra[8])
    x1=[[price,displacement,value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12,power,value13,value14,value15,value16,value17,value18,value19,fuel,value20,value21,value22]]
    z=[[0,0,0,0,0,0,0]]
    k=[[]]
    m=[]
    predictions_all = np.array([tree.predict(x1) for tree in Clf.estimators_])
    o=np.zeros((predictions_all.size,7))
    for i in predictions_all:
        z2=np.concatenate((i,z),axis=1)
  

        m.append(enc.inverse_transform(z2))
    from numpy import array
    q=array(m)
    import random
    r=np.vstack({tuple(row) for row in q[:,0,0:2]})
    random_index = random.randint(0,50)
    (node_indicator, _) = Clf.decision_path(x1)
    r2=(random.choices(population=r, k=15))
    r3=np.vstack({tuple(row) for row in r2})
    return r3





def suggest_model_given_attributes(price,displacement,fuel,power, suggestion_count):
    car_data = pd.read_csv("car_a 25.csv", skip_blank_lines=True)
    df=car_data
    df['Ex-Showroom_Price'] = df['Ex-Showroom_Price'].astype('int64')
    df['Displacement'] = df['Displacement'].astype('int64')
    df['Cylinders'] = df['Cylinders'].astype('int64')

    df['Fuel_Tank_Capacity'] = df['Fuel_Tank_Capacity'].astype('int64')
    # df['Height'] = df['Height'].astype('int64')
    # df['Length'] = df['Length'].astype('int64')
    # df['Width'] = df['Width'].astype('int64')
    # df['City_Mileage'] = df['City_Mileage'].astype('int64')
    # df['Highway_Mileage'] = df['Highway_Mileage'].astype('int64')
 
    # df['Kerb_Weight'] = df['Kerb_Weight'].astype('int64')
    # df['Ground_Clearance'] = df['Ground_Clearance'].astype('int64')
    # df['Front_Track'] = df['Front_Track'].astype('int64')
    # df['Rear_Track'] = df['Rear_Track'].astype('int64')
    df['Power'] = df['Power'].astype('int64')
    df['torque'] = df['torque'].astype('int64')
    # df['Seating_Capacity'] = df['Seating_Capacity'].astype('int64')
    # df['Wheelbase'] = df['Wheelbase'].astype('int64')
    # df['Boot_Space'] = df['Boot_Space'].astype('int64')
    # df['Minimum_Turning_Radius'] = df['Minimum_Turning_Radius'].astype('int64')
  
    # df['Number_of_Airbags'] = df['Number_of_Airbags'].astype('int64')
    


    r1=start(car_data,price,displacement,fuel,power)
    
    # r1 = modified_data.copy(deep=True)
    # del r1['Ex-Showroom_Price']
    # del r1['Displacement']
    # del r1['Fuel_Type']
    # del r1['Power']
   
    

    # r1=car_data.copy(deep=True)
    #
    #     print(r1)
    # # print(r1)
    df = pd.DataFrame(r1)
    
    return df
    
@csrf_exempt
def Recom(request):
    if request.method == 'POST': 
        json_data = json.loads(request.body)
        price=int(json_data['price'])
        displacement=int(json_data['displacement'])
        fuel=int(json_data['fuel'])
        power=int(json_data['power'])
        if fuel==1:
            fuel=5
        elif fuel==2:
            fuel=2
        elif fuel==3:
            fuel=0
        

        # price = int(request.POST.get('price') )
        # displacement = int(request.POST.get('displacement') )
        # fuel = int(request.POST.get('fuel') )
        # power= int(request.POST.get('power') )
    # price =int( request.POST['state.price'])
    # displacement = int (request.POST['state.displacement'])
    # fuel=int (request.POST['state.fuel'])
    # power=int (request.POST['state.power'])
    #res=msrp
    
    res = suggest_model_given_attributes(price,displacement,fuel,power,10)
    r2=res.to_html
    print(res)
    result=res.to_json()
    result = result.replace('0', 'Make')
    result = result.replace('1', 'Model')
    print (result )
    return JsonResponse({'result':result})
    # return render(request,{'r2':res})
    # return JsonResponse(request,"result.html",{'r2':r2},safe=False)
    # return JsonResponse(res)