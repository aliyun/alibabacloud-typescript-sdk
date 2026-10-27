// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: true. Valid values:
   * - **true**: Enables auto-renewal.
   * - **false**: Disables auto-renewal.
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
   * The client token that is used to ensure the idempotence of the request. You must specify a unique token for each request.
   * 
   * @example
   * xxxxxx-xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The specifications of compute nodes. Required when you create an Enterprise Edition instance. Not required for a Standard Edition instance.
   * 
   * Local node specifications for Enterprise Edition:
   * - **polarx.x4.medium.2e**: 2 vCPUs, 8 GB (general-purpose)
   * - **polarx.x4.large.2e**: 4 vCPUs, 16 GB (general-purpose)
   * - **polarx.x4.xlarge.2e**: 8 vCPUs, 32 GB (general-purpose)
   * - **polarx.x4.2xlarge.2e**: 16 vCPUs, 64 GB (general-purpose)
   * - **polarx.x8.large.2e**: 4 vCPUs, 32 GB (dedicated)
   * - **polarx.x2.large.2x**: 8 vCPUs, 16 GB (dedicated)
   * - **polarx.x4.xlarge.2x**: 8 vCPUs, 32 GB (dedicated)
   * - **polarx.x8.xlarge.2e**: 8 vCPUs, 64 GB (dedicated)
   * - **polarx.x8.2xlarge.2e**: 16 vCPUs, 128 GB (dedicated)
   * - **polarx.x4.4xlarge.2e**: 32 vCPUs, 128 GB (dedicated)
   * - **polarx.x8.4xlarge.2e**: 32 vCPUs, 256 GB (dedicated)
   * - **polarx.st.8xlarge.2e**: 60 vCPUs, 470 GB (dedicated)
   * - **polarx.st.12xlarge.2e**: 90 vCPUs, 720 GB (dedicated)
   * 
   * Cloud node specifications for Enterprise Edition:
   * - **polarx.x4.medium.c2e**: 2 vCPUs, 8 GB (general-purpose)
   * - **polarx.x4.large.c2e**: 4 vCPUs, 16 GB (general-purpose)
   * - **polarx.x4.xlarge.c2e**: 8 vCPUs, 32 GB (general-purpose)
   * - **polarx.x4.2xlarge.c2e**: 16 vCPUs, 64 GB (general-purpose)
   * - **polarx.x8.large.c2e**: 4 vCPUs, 32 GB (dedicated)
   * - **polarx.x2.large.c2x**: 8 vCPUs, 16 GB (dedicated)
   * - **polarx.x4.xlarge.c2x**: 8 vCPUs, 32 GB (dedicated)
   * - **polarx.x8.xlarge.c2e**: 8 vCPUs, 64 GB (dedicated)
   * - **polarx.x8.2xlarge.c2e**: 16 vCPUs, 128 GB (dedicated)
   * - **polarx.x4.4xlarge.c2e**: 32 vCPUs, 128 GB (dedicated)
   * - **polarx.x8.4xlarge.c2e**: 32 vCPUs, 256 GB (dedicated)
   * - **polarx.st.8xlarge.c2e**: 60 vCPUs, 470 GB (dedicated)
   * - **polarx.st.12xlarge.c2e**: 90 vCPUs, 720 GB (dedicated)
   * 
   * @example
   * polarx.x4.medium.2e
   */
  cnClass?: string;
  /**
   * @remarks
   * Required when you create a Standard Edition instance. Not required for an Enterprise Edition instance.
   * 
   * Local disk specifications for Standard Edition:
   * - **mysql.n8.small.25**: 1 vCPU, 8 GB (general-purpose)
   * - **mysql.n2.medium.25**: 2 vCPUs, 4 GB (general-purpose)
   * - **mysql.n4.medium.25**: 2 vCPUs, 8 GB (general-purpose)
   * - **mysql.n8.medium.25**: 2 vCPUs, 16 GB (general-purpose)
   * - **mysql.n2.large.25**: 4 vCPUs, 8 GB (general-purpose)
   * - **mysql.n4.large.25**: 4 vCPUs, 16 GB (general-purpose)
   * - **mysql.n8.large.25**: 4 vCPUs, 32 GB (general-purpose)
   * - **mysql.n2.xlarge.25**: 8 vCPUs, 16 GB (general-purpose)
   * - **mysql.n4.xlarge.25**: 8 vCPUs, 32 GB (general-purpose)
   * - **mysql.n8.xlarge.25**: 8 vCPUs, 64 GB (general-purpose)
   * - **mysql.n2.2xlarge.25**: 16 vCPUs, 32 GB (general-purpose)
   * - **mysql.n4.2xlarge.25**: 16 vCPUs, 64 GB (general-purpose)
   * - **mysql.n8.2xlarge.25**: 16 vCPUs, 128 GB (general-purpose)
   * - **mysql.x2.medium.25**: 2 vCPUs, 4 GB (dedicated)
   * - **mysql.x4.medium.25**: 2 vCPUs, 8 GB (dedicated)
   * - **mysql.x8.medium.25**: 2 vCPUs, 16 GB (dedicated)
   * - **mysql.x2.large.25**: 4 vCPUs, 8 GB (dedicated)
   * - **mysql.x4.large.25**: 4 vCPUs, 16 GB (dedicated)
   * - **mysql.x8.large.25**: 4 vCPUs, 32 GB (dedicated)
   * - **mysql.x2.xlarge.25**: 8 vCPUs, 16 GB (dedicated)
   * - **mysql.x4.xlarge.25**: 8 vCPUs, 32 GB (dedicated)
   * - **mysql.x8.xlarge.25**: 8 vCPUs, 64 GB (dedicated)
   * - **mysql.x2.2xlarge.25**: 16 vCPUs, 32 GB (dedicated)
   * - **mysql.x4.2xlarge.25**: 16 vCPUs, 64 GB (dedicated)
   * - **mysql.x8.2xlarge.25**: 16 vCPUs, 128 GB (dedicated)
   * - **mysql.x4.4xlarge.25**: 32 vCPUs, 128 GB (dedicated)
   * - **mysql.x8.4xlarge.25**: 32 vCPUs, 256 GB (dedicated)
   * - **mysql.x4.8xlarge.25**: 64 vCPUs, 256 GB (dedicated)
   * - **mysql.x8.8xlarge.25**: 64 vCPUs, 512 GB (dedicated)
   * - **mysql.st.12xlarge.25**: 90 vCPUs, 720 GB (dedicated)
   * 
   * Cloud disk specifications for Standard Edition:
   * - **polarx.mysql.n2.medium.c25**: 2 vCPUs, 4 GB (general-purpose)
   * - **polarx.mysql.n4.medium.c25**: 2 vCPUs, 8 GB (general-purpose)
   * - **polarx.mysql.n8.medium.c25**: 2 vCPUs, 16 GB (general-purpose)
   * - **polarx.mysql.n2.large.c25**: 4 vCPUs, 8 GB (general-purpose)
   * - **polarx.mysql.n4.large.c25**: 4 vCPUs, 16 GB (general-purpose)
   * - **polarx.mysql.n8.large.c25**: 4 vCPUs, 32 GB (general-purpose)
   * - **polarx.mysql.n2.xlarge.c25**: 8 vCPUs, 16 GB (general-purpose)
   * - **polarx.mysql.n4.xlarge.c25**: 8 vCPUs, 32 GB (general-purpose)
   * - **polarx.mysql.n8.xlarge.c25**: 8 vCPUs, 64 GB (general-purpose)
   * - **polarx.mysql.x2.medium.c25**: 2 vCPUs, 4 GB (dedicated)
   * - **polarx.mysql.x4.medium.c25**: 2 vCPUs, 8 GB (dedicated)
   * - **polarx.mysql.x8.medium.c25**: 2 vCPUs, 16 GB (dedicated)
   * - **polarx.mysql.x2.large.c25**: 4 vCPUs, 8 GB (dedicated)
   * - **polarx.mysql.x4.large.c25**: 4 vCPUs, 16 GB (dedicated)
   * - **polarx.mysql.x8.large.c25**: 4 vCPUs, 32 GB (dedicated)
   * - **polarx.mysql.x2.xlarge.c25**: 8 vCPUs, 16 GB (dedicated)
   * - **polarx.mysql.x4.xlarge.c25**: 8 vCPUs, 32 GB (dedicated)
   * - **polarx.mysql.x8.xlarge.c25**: 8 vCPUs, 64 GB (dedicated)
   * - **polarx.mysql.x2.2xlarge.c25**: 16 vCPUs, 32 GB (dedicated)
   * - **polarx.mysql.x4.2xlarge.c25**: 16 vCPUs, 64 GB (dedicated)
   * - **polarx.mysql.x8.2xlarge.c25**: 16 vCPUs, 128 GB (dedicated)
   * - **polarx.mysql.x2.4xlarge.c25**: 32 vCPUs, 64 GB (dedicated)
   * - **polarx.mysql.x4.4xlarge.c25**: 32 vCPUs, 128 GB (dedicated)
   * - **polarx.mysql.x8.4xlarge.c25**: 32 vCPUs, 256 GB (dedicated)
   * - **polarx.mysql.x2.8xlarge.c25**: 64 vCPUs, 128 GB (dedicated)
   * - **polarx.mysql.x4.8xlarge.c25**: 64 vCPUs, 256 GB (dedicated)
   * - **polarx.mysql.x8.8xlarge.c25**: 64 vCPUs, 512 GB (dedicated)
   * 
   * @example
   * polarx.x4.2xlarge.2d
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of nodes in the instance. Valid values:
   * * Standard Edition: 1
   * * Enterprise Edition: 2 or greater
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
   * The specifications of storage nodes. Required when you create an Enterprise Edition instance. Not required for a Standard Edition instance.
   * 
   * Local node specifications for Enterprise Edition:
   * - **mysql.n2.medium.25**: 2 vCPUs, 4 GB (general-purpose)
   * - **mysql.n4.medium.25**: 2 vCPUs, 8 GB (general-purpose)
   * - **mysql.n2.large.25**: 4 vCPUs, 8 GB (general-purpose)
   * - **mysql.n4.large.25**: 4 vCPUs, 16 GB (general-purpose)
   * - **mysql.n4.xlarge.25**: 8 vCPUs, 32 GB (general-purpose)
   * - **mysql.n4.2xlarge.25**: 16 vCPUs, 64 GB (general-purpose)
   * - **mysql.x4.large.25**: 4 vCPUs, 16 GB (dedicated)
   * - **mysql.x8.large.25**: 4 vCPUs, 32 GB (dedicated)
   * - **mysql.x2.xlarge.25**: 8 vCPUs, 16 GB (dedicated)
   * - **mysql.x8.xlarge.25**: 8 vCPUs, 64 GB (dedicated)
   * - **mysql.x8.2xlarge.25**: 16 vCPUs, 128 GB (dedicated)
   * - **mysql.x4.4xlarge.25**: 32 vCPUs, 128 GB (dedicated)
   * - **mysql.x8.4xlarge.25**: 32 vCPUs, 256 GB (dedicated)
   * - **mysql.st.8xlarge.25**: 60 vCPUs, 470 GB (dedicated)
   * - **mysql.st.12xlarge.25**: 90 vCPUs, 720 GB (dedicated)
   * - **mysql.x8.45xlarge.25**: 180 vCPUs, 1440 GB (dedicated)
   * - **mysql.x8.60xlarge.25**: 240 vCPUs, 1920 GB (dedicated)
   * 
   * Cloud node specifications for Enterprise Edition:
   * - **polarx.mysql.n2.medium.c25**: 2 vCPUs, 4 GB (general-purpose)
   * - **polarx.mysql.n4.medium.c25**: 2 vCPUs, 8 GB (general-purpose)
   * - **polarx.mysql.n2.large.c25**: 4 vCPUs, 8 GB (general-purpose)
   * - **polarx.mysql.n4.large.c25**: 4 vCPUs, 16 GB (general-purpose)
   * - **polarx.mysql.n4.xlarge.c25**: 8 vCPUs, 32 GB (general-purpose)
   * - **polarx.mysql.n4.2xlarge.c25**: 16 vCPUs, 64 GB (general-purpose)
   * - **polarx.mysql.x4.large.c25**: 4 vCPUs, 16 GB (dedicated)
   * - **polarx.mysql.x8.large.c25**: 4 vCPUs, 32 GB (dedicated)
   * - **polarx.mysql.x2.xlarge.c25**: 8 vCPUs, 16 GB (dedicated)
   * - **polarx.mysql.x8.xlarge.c25**: 8 vCPUs, 64 GB (dedicated)
   * - **polarx.mysql.x8.2xlarge.c25**: 16 vCPUs, 128 GB (dedicated)
   * - **polarx.mysql.x4.4xlarge.c25**: 32 vCPUs, 128 GB (dedicated)
   * - **polarx.mysql.x8.4xlarge.c25**: 32 vCPUs, 256 GB (dedicated)
   * - **polarx.mysql.st.8xlarge.c25**: 60 vCPUs, 470 GB (dedicated)
   * - **polarx.mysql.st.12xlarge.c25**: 90 vCPUs, 720 GB (dedicated)
   * - **polarx.mysql.x8.45xlarge.c25**: 180 vCPUs, 1440 GB (dedicated)
   * - **polarx.mysql.x8.60xlarge.c25**: 240 vCPUs, 1920 GB (dedicated)
   * 
   * @example
   * mysql.n4.medium.25
   */
  dnClass?: string;
  /**
   * @remarks
   * The disk space of the storage nodes.
   * 
   * @example
   * 1500
   */
  dnStorageSpace?: string;
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
   * The extra parameters.
   */
  extraParams?: { [key: string]: string };
  /**
   * @remarks
   * Specifies whether the instance to be created is a column store read-only instance.
   * 
   * @example
   * true
   */
  isColumnarReadDBInstance?: boolean;
  /**
   * @remarks
   * Specifies whether the instance is a read-only instance. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  isReadDBInstance?: boolean;
  /**
   * @remarks
   * The network type of the instance. Only VPC is supported.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The minor engine version. This parameter is generally not required.
   * 
   * @example
   * polardb-2.4.0_standard_xcluster8.4.20-20260331
   */
  originMinorVersion?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
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
   * The billing cycle. Valid values for subscription instances: Year and Month. Default value for pay-as-you-go instances: Hour.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The name of the primary instance. This parameter is required if the instance is a read-only instance.
   * 
   * @example
   * pxc-*********
   */
  primaryDBInstanceName?: string;
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
   * The region of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. This parameter is not supported and can be left empty.
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
   * - enterprise: Enterprise Edition
   * - standard: Standard Edition
   * 
   * @example
   * enterprise
   */
  series?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * * custom_local_ssd: local disk
   * * cloud_auto: cloud disk
   * 
   * @example
   * cloud_auto
   */
  storageType?: string;
  /**
   * @remarks
   * The third active zone in a Three-zone deployment.
   * 
   * @example
   * cn-shenzhen-e
   */
  tertiaryZone?: string;
  /**
   * @remarks
   * The topology type. Valid values:
   * - **3azones**: Three-zone deployment (three active zones).
   * - **1azone**: Single active zone.
   * 
   * This parameter is required.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @remarks
   * The subscription duration. This parameter is required when the billing method is set to subscription.
   * 
   * > If Period is set to Year, valid values are 1, 2, and 3.
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
   * The zone of the instance.
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
      extraParams: 'ExtraParams',
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
      extraParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
    if(this.extraParams) {
      $dara.Model.validateMap(this.extraParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

