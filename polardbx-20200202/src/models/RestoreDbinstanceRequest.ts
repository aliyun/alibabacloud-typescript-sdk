// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: true.
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * 111
   */
  backupSetId?: string;
  /**
   * @remarks
   * The region where the backup set resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  backupSetRegion?: string;
  /**
   * @remarks
   * The number of compute nodes.
   * 
   * @example
   * 2
   */
  CNNodeCount?: string;
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request. Use a different value for each request.
   * 
   * @example
   * xxxxxx-xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-***
   */
  cloneInstanceName?: string;
  /**
   * @remarks
   * The compute node specifications. Valid values:
   * 
   * - polarx.x4.medium.2e: 2 cores, 8 GB
   * - polarx.x4.large.2e: 4 cores, 16 GB
   * - polarx.x8.large.2e: 4 cores, 32 GB
   * - polarx.x4.xlarge.2e: 8 cores, 32 GB
   * - polarx.x8.xlarge.2e: 8 cores, 64 GB
   * - polarx.x4.2xlarge.2e: 16 cores, 64 GB
   * - polarx.x8.2xlarge.2e: 16 cores, 128 GB
   * - polarx.x4.4xlarge.2e: 32 cores, 128 GB
   * - polarx.x8.4xlarge.2e: 32 cores, 256 GB
   * - polarx.st.8xlarge.2e: 60 cores, 470 GB
   * - polarx.st.12xlarge.2e: 90 cores, 720 GB
   * 
   * @example
   * polarx.x4.medium.2e
   */
  cnClass?: string;
  /**
   * @remarks
   * The node specifications. Valid values:
   * 
   * - polarx.x4.medium.2e: 2 cores, 8 GB
   * - polarx.x4.large.2e: 4 cores, 16 GB
   * - polarx.x8.large.2e: 4 cores, 32 GB
   * - polarx.x4.xlarge.2e: 8 cores, 32 GB
   * - polarx.x8.xlarge.2e: 8 cores, 64 GB
   * - polarx.x4.2xlarge.2e: 16 cores, 64 GB
   * - polarx.x8.2xlarge.2e: 16 cores, 128 GB
   * - polarx.x4.4xlarge.2e: 32 cores, 128 GB
   * - polarx.x8.4xlarge.2e: 32 cores, 256 GB
   * - polarx.st.8xlarge.2e: 60 cores, 470 GB
   * - polarx.st.12xlarge.2e: 90 cores, 720 GB
   * 
   * @example
   * polarx.x4.2xlarge.2d
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of instance nodes. The minimum value is 2.
   * 
   * @example
   * 2
   */
  DBNodeCount?: number;
  /**
   * @remarks
   * The number of storage nodes.
   * 
   * @example
   * 2
   */
  DNNodeCount?: string;
  /**
   * @remarks
   * The storage node specifications. Valid values:
   * 
   * - mysql.n4.medium.25: 2 cores, 8 GB
   * - mysql.n4.large.25: 4 cores, 16 GB
   * - mysql.x8.large.25: 4 cores, 32 GB
   * - mysql.n4.xlarge.25: 8 cores, 32 GB
   * - mysql.x8.xlarge.25: 8 cores, 64 GB
   * - mysql.n4.2xlarge.25: 16 cores, 64 GB
   * - mysql.x8.2xlarge.25: 16 cores, 128 GB
   * - mysql.x4.4xlarge.25: 32 cores, 128 GB
   * - mysql.x8.4xlarge.25: 32 cores, 256 GB
   * - mysql.st.8xlarge.25: 60 cores, 470 GB
   * - mysql.st.12xlarge.25: 90 cores, 720 GB
   * 
   * @example
   * mysql.n4.medium.25
   */
  dnClass?: string;
  /**
   * @remarks
   * The MySQL DPI engine version. Valid values: 5.7 and 8.0.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The GDN role.
   * 
   * @example
   * standby
   */
  gdnRole?: string;
  /**
   * @remarks
   * The network type. Only VPC is supported.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * - PREPAY: subscription
   * - POSTPAY: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle. Valid values for subscription: Year and Month. Default value for pay-as-you-go: Hour.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The primary zone.
   * 
   * @example
   * cn-shenzhen-e
   */
  primaryZone?: string;
  /**
   * @remarks
   * The recovery type.
   * 
   * This parameter is required.
   * 
   * @example
   * Clone
   */
  recoveryTypeCode?: string;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. This parameter can be left empty. This parameter is not supported.
   * 
   * @example
   * null
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The point in time to which you want to restore the instance. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2024-10-14T00:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The secondary zone.
   * 
   * @example
   * cn-shenzhen-a
   */
  secondaryZone?: string;
  /**
   * @remarks
   * The instance series. Valid values:
   * 
   * - enterprise: Enterprise Edition.
   * - standard: Standard Edition.
   * 
   * @example
   * enterprise
   */
  series?: string;
  /**
   * @remarks
   * The region where the source instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  sourceInstanceRegion?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * cloud_auto
   */
  storageType?: string;
  /**
   * @remarks
   * The zone for Three-zone deployment.
   * 
   * @example
   * cn-shenzhen-e
   */
  tertiaryZone?: string;
  /**
   * @remarks
   * The topology type. Valid values:
   * 
   * - 3azones: three-zone deployment.
   * - 1azone: single-zone deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @remarks
   * The subscription duration. Specify the number of months or years.
   * 
   * > If Period is set to Year, valid values of this parameter are 1, 2, and 3.
   * 
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
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-*********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone of the instance.
   * 
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

