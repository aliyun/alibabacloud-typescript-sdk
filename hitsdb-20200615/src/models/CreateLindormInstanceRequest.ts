// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLindormInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of a tag.
   * 
   * > You can specify the keys of multiple tags. For example, `Tag.1.Key` specifies the key of the first tag and `Tag.2.Key` specifies the key of the second tag.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of a tag.
   * 
   * > You can specify the values of multiple tags. For example, `Tag.1.Value` specifies the value of the first tag and `Tag.2.Value` specifies the value of the second tag.
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
   * The ID of the VSwitch for the arbiter zone of the multi-zone instance. The VSwitch must be in the zone specified by `ArbiterZoneId`. **This parameter is required for multi-zone instances.**
   * 
   * @example
   * vsw-uf6664pqjawb87k36****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the arbiter zone for the multi-zone instance. **This parameter is required for multi-zone instances.**
   * 
   * @example
   * cn-shanghai-g
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * The deployment architecture of the instance. Valid values:
   * 
   * - **1.0**: Single-zone deployment.
   * 
   * - **2.0**: Multi-zone deployment.
   * 
   * The default value is 1.0. To create a multi-zone instance, set this parameter to 2.0. **This parameter is required for multi-zone instances.**
   * 
   * @example
   * 2.0
   */
  archVersion?: string;
  /**
   * @remarks
   * The auto-renewal duration, in months.
   * 
   * The value of this parameter ranges from **1** to **12**.
   * 
   * > This parameter takes effect only when **AutoRenewal** is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the Subscription instance. Valid values:
   * 
   * - **true**: Auto-renewal is enabled.
   * 
   * - **false**: Auto-renewal is disabled.
   * 
   * Default value: false.
   * 
   * > This parameter takes effect only when the **PayType** parameter is set to **PREPAY**.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The cold storage capacity of the instance, in GB. The value of this parameter ranges from **800** to **1,000,000**. If you do not specify this parameter, cold storage is not enabled.
   * 
   * @example
   * 800
   */
  coldStorage?: number;
  /**
   * @remarks
   * The storage capacity of a single core node in the multi-zone instance. Unit: GB. The value of this parameter ranges from 400 to 64,000. **This parameter is required for multi-zone instances.**
   * 
   * @example
   * 400
   */
  coreSingleStorage?: number;
  /**
   * @remarks
   * The node specification for an instance that uses local disks.
   * 
   * If the storage type is **local_ssd_pro**, valid values include the following: Note that I3-family specifications are available only for Subscription instances.
   * 
   * - **lindorm.i4.xlarge**: 4 cores, 32 GB memory (I4).
   * 
   * - **lindorm.i4.2xlarge**: 8 cores, 64 GB memory (I4).
   * 
   * - **lindorm.i4.4xlarge**: 16 cores, 128 GB memory (I4).
   * 
   * - **lindorm.i4.8xlarge**: 32 cores, 256 GB memory (I4).
   * 
   * - **lindorm.i3.xlarge**: 4 cores, 32 GB memory (I3).
   * 
   * - **lindorm.i3.2xlarge**: 8 cores, 64 GB memory (I3).
   * 
   * - **lindorm.i3.4xlarge**: 16 cores, 128 GB memory (I3).
   * 
   * - **lindorm.i3.8xlarge**: 32 cores, 256 GB memory (I3).
   * 
   * - **lindorm.i2.xlarge**: 4 cores, 32 GB memory (I2).
   * 
   * - **lindorm.i2.2xlarge**: 8 cores, 64 GB memory (I2).
   * 
   * - **lindorm.i2.4xlarge**: 16 cores, 128 GB memory (I2).
   * 
   * - **lindorm.i2.8xlarge**: 32 cores, 256 GB memory (I2).
   * 
   * If the storage type is **local_hdd_pro**, valid values include:
   * 
   * - **lindorm.sd3c.3xlarge**: 14 cores, 56 GB memory (D3C PRO).
   * 
   * - **lindorm.sd3c.7xlarge**: 28 cores, 112 GB memory (D3C PRO).
   * 
   * - **lindorm.sd3c.14xlarge**: 56 cores, 224 GB memory (D3C PRO).
   * 
   * - **lindorm.d2c.6xlarge**: 24 cores, 88 GB memory (D2C).
   * 
   * - **lindorm.d2c.12xlarge**: 48 cores, 176 GB memory (D2C).
   * 
   * - **lindorm.d2c.24xlarge**: 96 cores, 352 GB memory (D2C).
   * 
   * - **lindorm.d2s.5xlarge**: 20 cores, 88 GB memory (D2S).
   * 
   * - **lindorm.d2s.10xlarge**: 40 cores, 176 GB memory (D2S).
   * 
   * - **lindorm.d1.2xlarge**: 8 cores, 32 GB memory (D1NE).
   * 
   * - **lindorm.d1.4xlarge**: 16 cores, 64 GB memory (D1NE).
   * 
   * - **lindorm.d1.6xlarge**: 24 cores, 96 GB memory (D1NE).
   * 
   * @example
   * lindorm.i2.xlarge
   */
  coreSpec?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * - **cloud_efficiency**: Efficiency cloud disk.
   * 
   * - **cloud_ssd**: Performance cloud disk.
   * 
   * - **cloud_essd**: Enhanced SSD (ESSD).
   * 
   * - **cloud_essd_pl0**: ESSD PL0.
   * 
   * - **capacity_cloud_storage**: Capacity-optimized cloud storage. (Not available for multi-zone instances.)
   * 
   * - **local_ssd_pro**: Local SSD. (Not available for multi-zone instances.)
   * 
   * - **local_hdd_pro**: Local HDD. (Not available for multi-zone instances.)
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_efficiency
   */
  diskCategory?: string;
  /**
   * @remarks
   * The subscription duration for the instance. Valid values:
   * 
   * - If **PricingCycle** is set to **Month**, the value can range from **1** to **9**.
   * 
   * - If **PricingCycle** is set to **Year**, the value can range from **1** to **3**.
   * 
   * > This parameter is required if you set **PayType** to **PREPAY**.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The number of nodes in the file engine. Valid values:
   * 
   * - For a Subscription instance, the value of this parameter ranges from **0** to **60**.
   * 
   * - For a Pay-As-You-Go instance, the value of this parameter ranges from **0** to **8**.
   * 
   * @example
   * 2
   */
  filestoreNum?: number;
  /**
   * @remarks
   * The specification of the file engine nodes. Valid values:
   * 
   * - **lindorm.c.xlarge**: 4 cores, 8 GB memory (standard).
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
   * The storage capacity of the instance, in GB.
   * 
   * @example
   * 480
   */
  instanceStorage?: string;
  /**
   * @remarks
   * The number of nodes in the wide table engine.
   * 
   * For a single-zone instance, the value of this parameter ranges from **0** to **90**.
   * 
   * **This parameter is required for multi-zone instances.** For an instance that uses cloud disks, the value ranges from **4** to **400**. For an instance that uses local disks, the value ranges from **6** to **400**.
   * 
   * @example
   * 2
   */
  lindormNum?: number;
  /**
   * @remarks
   * The specification of the wide table engine nodes. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 cores, 16 GB memory (dedicated).
   * 
   * - **lindorm.c.2xlarge**: 8 cores, 16 GB memory (dedicated).
   * 
   * - **lindorm.g.2xlarge**: 8 cores, 32 GB memory (dedicated).
   * 
   * - **lindorm.c.4xlarge**: 16 cores, 32 GB memory (dedicated).
   * 
   * - **lindorm.g.4xlarge**: 16 cores, 64 GB memory (dedicated).
   * 
   * - **lindorm.c.8xlarge**: 32 cores, 64 GB memory (dedicated).
   * 
   * - **lindorm.g.8xlarge**: 32 cores, 128 GB memory (dedicated).
   * 
   * @example
   * lindorm.c.xlarge
   */
  lindormSpec?: string;
  /**
   * @remarks
   * The storage type of the log nodes for the multi-zone instance. Valid values:
   * 
   * - **cloud_efficiency**: Efficiency cloud disk.
   * 
   * - **cloud_ssd**: Performance cloud disk.
   * 
   * **This parameter is required for multi-zone instances.**
   * 
   * @example
   * cloud_ssd
   */
  logDiskCategory?: string;
  /**
   * @remarks
   * The number of log nodes for the multi-zone instance. The value of this parameter ranges from 4 to 400. **This parameter is required for multi-zone instances.**
   * 
   * @example
   * 4
   */
  logNum?: number;
  /**
   * @remarks
   * The storage capacity of a single log node in the multi-zone instance. Unit: GB. The value of this parameter ranges from 400 to 64,000. **This parameter is required for multi-zone instances.**
   * 
   * @example
   * 400
   */
  logSingleStorage?: number;
  /**
   * @remarks
   * The specification of the log nodes for the multi-zone instance. Valid values:
   * 
   * - **lindorm.sn1.large**: 4 cores, 8 GB memory (dedicated).
   * 
   * - **lindorm.sn1.2xlarge**: 8 cores, 16 GB memory (dedicated).
   * 
   * **This parameter is required for multi-zone instances.**
   * 
   * @example
   * lindorm.sn1.large
   */
  logSpec?: string;
  /**
   * @remarks
   * The number of nodes in the LTS engine. The value of this parameter ranges from **0** to **60**.
   * 
   * @example
   * 2
   */
  ltsNum?: string;
  /**
   * @remarks
   * The specification of the LTS engine nodes. Valid values:
   * 
   * - **lindorm.c.xlarge**: 4 cores, 8 GB memory (dedicated).
   * 
   * - **lindorm.g.xlarge**: 4 cores, 16 GB memory (dedicated).
   * 
   * - **lindorm.c.2xlarge**: 8 cores, 16 GB memory (dedicated).
   * 
   * - **lindorm.g.2xlarge**: 8 cores, 32 GB memory (dedicated).
   * 
   * - **lindorm.c.4xlarge**: 16 cores, 32 GB memory (dedicated).
   * 
   * - **lindorm.g.4xlarge**: 16 cores, 64 GB memory (dedicated).
   * 
   * - **lindorm.c.8xlarge**: 32 cores, 64 GB memory (dedicated).
   * 
   * - **lindorm.g.8xlarge**: 32 cores, 128 GB memory (dedicated).
   * 
   * @example
   * lindorm.g.xlarge
   */
  ltsSpec?: string;
  /**
   * @remarks
   * The combination of zones for the multi-zone instance. For a list of supported combinations, refer to the instance purchase page.
   * 
   * - **ap-southeast-5abc-aliyun**: Indonesia (Jakarta) A+B+C.
   * 
   * - **cn-hangzhou-ehi-aliyun**: China (Hangzhou) E+H+I.
   * 
   * - **cn-beijing-acd-aliyun**: China (Beijing) A+C+D.
   * 
   * - **ap-southeast-1-abc-aliyun**: Singapore A+B+C.
   * 
   * - **cn-zhangjiakou-abc-aliyun**: China (Zhangjiakou) A+B+C.
   * 
   * - **cn-shanghai-efg-aliyun**: China (Shanghai) E+F+G.
   * 
   * - **cn-shanghai-abd-aliyun**: China (Shanghai) A+B+D.
   * 
   * - **cn-hangzhou-bef-aliyun**: China (Hangzhou) B+E+F.
   * 
   * - **cn-hangzhou-bce-aliyun**: China (Hangzhou) B+C+E.
   * 
   * - **cn-beijing-fgh-aliyun**: China (Beijing) F+G+H.
   * 
   * - **cn-shenzhen-abc-aliyun**: China (Shenzhen) A+B+C.
   * 
   * **This parameter is required for multi-zone instances.**
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
   * - **PREPAY**: Subscription.
   * 
   * - **POSTPAY**: Pay-As-You-Go.
   * 
   * This parameter is required.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle for the Subscription instance. Valid values:
   * 
   * - **Month**
   * 
   * - **Year**
   * 
   * > This parameter is required if you set **PayType** to **PREPAY**.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the VSwitch for the primary zone of the multi-zone instance. The VSwitch must be in the zone specified by `PrimaryZoneId`. **This parameter is required for multi-zone instances.**
   * 
   * @example
   * vsw-uf6fdqa7c0pipnqzq****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * The ID of the primary zone for the multi-zone instance. **This parameter is required for multi-zone instances.**
   * 
   * @example
   * cn-shanghai-e
   */
  primaryZoneId?: string;
  /**
   * @remarks
   * The ID of the region in which to create the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) operation to query the latest region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
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
   * The number of search engine nodes. The value of this parameter ranges from **0** to **60**.
   * 
   * @example
   * 2
   */
  solrNum?: number;
  /**
   * @remarks
   * The specification of the search engine nodes. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 cores, 16 GB memory (dedicated).
   * 
   * - **lindorm.c.2xlarge**: 8 cores, 16 GB memory (dedicated).
   * 
   * - **lindorm.g.2xlarge**: 8 cores, 32 GB memory (dedicated).
   * 
   * - **lindorm.c.4xlarge**: 16 cores, 32 GB memory (dedicated).
   * 
   * - **lindorm.g.4xlarge**: 16 cores, 64 GB memory (dedicated).
   * 
   * - **lindorm.c.8xlarge**: 32 cores, 64 GB memory (dedicated).
   * 
   * - **lindorm.g.8xlarge**: 32 cores, 128 GB memory (dedicated).
   * 
   * @example
   * lindorm.g.xlarge
   */
  solrSpec?: string;
  /**
   * @remarks
   * The ID of the VSwitch for the standby zone of the multi-zone instance. The VSwitch must be in the zone specified by `StandbyZoneId`. **This parameter is required for multi-zone instances.**
   * 
   * @example
   * vsw-2zec0kcn08cgdtr6****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The ID of the standby zone for the multi-zone instance. **This parameter is required for multi-zone instances.**
   * 
   * @example
   * cn-shanghai-f
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The number of nodes in the stream engine. The value of this parameter ranges from **0** to **60**.
   * 
   * @example
   * 2
   */
  streamNum?: number;
  /**
   * @remarks
   * The specification of the stream engine nodes. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 cores, 16 GB memory (dedicated).
   * 
   * - **lindorm.c.2xlarge**: 8 cores, 16 GB memory (dedicated).
   * 
   * - **lindorm.g.2xlarge**: 8 cores, 32 GB memory (dedicated).
   * 
   * - **lindorm.c.4xlarge**: 16 cores, 32 GB memory (dedicated).
   * 
   * - **lindorm.g.4xlarge**: 16 cores, 64 GB memory (dedicated).
   * 
   * - **lindorm.c.8xlarge**: 32 cores, 64 GB memory (dedicated).
   * 
   * - **lindorm.g.8xlarge**: 32 cores, 128 GB memory (dedicated).
   * 
   * @example
   * lindorm.g.xlarge
   */
  streamSpec?: string;
  /**
   * @remarks
   * The tags to add to the instance. You can add up to 20 tags.
   */
  tag?: CreateLindormInstanceRequestTag[];
  /**
   * @remarks
   * The number of nodes in the time series engine. Valid values:
   * 
   * - For a Subscription instance, the value of this parameter ranges from **0** to **24**.
   * 
   * - For a Pay-As-You-Go instance, the value of this parameter ranges from **0** to **32**.
   * 
   * @example
   * 2
   */
  tsdbNum?: number;
  /**
   * @remarks
   * The specification of the time series engine nodes. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 cores, 16 GB memory (dedicated).
   * 
   * - **lindorm.g.2xlarge**: 8 cores, 32 GB memory (dedicated).
   * 
   * - **lindorm.g.4xlarge**: 16 cores, 64 GB memory (dedicated).
   * 
   * - **lindorm.g.8xlarge**: 32 cores, 128 GB memory (dedicated).
   * 
   * @example
   * lindorm.g.xlarge
   */
  tsdbSpec?: string;
  /**
   * @remarks
   * The ID of the VPC where you want to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the VSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone where you want to create the instance.
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

