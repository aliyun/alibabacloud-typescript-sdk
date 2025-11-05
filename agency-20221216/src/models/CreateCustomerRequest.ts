// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomerRequest extends $dara.Model {
  /**
   * @remarks
   * Customer\\"s name.
   * 
   * This parameter is required.
   * 
   * @example
   * DoorBell Marketing
   */
  customerName?: string;
  /**
   * @remarks
   * The source/channel that allow client to connected with us. Please enumerate with Customer Source.
   * 
   * This parameter is required.
   * 
   * @example
   * website
   */
  customerSource?: string;
  /**
   * @remarks
   * The sub-industry that Customer\\"s business belongs to. Please enumerate with Customer Trade.
   * 
   * @example
   * 0101
   */
  customerSubTrade?: string;
  /**
   * @remarks
   * The industry that Customer\\"s business belongs to. Please enumerate with Customer Trade.
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  customerTrade?: string;
  /**
   * @remarks
   * The region that Customer choose to launch the Cloud Service. Please use ListCountries to confirm the valid region list for current UID.
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

