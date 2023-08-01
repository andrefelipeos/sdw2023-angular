import { Component } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent {
  accountData: AccountDataModel = {
    name: "Darth Vader",
    account: {
      agency: "1020",
      number: "007654-12"
    },
    card: {
      limit: 10000,
      number: "8765 1234 1020 5070"
    }
  }
}
