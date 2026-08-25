// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBResourceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The PromQL resource group configuration.
   */
  atmConfigShrink?: string;
  /**
   * @remarks
   * The automatic stop interval.
   * 
   * @example
   * 5m
   */
  autoStopInterval?: string;
  /**
   * @remarks
   * A reserved parameter (not applicable).
   * 
   * @example
   * 无
   */
  clusterMode?: string;
  /**
   * @remarks
   * A reserved parameter (not applicable).
   * 
   * @example
   * 无
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * <props="china">The cluster ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The cluster ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the spot instance feature for the resource group. After the spot instance feature is enabled, the unit price of resources is reduced, but the resources may be released. Only Job resource groups support this feature. Valid values:
   * - **True**: Enables the spot instance feature.
   * - **False**: Disables the spot instance feature.
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
   * The GPU time-sharing elastic plan.
   */
  gpuElasticPlanShrink?: string;
  /**
   * @remarks
   * The resource group name.
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the resource group names of a specified cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The resource group type. Valid values:
   * - **Interactive**
   * - **Job**
   * > For more information about Data Lakehouse Edition resource groups, see [Resource group overview](https://help.aliyun.com/document_detail/428610.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Interactive
   */
  groupType?: string;
  /**
   * @remarks
   * A reserved parameter (not applicable).
   * 
   * @example
   * 无
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum reserved computing resources.
   * - If the resource group type is Interactive, the maximum reserved computing resources is the unallocated resources of the cluster, in increments of 16 ACUs.
   * - If the resource group type is Job, the maximum reserved computing resources is the unallocated resources of the cluster, in increments of 8 ACUs.
   * 
   * @example
   * 48ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * A reserved parameter (not applicable).
   * 
   * @example
   * Reserved parameter. Not applicable.
   */
  maxGpuQuantity?: number;
  /**
   * @remarks
   * A reserved parameter (not applicable).
   * 
   * @example
   * 无
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum reserved computing resources.
   * - If the resource group type is Interactive, the minimum reserved computing resources is 16 ACUs.
   * - If the resource group type is Job, the minimum reserved computing resources is 0 ACUs.
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
  /**
   * @remarks
   * A reserved parameter (not applicable).
   * 
   * @example
   * Reserved parameter. Not applicable.
   */
  minGpuQuantity?: number;
  /**
   * @remarks
   * The Ray configuration. This parameter is required when the resource group is an AI resource group and the corresponding engine is RayCluster.
   */
  rayConfigShrink?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the region ID of a specified cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The job routing rules.
   */
  rulesShrink?: string;
  /**
   * @remarks
   * A reserved parameter (not applicable).
   * 
   * @example
   * Reserved parameter. Not applicable.
   */
  specName?: string;
  /**
   * @remarks
   * The resource group status. **starting** indicates that the resource group is being started. **stopping** indicates that the resource group is being stopped.
   * 
   * @example
   * starting
   */
  status?: string;
  /**
   * @remarks
   * A reserved parameter (not applicable).
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

