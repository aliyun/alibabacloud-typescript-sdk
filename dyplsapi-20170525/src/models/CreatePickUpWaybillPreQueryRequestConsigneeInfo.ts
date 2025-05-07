// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo } from "./CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo";


export class CreatePickUpWaybillPreQueryRequestConsigneeInfo extends $dara.Model {
  /**
   * @remarks
   * The address of the consignee.
   */
  addressInfo?: CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo;
  /**
   * @remarks
   * The mobile phone number of the consignee.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  mobile?: string;
  /**
   * @remarks
   * The name of the consignee.
   * 
   * This parameter is required.
   * 
   * @example
   * Li
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addressInfo: 'AddressInfo',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfo: CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo,
      mobile: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.addressInfo && typeof (this.addressInfo as any).validate === 'function') {
      (this.addressInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

