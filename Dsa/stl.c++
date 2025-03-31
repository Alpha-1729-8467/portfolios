#include<iostream>
using namespace std;
int main(){
    // string s;
    // cin>>s;
    // for(int i =0;i<s.size();i++){
    //     if(s[i]== ' ' || s[i]==':' || s[i]==','){
    //         s.erase(i,1);
    //         i--;
    //     }
    
       
    // }
    // cout<<s;
    int a = 5 ;
    int b = 10;
    int s , max= 0;
    int i = 2;
    int arr = {};
    if(a>b){
        max = a;
    }
    else {max = b;}
    while(i<=max){
        if(a%i == 0 || b%i == 0){
             s = i;
        }
        i++;
    }
    int gcd = a*b/s ;
    arr = arr+s;
    arr =  arr+gcd;
    cout<<arr;

  
  


     
}
