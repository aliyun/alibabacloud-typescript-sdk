// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceRequest extends $dara.Model {
  autoRenew?: string;
  autoRenewPeriod?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceClass?: string;
  DBInstanceDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceNetworkType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBNodeStorage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBNodeStorageType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  payType?: string;
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityIPList?: string;
  usedTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      DBInstanceCategory: 'DBInstanceCategory',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceNetworkType: 'DBInstanceNetworkType',
      DBInstanceVersion: 'DBInstanceVersion',
      DBNodeStorage: 'DBNodeStorage',
      DBNodeStorageType: 'DBNodeStorageType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIPList: 'SecurityIPList',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      autoRenewPeriod: 'string',
      clientToken: 'string',
      DBInstanceCategory: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceNetworkType: 'string',
      DBInstanceVersion: 'string',
      DBNodeStorage: 'string',
      DBNodeStorageType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIPList: 'string',
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

