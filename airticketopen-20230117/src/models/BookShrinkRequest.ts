// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BookShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * contact information
   * 
   * This parameter is required.
   */
  contactShrink?: string;
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
  passengerAncillaryPurchaseMapListShrink?: string;
  /**
   * @remarks
   * passenger list
   * 
   * This parameter is required.
   */
  passengerListShrink?: string;
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
      contactShrink: 'contact',
      outOrderNum: 'out_order_num',
      passengerAncillaryPurchaseMapListShrink: 'passenger_ancillary_purchase_map_list',
      passengerListShrink: 'passenger_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactShrink: 'string',
      outOrderNum: 'string',
      passengerAncillaryPurchaseMapListShrink: 'string',
      passengerListShrink: 'string',
      solutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

