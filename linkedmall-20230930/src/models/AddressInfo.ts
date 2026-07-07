// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressInfo extends $dara.Model {
  /**
   * @remarks
   * The detailed shipping address. Enter the full address in the format of province, city, district/county, street, and community.
   * 
   * This parameter is required.
   * 
   * @example
   * 陕西省西安市新城区xx街道xxx大厦xx室
   */
  addressDetail?: string;
  /**
   * @remarks
   * The address ID.
   * 
   * @example
   * 0
   */
  addressId?: number;
  /**
   * @remarks
   * The level-4 address code for the district or county. This parameter is recommended.
   * 
   * @example
   * 330106
   */
  divisionCode?: string;
  /**
   * @remarks
   * The recipient.
   * 
   * This parameter is required.
   * 
   * @example
   * 任先生
   */
  receiver?: string;
  /**
   * @remarks
   * The phone number of the recipient.
   * 
   * This parameter is required.
   * 
   * @example
   * 182***5674
   */
  receiverPhone?: string;
  /**
   * @remarks
   * The level-5 address code for the town or street. This parameter is required.
   * 
   * @example
   * 330106109
   */
  townDivisionCode?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'addressDetail',
      addressId: 'addressId',
      divisionCode: 'divisionCode',
      receiver: 'receiver',
      receiverPhone: 'receiverPhone',
      townDivisionCode: 'townDivisionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      addressId: 'number',
      divisionCode: 'string',
      receiver: 'string',
      receiverPhone: 'string',
      townDivisionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

