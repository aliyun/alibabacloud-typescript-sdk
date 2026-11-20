// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAxbBindFixedLineRequest extends $dara.Model {
  /**
   * @remarks
   * Number pool ID.
   * 
   * This parameter is required.
   * 
   * @example
   * FC10000016848****
   */
  appId?: string;
  /**
   * @remarks
   * Unique identifier of the message request.
   * 
   * This parameter is required.
   * 
   * @example
   * 123*******
   */
  orderId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Binding ID.
   * 
   * This parameter is required.
   * 
   * @example
   * A93I******
   */
  subId?: string;
  /**
   * @remarks
   * Business timestamp. Format: yyyyMMddHHmmssSSS. The time uses Beijing time in 24-hour clock format, accurate to milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 20161114143116123
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

