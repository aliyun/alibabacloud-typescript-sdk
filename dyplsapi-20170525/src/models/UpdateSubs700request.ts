// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubs700Request extends $dara.Model {
  /**
   * @example
   * 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   */
  asrModelId?: string;
  /**
   * @example
   * {
   * "ACallX_Apre":"185"
   * }
   */
  audio?: string;
  /**
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  /**
   * @example
   * 138****0000
   */
  defaultA?: string;
  /**
   * @example
   * 2021-09-05 12:00:00
   */
  expiration?: string;
  /**
   * @example
   * 10000*****
   */
  groupId?: string;
  /**
   * @example
   * 700.100.1/12345678
   */
  industrialId?: string;
  /**
   * @example
   * false
   */
  needAsr?: boolean;
  /**
   * @example
   * true
   */
  needRecord?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * updateNoA
   */
  operateType?: string;
  /**
   * @example
   * 12345678
   */
  orderId?: string;
  /**
   * @example
   * abcdef
   */
  outId?: string;
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
   * 10000*****
   */
  subsId?: number;
  /**
   * @example
   * 138****0000
   */
  telA?: string;
  /**
   * @example
   * 136****0000
   */
  telB?: string;
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
      asrModelId: 'AsrModelId',
      audio: 'Audio',
      callRestrict: 'CallRestrict',
      defaultA: 'DefaultA',
      expiration: 'Expiration',
      groupId: 'GroupId',
      industrialId: 'IndustrialId',
      needAsr: 'NeedAsr',
      needRecord: 'NeedRecord',
      operateType: 'OperateType',
      orderId: 'OrderId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subsId: 'SubsId',
      telA: 'TelA',
      telB: 'TelB',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrModelId: 'string',
      audio: 'string',
      callRestrict: 'string',
      defaultA: 'string',
      expiration: 'string',
      groupId: 'string',
      industrialId: 'string',
      needAsr: 'boolean',
      needRecord: 'boolean',
      operateType: 'string',
      orderId: 'string',
      outId: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subsId: 'number',
      telA: 'string',
      telB: 'string',
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

