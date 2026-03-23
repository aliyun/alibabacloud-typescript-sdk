// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSpecShrinkRequest extends $dara.Model {
  allocateStrategy?: string;
  allowMajorVersionUpgrade?: boolean;
  autoUseCoupon?: boolean;
  burstingEnabled?: boolean;
  category?: string;
  coldDataEnabled?: boolean;
  compressionMode?: string;
  DBInstanceClass?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBInstanceStorage?: number;
  DBInstanceStorageType?: string;
  dedicatedHostGroupId?: string;
  direction?: string;
  effectiveTime?: string;
  engineVersion?: string;
  ioAccelerationEnabled?: string;
  optimizedWrites?: string;
  ownerAccount?: string;
  ownerId?: number;
  payType?: string;
  promotionCode?: string;
  readOnlyDBInstanceClass?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serverlessConfigurationShrink?: string;
  sourceBiz?: string;
  switchTime?: string;
  targetMinorVersion?: string;
  usedTime?: number;
  vSwitchId?: string;
  zoneId?: string;
  zoneIdSlave1?: string;
  static names(): { [key: string]: string } {
    return {
      allocateStrategy: 'AllocateStrategy',
      allowMajorVersionUpgrade: 'AllowMajorVersionUpgrade',
      autoUseCoupon: 'AutoUseCoupon',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      coldDataEnabled: 'ColdDataEnabled',
      compressionMode: 'CompressionMode',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      direction: 'Direction',
      effectiveTime: 'EffectiveTime',
      engineVersion: 'EngineVersion',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      optimizedWrites: 'OptimizedWrites',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      promotionCode: 'PromotionCode',
      readOnlyDBInstanceClass: 'ReadOnlyDBInstanceClass',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverlessConfigurationShrink: 'ServerlessConfiguration',
      sourceBiz: 'SourceBiz',
      switchTime: 'SwitchTime',
      targetMinorVersion: 'TargetMinorVersion',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      zoneIdSlave1: 'ZoneIdSlave1',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateStrategy: 'string',
      allowMajorVersionUpgrade: 'boolean',
      autoUseCoupon: 'boolean',
      burstingEnabled: 'boolean',
      category: 'string',
      coldDataEnabled: 'boolean',
      compressionMode: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      dedicatedHostGroupId: 'string',
      direction: 'string',
      effectiveTime: 'string',
      engineVersion: 'string',
      ioAccelerationEnabled: 'string',
      optimizedWrites: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      promotionCode: 'string',
      readOnlyDBInstanceClass: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverlessConfigurationShrink: 'string',
      sourceBiz: 'string',
      switchTime: 'string',
      targetMinorVersion: 'string',
      usedTime: 'number',
      vSwitchId: 'string',
      zoneId: 'string',
      zoneIdSlave1: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

