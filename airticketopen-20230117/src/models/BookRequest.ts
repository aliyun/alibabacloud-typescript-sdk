// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BookRequestContact } from "./BookRequestContact";
import { BookRequestPassengerAncillaryPurchaseMapList } from "./BookRequestPassengerAncillaryPurchaseMapList";
import { BookRequestPassengerList } from "./BookRequestPassengerList";


export class BookRequest extends $dara.Model {
  /**
   * @remarks
   * contact information
   * 
   * This parameter is required.
   */
  contact?: BookRequestContact;
  /**
   * @remarks
   * external order number(buyer customization)
   * 
   * This parameter is required.
   * 
   * @example
   * x091-2023-0220-j-0001
   */
  outOrderNum?: string;
  /**
   * @remarks
   * passenger-ancillary purchase relationship
   */
  passengerAncillaryPurchaseMapList?: BookRequestPassengerAncillaryPurchaseMapList[];
  /**
   * @remarks
   * passenger list
   * 
   * This parameter is required.
   */
  passengerList?: BookRequestPassengerList[];
  /**
   * @remarks
   * solution_id returned by Enrich
   * 
   * This parameter is required.
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      contact: 'contact',
      outOrderNum: 'out_order_num',
      passengerAncillaryPurchaseMapList: 'passenger_ancillary_purchase_map_list',
      passengerList: 'passenger_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: BookRequestContact,
      outOrderNum: 'string',
      passengerAncillaryPurchaseMapList: { 'type': 'array', 'itemType': BookRequestPassengerAncillaryPurchaseMapList },
      passengerList: { 'type': 'array', 'itemType': BookRequestPassengerList },
      solutionId: 'string',
    };
  }

  validate() {
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    if(Array.isArray(this.passengerAncillaryPurchaseMapList)) {
      $dara.Model.validateArray(this.passengerAncillaryPurchaseMapList);
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

