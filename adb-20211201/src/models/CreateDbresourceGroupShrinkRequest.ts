// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBResourceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The PromQL resource group configuration.
   */
  atmConfigShrink?: string;
  /**
   * @remarks
   * The automatic stop interval, in minutes (m).
   * 
   * @example
   * 5m
   */
  autoStopInterval?: string;
  /**
   * @remarks
   * The classification of the resource group. Valid values:
   * - SQL
   * - SparkSQL
   * - MultiCluster
   * - AI
   * 
   * @example
   * SQL
   */
  classification?: string;
  /**
   * @remarks
   * A reserved parameter (not applicable).
   * 
   * @example
   * -
   */
  clusterMode?: string;
  /**
   * @remarks
   * A reserved parameter (not applicable).
   * 
   * @example
   * -
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the spot instance feature for the resource group. After the spot instance feature is enabled, the unit price of resources is reduced, but the resources may be released. Only Job resource groups support this feature. Valid values:
   * - **True**: enables the spot instance feature.
   * - **False**: disables the spot instance feature.
   * 
   * @example
   * True
   */
  enableSpot?: boolean;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * - **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * - **SparkWarehouse**: the SparkWarehouse engine.
   * 
   * @example
   * SparkWarehouse
   */
  engine?: string;
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
   * The name of the resource group.
   * - The name can be up to 255 characters in length.
   * - The name must start with a digit, an uppercase letter, or a lowercase letter.
   * - The name can contain digits, uppercase letters, lowercase letters, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * - **Interactive**
   * - **Job**
   * > For more information about resource groups of the Data Lakehouse Edition, see [Resource group overview (Data Lakehouse Edition)](https://help.aliyun.com/document_detail/428610.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Job
   */
  groupType?: string;
  /**
   * @remarks
   * A reserved parameter (not applicable).
   * 
   * @example
   * -
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum reserved computing resources, in ACUs.
   * - If the resource group type is Interactive, the maximum reserved computing resources is the current unallocated resources of the cluster, with a step size of 16 ACUs.
   * - If the resource group type is Job, the maximum reserved computing resources is the current unallocated resources of the cluster, with a step size of 8 ACUs.
   * 
   * @example
   * 48ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * The maximum number of GPUs.
   * 
   * @example
   * 2
   */
  maxGpuQuantity?: number;
  /**
   * @remarks
   * A reserved parameter (not applicable).
   * 
   * @example
   * -
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum reserved computing resources, in ACUs.
   * - If the resource group type is Interactive, the minimum reserved computing resources is 16 ACUs.
   * - If the resource group type is Job, the minimum reserved computing resources is 0 ACUs.
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
  /**
   * @remarks
   * The minimum number of GPUs.
   * 
   * @example
   * 1
   */
  minGpuQuantity?: number;
  /**
   * @remarks
   * The Ray configuration information.
   * > This parameter is required when the resource group is an AI resource group and the corresponding engine is RayCluster.
   */
  rayConfigShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612393.html) operation to query the region IDs of AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters.
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
   * The scaling policy of the resource group. Valid values:
   * - AutoScaling: enables the AutoScaling automatic scaling policy.
   * - Disable: disables automatic scaling.
   * - MultiCluster: enables the MultiCluster automatic scaling policy.
   * 
   * @example
   * AutoScaling
   */
  scalePolicy?: string;
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * ADB.MLLarge.2
   */
  specName?: string;
  /**
   * @remarks
   * The name of the target resource group.
   * 
   * @example
   * test
   */
  targetResourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      atmConfigShrink: 'AtmConfig',
      autoStopInterval: 'AutoStopInterval',
      classification: 'Classification',
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      DBClusterId: 'DBClusterId',
      enableSpot: 'EnableSpot',
      engine: 'Engine',
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
      scalePolicy: 'ScalePolicy',
      specName: 'SpecName',
      targetResourceGroupName: 'TargetResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atmConfigShrink: 'string',
      autoStopInterval: 'string',
      classification: 'string',
      clusterMode: 'string',
      clusterSizeResource: 'string',
      DBClusterId: 'string',
      enableSpot: 'boolean',
      engine: 'string',
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
      scalePolicy: 'string',
      specName: 'string',
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

