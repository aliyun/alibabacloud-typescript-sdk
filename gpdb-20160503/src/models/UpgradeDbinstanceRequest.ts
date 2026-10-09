// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The Serverless cache storage capacity. Unit: GB.
   * > This parameter is required only for Serverless Pro instances.
   * 
   * @example
   * 800
   */
  cacheStorageSize?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  DBInstanceGroupCount?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-rj***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The effective period. Valid values:
   * * **Immediate** (default): The change takes effect immediately.
   * * **MaintainTime**: The change takes effect during the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The specifications of segment nodes. For information about supported node specifications, see [Instance specifications](https://help.aliyun.com/document_detail/35406.html).
   * 
   * > This parameter is supported only for elastic storage mode instances.
   * 
   * @example
   * 4C16G
   */
  instanceSpec?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  masterNodeNum?: string;
  ownerId?: number;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
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
   * The ID of the resource group to which the instance belongs. For information about how to obtain the resource group ID, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
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
   * - **pl1**: PL1.
   * - **pl2**: PL2.
   * 
   * @example
   * pl1
   */
  segDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The number of segment nodes. The supported number of nodes varies based on the instance resource type and instance edition:
   * 
   * - Elastic storage mode, high-availability edition: valid values are 4 to 512, in increments of 4.
   * - Elastic storage mode, <props="china">basic edition (formerly high-performance edition)<props="intl">high-performance edition: valid values are 2 to 512, in increments of 2.
   * - Serverless manual scheduling mode: valid values are 2 to 512, in increments of 2.
   * 
   * @example
   * 2
   */
  segNodeNum?: string;
  /**
   * @remarks
   * The cloud disk storage type after the change. Currently, only ESSD cloud disks are supported. Set the value to **cloud_essd**.
   * 
   * @example
   * cloud_essd
   */
  segStorageType?: string;
  /**
   * @remarks
   * - Serverless instances:
   * The compute resource threshold. Valid values: 8 to 32, in increments of 8. Unit: ACU. Default value: 32.
   * 
   * - Serverless Pro instances: The reserved compute resources. Valid values: 16 to 1024. Unit: ACU. Default value: 16. The increment rules are as follows:
   *   - Range 16 to 32: increments of 4.
   *   - Range 32 to 64: increments of 8.
   *   - Range 64 to 128: increments of 16.
   *   - Range 128 to 256: increments of 32.
   *   - Range greater than 256: increments of 64.
   * > This parameter is required only for Serverless automatic scheduling mode and Serverless Pro instances.
   * 
   * @example
   * 16
   */
  serverlessResource?: string;
  /**
   * @remarks
   * The storage capacity of segment nodes. Unit: GB. Valid values: 50 to <props="china">8000<props="intl">6000, in increments of 50.
   * 
   * > This parameter is supported only for elastic storage mode instances.
   * 
   * @example
   * 100
   */
  storageSize?: string;
  /**
   * @remarks
   * The type of the specification change. Valid values:
   * 
   * - **0** (default): Changes the number of segment nodes. SegNodeNum is required. Other parameters do not take effect.
   * - **1**: Changes the segment node specifications and instance storage capacity. InstanceSpec is required. StorageSize is optional and must be greater than or equal to the current instance storage capacity.
   * - **2**: Changes the number of master nodes. MasterNodeNum is required. Other parameters do not take effect.
   * - **3**: Changes the cloud disk storage type and performance level (PL). SegDiskPerformanceLevel and SegStorageType are required. Other parameters do not take effect.
   * 
   * > - Different instance resource types support different Upgrade/Downgrade operations for compute nodes. For more information, see [Precautions](https://help.aliyun.com/document_detail/50956.html).
   * - After you select a specification change type, only the corresponding parameters take effect. Other parameters do not take effect. For example, if **UpgradeType** is set to 0 and you specify both the number of segment nodes and the number of master nodes, only the number of segment nodes is changed.
   * - Changing the number of master nodes is supported only on the China site (aliyun.com).
   * - You can change the cloud disk storage type only from standard SSD to ESSD cloud disk.
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
      effectiveTime: 'EffectiveTime',
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
      effectiveTime: 'string',
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

