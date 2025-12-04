// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeLindormInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The storage capacity of the instance after it is upgraded. Unit: GB. Valid values: **480** to **1017600**.
   * 
   * @example
   * 480
   */
  clusterStorage?: number;
  /**
   * @remarks
   * The cold storage capacity of the instance after it is upgraded. Unit: GB. Valid values: **800** to **1000000**.
   * 
   * @example
   * 800
   */
  coldStorage?: number;
  /**
   * @remarks
   * The storage capacity of a single core node in the instance after the instance upgraded. This parameter is available only if the instance you want to upgrade is a multi-zone instance. Unit: GB. Valid values: 400 to 64000. **This parameter is optional**.
   * 
   * @example
   * 400
   */
  coreSingleStorage?: number;
  /**
   * @remarks
   * The number of LindormDFS nodes in the instance after the instance is upgraded. Valid values: integers from **0** to **60**.
   * 
   * @example
   * 2
   */
  filestoreNum?: number;
  /**
   * @remarks
   * The specification of LindormDFS nodes in the instance after the instance is upgraded. Valid values:
   * 
   * *   **lindorm.g.xlarge**: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
   * *   **lindorm.g.2xlarge**: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
   * *   **lindorm.g.4xlarge**: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
   * *   **lindorm.g.8xlarge**: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
   * 
   * @example
   * lindorm.g.xlarge
   */
  filestoreSpec?: string;
  /**
   * @remarks
   * The ID of the instance that you want to upgrade, scale up, or enable cold storage. You can call the [GetLindormInstanceList](https://help.aliyun.com/document_detail/426069.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1o3y0yme2i2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of LindormTable nodes in the instance after the instance is upgraded. Valid values: integers from **0** to **90**.
   * 
   * > This parameter must be specified together with the LindormSpec parameter.
   * 
   * @example
   * 2
   */
  lindormNum?: number;
  /**
   * @remarks
   * The specification of LindormTable nodes in the instance after the instance is upgraded. Valid values:
   * 
   * *   **lindorm.c.xlarge**: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
   * *   **lindorm.c.2xlarge**: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
   * *   **lindorm.c.4xlarge**: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
   * *   **lindorm.c.8xlarge**: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
   * 
   * @example
   * lindorm.c.xlarge
   */
  lindormSpec?: string;
  /**
   * @remarks
   * The number of log nodes in the instance after the instance is upgraded. This parameter is available only if the instance you want to upgrade is a multi-zone instance. **This parameter is optional**.
   * 
   * @example
   * 4
   */
  logNum?: number;
  /**
   * @remarks
   * The storage capacity of a single log node in the instance after the instance upgraded. This parameter is available only if the instance you want to upgrade is a multi-zone instance. **This parameter is optional**.
   * 
   * @example
   * 400
   */
  logSingleStorage?: number;
  /**
   * @remarks
   * The specification of log nodes in the instance after the instance is upgraded. This parameter is available only if the instance you want to upgrade is a multi-zone instance. Valid values:
   * 
   * *   **lindorm.sn1.large**: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
   * *   **lindorm.sn1.2xlarge**: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
   * 
   * **This parameter is optional**.
   * 
   * @example
   * lindorm.sn1.large
   */
  logSpec?: string;
  /**
   * @remarks
   * The number of LTS nodes in the instance after the instance is upgraded. Valid values: integers from **0** to **50**.
   * 
   * @example
   * 2
   */
  ltsCoreNum?: number;
  /**
   * @remarks
   * The specification of Lindorm Tunnel Service (LTS) nodes in the instance after the instance is upgraded. Valid values:
   * 
   * *   **lindorm.g.xlarge**: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
   * *   **lindorm.g.2xlarge**: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
   * 
   * @example
   * lindorm.g.xlarge
   */
  ltsCoreSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region in which the instance that you want to upgrade, scale up, or enable cold storage is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) operation to query the region ID.
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
   * The number of LindormSearch nodes in the instance after the instance is upgraded. Valid values: integers from **0** to **60**.
   * 
   * @example
   * 2
   */
  solrNum?: number;
  /**
   * @remarks
   * The specification of LindormSearch nodes in the instance after the instance is upgraded. Valid values:
   * 
   * *   **lindorm.g.xlarge**: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
   * *   **lindorm.g.2xlarge**: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
   * *   **lindorm.g.4xlarge**: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
   * *   **lindorm.g.8xlarge**: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
   * 
   * @example
   * lindorm.g.xlarge
   */
  solrSpec?: string;
  /**
   * @remarks
   * The number of LindormStream nodes in the instance after the instance is upgraded. Valid values: integers from **0** to **60**.
   * 
   * @example
   * 2
   */
  streamNum?: number;
  /**
   * @remarks
   * The specification of LindormStream nodes in the instance after the instance is upgraded. Valid values:
   * 
   * *   **lindorm.g.xlarge**: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
   * *   **lindorm.g.2xlarge**: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
   * *   **lindorm.g.4xlarge**: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
   * *   **lindorm.g.8xlarge**: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
   * 
   * @example
   * lindorm.g.xlarge
   */
  streamSpec?: string;
  /**
   * @remarks
   * The number of LindormTSDB nodes in the instance after the instance is upgraded. Valid values: integers from **0** to **24**.
   * 
   * @example
   * 2
   */
  tsdbNum?: number;
  /**
   * @remarks
   * The specification of LindormTSDB nodes in the instance after the instance is upgraded. Valid values:
   * 
   * *   **lindorm.g.xlarge**: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
   * *   **lindorm.g.2xlarge**: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
   * *   **lindorm.g.4xlarge**: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
   * *   **lindorm.g.8xlarge**: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
   * 
   * @example
   * lindorm.g.xlarge
   */
  tsdbSpec?: string;
  /**
   * @remarks
   * The upgrade type of the operation. For more information about upgrade types, see the UpgradeType parameters section.
   * 
   * This parameter is required.
   * 
   * @example
   * upgrade-cold-storage
   */
  upgradeType?: string;
  /**
   * @remarks
   * The ID of the zone in which the instance that you want to upgrade, scale up, or enable cold storage is located. You can call the [GetLindormInstance](https://help.aliyun.com/document_detail/426067.html) operation to query the zone ID.
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

