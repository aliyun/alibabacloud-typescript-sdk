// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPhoneNumberOnlineTimeRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  authCode?: string;
  /**
   * @example
   * 示例值
   */
  inputNumber?: string;
  /**
   * @example
   * 示例值示例值
   */
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

