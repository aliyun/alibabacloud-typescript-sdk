// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreDBInstanceRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @example
   * 111
   */
  backupSetId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  backupSetRegion?: string;
  /**
   * @example
   * 2
   */
  CNNodeCount?: string;
  /**
   * @example
   * xxxxxx-xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-***
   */
  cloneInstanceName?: string;
  /**
   * @example
   * polarx.x4.medium.2e
   */
  cnClass?: string;
  /**
   * @example
   * polarx.x4.2xlarge.2d
   */
  DBNodeClass?: string;
  /**
   * @example
   * 2
   */
  DBNodeCount?: number;
  /**
   * @example
   * 2
   */
  DNNodeCount?: string;
  /**
   * @example
   * mysql.n4.medium.25
   */
  dnClass?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @example
   * standby
   */
  gdnRole?: string;
  /**
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @example
   * Month
   */
  period?: string;
  /**
   * @example
   * cn-shenzhen-e
   */
  primaryZone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Clone
   */
  recoveryTypeCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * null
   */
  resourceGroupId?: string;
  /**
   * @example
   * 2024-10-14T00:00:00Z
   */
  restoreTime?: string;
  /**
   * @example
   * cn-shenzhen-a
   */
  secondaryZone?: string;
  /**
   * @example
   * enterprise
   */
  series?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  sourceInstanceRegion?: string;
  /**
   * @example
   * cloud_auto
   */
  storageType?: string;
  /**
   * @example
   * cn-shenzhen-e
   */
  tertiaryZone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-*****
   */
  VPCId?: string;
  /**
   * @example
   * vsw-*********
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      backupSetId: 'BackupSetId',
      backupSetRegion: 'BackupSetRegion',
      CNNodeCount: 'CNNodeCount',
      clientToken: 'ClientToken',
      cloneInstanceName: 'CloneInstanceName',
      cnClass: 'CnClass',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DNNodeCount: 'DNNodeCount',
      dnClass: 'DnClass',
      engineVersion: 'EngineVersion',
      gdnRole: 'GdnRole',
      networkType: 'NetworkType',
      payType: 'PayType',
      period: 'Period',
      primaryZone: 'PrimaryZone',
      recoveryTypeCode: 'RecoveryTypeCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      restoreTime: 'RestoreTime',
      secondaryZone: 'SecondaryZone',
      series: 'Series',
      sourceInstanceRegion: 'SourceInstanceRegion',
      storageType: 'StorageType',
      tertiaryZone: 'TertiaryZone',
      topologyType: 'TopologyType',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      backupSetId: 'string',
      backupSetRegion: 'string',
      CNNodeCount: 'string',
      clientToken: 'string',
      cloneInstanceName: 'string',
      cnClass: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DNNodeCount: 'string',
      dnClass: 'string',
      engineVersion: 'string',
      gdnRole: 'string',
      networkType: 'string',
      payType: 'string',
      period: 'string',
      primaryZone: 'string',
      recoveryTypeCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      restoreTime: 'string',
      secondaryZone: 'string',
      series: 'string',
      sourceInstanceRegion: 'string',
      storageType: 'string',
      tertiaryZone: 'string',
      topologyType: 'string',
      usedTime: 'number',
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

