import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let _API_URL_FOR ={
    Login:"http://www.avantesoft.com/thrift/api/",
    Reg:"http://www.avantesoft.com/thrift/api/",
    AcctType:"http://www.avantesoft.com/thrift/api/getAllAccounts",
}

@Injectable()
export class apiServices{
    constructor(public http:Http){
        console.log('Hello api services');
    }
registerUser(userRecord,type){
    return new Promise((resolve,reject)=> {
        let headers = new Headers();

        this.http.post(_API_URL_FOR.Reg + type, JSON.stringify(userRecord),{headers : headers})
        .subscribe(res=>{
            resolve(res.json());
        },(err)=>{
            reject(err);
        });
    }); 
}
loginUser(userRecord,type){
    return new Promise((resolve,reject)=> {
        let headers = new Headers();
        this.http.post(_API_URL_FOR.Login + type, JSON.stringify(userRecord),{headers : headers})
        .subscribe(res=>{
            resolve(res.json());
            console.log(res.json());
        },(err)=>{
            reject(err);
            console.log(err);
        });
    }); 
}

getAcctTypes(){
    return new Promise((resolve,reject)=> {
        let headers = new Headers();
        this.http.get(_API_URL_FOR.AcctType,{headers : headers})
        .subscribe(res=>{
            resolve(res.json());
            console.log(res.json());
        },(err)=>{
            reject(err);
            console.log(err);
        });
    }); 
}
}
