// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MarketInfo } from "./MarketInfo";


export class MarketListResult extends $dara.Model {
  markets?: MarketInfo[];
  static names(): { [key: string]: string } {
    return {
      markets: 'markets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markets: { 'type': 'array', 'itemType': MarketInfo },
    };
  }

  validate() {
    if(Array.isArray(this.markets)) {
      $dara.Model.validateArray(this.markets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

