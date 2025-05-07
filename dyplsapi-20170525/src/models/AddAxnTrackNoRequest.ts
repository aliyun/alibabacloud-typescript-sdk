// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAxnTrackNoRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The private number in the AXN binding, that is, phone number X.
   * 
   * You can call the [BindAxn](https://help.aliyun.com/document_detail/110258.html) operation to obtain the value of PhoneNoX.
   * 
   * This parameter is required.
   * 
   * @example
   * 1700000****
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC2235****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The binding ID.
   * 
   * You can call the [BindAxn](https://help.aliyun.com/document_detail/110258.html) operation to obtain the value of SubsId.
   * 
   * This parameter is required.
   * 
   * @example
   * 15678890****
   */
  subsId?: string;
  /**
   * @remarks
   * The tracking number.
   * 
   * This parameter is required.
   * 
   * @example
   * abcde*****
   */
  trackNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subsId: 'SubsId',
      trackNo: 'trackNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subsId: 'string',
      trackNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

