// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo } from "./CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo";


export class CreatePickUpWaybillPreQueryRequestSenderInfo extends $dara.Model {
  /**
   * @remarks
   * The address of the sender.
   */
  addressInfo?: CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo;
  /**
   * @remarks
   * The mobile phone number of the sender.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  mobile?: string;
  /**
   * @remarks
   * The name of the sender.
   * 
   * This parameter is required.
   * 
   * @example
   * Wang
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
      addressInfo: CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo,
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

