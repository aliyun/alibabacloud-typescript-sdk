// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the cache storage for Serverless Pro instances. Unit: GB.
   * 
   * > This parameter is required only for Serverless Pro instances.
   * 
   * @example
   * 800
   */
  cacheStorageSize?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * null
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * null
   */
  DBInstanceGroupCount?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-rj***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The specifications of segment nodes. For supported node specifications, see [Instance types](https://help.aliyun.com/document_detail/35406.html).
   * 
   * > This parameter is available only for instances in storage-elastic mode.
   * 
   * @example
   * 4C16G
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The number of master nodes.
   * 
   * @example
   * null
   */
  masterNodeNum?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * null
   */
  payType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. To obtain the resource group ID, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The performance level (PL) of the disk. Valid values:
   * 
   * - **pl0**: PL0.
   * 
   * - **pl1**: PL1.
   * 
   * - **pl2**: PL2.
   * 
   * @example
   * pl1
   */
  segDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The number of segment nodes. The supported number of nodes varies based on the instance resource type and edition:
   * 
   * - Instances in storage-elastic mode (High-availability Edition): 4 to 512, in increments of 4.
   * 
   * - Instances in storage-elastic mode (High-performance Edition): 2 to 512, in increments of 2.
   * 
   * - Instances in Serverless manual-scheduling mode: 2 to 512, in increments of 2.
   * 
   * @example
   * 2
   */
  segNodeNum?: string;
  /**
   * @remarks
   * The new disk storage type. You can only upgrade to an ESSD cloud disk. To do so, set this parameter to **cloud_essd**.
   * 
   * @example
   * cloud_essd
   */
  segStorageType?: string;
  /**
   * @remarks
   * - For an instance in Serverless automatic-scheduling mode, this parameter specifies the computing resource threshold. The value must be a multiple of 8 in the range of 8 to 32. Unit: ACU. Default value: 32.
   * 
   * - For a Serverless Pro instance, this parameter specifies the reserved computing resources. Valid values range from 16 to 1,024. Unit: ACU. Default value: 16. Increment rules:
   * 
   *   - 16 to 32: in increments of 4.
   * 
   *   - 32 to 64: in increments of 8.
   * 
   *   - 64 to 128: in increments of 16.
   * 
   *   - 128 to 256: in increments of 32.
   * 
   *   - Greater than 256: in increments of 64.
   * 
   * > This parameter is required only for instances in Serverless automatic-scheduling mode and Serverless Pro instances.
   * 
   * @example
   * 16
   */
  serverlessResource?: string;
  /**
   * @remarks
   * The storage capacity of each segment node. Unit: GB. The value must be a multiple of 50 in the range of 50 to <props="china">8,000<props="intl">6,000.
   * 
   * > This parameter is available only for instances in storage-elastic mode.
   * 
   * @example
   * 100
   */
  storageSize?: string;
  /**
   * @remarks
   * The type of specification change. Valid values:
   * 
   * - **0** (default): Changes the number of segment nodes. The SegNodeNum parameter is required, and other parameters are ignored.
   * 
   * - **1**: Changes the specifications and storage capacity of segment nodes. The InstanceSpec parameter is required. The StorageSize parameter is optional. If specified, its value must be greater than or equal to the current storage capacity of the instance.
   * 
   * - **2**: Changes the number of master nodes. The MasterNodeNum parameter is required, and other parameters are ignored.
   * 
   * - **3**: Changes the disk storage type and performance level. The SegDiskPerformanceLevel and SegStorageType parameters are required, and other parameters are ignored.
   * 
   * > * Support for scaling computing resources varies by instance resource type. For more information, see [Usage notes](https://help.aliyun.com/document_detail/50956.html).
   * 
   * - If you select a change type, only the parameters associated with that type take effect; other parameters are ignored. For example, if you set **UpgradeType** to 0 and specify parameters to change both the number of segment nodes and the number of master nodes, only the parameters for changing the number of segment nodes take effect.
   * 
   * - You can change the number of master nodes only on the Alibaba Cloud China site.
   * 
   * - You can change the disk storage type only from ultra disk to ESSD cloud disk.
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

