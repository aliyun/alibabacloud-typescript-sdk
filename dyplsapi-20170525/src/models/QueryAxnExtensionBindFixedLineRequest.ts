// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxnExtensionBindFixedLineRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the number pool.
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
   * The query type. Valid values:
   * 
   * - 0: query by binding ID.
   * 
   * - 1: query by X and A/B numbers.
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
   * The binding ID. This parameter is required when QueryType is set to 0.
   * 
   * @example
   * A203**************
   */
  subId?: string;
  /**
   * @remarks
   * The number A. This parameter is required when QueryType is set to 1.
   * 
   * @example
   * 155****1111
   */
  telA?: string;
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
      queryType: 'QueryType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subId: 'SubId',
      telA: 'TelA',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      orderId: 'string',
      ownerId: 'number',
      queryType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subId: 'string',
      telA: 'string',
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

