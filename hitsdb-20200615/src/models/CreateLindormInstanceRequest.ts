// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLindormInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: 1 to 20.
   * 
   * > You can specify multiple tag keys. For example, the Key in the first pair specifies the first tag key, and the Key in the second pair specifies the second tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20.
   * 
   * > You can specify multiple tag values. For example, the Value in the first pair specifies the first tag value, and the Value in the second pair specifies the second tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLindormInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID of the arbiter zone for a multi-zone instance. The vSwitch must be in the zone specified by ArbiterZoneId. **To create a multi-zone instance, this parameter is required.**
   * 
   * @example
   * vsw-uf6664pqjawb87k36****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the arbiter zone for a multi-zone instance. **To create a multi-zone instance, this parameter is required.**
   * 
   * @example
   * cn-shanghai-g
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * The deployment architecture. Valid values:
   * 
   * - **1.0**: single-zone.
   * - **2.0**: multi-zone.
   * 
   * If this parameter is not specified, the default value is 1.0. To create a multi-zone instance, set this parameter to 2.0. **To create a multi-zone instance, this parameter is required.**
   * 
   * @example
   * 2.0
   */
  archVersion?: string;
  /**
   * @remarks
   * The auto-renewal duration. Unit: months.
   * 
   * Valid values: **1** to **12**.
   * 
   * > This parameter takes effect only when **AutoRenewal** is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * - **true**: Auto-renewal is enabled.
   * - **false**: Auto-renewal is disabled.
   * 
   * Default value: false.
   * 
   * > This parameter takes effect only when **PayType** is set to **PREPAY** (subscription).
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The capacity cloud storage capacity of the instance. Unit: GB. If this parameter is not specified, capacity cloud storage is not enabled. Valid values: **800** to **1000000**.
   * 
   * @example
   * 800
   */
  coldStorage?: number;
  /**
   * @remarks
   * The storage capacity per core node for a multi-zone instance. Valid values: 400 to 64000. Unit: GB. **To create a multi-zone instance, this parameter is required.**
   * 
   * @example
   * 400
   */
  coreSingleStorage?: number;
  /**
   * @remarks
   * The node specifications for local disk type of the instance.
   * 
   * When the local storage type is local_ssd_pro, valid values are as follows. I3 instance types currently support only subscription:
   * 
   * - **lindorm.i4.xlarge**: 4 cores, 32 GB (I4).
   * - **lindorm.i4.2xlarge**: 8 cores, 64 GB (I4).
   * - **lindorm.i4.4xlarge**: 16 cores, 128 GB (I4).
   * - **lindorm.i4.8xlarge**: 32 cores, 256 GB (I4).
   * - **lindorm.i3.xlarge**: 4 cores, 32 GB (I3).
   * - **lindorm.i3.2xlarge**: 8 cores, 64 GB (I3).
   * - **lindorm.i3.4xlarge**: 16 cores, 128 GB (I3).
   * - **lindorm.i3.8xlarge**: 32 cores, 256 GB (I3).
   * - **lindorm.i2.xlarge**: 4 cores, 32 GB (I2).
   * - **lindorm.i2.2xlarge**: 8 cores, 64 GB (I2).
   * - **lindorm.i2.4xlarge**: 16 cores, 128 GB (I2).
   * - **lindorm.i2.8xlarge**: 32 cores, 256 GB (I2).
   * 
   * When the local storage type is local_hdd_pro, valid values are as follows:
   * 
   * - **lindorm.sd3c.3xlarge**: 14 cores, 56 GB (D3C PRO).
   * - **lindorm.sd3c.7xlarge**: 28 cores, 112 GB (D3C PRO).
   * - **lindorm.sd3c.14xlarge**: 56 cores, 224 GB (D3C PRO).
   * - **lindorm.d2c.6xlarge**: 24 cores, 88 GB (D2C).
   * - **lindorm.d2c.12xlarge**: 48 cores, 176 GB (D2C).
   * - **lindorm.d2c.24xlarge**: 96 cores, 352 GB (D2C).
   * - **lindorm.d2s.5xlarge**: 20 cores, 88 GB (D2S).
   * - **lindorm.d2s.10xlarge**: 40 cores, 176 GB (D2S).
   * - **lindorm.d1.2xlarge**: 8 cores, 32 GB (D1NE).
   * - **lindorm.d1.4xlarge**: 16 cores, 64 GB (D1NE).
   * - **lindorm.d1.6xlarge**: 24 cores, 96 GB (D1NE).
   * 
   * @example
   * lindorm.i2.xlarge
   */
  coreSpec?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * - **cloud_efficiency**: standard cloud storage.
   * - **cloud_ssd**: performance cloud storage.
   * - **cloud_essd**: enhanced performance cloud storage.
   * - **cloud_essd_pl0**: performance cloud storage PL0.
   * - **capacity_cloud_storage**: capacity cloud storage (not supported for multi-zone instances).
   * - **local_ssd_pro**: local SSD (not supported for multi-zone instances).
   * - **local_hdd_pro**: local HDD (not supported for multi-zone instances).
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_efficiency
   */
  diskCategory?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * - If PricingCycle is set to **Month**, valid values are **1** to **9**.
   * - If PricingCycle is set to **Year**, valid values are **1** to **3**.
   * 
   * > This parameter is available and required when PayType is set to **PREPAY**.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The number of file engine nodes of the instance. Valid values:
   * - If the billing method of the instance is **PREPAY**, valid values are **0** to **60**.
   * - If the billing method of the instance is **POSTPAY**, valid values are **0** to **8**.
   * 
   * @example
   * 2
   */
  filestoreNum?: number;
  /**
   * @remarks
   * The file engine node specifications of the instance. Valid values:
   * 
   * - **lindorm.c.xlarge**: 4 cores, 8 GB (standard).
   * 
   * @example
   * lindorm.c.xlarge
   */
  filestoreSpec?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * lindorm_test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * @example
   * 480
   */
  instanceStorage?: string;
  /**
   * @remarks
   * The number of LindormTable engine nodes of the instance.
   * 
   * To create a single-zone instance, valid values are **0** to **90**.
   * 
   * **To create a multi-zone instance, this parameter is required.** For instances with non-local disk storage types, valid values are **4** to **400**. For instances with local disk storage types, valid values are **6** to **400**.
   * 
   * @example
   * 2
   */
  lindormNum?: number;
  /**
   * @remarks
   * The LindormTable engine node specifications of the instance. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 cores, 16 GB (dedicated).
   * - **lindorm.c.2xlarge**: 8 cores, 16 GB (dedicated).
   * - **lindorm.g.2xlarge**: 8 cores, 32 GB (dedicated).
   * - **lindorm.c.4xlarge**: 16 cores, 32 GB (dedicated).
   * - **lindorm.g.4xlarge**: 16 cores, 64 GB (dedicated).
   * - **lindorm.c.8xlarge**: 32 cores, 64 GB (dedicated).
   * - **lindorm.g.8xlarge**: 32 cores, 128 GB (dedicated).
   * 
   * @example
   * lindorm.g.4xlarge
   */
  lindormSpec?: string;
  /**
   * @remarks
   * The disk type of log nodes for a multi-zone instance. Valid values:
   * 
   * - **cloud_efficiency**: standard cloud storage.
   * - **cloud_ssd**: performance cloud storage.
   * 
   * **To create a multi-zone instance, this parameter is required.**
   * 
   * @example
   * cloud_ssd
   */
  logDiskCategory?: string;
  /**
   * @remarks
   * The number of log nodes for a multi-zone instance. Valid values: 4 to 400. **To create a multi-zone instance, this parameter is required.**
   * 
   * @example
   * 4
   */
  logNum?: number;
  /**
   * @remarks
   * The storage capacity per log node for a multi-zone instance. Valid values: 400 to 64000. Unit: GB. **To create a multi-zone instance, this parameter is required.**
   * 
   * @example
   * 400
   */
  logSingleStorage?: number;
  /**
   * @remarks
   * The log node specifications for a multi-zone instance. Valid values:
   * - **lindorm.sn1.large**: 4 cores, 8 GB (dedicated).
   * - **lindorm.sn1.2xlarge**: 8 cores, 16 GB (dedicated).
   * 
   * **To create a multi-zone instance, this parameter is required and active.**
   * 
   * @example
   * lindorm.sn1.large
   */
  logSpec?: string;
  /**
   * @remarks
   * The number of LTS engine nodes of the instance. Valid values: **0** to **60**.
   * 
   * @example
   * 2
   */
  ltsNum?: string;
  /**
   * @remarks
   * The LTS engine node specifications of the instance. Valid values:
   * 
   * - **lindorm.c.xlarge**: 4 cores, 8 GB (dedicated).
   * - **lindorm.g.xlarge**: 4 cores, 16 GB (dedicated).
   * - **lindorm.c.2xlarge**: 8 cores, 16 GB (dedicated).
   * - **lindorm.g.2xlarge**: 8 cores, 32 GB (dedicated).
   * - **lindorm.c.4xlarge**: 16 cores, 32 GB (dedicated).
   * - **lindorm.g.4xlarge**: 16 cores, 64 GB (dedicated).
   * - **lindorm.c.8xlarge**: 32 cores, 64 GB (dedicated).
   * - **lindorm.g.8xlarge**: 32 cores, 128 GB (dedicated).
   * 
   * @example
   * lindorm.g.xlarge
   */
  ltsSpec?: string;
  /**
   * @remarks
   * The multi-zone combination. You can check the supported zone combinations on the buy page.
   * 
   * - **ap-southeast-5abc-aliyun**: Indonesia (Jakarta) A+B+C.
   * - **cn-hangzhou-ehi-aliyun**: China (Hangzhou) E+H+I.
   * - **cn-beijing-acd-aliyun**: China (Beijing) A+C+D.
   * - **ap-southeast-1-abc-aliyun**: Singapore A+B+C.
   * - **cn-zhangjiakou-abc-aliyun**: China (Zhangjiakou) A+B+C.
   * - **cn-shanghai-efg-aliyun**: China (Shanghai) E+F+G.
   * - **cn-shanghai-abd-aliyun**: China (Shanghai) A+B+D.
   * - **cn-hangzhou-bef-aliyun**: China (Hangzhou) B+E+F.
   * - **cn-hangzhou-bce-aliyun**: China (Hangzhou) B+C+E.
   * - **cn-beijing-fgh-aliyun**: China (Beijing) F+G+H.
   * - **cn-shenzhen-abc-aliyun**: China (Shenzhen) A+B+C.
   * 
   * **To create a multi-zone instance, this parameter is required.**
   * 
   * @example
   * cn-shanghai-efg-aliyun
   */
  multiZoneCombination?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PREPAY**: subscription.
   * - **POSTPAY**: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle of the instance. Valid values:
   * 
   * - **Month**: monthly billing.
   * - **Year**: yearly billing.
   * 
   * > This parameter is available and required when PayType is set to **PREPAY**.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The vSwitch ID of the primary zone for a multi-zone instance. The vSwitch must be in the zone specified by PrimaryZoneId. **To create a multi-zone instance, this parameter is required.**
   * 
   * @example
   * vsw-uf6fdqa7c0pipnqzq****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the primary zone for a multi-zone instance. **To create a multi-zone instance, this parameter is required.**
   * 
   * @example
   * cn-shanghai-e
   */
  primaryZoneId?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) to query available regions. Use this parameter to specify the region in which to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2i6weeb4nfii
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The number of search index engine nodes of the instance. Valid values: **0** to **60**.
   * 
   * @example
   * 2
   */
  solrNum?: number;
  /**
   * @remarks
   * The search index engine node specifications of the instance. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 cores, 16 GB (dedicated).
   * - **lindorm.c.2xlarge**: 8 cores, 16 GB (dedicated).
   * - **lindorm.g.2xlarge**: 8 cores, 32 GB (dedicated).
   * - **lindorm.c.4xlarge**: 16 cores, 32 GB (dedicated).
   * - **lindorm.g.4xlarge**: 16 cores, 64 GB (dedicated).
   * - **lindorm.c.8xlarge**: 32 cores, 64 GB (dedicated).
   * - **lindorm.g.8xlarge**: 32 cores, 128 GB (dedicated).
   * 
   * @example
   * lindorm.g.xlarge
   */
  solrSpec?: string;
  /**
   * @remarks
   * The vSwitch ID of the secondary zone for a multi-zone instance. The vSwitch must be in the zone specified by StandbyZoneId. **To create a multi-zone instance, this parameter is required.**
   * 
   * @example
   * vsw-2zec0kcn08cgdtr6****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the secondary zone for a multi-zone instance. **To create a multi-zone instance, this parameter is required.**
   * 
   * @example
   * cn-shanghai-f
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The number of stream engine nodes of the instance. Valid values: **0** to **60**.
   * 
   * @example
   * 2
   */
  streamNum?: number;
  /**
   * @remarks
   * The stream engine node specifications of the instance. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 cores, 16 GB (dedicated).
   * - **lindorm.c.2xlarge**: 8 cores, 16 GB (dedicated).
   * - **lindorm.g.2xlarge**: 8 cores, 32 GB (dedicated).
   * - **lindorm.c.4xlarge**: 16 cores, 32 GB (dedicated).
   * - **lindorm.g.4xlarge**: 16 cores, 64 GB (dedicated).
   * - **lindorm.c.8xlarge**: 32 cores, 64 GB (dedicated).
   * - **lindorm.g.8xlarge**: 32 cores, 128 GB (dedicated).
   * 
   * @example
   * lindorm.g.xlarge
   */
  streamSpec?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateLindormInstanceRequestTag[];
  /**
   * @remarks
   * The number of LindormTSDB engine nodes of the instance. Valid values:
   * - If the billing method of the instance is **PREPAY**, valid values are **0** to **24**.
   * - If the billing method of the instance is **POSTPAY**, valid values are **0** to **32**.
   * 
   * @example
   * 2
   */
  tsdbNum?: number;
  /**
   * @remarks
   * The LindormTSDB engine node specifications of the instance. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 cores, 16 GB (dedicated).
   * - **lindorm.g.2xlarge**: 8 cores, 32 GB (dedicated).
   * - **lindorm.g.4xlarge**: 16 cores, 64 GB (dedicated).
   * - **lindorm.g.8xlarge**: 32 cores, 128 GB (dedicated).
   * 
   * @example
   * lindorm.g.xlarge
   */
  tsdbSpec?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchId: 'ArbiterVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      archVersion: 'ArchVersion',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewal: 'AutoRenewal',
      coldStorage: 'ColdStorage',
      coreSingleStorage: 'CoreSingleStorage',
      coreSpec: 'CoreSpec',
      diskCategory: 'DiskCategory',
      duration: 'Duration',
      filestoreNum: 'FilestoreNum',
      filestoreSpec: 'FilestoreSpec',
      instanceAlias: 'InstanceAlias',
      instanceStorage: 'InstanceStorage',
      lindormNum: 'LindormNum',
      lindormSpec: 'LindormSpec',
      logDiskCategory: 'LogDiskCategory',
      logNum: 'LogNum',
      logSingleStorage: 'LogSingleStorage',
      logSpec: 'LogSpec',
      ltsNum: 'LtsNum',
      ltsSpec: 'LtsSpec',
      multiZoneCombination: 'MultiZoneCombination',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      primaryVSwitchId: 'PrimaryVSwitchId',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      solrNum: 'SolrNum',
      solrSpec: 'SolrSpec',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      streamNum: 'StreamNum',
      streamSpec: 'StreamSpec',
      tag: 'Tag',
      tsdbNum: 'TsdbNum',
      tsdbSpec: 'TsdbSpec',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterVSwitchId: 'string',
      arbiterZoneId: 'string',
      archVersion: 'string',
      autoRenewDuration: 'string',
      autoRenewal: 'boolean',
      coldStorage: 'number',
      coreSingleStorage: 'number',
      coreSpec: 'string',
      diskCategory: 'string',
      duration: 'string',
      filestoreNum: 'number',
      filestoreSpec: 'string',
      instanceAlias: 'string',
      instanceStorage: 'string',
      lindormNum: 'number',
      lindormSpec: 'string',
      logDiskCategory: 'string',
      logNum: 'number',
      logSingleStorage: 'number',
      logSpec: 'string',
      ltsNum: 'string',
      ltsSpec: 'string',
      multiZoneCombination: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      primaryVSwitchId: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      solrNum: 'number',
      solrSpec: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
      streamNum: 'number',
      streamSpec: 'string',
      tag: { 'type': 'array', 'itemType': CreateLindormInstanceRequestTag },
      tsdbNum: 'number',
      tsdbSpec: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

