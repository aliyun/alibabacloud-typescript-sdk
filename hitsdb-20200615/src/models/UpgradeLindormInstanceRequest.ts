// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeLindormInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The storage capacity of the instance after the specification change. Unit: GB. Valid values: **480** to **1017600**.
   * 
   * @example
   * 480
   */
  clusterStorage?: number;
  /**
   * @remarks
   * The cold storage capacity of the instance after the specification change. Unit: GB. Valid values: **800** to **1000000**.
   * 
   * @example
   * 800
   */
  coldStorage?: number;
  /**
   * @remarks
   * The storage capacity per core node of the instance after the specification change for a multi-zone instance. Valid values: 400 to 64000. Unit: GB. **Specify this parameter if the target instance is a multi-zone instance.**
   * 
   * @example
   * 400
   */
  coreSingleStorage?: number;
  /**
   * @remarks
   * The number of file engine nodes of the instance after the specification change. Valid values: **0** to **60**.
   * 
   * @example
   * 2
   */
  filestoreNum?: number;
  /**
   * @remarks
   * The file engine node specifications of the instance after the specification change. Valid values:
   * 
   * **indorm.c.xlarge**: 4 cores and 8 GB of memory (standard specification).
   * 
   * @example
   * lindorm.c.xlarge
   */
  filestoreSpec?: string;
  /**
   * @remarks
   * The instance ID. You can call the [GetLindormInstanceList](https://help.aliyun.com/document_detail/426069.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1o3y0yme2i2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of LindormTable nodes of the instance after the specification change. Valid values: **0** to **90**.
   * 
   * > This parameter must be specified together with the LindormSpec parameter.
   * 
   * @example
   * 2
   */
  lindormNum?: number;
  /**
   * @remarks
   * The LindormTable engine node specifications of the instance after the specification change. Valid values:
   * 
   * - **lindorm.c.xlarge**: 4 cores and 8 GB of memory (dedicated specification).
   * - **lindorm.c.2xlarge**: 8 cores and 16 GB of memory (dedicated specification).
   * - **lindorm.c.4xlarge**: 16 cores and 32 GB of memory (dedicated specification).
   * - **lindorm.c.8xlarge**: 32 cores and 64 GB of memory (dedicated specification).
   * 
   * @example
   * lindorm.c.xlarge
   */
  lindormSpec?: string;
  /**
   * @remarks
   * The number of log nodes of the instance after the specification change for a multi-zone instance. Valid values: 4 to 400. **Specify this parameter if the target instance is a multi-zone instance.**
   * 
   * @example
   * 4
   */
  logNum?: number;
  /**
   * @remarks
   * The disk capacity per log node of the instance after the specification change for a multi-zone instance. Valid values: 400 to 64000. Unit: GB. **Specify this parameter if the target instance is a multi-zone instance.**
   * 
   * @example
   * 400
   */
  logSingleStorage?: number;
  /**
   * @remarks
   * The log node specifications of the instance after the specification change for a multi-zone instance. Valid values:
   * - **lindorm.sn1.large**: 4 cores and 8 GB of memory (dedicated specification).
   * - **lindorm.sn1.2xlarge**: 8 cores and 16 GB of memory (dedicated specification).
   * 
   * **Specify this parameter if the target instance is a multi-zone instance.**
   * 
   * @example
   * lindorm.sn1.large
   */
  logSpec?: string;
  /**
   * @remarks
   * The number of LTS nodes of the instance after the specification change. Valid values: **0** to **50**.
   * 
   * @example
   * 2
   */
  ltsCoreNum?: number;
  /**
   * @remarks
   * The LTS node specifications of the instance after the specification change. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 cores and 16 GB of memory (dedicated specification).
   * - **lindorm.g.2xlarge**: 8 cores and 32 GB of memory (dedicated specification).
   * 
   * @example
   * lindorm.g.xlarge
   */
  ltsCoreSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The number of search index engine nodes of the instance after the specification change. Valid values: **0** to **60**.
   * 
   * @example
   * 2
   */
  solrNum?: number;
  /**
   * @remarks
   * The search index engine node specifications of the instance after the specification change. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 cores and 16 GB of memory (dedicated specification).
   * - **lindorm.g.2xlarge**: 8 cores and 32 GB of memory (dedicated specification).
   * - **lindorm.g.4xlarge**: 16 cores and 64 GB of memory (dedicated specification).
   * - **lindorm.g.8xlarg**e: 32 cores and 128 GB of memory (dedicated specification).
   * 
   * @example
   * lindorm.g.xlarge
   */
  solrSpec?: string;
  /**
   * @remarks
   * The number of stream engine nodes of the instance after the specification change. Valid values: **0** to **90**.
   * 
   * @example
   * 2
   */
  streamNum?: number;
  /**
   * @remarks
   * The stream engine node specifications of the instance after the specification change. Valid values:
   * 
   * - **lindorm.c.2xlarge**: 8 cores and 16 GB of memory (dedicated specification).
   * - **lindorm.c.4xlarge**: 16 cores and 32 GB of memory (dedicated specification).
   * - **lindorm.c.8xlarge**: 32 cores and 64 GB of memory (dedicated specification).
   * 
   * @example
   * lindorm.g.xlarge
   */
  streamSpec?: string;
  /**
   * @remarks
   * The number of LindormTSDB nodes of the instance after the specification change. Valid values: **0** to **24**.
   * 
   * @example
   * 2
   */
  tsdbNum?: number;
  /**
   * @remarks
   * The LindormTSDB engine node specifications of the instance after the specification change. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 cores and 16 GB of memory (dedicated specification).
   * - **lindorm.g.2xlarge**: 8 cores and 32 GB of memory (dedicated specification).
   * - **lindorm.g.4xlarge**: 16 cores and 64 GB of memory (dedicated specification).
   * - **lindorm.g.8xlarge**: 32 cores and 128 GB of memory (dedicated specification).
   * 
   * @example
   * lindorm.g.xlarge
   */
  tsdbSpec?: string;
  /**
   * @remarks
   * The type of specification change for the instance. For supported types, see the UpgradeType parameter description in the request parameters supplement.
   * 
   * This parameter is required.
   * 
   * @example
   * upgrade-cold-storage
   */
  upgradeType?: string;
  /**
   * @remarks
   * The zone ID. You can call the [GetLindormInstance](https://help.aliyun.com/document_detail/426067.html) operation to query the zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterStorage: 'ClusterStorage',
      coldStorage: 'ColdStorage',
      coreSingleStorage: 'CoreSingleStorage',
      filestoreNum: 'FilestoreNum',
      filestoreSpec: 'FilestoreSpec',
      instanceId: 'InstanceId',
      lindormNum: 'LindormNum',
      lindormSpec: 'LindormSpec',
      logNum: 'LogNum',
      logSingleStorage: 'LogSingleStorage',
      logSpec: 'LogSpec',
      ltsCoreNum: 'LtsCoreNum',
      ltsCoreSpec: 'LtsCoreSpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      solrNum: 'SolrNum',
      solrSpec: 'SolrSpec',
      streamNum: 'StreamNum',
      streamSpec: 'StreamSpec',
      tsdbNum: 'TsdbNum',
      tsdbSpec: 'TsdbSpec',
      upgradeType: 'UpgradeType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStorage: 'number',
      coldStorage: 'number',
      coreSingleStorage: 'number',
      filestoreNum: 'number',
      filestoreSpec: 'string',
      instanceId: 'string',
      lindormNum: 'number',
      lindormSpec: 'string',
      logNum: 'number',
      logSingleStorage: 'number',
      logSpec: 'string',
      ltsCoreNum: 'number',
      ltsCoreSpec: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      solrNum: 'number',
      solrSpec: 'string',
      streamNum: 'number',
      streamSpec: 'string',
      tsdbNum: 'number',
      tsdbSpec: 'string',
      upgradeType: 'string',
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

