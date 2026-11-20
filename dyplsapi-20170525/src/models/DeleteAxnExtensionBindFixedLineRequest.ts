// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAxnExtensionBindFixedLineRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID identifier assigned by Alibaba Cloud to the customer.
   * 
   * This parameter is required.
   * 
   * @example
   * alitest
   */
  appId?: string;
  /**
   * @remarks
   * The unique identifier of the message request.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345dkwkd99d
   */
  orderId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The binding ID.
   * 
   * This parameter is required.
   * 
   * @example
   * GHX0534X202504221531579290029
   */
  subId?: string;
  /**
   * @remarks
   * Format: yyyyMMddHHmmssSSS. The time uses Beijing time in 24-hour format, accurate to milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 20250421141723098
   */
  ts?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subId: 'SubId',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      orderId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subId: 'string',
      ts: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

