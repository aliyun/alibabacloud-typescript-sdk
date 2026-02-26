// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addressDetail?: string;
  /**
   * @example
   * 0
   */
  addressId?: number;
  /**
   * @example
   * 610102
   */
  divisionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  receiver?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 182***5674
   */
  receiverPhone?: string;
  /**
   * @example
   * 61010212
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

