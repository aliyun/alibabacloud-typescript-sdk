// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeLindormInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The new storage capacity of the instance. Unit: GB. Valid values: **480** to **1017600**.
   * 
   * @example
   * 480
   */
  clusterStorage?: number;
  /**
   * @remarks
   * The new cold storage capacity of the instance. Unit: GB. Valid values: **800** to **1000000**.
   * 
   * @example
   * 800
   */
  coldStorage?: number;
  /**
   * @remarks
   * The new storage capacity of a single core node in a multi-zone instance. Unit: GB. Valid values: 400 to 64000. **This parameter is optional.**
   * 
   * @example
   * 400GB
   */
  coreSingleStorage?: number;
  /**
   * @remarks
   * The new number of file engine nodes. Valid values: **0** to **60**.
   * 
   * @example
   * 2
   */
  filestoreNum?: number;
  /**
   * @remarks
   * The new specification of the file engine nodes. Valid value:
   * 
   * **lindorm.c.xlarge**: 4 CPU cores, 8 GB of memory (standard specification).
   * 
   * @example
   * lindorm.c.xlarge
   */
  filestoreSpec?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [GetLindormInstanceList](https://help.aliyun.com/document_detail/426069.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1o3y0yme2i2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new number of wide table engine nodes. Valid values: **0** to **90**.
   * 
   * > If you specify this parameter, the LindormSpec parameter is also required.
   * 
   * @example
   * 2
   */
  lindormNum?: number;
  /**
   * @remarks
   * The new specification of the wide table engine nodes. Valid values:
   * 
   * - **lindorm.c.xlarge**: 4 CPU cores, 8 GB of memory (dedicated specification).
   * 
   * - **lindorm.c.2xlarge**: 8 CPU cores, 16 GB of memory (dedicated specification).
   * 
   * - **lindorm.c.4xlarge**: 16 CPU cores, 32 GB of memory (dedicated specification).
   * 
   * - **lindorm.c.8xlarge**: 32 CPU cores, 64 GB of memory (dedicated specification).
   * 
   * @example
   * lindorm.c.xlarge
   */
  lindormSpec?: string;
  /**
   * @remarks
   * The new number of log nodes for a multi-zone instance. Valid values: 4 to 400. **This parameter is optional.**
   * 
   * @example
   * 4
   */
  logNum?: number;
  /**
   * @remarks
   * The new disk capacity of a single log node for a multi-zone instance. Unit: GB. Valid values: 400 to 64000. **This parameter is optional.**
   * 
   * @example
   * 400GB
   */
  logSingleStorage?: number;
  /**
   * @remarks
   * The new specification of the log nodes for a multi-zone instance. Valid values:
   * 
   * - **lindorm.sn1.large**: 4 CPU cores, 8 GB of memory (dedicated specification).
   * 
   * - **lindorm.sn1.2xlarge**: 8 CPU cores, 16 GB of memory (dedicated specification).
   * 
   * **This parameter is optional.**
   * 
   * @example
   * lindorm.sn1.large
   */
  logSpec?: string;
  /**
   * @remarks
   * The new number of LTS nodes. Valid values: **0** to **50**.
   * 
   * @example
   * 2
   */
  ltsCoreNum?: number;
  /**
   * @remarks
   * The new specification of the LTS nodes. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 CPU cores, 16 GB of memory (dedicated specification).
   * 
   * - **lindorm.g.2xlarge**: 8 CPU cores, 32 GB of memory (dedicated specification).
   * 
   * @example
   * lindorm.g.xlarge
   */
  ltsCoreSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the instance is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) operation to obtain the latest region list.
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
   * The new number of search engine nodes. Valid values: **0** to **60**.
   * 
   * @example
   * 2
   */
  solrNum?: number;
  /**
   * @remarks
   * The new specification of the search engine nodes. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 CPU cores, 16 GB of memory (dedicated specification).
   * 
   * - **lindorm.g.2xlarge**: 8 CPU cores, 32 GB of memory (dedicated specification).
   * 
   * - **lindorm.g.4xlarge**: 16 CPU cores, 64 GB of memory (dedicated specification).
   * 
   * - **lindorm.g.8xlarg**e: 32 CPU cores, 128 GB of memory (dedicated specification).
   * 
   * @example
   * lindorm.g.xlarge
   */
  solrSpec?: string;
  /**
   * @remarks
   * The new number of stream engine nodes. Valid values: **0** to **90**.
   * 
   * @example
   * 2
   */
  streamNum?: number;
  /**
   * @remarks
   * The new specification of the stream engine nodes. Valid values:
   * 
   * - **lindorm.c.2xlarge**: 8 CPU cores, 16 GB of memory (dedicated specification).
   * 
   * - **lindorm.c.4xlarge**: 16 CPU cores, 32 GB of memory (dedicated specification).
   * 
   * - **lindorm.c.8xlarge**: 32 CPU cores, 64 GB of memory (dedicated specification).
   * 
   * @example
   * lindorm.g.xlarge
   */
  streamSpec?: string;
  /**
   * @remarks
   * The new number of time series engine nodes. Valid values: **0** to **24**.
   * 
   * @example
   * 2
   */
  tsdbNum?: number;
  /**
   * @remarks
   * The new specification of the time series engine nodes. Valid values:
   * 
   * - **lindorm.g.xlarge**: 4 CPU cores, 16 GB of memory (dedicated specification).
   * 
   * - **lindorm.g.2xlarge**: 8 CPU cores, 32 GB of memory (dedicated specification).
   * 
   * - **lindorm.g.4xlarge**: 16 CPU cores, 64 GB of memory (dedicated specification).
   * 
   * - **lindorm.g.8xlarge**: 32 CPU cores, 128 GB of memory (dedicated specification).
   * 
   * @example
   * lindorm.g.xlarge
   */
  tsdbSpec?: string;
  /**
   * @remarks
   * The type of the upgrade. For details about the supported types, see the description of the UpgradeType parameter in the "Additional information about request parameters" section.
   * 
   * This parameter is required.
   * 
   * @example
   * upgrade-cold-storage
   */
  upgradeType?: string;
  /**
   * @remarks
   * The ID of the availability zone. You can call the [GetLindormInstance](https://help.aliyun.com/document_detail/426067.html) operation to obtain this ID.
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

