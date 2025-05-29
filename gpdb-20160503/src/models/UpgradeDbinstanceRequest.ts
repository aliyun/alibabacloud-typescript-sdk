// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceRequest extends $dara.Model {
  cacheStorageSize?: string;
  /**
   * @remarks
   * This parameter is no longer used.
   * 
   * @example
   * null
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * This parameter is no longer used.
   * 
   * @example
   * null
   */
  DBInstanceGroupCount?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-rj***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The specifications of each compute node. For information about the supported specifications, see [Instance specifications](https://help.aliyun.com/document_detail/35406.html).
   * 
   * > This parameter is available only for instances in elastic storage mode.
   * 
   * @example
   * 4C16G
   */
  instanceSpec?: string;
  /**
   * @remarks
   * This parameter is no longer used.
   * 
   * @example
   * 2
   */
  masterNodeNum?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is no longer used.
   * 
   * @example
   * null
   */
  payType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. For information about how to obtain the ID of a resource group, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The performance level of Enterprise SSDs (ESSDs). Valid values:
   * 
   * *   **pl0**
   * *   **pl1**
   * *   **pl2**
   * 
   * @example
   * pl1
   */
  segDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The number of compute nodes. The number of compute nodes varies based on the instance resource type and edition.
   * 
   * *   Valid values for High-availability Edition instances in elastic storage mode: 4 to 512, in 4 increments.
   * *   Valid values for High-performance Edition instances in elastic storage mode: 2 to 512, in 2 increments.
   * *   Valid values for instances in manual Serverless mode: 2 to 512, in 2 increments.
   * 
   * @example
   * 2
   */
  segNodeNum?: string;
  /**
   * @remarks
   * The disk storage type of the instance after the change. The disk storage type can be changed only to ESSD. Set the value to **cloud_essd**.
   * 
   * @example
   * cloud_essd
   */
  segStorageType?: string;
  serverlessResource?: string;
  /**
   * @remarks
   * The storage capacity of each compute node. Unit: GB. Valid values: 50 to 6000, in 50 increments.
   * 
   * >  This parameter is available only for instances in elastic storage mode.
   * 
   * @example
   * 100
   */
  storageSize?: string;
  /**
   * @remarks
   * The type of the instance configuration change. Valid values:
   * 
   * *   **0** (default): changes the number of compute nodes.
   * *   **1**: changes the specifications and storage capacity of each compute node.
   * *   **2**: changes the number of coordinator nodes.
   * *   **3**: changes the disk storage type and ESSD performance level of the instance.
   * 
   * > 
   * 
   * *   The supported changes to compute node configurations vary based on the instance resource type. For more information, see the "Usage notes" section of the [Change compute node configurations](https://help.aliyun.com/document_detail/50956.html) topic.
   * 
   * *   After you specify a change type, only the corresponding parameters take effect. For example, if you set **UpgradeType** to 0, the parameter that is used to change the number of compute nodes takes effect, but the parameter that is used to change the number of coordinator nodes does not.
   * *   The number of coordinator nodes can be changed only on the China site (aliyun.com).
   * *   The disk storage type can be changed only from ultra disks to ESSDs.
   * 
   * @example
   * 0
   */
  upgradeType?: number;
  static names(): { [key: string]: string } {
    return {
      cacheStorageSize: 'CacheStorageSize',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      DBInstanceId: 'DBInstanceId',
      instanceSpec: 'InstanceSpec',
      masterNodeNum: 'MasterNodeNum',
      ownerId: 'OwnerId',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      segDiskPerformanceLevel: 'SegDiskPerformanceLevel',
      segNodeNum: 'SegNodeNum',
      segStorageType: 'SegStorageType',
      serverlessResource: 'ServerlessResource',
      storageSize: 'StorageSize',
      upgradeType: 'UpgradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheStorageSize: 'string',
      DBInstanceClass: 'string',
      DBInstanceGroupCount: 'string',
      DBInstanceId: 'string',
      instanceSpec: 'string',
      masterNodeNum: 'string',
      ownerId: 'number',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      segDiskPerformanceLevel: 'string',
      segNodeNum: 'string',
      segStorageType: 'string',
      serverlessResource: 'string',
      storageSize: 'string',
      upgradeType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

