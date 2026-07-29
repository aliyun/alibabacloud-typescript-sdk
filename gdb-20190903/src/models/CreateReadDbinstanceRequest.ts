// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReadDBInstanceRequest extends $dara.Model {
  autoRenew?: string;
  autoRenewPeriod?: string;
  backupSetId?: string;
  clientToken?: string;
  DBInstanceCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBInstanceNetworkType?: string;
  DBNodeClass?: string;
  DBNodeStorage?: string;
  DBNodeStorageType?: string;
  effectiveTime?: string;
  engineVersion?: string;
  orderParam?: string;
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      backupSetId: 'BackupSetId',
      clientToken: 'ClientToken',
      DBInstanceCategory: 'DBInstanceCategory',
      DBInstanceId: 'DBInstanceId',
      DBInstanceNetworkType: 'DBInstanceNetworkType',
      DBNodeClass: 'DBNodeClass',
      DBNodeStorage: 'DBNodeStorage',
      DBNodeStorageType: 'DBNodeStorageType',
      effectiveTime: 'EffectiveTime',
      engineVersion: 'EngineVersion',
      orderParam: 'OrderParam',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      autoRenewPeriod: 'string',
      backupSetId: 'string',
      clientToken: 'string',
      DBInstanceCategory: 'string',
      DBInstanceId: 'string',
      DBInstanceNetworkType: 'string',
      DBNodeClass: 'string',
      DBNodeStorage: 'string',
      DBNodeStorageType: 'string',
      effectiveTime: 'string',
      engineVersion: 'string',
      orderParam: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

