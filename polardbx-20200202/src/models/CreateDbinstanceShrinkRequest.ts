// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: true.
   * 
   * - **true**: Enable
   * - **false**: Disable
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
  CNNodeCount?: number;
  /**
   * @remarks
   * The idempotency token. Ensure that a unique value is used for each creation request.
   * 
   * @example
   * xxxxxx-xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The compute node specification. Required for creating Enterprise Edition instances. Not required for Standard Edition.
   * 
   * Enterprise Edition local disk:
   * 
   * - **polarx.x4.medium.2e**:	2 Cores 8 GB (General Purpose)
   * - **polarx.x4.large.2e**:	4 Cores 16 GB (General Purpose)
   * - **polarx.x4.xlarge.2e**:	8 Cores 32 GB (General Purpose)
   * - **polarx.x4.2xlarge.2e**:	16 Cores 64 GB (General Purpose)
   * - **polarx.x8.large.2e**:	4 Cores 32 GB (Dedicated)
   * - **polarx.x2.large.2x**:	8 Cores 16 GB (Dedicated)
   * - **polarx.x4.xlarge.2x**:	8 Cores 32 GB (Dedicated)
   * - **polarx.x8.xlarge.2e**:	8 Cores 64 GB (Dedicated)
   * - **polarx.x8.2xlarge.2e**:	16 Cores 128 GB (Dedicated)
   * - **polarx.x4.4xlarge.2e**:	32 Cores 128 GB (Dedicated)
   * - **polarx.x8.4xlarge.2e**:	32 Cores 256 GB (Dedicated)
   * - **polarx.st.8xlarge.2e**:	60 Cores 470 GB (Dedicated)
   * - **polarx.st.12xlarge.2e**:	90 Cores 720 GB (Dedicated)
   * 
   * 
   * Enterprise Edition cloud disk:
   * - **polarx.x4.medium.c2e**:	2 Cores 8 GB (General Purpose)
   * - **polarx.x4.large.c2e**:	4 Cores 16 GB (General Purpose)
   * - **polarx.x4.xlarge.c2e**:	8 Cores 32 GB (General Purpose)
   * - **polarx.x4.2xlarge.c2e**:	16 Cores 64 GB (General Purpose)
   * - **polarx.x8.large.c2e**:	4 Cores 32 GB (Dedicated)
   * - **polarx.x2.large.c2x**:	8 Cores 16 GB (Dedicated)
   * - **polarx.x4.xlarge.c2x**:	8 Cores 32 GB (Dedicated)
   * - **polarx.x8.xlarge.c2e**:	8 Cores 64 GB (Dedicated)
   * - **polarx.x8.2xlarge.c2e**:	16 Cores 128 GB (Dedicated)
   * - **polarx.x4.4xlarge.c2e**:	32 Cores 128 GB (Dedicated)
   * - **polarx.x8.4xlarge.c2e**:	32 Cores 256 GB (Dedicated)
   * - **polarx.st.8xlarge.c2e**:	60 Cores 470 GB (Dedicated)
   * - **polarx.st.12xlarge.c2e**:	90 Cores 720 GB (Dedicated)
   * 
   * @example
   * polarx.x4.medium.2e
   */
  cnClass?: string;
  /**
   * @remarks
   * Required for creating Standard Edition instances. Not required for Enterprise Edition.
   * 
   * Standard Edition local disk specifications:
   * - **mysql.n8.small.25**:	1 Core 8 GB (General Purpose)
   * - **mysql.n2.medium.25**:	2 Cores 4 GB (General Purpose)
   * - **mysql.n4.medium.25**:	2 Cores 8 GB (General Purpose)
   * - **mysql.n8.medium.25**:	2 Cores 16 GB (General Purpose)
   * - **mysql.n2.large.25**:	4 Cores 8 GB (General Purpose)
   * - **mysql.n4.large.25**:	4 Cores 16 GB (General Purpose)
   * - **mysql.n8.large.25**:	4 Cores 32 GB (General Purpose)
   * - **mysql.n2.xlarge.25**:	8 Cores 16 GB (General Purpose)
   * - **mysql.n4.xlarge.25**:	8 Cores 32 GB (General Purpose)
   * - **mysql.n8.xlarge.25**:	8 Cores 64 GB (General Purpose)
   * - **mysql.n2.2xlarge.25**:	16 Cores 32 GB (General Purpose)
   * - **mysql.n4.2xlarge.25**:	16 Cores 64 GB (General Purpose)
   * - **mysql.n8.2xlarge.25**:	16 Cores 128 GB (General Purpose)
   * - **mysql.x2.medium.25**:	2 Cores 4 GB (Dedicated)
   * - **mysql.x4.medium.25**:	2 Cores 8 GB (Dedicated)
   * - **mysql.x8.medium.25**:	2 Cores 16 GB (Dedicated)
   * - **mysql.x2.large.25**:	4 Cores 8 GB (Dedicated)
   * - **mysql.x4.large.25**:	4 Cores 16 GB (Dedicated)
   * - **mysql.x8.large.25**:	4 Cores 32 GB (Dedicated)
   * - **mysql.x2.xlarge.25**:	8 Cores 16 GB (Dedicated)
   * - **mysql.x4.xlarge.25**:	8 Cores 32 GB (Dedicated)
   * - **mysql.x8.xlarge.25**:	8 Cores 64 GB (Dedicated)
   * - **mysql.x2.2xlarge.25**:	16 Cores 32 GB (Dedicated)
   * - **mysql.x4.2xlarge.25**:	16 Cores 64 GB (Dedicated)
   * - **mysql.x8.2xlarge.25**:	16 Cores 128 GB (Dedicated)
   * - **mysql.x4.4xlarge.25**:	32 Cores 128 GB (Dedicated)
   * - **mysql.x8.4xlarge.25**:	32 Cores 256 GB (Dedicated)
   * - **mysql.x4.8xlarge.25**:	64 Cores 256 GB (Dedicated)
   * - **mysql.x8.8xlarge.25**:	64 Cores 512 GB (Dedicated)
   * - **mysql.st.12xlarge.25**:	90 Cores 720 GB (Dedicated)
   * 
   * Standard Edition cloud disk specifications:
   * - **polarx.mysql.n2.medium.c25**:	2 Cores 4 GB (General Purpose)
   * - **polarx.mysql.n4.medium.c25**:	2 Cores 8 GB (General Purpose)
   * - **polarx.mysql.n8.medium.c25**:	2 Cores 16 GB (General Purpose)
   * - **polarx.mysql.n2.large.c25**:	4 Cores 8 GB (General Purpose)
   * - **polarx.mysql.n4.large.c25**:	4 Cores 16 GB (General Purpose)
   * - **polarx.mysql.n8.large.c25**:	4 Cores 32 GB (General Purpose)
   * - **polarx.mysql.n2.xlarge.c25**:	8 Cores 16 GB (General Purpose)
   * - **polarx.mysql.n4.xlarge.c25**:	8 Cores 32 GB (General Purpose)
   * - **polarx.mysql.n8.xlarge.c25**:	8 Cores 64 GB (General Purpose)
   * - **polarx.mysql.x2.medium.c25**:	2 Cores 4 GB (Dedicated)
   * - **polarx.mysql.x4.medium.c25**:	2 Cores 8 GB (Dedicated)
   * - **polarx.mysql.x8.medium.c25**:	2 Cores 16 GB (Dedicated)
   * - **polarx.mysql.x2.large.c25**:	4 Cores 8 GB (Dedicated)
   * - **polarx.mysql.x4.large.c25**:	4 Cores 16 GB (Dedicated)
   * - **polarx.mysql.x8.large.c25**:	4 Cores 32 GB (Dedicated)
   * - **polarx.mysql.x2.xlarge.c25**:	8 Cores 16 GB (Dedicated)
   * - **polarx.mysql.x4.xlarge.c25**:	8 Cores 32 GB (Dedicated)
   * - **polarx.mysql.x8.xlarge.c25**:	8 Cores 64 GB (Dedicated)
   * - **polarx.mysql.x2.2xlarge.c25**:	16 Cores 32 GB (Dedicated)
   * - **polarx.mysql.x4.2xlarge.c25**:	16 Cores 64 GB (Dedicated)
   * - **polarx.mysql.x8.2xlarge.c25**:	16 Cores 128 GB (Dedicated)
   * - **polarx.mysql.x2.4xlarge.c25**:	32 Cores 64 GB (Dedicated)
   * - **polarx.mysql.x4.4xlarge.c25**:	32 Cores 128 GB (Dedicated)
   * - **polarx.mysql.x8.4xlarge.c25**:	32 Cores 256 GB (Dedicated)
   * - **polarx.mysql.x2.8xlarge.c25**:	64 Cores 128 GB (Dedicated)
   * - **polarx.mysql.x4.8xlarge.c25**:	64 Cores 256 GB (Dedicated)
   * - **polarx.mysql.x8.8xlarge.c25**:	64 Cores 512 GB (Dedicated)
   * 
   * @example
   * polarx.x4.2xlarge.2d
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of instance nodes:
   * * Standard Edition: 1
   * * Enterprise Edition: >=2
   * 
   * @example
   * 3
   */
  DBNodeCount?: number;
  /**
   * @remarks
   * The number of storage nodes.
   * 
   * @example
   * 2
   */
  DNNodeCount?: number;
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * ods_api_apidata_mobilegame_pay_api_di
   */
  description?: string;
  /**
   * @remarks
   * The storage node specification. Required for creating Enterprise Edition instances. Not required for Standard Edition.
   * 
   * Enterprise Edition local disk:
   * 
   * - **mysql.n2.medium.25**:	2 Cores 4 GB (General Purpose)
   * - **mysql.n4.medium.25**:	2 Cores 8 GB (General Purpose)
   * - **mysql.n2.large.25**:	4 Cores 8 GB (General Purpose)
   * - **mysql.n4.large.25**:	4 Cores 16 GB (General Purpose)
   * - **mysql.n4.xlarge.25**:	8 Cores 32 GB (General Purpose)
   * - **mysql.n4.2xlarge.25**:	16 Cores 64 GB (General Purpose)
   * - **mysql.x4.large.25**:	4 Cores 16 GB (Dedicated)
   * - **mysql.x8.large.25**:	4 Cores 32 GB (Dedicated)
   * - **mysql.x2.xlarge.25**:	8 Cores 16 GB (Dedicated)
   * - **mysql.x8.xlarge.25**:	8 Cores 64 GB (Dedicated)
   * - **mysql.x8.2xlarge.25**:	16 Cores 128 GB (Dedicated)
   * - **mysql.x4.4xlarge.25**:	32 Cores 128 GB (Dedicated)
   * - **mysql.x8.4xlarge.25**:	32 Cores 256 GB (Dedicated)
   * - **mysql.st.8xlarge.25**:	60 Cores 470 GB (Dedicated)
   * - **mysql.st.12xlarge.25**:	90 Cores 720 GB (Dedicated)
   * - **mysql.x8.45xlarge.25**:	180 Cores 1440 GB (Dedicated)
   * - **mysql.x8.60xlarge.25**:	240 Cores 1920 GB (Dedicated)
   * 
   * 
   * Enterprise Edition cloud disk:
   * 
   * - **polarx.mysql.n2.medium.c25**:	2 Cores 4 GB (General Purpose)
   * - **polarx.mysql.n4.medium.c25**:	2 Cores 8 GB (General Purpose)
   * - **polarx.mysql.n2.large.c25**:	4 Cores 8 GB (General Purpose)
   * - **polarx.mysql.n4.large.c25**:	4 Cores 16 GB (General Purpose)
   * - **polarx.mysql.n4.xlarge.c25**:	8 Cores 32 GB (General Purpose)
   * - **polarx.mysql.n4.2xlarge.c25**:	16 Cores 64 GB (General Purpose)
   * - **polarx.mysql.x4.large.c25**:	4 Cores 16 GB (Dedicated)
   * - **polarx.mysql.x8.large.c25**:	4 Cores 32 GB (Dedicated)
   * - **polarx.mysql.x2.xlarge.c25**:	8 Cores 16 GB (Dedicated)
   * - **polarx.mysql.x8.xlarge.c25**:	8 Cores 64 GB (Dedicated)
   * - **polarx.mysql.x8.2xlarge.c25**:	16 Cores 128 GB (Dedicated)
   * - **polarx.mysql.x4.4xlarge.c25**:	32 Cores 128 GB (Dedicated)
   * - **polarx.mysql.x8.4xlarge.c25**:	32 Cores 256 GB (Dedicated)
   * - **polarx.mysql.st.8xlarge.c25**:	60 Cores 470 GB (Dedicated)
   * - **polarx.mysql.st.12xlarge.c25**: 90 Cores 720 GB (Dedicated)
   * - **polarx.mysql.x8.45xlarge.c25**: 180 Cores 1440 GB (Dedicated)
   * - **polarx.mysql.x8.60xlarge.c25**: 240 Cores 1920 GB (Dedicated)
   * 
   * @example
   * mysql.n4.medium.25
   */
  dnClass?: string;
  /**
   * @remarks
   * The disk space size of the storage node.
   * 
   * @example
   * 1500
   */
  dnStorageSpace?: string;
  /**
   * @remarks
   * The MySQL engine version. Valid values: 5.7 and 8.0.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * Additional parameters.
   */
  extraParamsShrink?: string;
  /**
   * @remarks
   * Specifies whether the instance to be created is a columnar read-only instance.
   * 
   * @example
   * true
   */
  isColumnarReadDBInstance?: boolean;
  /**
   * @remarks
   * Specifies whether the instance is a read-only instance.
   * 
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * false
   */
  isReadDBInstance?: boolean;
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
   * The minor version number. This parameter is generally not required.
   * 
   * @example
   * polardb-2.4.0_standard_xcluster8.4.20-20260331
   */
  originMinorVersion?: string;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * - **PREPAY**: Subscription
   * - **POSTPAY**: Pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle. For subscription instances, valid values are Year and Month. For pay-as-you-go instances, the default value is Hour.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The primary instance must be specified if the instance is a read-only instance.
   * 
   * @example
   * pxc-*********
   */
  primaryDBInstanceName?: string;
  /**
   * @remarks
   * The primary availability zone.
   * 
   * @example
   * cn-shenzhen-e
   */
  primaryZone?: string;
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
   * The resource group ID. This parameter can be left empty. This feature is currently not supported.
   * 
   * @example
   * null
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The secondary availability zone.
   * 
   * @example
   * cn-shenzhen-a
   */
  secondaryZone?: string;
  /**
   * @remarks
   * Enterprise Edition: enterprise
   * Standard Edition: standard
   * 
   * @example
   * enterprise
   */
  series?: string;
  /**
   * @remarks
   * The storage type.
   * * Local disk: custom_local_ssd
   * * Cloud disk: cloud_auto
   * 
   * @example
   * cloud_auto
   */
  storageType?: string;
  /**
   * @remarks
   * The tertiary availability zone.
   * 
   * @example
   * cn-shenzhen-e
   */
  tertiaryZone?: string;
  /**
   * @remarks
   * The topology type:
   * 
   * - **3azones**: Three availability zones
   * - **1azone**: Single availability zone
   * 
   * This parameter is required.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @remarks
   * The subscription duration. You can specify the number of months or years for prepaid instances.
   * 
   * > When Period is set to Year, valid values for this parameter are 1, 2, and 3.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The VPC ID.
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
   * The availability zone of the instance.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      CNNodeCount: 'CNNodeCount',
      clientToken: 'ClientToken',
      cnClass: 'CnClass',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DNNodeCount: 'DNNodeCount',
      description: 'Description',
      dnClass: 'DnClass',
      dnStorageSpace: 'DnStorageSpace',
      engineVersion: 'EngineVersion',
      extraParamsShrink: 'ExtraParams',
      isColumnarReadDBInstance: 'IsColumnarReadDBInstance',
      isReadDBInstance: 'IsReadDBInstance',
      networkType: 'NetworkType',
      originMinorVersion: 'OriginMinorVersion',
      payType: 'PayType',
      period: 'Period',
      primaryDBInstanceName: 'PrimaryDBInstanceName',
      primaryZone: 'PrimaryZone',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      secondaryZone: 'SecondaryZone',
      series: 'Series',
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
      CNNodeCount: 'number',
      clientToken: 'string',
      cnClass: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DNNodeCount: 'number',
      description: 'string',
      dnClass: 'string',
      dnStorageSpace: 'string',
      engineVersion: 'string',
      extraParamsShrink: 'string',
      isColumnarReadDBInstance: 'boolean',
      isReadDBInstance: 'boolean',
      networkType: 'string',
      originMinorVersion: 'string',
      payType: 'string',
      period: 'string',
      primaryDBInstanceName: 'string',
      primaryZone: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      secondaryZone: 'string',
      series: 'string',
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

