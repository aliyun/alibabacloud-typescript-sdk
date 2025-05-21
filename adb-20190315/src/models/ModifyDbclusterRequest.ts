// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The computing resources of the cluster. You can call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/190632.html) operation to query the computing resources that are available within a region.
   * 
   * > This parameter must be specified when Mode is set to Flexible.
   * 
   * @example
   * 32Core128GBNEW
   */
  computeResource?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **Cluster**: reserved mode for Cluster Edition.
   * *   **MixedStorage**: elastic mode for Cluster Edition.
   * 
   * > If you set DBClusterCategory to Cluster, you must set Mode to Reserver. If you set DBClusterCategory to MixedStorage, you must set Mode to Flexible. Otherwise, you fail to change the specifications of the cluster.
   * 
   * @example
   * MixedStorage
   */
  DBClusterCategory?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1u8c0mgfg58****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The node specifications of the cluster. Valid values:
   * 
   * *   **C8**
   * *   **C32**
   * 
   * > This parameter must be specified when Mode is set to Reserver.
   * 
   * @example
   * C32
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of node groups. Valid values: 1 to 200.
   * 
   * > This parameter must be specified when Mode is set to Reserver.
   * 
   * @example
   * 2
   */
  DBNodeGroupCount?: string;
  /**
   * @remarks
   * The storage capacity per node. Unit: GB.
   * 
   * *   Valid values when DBClusterClass is set to C8: 100 to 2000.
   * *   Valid values when DBClusterClass is set to C32: 100 to 8000.
   * 
   * > 
   * 
   * *   This parameter must be specified when Mode is set to Reserver.
   * 
   * *   The storage capacity less than 1,000 GB increases in 100 GB increments. The storage capacity greater than 1,000 GB increases in 1,000 GB increments.
   * 
   * @example
   * 200
   */
  DBNodeStorage?: string;
  /**
   * @remarks
   * The Enterprise SSD (ESSD) performance level of the cluster. Valid values:
   * 
   * *   PL0
   * *   PL1
   * *   PL2
   * *   PL3
   * 
   * @example
   * PL1
   */
  diskPerformanceLevel?: string;
  /**
   * @remarks
   * The number of EIUs. The number of EIUs that you can purchase varies based on the single-node EIU specifications.
   * 
   * *   If the single-node EIU specifications are 8 cores and 64 GB, you can purchase up to 32 EIUs.
   * *   If the single-node EIU specifications are 12 cores and 96 GB, you can purchase up to 16 EIUs.
   * 
   * @example
   * 2
   */
  elasticIOResource?: number;
  /**
   * @remarks
   * The single-node specifications of an elastic I/O unit (EIU). Valid values:
   * 
   * *   **8Core64GB**: If you set the parameter to **8Core64GB**, the specifications of an EIU are 24 cores and 192 GB memory.
   * *   **12Core96GB**: If you set the parameter to **12Core96GB**, the specifications of an EIU are 36 cores and 288 GB memory.
   * 
   * >  This parameter takes effect only when your cluster meets the following requirements:
   * 
   * *   The cluster is in elastic mode.
   * 
   * *   If the cluster resides in the China (Guangzhou), China (Shenzhen), China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), or China (Zhangjiakou) region, the cluster has 16 cores and 64 GB memory or higher specifications.
   * 
   * *   If the cluster resides in another region, the cluster has 32 cores and 128 GB memory or higher specifications.
   * 
   * @example
   * 8Core64GB
   */
  elasticIOResourceSize?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * None
   */
  executorCount?: string;
  /**
   * @remarks
   * The mode of the cluster. Valid values:
   * 
   * *   **Reserver**: the reserved mode.
   * *   **Flexible**: the elastic mode.
   * 
   * @example
   * Flexible
   */
  mode?: string;
  /**
   * @remarks
   * The change type. Valid values:
   * 
   * *   **Upgrade**
   * *   **Downgrade**
   * 
   * @example
   * Upgrade
   */
  modifyType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * None
   */
  storageResource?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterCategory: 'DBClusterCategory',
      DBClusterId: 'DBClusterId',
      DBNodeClass: 'DBNodeClass',
      DBNodeGroupCount: 'DBNodeGroupCount',
      DBNodeStorage: 'DBNodeStorage',
      diskPerformanceLevel: 'DiskPerformanceLevel',
      elasticIOResource: 'ElasticIOResource',
      elasticIOResourceSize: 'ElasticIOResourceSize',
      executorCount: 'ExecutorCount',
      mode: 'Mode',
      modifyType: 'ModifyType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageResource: 'StorageResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      DBClusterCategory: 'string',
      DBClusterId: 'string',
      DBNodeClass: 'string',
      DBNodeGroupCount: 'string',
      DBNodeStorage: 'string',
      diskPerformanceLevel: 'string',
      elasticIOResource: 'number',
      elasticIOResourceSize: 'string',
      executorCount: 'string',
      mode: 'string',
      modifyType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageResource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

