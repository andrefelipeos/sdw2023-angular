import { Component, OnInit } from '@angular/core';
import { AmountDataModel } from 'src/app/model/amountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-amount-box',
  templateUrl: './amount-box.component.html',
  styleUrls: ['./amount-box.component.css']
})
export class AmountBoxComponent implements OnInit {
  accountDetails: AmountDataModel = {
    amountValue: 0,
    limit: 0,
    totalAmount: 0
  }

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.getAmountValues()
  }

  getAmountValues() {
    this.cardsService.getCard().subscribe(data => {
      this.accountDetails.amountValue = data.account.balance
      this.accountDetails.limit = data.account.limit
      this.accountDetails.totalAmount = this.accountDetails.amountValue + this.accountDetails.limit
    })
  }

}
