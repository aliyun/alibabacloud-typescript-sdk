// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodeShrinkRequest extends $dara.Model {
  autoPay?: boolean;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBInstanceStorage?: string;
  DBInstanceStorageType?: string;
  DBNodeShrink?: string;
  dryRun?: boolean;
  effectiveTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  produceAsync?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBNodeShrink: 'DBNode',
      dryRun: 'DryRun',
      effectiveTime: 'EffectiveTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      produceAsync: 'ProduceAsync',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      clientToken: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'string',
      DBInstanceStorageType: 'string',
      DBNodeShrink: 'string',
      dryRun: 'boolean',
      effectiveTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      produceAsync: 'boolean',
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

