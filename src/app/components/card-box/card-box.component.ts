import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {
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

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.getAccountData()
  }

  getAccountData() {
    this.cardsService.getCard().subscribe(data => {
      this.accountData.name = data.name
      this.accountData.account.agency = data.account.agency
      this.accountData.account.number = data.account.number
      this.accountData.card.limit = data.card.limit
      this.accountData.card.number = data.card.number.split("")[2]
    })
  }

}
