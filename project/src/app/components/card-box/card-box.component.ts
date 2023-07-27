import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from '../../model/accountDataModel';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {

  constructor(private service: CardsService) { }

  accountData: AccountDataModel = {
    name: 'Firminio',
    account: {
      agency: '000',
      number: '1111'
    },
    card: {
      limit: 10000,
      number: '1111111111111111'
    }
  };

  ngOnInit(): void {
      this.getAccountData()
  }

  getAccountData() {
    this.service.getCard().subscribe(data => {
      this.accountData.name = data.name
      this.accountData.card = data.card
      this.accountData.account.agency = data.account.agency
      this.accountData.account.number = data.account.number
      this.accountData.card.limit = data.card.limit
      this.accountData.card.number = data.card.number.split('')[3]
    })
  }

}
