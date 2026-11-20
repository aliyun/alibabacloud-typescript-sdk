// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxbBindFixedLineRequest extends $dara.Model {
  /**
   * @remarks
   * The number pool ID.
   * 
   * This parameter is required.
   * 
   * @example
   * FC10000016848****
   */
  appId?: string;
  /**
   * @remarks
   * The unique identifier of the message request.
   * 
   * This parameter is required.
   * 
   * @example
   * 123*******
   */
  orderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The A/B number. Required when QueryType is set to 1.
   * 
   * @example
   * 138****6534
   */
  phone?: string;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * - 0: Query by binding ID.
   * 
   * - 1: Query by X and A/B numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  queryType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The binding ID. Required when QueryType is set to 0.
   * 
   * @example
   * A203**************
   */
  subId?: string;
  /**
   * @remarks
   * The X number. Required when QueryType is set to 1.
   * 
   * @example
   * 0571******23
   */
  telX?: string;
  /**
   * @remarks
   * The business timestamp. Format: yyyyMMddHHmmssSSS. The time is in UTC+8, in 24-hour format, accurate to milliseconds.
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
      phone: 'Phone',
      queryType: 'QueryType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subId: 'SubId',
      telX: 'TelX',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      orderId: 'string',
      ownerId: 'number',
      phone: 'string',
      queryType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subId: 'string',
      telX: 'string',
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

