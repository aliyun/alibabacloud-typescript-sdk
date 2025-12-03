// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequest extends $dara.Model {
  autoRenew?: string;
  backupId?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cloudType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clusterName?: string;
  coldStorageSize?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  coreDiskQuantity?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  coreDiskSize?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  coreDiskType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  coreInstanceQuantity?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  coreInstanceType?: string;
  dbInstanceConnType?: string;
  dbInstanceType?: string;
  dbType?: string;
  depMode?: string;
  duration?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engineVersion?: string;
  isColdStorage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  masterInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  netType?: string;
  payType?: string;
  pricingCycle?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  restoreTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  securityIPList?: string;
  srcDBInstanceId?: string;
  vSwitchId?: string;
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      backupId: 'BackupId',
      clientToken: 'ClientToken',
      cloudType: 'CloudType',
      clusterName: 'ClusterName',
      coldStorageSize: 'ColdStorageSize',
      coreDiskQuantity: 'CoreDiskQuantity',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceQuantity: 'CoreInstanceQuantity',
      coreInstanceType: 'CoreInstanceType',
      dbInstanceConnType: 'DbInstanceConnType',
      dbInstanceType: 'DbInstanceType',
      dbType: 'DbType',
      depMode: 'DepMode',
      duration: 'Duration',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      isColdStorage: 'IsColdStorage',
      masterInstanceType: 'MasterInstanceType',
      netType: 'NetType',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      restoreTime: 'RestoreTime',
      securityIPList: 'SecurityIPList',
      srcDBInstanceId: 'SrcDBInstanceId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      backupId: 'string',
      clientToken: 'string',
      cloudType: 'string',
      clusterName: 'string',
      coldStorageSize: 'string',
      coreDiskQuantity: 'string',
      coreDiskSize: 'string',
      coreDiskType: 'string',
      coreInstanceQuantity: 'string',
      coreInstanceType: 'string',
      dbInstanceConnType: 'string',
      dbInstanceType: 'string',
      dbType: 'string',
      depMode: 'string',
      duration: 'string',
      engine: 'string',
      engineVersion: 'string',
      isColdStorage: 'string',
      masterInstanceType: 'string',
      netType: 'string',
      payType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      restoreTime: 'string',
      securityIPList: 'string',
      srcDBInstanceId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
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

