// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomerRequest extends $dara.Model {
  /**
   * @remarks
   * The customer name.
   * 
   * This parameter is required.
   * 
   * @example
   * DoorBell Marketing
   */
  customerName?: string;
  /**
   * @remarks
   * The customer source.
   * Use the Customer Source enumeration.
   * 
   * This parameter is required.
   * 
   * @example
   * website
   */
  customerSource?: string;
  /**
   * @remarks
   * The customer sub-industry.
   * Use the Customer Sub Trade enumeration.
   * 
   * @example
   * 020501
   */
  customerSubTrade?: string;
  /**
   * @remarks
   * The customer industry name.
   * Use the Customer Trade enumeration.
   * 
   * This parameter is required.
   * 
   * @example
   * 0205
   */
  customerTrade?: string;
  /**
   * @remarks
   * The region to which the customer belongs. Call ListCountries to obtain the list of available regions for the current UID.
   * 
   * This parameter is required.
   * 
   * @example
   * AR
   */
  nation?: string;
  static names(): { [key: string]: string } {
    return {
      customerName: 'CustomerName',
      customerSource: 'CustomerSource',
      customerSubTrade: 'CustomerSubTrade',
      customerTrade: 'CustomerTrade',
      nation: 'Nation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerName: 'string',
      customerSource: 'string',
      customerSubTrade: 'string',
      customerTrade: 'string',
      nation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

