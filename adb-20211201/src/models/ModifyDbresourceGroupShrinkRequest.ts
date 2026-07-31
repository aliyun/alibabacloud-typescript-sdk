// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBResourceGroupShrinkRequest extends $dara.Model {
  atmConfigShrink?: string;
  /**
   * @remarks
   * The idle duration after which the resource group is automatically stopped.
   * 
   * @example
   * 5m
   */
  autoStopInterval?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * 无
   */
  clusterMode?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * 无
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * <props="china">The ID of the Data Lakehouse Edition, Enterprise Edition, or Basic Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the spot instance feature for the resource group. This feature provides resources at a lower unit price, but they can be reclaimed at any time. Only `Job` resource groups support this feature. Valid values:
   * 
   * - **True**: enables the spot instance feature.
   * 
   * - **False**: disables the spot instance feature.
   * 
   * @example
   * True
   */
  enableSpot?: boolean;
  /**
   * @remarks
   * The engine configuration.
   * 
   * @example
   * {\\"spark.adb.version\\":\\"3.5\\"}
   */
  engineParamsShrink?: string;
  /**
   * @remarks
   * The time-based scaling plan for GPUs.
   */
  gpuElasticPlanShrink?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the resource group name for a specific cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * - **Interactive**
   * 
   * - **Job**
   * 
   * > For more information about resource groups in Data Lakehouse Edition clusters, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Interactive
   */
  groupType?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * 无
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum amount of reserved computing resources. The value cannot exceed the unallocated computing resources of the cluster.
   * 
   * - If the resource group type is `Interactive`, the value is specified in increments of 16 ACU.
   * 
   * - If the resource group type is `Job`, the value is specified in increments of 8 ACU.
   * 
   * @example
   * 48ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * Reserved parameter. Not applicable.
   */
  maxGpuQuantity?: number;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * 无
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum amount of reserved computing resources.
   * 
   * - If the resource group type is `Interactive`, the minimum amount of reserved computing resources is 16 ACU.
   * 
   * - If the resource group type is `Job`, the minimum amount of reserved computing resources is 0 ACU.
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * Reserved parameter. Not applicable.
   */
  minGpuQuantity?: number;
  /**
   * @remarks
   * The Ray configuration. This parameter is required if the resource group is an AI group and uses a Ray cluster as its engine.
   */
  rayConfigShrink?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The job submission rules.
   */
  rulesShrink?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * Reserved parameter. Not applicable.
   */
  specName?: string;
  /**
   * @remarks
   * The desired state of the resource group. Specify **starting** to start the resource group or **stopping** to stop it.
   * 
   * @example
   * starting
   */
  status?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * Reserved parameter. Not applicable.
   */
  targetResourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      atmConfigShrink: 'AtmConfig',
      autoStopInterval: 'AutoStopInterval',
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      DBClusterId: 'DBClusterId',
      enableSpot: 'EnableSpot',
      engineParamsShrink: 'EngineParams',
      gpuElasticPlanShrink: 'GpuElasticPlan',
      groupName: 'GroupName',
      groupType: 'GroupType',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      maxGpuQuantity: 'MaxGpuQuantity',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      minGpuQuantity: 'MinGpuQuantity',
      rayConfigShrink: 'RayConfig',
      regionId: 'RegionId',
      rulesShrink: 'Rules',
      specName: 'SpecName',
      status: 'Status',
      targetResourceGroupName: 'TargetResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atmConfigShrink: 'string',
      autoStopInterval: 'string',
      clusterMode: 'string',
      clusterSizeResource: 'string',
      DBClusterId: 'string',
      enableSpot: 'boolean',
      engineParamsShrink: 'string',
      gpuElasticPlanShrink: 'string',
      groupName: 'string',
      groupType: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      maxGpuQuantity: 'number',
      minClusterCount: 'number',
      minComputeResource: 'string',
      minGpuQuantity: 'number',
      rayConfigShrink: 'string',
      regionId: 'string',
      rulesShrink: 'string',
      specName: 'string',
      status: 'string',
      targetResourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

