// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindSubs700Request extends $dara.Model {
  /**
   * @example
   * 700.100.1/12345678
   */
  industrialId?: string;
  /**
   * @example
   * 12345678
   */
  orderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FC10000016848****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100000****
   */
  subsId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 700********0000
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      industrialId: 'IndustrialId',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subsId: 'SubsId',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industrialId: 'string',
      orderId: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subsId: 'number',
      telX: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

