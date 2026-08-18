// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGdnStandbyMemberRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: true.
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
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
   * The client token that is used to ensure the idempotence of the request. Make sure that the value is different for each request.
   * 
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
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
   * The compute node specifications. This parameter is required for Enterprise Edition instances and is not required for Standard Edition instances.
   * 
   * Enterprise Edition with local disks:
   * 
   * - **polarx.x4.medium.2e**: 2 cores, 8 GB (general-purpose)
   * - **polarx.x4.large.2e**: 4 cores, 16 GB (general-purpose)
   * - **polarx.x4.xlarge.2e**: 8 cores, 32 GB (general-purpose)
   * - **polarx.x4.2xlarge.2e**: 16 cores, 64 GB (general-purpose)
   * - **polarx.x8.large.2e**: 4 cores, 32 GB (dedicated)
   * - **polarx.x2.large.2x**: 8 cores, 16 GB (dedicated)
   * - **polarx.x4.xlarge.2x**: 8 cores, 32 GB (dedicated)
   * - **polarx.x8.xlarge.2e**: 8 cores, 64 GB (dedicated)
   * - **polarx.x8.2xlarge.2e**: 16 cores, 128 GB (dedicated)
   * - **polarx.x4.4xlarge.2e**: 32 cores, 128 GB (dedicated)
   * - **polarx.x8.4xlarge.2e**: 32 cores, 256 GB (dedicated)
   * - **polarx.st.8xlarge.2e**: 60 cores, 470 GB (dedicated)
   * - **polarx.st.12xlarge.2e**: 90 cores, 720 GB (dedicated)
   * 
   * 
   * Enterprise Edition with cloud disks:
   * - **polarx.x4.medium.c2e**: 2 cores, 8 GB (general-purpose)
   * - **polarx.x4.large.c2e**: 4 cores, 16 GB (general-purpose)
   * - **polarx.x4.xlarge.c2e**: 8 cores, 32 GB (general-purpose)
   * - **polarx.x4.2xlarge.c2e**: 16 cores, 64 GB (general-purpose)
   * - **polarx.x8.large.c2e**: 4 cores, 32 GB (dedicated)
   * - **polarx.x2.large.c2x**: 8 cores, 16 GB (dedicated)
   * - **polarx.x4.xlarge.c2x**: 8 cores, 32 GB (dedicated)
   * - **polarx.x8.xlarge.c2e**: 8 cores, 64 GB (dedicated)
   * - **polarx.x8.2xlarge.c2e**: 16 cores, 128 GB (dedicated)
   * - **polarx.x4.4xlarge.c2e**: 32 cores, 128 GB (dedicated)
   * - **polarx.x8.4xlarge.c2e**: 32 cores, 256 GB (dedicated)
   * - **polarx.st.8xlarge.c2e**: 60 cores, 470 GB (dedicated)
   * - **polarx.st.12xlarge.c2e**: 90 cores, 720 GB (dedicated)
   * 
   * @example
   * 4 cores, 32 GB
   */
  cnClass?: string;
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
   * The description of the instance.
   * 
   * @example
   * go-to-the-docks-for-french-fries
   */
  description?: string;
  /**
   * @remarks
   * The storage node specifications. This parameter is required for Enterprise Edition instances and is not required for Standard Edition instances.
   * 
   * Enterprise Edition with local disks:
   * 
   * - **mysql.n2.medium.25**: 2 cores, 4 GB (general-purpose)
   * - **mysql.n4.medium.25**: 2 cores, 8 GB (general-purpose)
   * - **mysql.n2.large.25**: 4 cores, 8 GB (general-purpose)
   * - **mysql.n4.large.25**: 4 cores, 16 GB (general-purpose)
   * - **mysql.n4.xlarge.25**: 8 cores, 32 GB (general-purpose)
   * - **mysql.n4.2xlarge.25**: 16 cores, 64 GB (general-purpose)
   * - **mysql.x4.large.25**: 4 cores, 16 GB (dedicated)
   * - **mysql.x8.large.25**: 4 cores, 32 GB (dedicated)
   * - **mysql.x2.xlarge.25**: 8 cores, 16 GB (dedicated)
   * - **mysql.x8.xlarge.25**: 8 cores, 64 GB (dedicated)
   * - **mysql.x8.2xlarge.25**: 16 cores, 128 GB (dedicated)
   * - **mysql.x4.4xlarge.25**: 32 cores, 128 GB (dedicated)
   * - **mysql.x8.4xlarge.25**: 32 cores, 256 GB (dedicated)
   * - **mysql.st.8xlarge.25**: 60 cores, 470 GB (dedicated)
   * - **mysql.st.12xlarge.25**: 90 cores, 720 GB (dedicated)
   * - **mysql.x8.45xlarge.25**: 180 cores, 1440 GB (dedicated)
   * - **mysql.x8.60xlarge.25**: 240 cores, 1920 GB (dedicated)
   * 
   * 
   * Enterprise Edition with cloud disks:
   * 
   * - **polarx.mysql.n2.medium.c25**: 2 cores, 4 GB (general-purpose)
   * - **polarx.mysql.n4.medium.c25**: 2 cores, 8 GB (general-purpose)
   * - **polarx.mysql.n2.large.c25**: 4 cores, 8 GB (general-purpose)
   * - **polarx.mysql.n4.large.c25**: 4 cores, 16 GB (general-purpose)
   * - **polarx.mysql.n4.xlarge.c25**: 8 cores, 32 GB (general-purpose)
   * - **polarx.mysql.n4.2xlarge.c25**: 16 cores, 64 GB (general-purpose)
   * - **polarx.mysql.x4.large.c25**: 4 cores, 16 GB (dedicated)
   * - **polarx.mysql.x8.large.c25**: 4 cores, 32 GB (dedicated)
   * - **polarx.mysql.x2.xlarge.c25**: 8 cores, 16 GB (dedicated)
   * - **polarx.mysql.x8.xlarge.c25**: 8 cores, 64 GB (dedicated)
   * - **polarx.mysql.x8.2xlarge.c25**: 16 cores, 128 GB (dedicated)
   * - **polarx.mysql.x4.4xlarge.c25**: 32 cores, 128 GB (dedicated)
   * - **polarx.mysql.x8.4xlarge.c25**: 32 cores, 256 GB (dedicated)
   * - **polarx.mysql.st.8xlarge.c25**: 60 cores, 470 GB (dedicated)
   * - **polarx.mysql.st.12xlarge.c25**: 90 cores, 720 GB (dedicated)
   * - **polarx.mysql.x8.45xlarge.c25**: 180 cores, 1440 GB (dedicated)
   * - **polarx.mysql.x8.60xlarge.c25**: 240 cores, 1920 GB (dedicated)
   * 
   * @example
   * 4 cores, 32 GB
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
   * - **PREPAY**: subscription
   * - **POSTPAY**: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * - Year
   * - Month
   * 
   * For pay-as-you-go instances, the default value is Hour.
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
   * The region in which the instance resides.
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
   * The secondary zone.
   * 
   * @example
   * cn-shenzhen-a
   */
  secondaryZone?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values:
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
   * The region in which the source instance resides.
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
   * - **3azones**: three-zone deployment.
   * - **1azone**: single-zone deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @remarks
   * The subscription duration. Unit: months or years.
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
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      CNNodeCount: 'CNNodeCount',
      clientToken: 'ClientToken',
      cloneInstanceName: 'CloneInstanceName',
      cnClass: 'CnClass',
      DNNodeCount: 'DNNodeCount',
      description: 'Description',
      dnClass: 'DnClass',
      engineVersion: 'EngineVersion',
      networkType: 'NetworkType',
      payType: 'PayType',
      period: 'Period',
      primaryZone: 'PrimaryZone',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      secondaryZone: 'SecondaryZone',
      series: 'Series',
      sourceInstanceRegion: 'SourceInstanceRegion',
      storageType: 'StorageType',
      tertiaryZone: 'TertiaryZone',
      topologyType: 'TopologyType',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      CNNodeCount: 'string',
      clientToken: 'string',
      cloneInstanceName: 'string',
      cnClass: 'string',
      DNNodeCount: 'string',
      description: 'string',
      dnClass: 'string',
      engineVersion: 'string',
      networkType: 'string',
      payType: 'string',
      period: 'string',
      primaryZone: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      secondaryZone: 'string',
      series: 'string',
      sourceInstanceRegion: 'string',
      storageType: 'string',
      tertiaryZone: 'string',
      topologyType: 'string',
      usedTime: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

