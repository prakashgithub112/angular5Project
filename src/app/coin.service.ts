import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Injectable()
export class CoinService {

  constructor(private http: HttpClient) { }

  addCoin(coin_name, coin_price) {
    const uri = 'http://localhost:4000/coins/add';
    const obj = {
      coin_name: coin_name,
      coin_price: coin_price
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }
}