// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeAuctionRequestAuctionList } from "./ChangeAuctionRequestAuctionList";


export class ChangeAuctionRequest extends $dara.Model {
  auctionList?: ChangeAuctionRequestAuctionList[];
  static names(): { [key: string]: string } {
    return {
      auctionList: 'AuctionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionList: { 'type': 'array', 'itemType': ChangeAuctionRequestAuctionList },
    };
  }

  validate() {
    if(Array.isArray(this.auctionList)) {
      $dara.Model.validateArray(this.auctionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

