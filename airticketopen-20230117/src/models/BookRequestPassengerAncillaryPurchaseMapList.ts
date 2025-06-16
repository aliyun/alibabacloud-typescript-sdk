// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BookRequestPassengerAncillaryPurchaseMapListBookAncillaryReqItem } from "./BookRequestPassengerAncillaryPurchaseMapListBookAncillaryReqItem";
import { BookRequestPassengerAncillaryPurchaseMapListPassengerList } from "./BookRequestPassengerAncillaryPurchaseMapListPassengerList";


export class BookRequestPassengerAncillaryPurchaseMapList extends $dara.Model {
  /**
   * @remarks
   * ancillary information
   */
  bookAncillaryReqItem?: BookRequestPassengerAncillaryPurchaseMapListBookAncillaryReqItem;
  /**
   * @remarks
   * passenger list for unified ancillary purchases
   */
  passengerList?: BookRequestPassengerAncillaryPurchaseMapListPassengerList[];
  static names(): { [key: string]: string } {
    return {
      bookAncillaryReqItem: 'book_ancillary_req_item',
      passengerList: 'passenger_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookAncillaryReqItem: BookRequestPassengerAncillaryPurchaseMapListBookAncillaryReqItem,
      passengerList: { 'type': 'array', 'itemType': BookRequestPassengerAncillaryPurchaseMapListPassengerList },
    };
  }

  validate() {
    if(this.bookAncillaryReqItem && typeof (this.bookAncillaryReqItem as any).validate === 'function') {
      (this.bookAncillaryReqItem as any).validate();
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

