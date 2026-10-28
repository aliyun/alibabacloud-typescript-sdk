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
   * The auto-stop time.
   * 
   * @example
   * 5m
   */
  autoStopInterval?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * None
   */
  clusterMode?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * None
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
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
   * Specifies whether to enable the spot instance feature for the resource group. After you enable this feature, the unit price of resources decreases, but the resources may be released. This feature can be enabled only for Job resource groups. Valid values:
   * - **True**: Enables the spot instance feature.
   * - **False**: Disables the spot instance feature.
   * 
   * @example
   * True
   */
  enableSpot?: boolean;
  /**
   * @remarks
   * The engine configurations.
   * 
   * @example
   * {\\"spark.adb.version\\":\\"3.5\\"}
   */
  engineParamsShrink?: string;
  /**
   * @remarks
   * The GPU time-based elastic plan.
   */
  gpuElasticPlanShrink?: string;
  /**
   * @remarks
   * The name of the resource group.
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the name of the resource group for a specified cluster.
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
   * - **Interactive**
   * - **Job**
   * > For more information about Data Lakehouse Edition resource groups, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Interactive
   */
  groupType?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * None
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum reserved computing resources.
   * - If the resource group type is Interactive, the maximum reserved computing resources is the currently unallocated resources of the cluster, and the step size is 16 ACUs.
   * - If the resource group type is Job, the maximum reserved computing resources is the currently unallocated resources of the cluster, and the step size is 8 ACUs.
   * 
   * @example
   * 48ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  maxGpuQuantity?: number;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * None
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
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  minGpuQuantity?: number;
  /**
   * @remarks
   * The Ray configuration information. This parameter is required when the resource group is an AI resource group and the corresponding engine is RayCluster.
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
   * The job delivery rules.
   */
  rulesShrink?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  specName?: string;
  /**
   * @remarks
   * The status of the resource group. **starting** indicates that the resource group is being started. **stopping** indicates that the resource group is being stopped.
   * 
   * @example
   * starting
   */
  status?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
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

