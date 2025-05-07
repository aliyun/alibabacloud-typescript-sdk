// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateBlackNoRequest extends $dara.Model {
  /**
   * @remarks
   * The phone number to be added to or deleted from the blacklist.
   * 
   * This parameter is required.
   * 
   * @example
   * 150****0000
   */
  blackNo?: string;
  /**
   * @remarks
   * The type of the operation on the phone number. Valid values:
   * 
   * *   **AddBlack**: adds the phone number to the blacklist.
   * *   **DeleteBlack**: deletes the phone number from the blacklist.
   * 
   * This parameter is required.
   * 
   * @example
   * AddBlack
   */
  operateType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC123456****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * abcdef
   */
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      blackNo: 'BlackNo',
      operateType: 'OperateType',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackNo: 'string',
      operateType: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tips: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

