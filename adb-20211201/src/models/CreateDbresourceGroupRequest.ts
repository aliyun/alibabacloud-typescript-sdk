// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBResourceGroupRequestAtmConfig extends $dara.Model {
  /**
   * @example
   * 2
   */
  authNodeNum?: number;
  /**
   * @example
   * 8ACU
   */
  authNodeSpec?: string;
  /**
   * @example
   * 2
   */
  insertNodeNum?: number;
  /**
   * @example
   * 8ACU
   */
  insertNodeSpec?: string;
  /**
   * @example
   * 10
   */
  selectNodeCacheSize?: number;
  /**
   * @example
   * 1
   */
  selectNodeNum?: number;
  /**
   * @example
   * 8ACU
   */
  selectNodeSpec?: string;
  /**
   * @example
   * 1
   */
  storageNodeDiskSize?: number;
  /**
   * @example
   * essd_pl1
   */
  storageNodeDiskType?: string;
  /**
   * @example
   * 2
   */
  storageNodeNum?: number;
  /**
   * @example
   * 8ACU
   */
  storageNodeSpec?: string;
  static names(): { [key: string]: string } {
    return {
      authNodeNum: 'AuthNodeNum',
      authNodeSpec: 'AuthNodeSpec',
      insertNodeNum: 'InsertNodeNum',
      insertNodeSpec: 'InsertNodeSpec',
      selectNodeCacheSize: 'SelectNodeCacheSize',
      selectNodeNum: 'SelectNodeNum',
      selectNodeSpec: 'SelectNodeSpec',
      storageNodeDiskSize: 'StorageNodeDiskSize',
      storageNodeDiskType: 'StorageNodeDiskType',
      storageNodeNum: 'StorageNodeNum',
      storageNodeSpec: 'StorageNodeSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authNodeNum: 'number',
      authNodeSpec: 'string',
      insertNodeNum: 'number',
      insertNodeSpec: 'string',
      selectNodeCacheSize: 'number',
      selectNodeNum: 'number',
      selectNodeSpec: 'string',
      storageNodeDiskSize: 'number',
      storageNodeDiskType: 'string',
      storageNodeNum: 'number',
      storageNodeSpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourceGroupRequestGpuElasticPlanRules extends $dara.Model {
  /**
   * @remarks
   * The end time as a cron expression. The interval must be at least 1 hour.
   * 
   * @example
   * 0 0 3 * * ?
   */
  endCronExpression?: string;
  /**
   * @remarks
   * The start time as a cron expression. The interval must be at least 1 hour.
   * 
   * @example
   * 0 0 2 * * ?
   */
  startCronExpression?: string;
  static names(): { [key: string]: string } {
    return {
      endCronExpression: 'EndCronExpression',
      startCronExpression: 'StartCronExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endCronExpression: 'string',
      startCronExpression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourceGroupRequestGpuElasticPlan extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the elastic plan immediately after creation. Valid values:
   * - true: enables the elastic plan immediately.
   * - false: does not enable the elastic plan.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of rules.
   */
  rules?: CreateDBResourceGroupRequestGpuElasticPlanRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': CreateDBResourceGroupRequestGpuElasticPlanRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourceGroupRequestRayConfigWorkerGroups extends $dara.Model {
  /**
   * @remarks
   * The allocation unit.
   * 
   * @example
   * 1
   */
  allocateUnit?: string;
  /**
   * @remarks
   * The name of the worker group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The maximum number of workers.
   * 
   * @example
   * 2
   */
  maxWorkerQuantity?: number;
  /**
   * @remarks
   * The minimum number of workers.
   * 
   * @example
   * 1
   */
  minWorkerQuantity?: number;
  /**
   * @remarks
   * The disk size of the worker node.
   * 
   * @example
   * 100G
   */
  workerDiskCapacity?: string;
  /**
   * @remarks
   * The node specifications of the worker node.
   * 
   * @example
   * xlarge
   */
  workerSpecName?: string;
  /**
   * @remarks
   * The resource type of the worker node.
   * 
   * @example
   * GPU
   */
  workerSpecType?: string;
  static names(): { [key: string]: string } {
    return {
      allocateUnit: 'AllocateUnit',
      groupName: 'GroupName',
      maxWorkerQuantity: 'MaxWorkerQuantity',
      minWorkerQuantity: 'MinWorkerQuantity',
      workerDiskCapacity: 'WorkerDiskCapacity',
      workerSpecName: 'WorkerSpecName',
      workerSpecType: 'WorkerSpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateUnit: 'string',
      groupName: 'string',
      maxWorkerQuantity: 'number',
      minWorkerQuantity: 'number',
      workerDiskCapacity: 'string',
      workerSpecName: 'string',
      workerSpecType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourceGroupRequestRayConfig extends $dara.Model {
  /**
   * @remarks
   * The Ray cluster type. Valid values:
   * 
   * - BASIC: basic type, non-high-availability
   * - HIGH_AVAILABILITY: high-availability type
   * 
   * @example
   * BASIC
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to enable user ENI connectivity.
   */
  enableUserEni?: boolean;
  /**
   * @remarks
   * The allocation unit of the head node.
   * 
   * @example
   * 1
   */
  headAllocateUnit?: string;
  /**
   * @remarks
   * The disk size of the head node.
   * 
   * @example
   * 100G
   */
  headDiskCapacity?: string;
  /**
   * @remarks
   * The node specifications of the head node.
   * 
   * @example
   * xlarge
   */
  headSpec?: string;
  /**
   * @remarks
   * The resource type of the head node.
   * 
   * @example
   * CPU
   */
  headSpecType?: string;
  userDefinedRequirements?: string;
  /**
   * @remarks
   * The list of Ray worker group configurations.
   */
  workerGroups?: CreateDBResourceGroupRequestRayConfigWorkerGroups[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      enableUserEni: 'EnableUserEni',
      headAllocateUnit: 'HeadAllocateUnit',
      headDiskCapacity: 'HeadDiskCapacity',
      headSpec: 'HeadSpec',
      headSpecType: 'HeadSpecType',
      userDefinedRequirements: 'UserDefinedRequirements',
      workerGroups: 'WorkerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      enableUserEni: 'boolean',
      headAllocateUnit: 'string',
      headDiskCapacity: 'string',
      headSpec: 'string',
      headSpecType: 'string',
      userDefinedRequirements: 'string',
      workerGroups: { 'type': 'array', 'itemType': CreateDBResourceGroupRequestRayConfigWorkerGroups },
    };
  }

  validate() {
    if(Array.isArray(this.workerGroups)) {
      $dara.Model.validateArray(this.workerGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourceGroupRequestRules extends $dara.Model {
  /**
   * @remarks
   * The name of the resource group.
   * - The name can be up to 255 characters in length.
   * - The name must start with a digit, an uppercase letter, or a lowercase letter.
   * - The name can contain digits, uppercase letters, lowercase letters, hyphens (-), and underscores (_).
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The query execution time threshold. Unit: milliseconds (ms).
   * 
   * @example
   * 180000
   */
  queryTime?: string;
  /**
   * @remarks
   * The name of the destination resource group.
   * 
   * @example
   * job
   */
  targetGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      queryTime: 'QueryTime',
      targetGroupName: 'TargetGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      queryTime: 'string',
      targetGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourceGroupRequest extends $dara.Model {
  atmConfig?: CreateDBResourceGroupRequestAtmConfig;
  /**
   * @remarks
   * The automatic stop interval. Unit: minutes (m).
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
   * The ID of the Dedicated Edition, Basic Edition, or Data Lakehouse Edition cluster.
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
  engineParams?: { [key: string]: any };
  /**
   * @remarks
   * The GPU time-sharing elastic plan.
   */
  gpuElasticPlan?: CreateDBResourceGroupRequestGpuElasticPlan;
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
   * > For more information about Data Lakehouse Edition resource groups, see [Resource group overview (Data Lakehouse Edition)](https://help.aliyun.com/document_detail/428610.html).
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
   * The maximum amount of reserved computing resources. Unit: ACUs.
   * - If the resource group type is Interactive, the maximum reserved computing resources is the current unallocated resources of the cluster, in increments of 16 ACUs.
   * - If the resource group type is Job, the maximum reserved computing resources is the current unallocated resources of the cluster, in increments of 8 ACUs.
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
   * The minimum amount of reserved computing resources. Unit: ACUs.
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
   * The Ray configuration.
   * > This parameter is required when the resource group is an AI resource group and the corresponding engine is RayCluster.
   */
  rayConfig?: CreateDBResourceGroupRequestRayConfig;
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
  rules?: CreateDBResourceGroupRequestRules[];
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
   * The name of the destination resource group.
   * 
   * @example
   * test
   */
  targetResourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      atmConfig: 'AtmConfig',
      autoStopInterval: 'AutoStopInterval',
      classification: 'Classification',
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      DBClusterId: 'DBClusterId',
      enableSpot: 'EnableSpot',
      engine: 'Engine',
      engineParams: 'EngineParams',
      gpuElasticPlan: 'GpuElasticPlan',
      groupName: 'GroupName',
      groupType: 'GroupType',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      maxGpuQuantity: 'MaxGpuQuantity',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      minGpuQuantity: 'MinGpuQuantity',
      rayConfig: 'RayConfig',
      regionId: 'RegionId',
      rules: 'Rules',
      scalePolicy: 'ScalePolicy',
      specName: 'SpecName',
      targetResourceGroupName: 'TargetResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atmConfig: CreateDBResourceGroupRequestAtmConfig,
      autoStopInterval: 'string',
      classification: 'string',
      clusterMode: 'string',
      clusterSizeResource: 'string',
      DBClusterId: 'string',
      enableSpot: 'boolean',
      engine: 'string',
      engineParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuElasticPlan: CreateDBResourceGroupRequestGpuElasticPlan,
      groupName: 'string',
      groupType: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      maxGpuQuantity: 'number',
      minClusterCount: 'number',
      minComputeResource: 'string',
      minGpuQuantity: 'number',
      rayConfig: CreateDBResourceGroupRequestRayConfig,
      regionId: 'string',
      rules: { 'type': 'array', 'itemType': CreateDBResourceGroupRequestRules },
      scalePolicy: 'string',
      specName: 'string',
      targetResourceGroupName: 'string',
    };
  }

  validate() {
    if(this.atmConfig && typeof (this.atmConfig as any).validate === 'function') {
      (this.atmConfig as any).validate();
    }
    if(this.engineParams) {
      $dara.Model.validateMap(this.engineParams);
    }
    if(this.gpuElasticPlan && typeof (this.gpuElasticPlan as any).validate === 'function') {
      (this.gpuElasticPlan as any).validate();
    }
    if(this.rayConfig && typeof (this.rayConfig as any).validate === 'function') {
      (this.rayConfig as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

