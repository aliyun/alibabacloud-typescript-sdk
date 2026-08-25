// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBResourceGroupRequestAtmConfig extends $dara.Model {
  /**
   * @remarks
   * The number of authentication nodes.
   * 
   * @example
   * 2
   */
  authNodeNum?: number;
  /**
   * @remarks
   * The authentication node specifications in ACU ([0-9+]ACU).
   * 
   * @example
   * 8ACU
   */
  authNodeSpec?: string;
  /**
   * @remarks
   * The number of insert nodes.
   * 
   * @example
   * 2
   */
  insertNodeNum?: number;
  /**
   * @remarks
   * The insert node specifications in ACU ([0-9+]ACU).
   * 
   * @example
   * 8ACU
   */
  insertNodeSpec?: string;
  /**
   * @remarks
   * The query node cache size in GB.
   * 
   * @example
   * 10
   */
  selectNodeCacheSize?: number;
  /**
   * @remarks
   * The number of query nodes.
   * 
   * @example
   * 1
   */
  selectNodeNum?: number;
  /**
   * @remarks
   * The query node specifications ([0-9+]ACU).
   * 
   * @example
   * 8ACU
   */
  selectNodeSpec?: string;
  /**
   * @remarks
   * The disk size of storage nodes.
   * 
   * @example
   * 1
   */
  storageNodeDiskSize?: number;
  /**
   * @remarks
   * The disk type of storage nodes (essd_pl1, essd_pl2).
   * 
   * @example
   * essd_pl1
   */
  storageNodeDiskType?: string;
  /**
   * @remarks
   * The number of storage nodes.
   * 
   * @example
   * 2
   */
  storageNodeNum?: number;
  /**
   * @remarks
   * The storage node specifications in ACU ([0-9+]ACU).
   * 
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

export class ModifyDBResourceGroupRequestGpuElasticPlanRules extends $dara.Model {
  /**
   * @remarks
   * The end time, specified as a cron expression. The interval must be at least 1 hour.
   * 
   * @example
   * 0 0 3 * * ?
   */
  endCronExpression?: string;
  /**
   * @remarks
   * The start time, specified as a cron expression. The interval must be at least 1 hour.
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

export class ModifyDBResourceGroupRequestGpuElasticPlan extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the elastic plan immediately after creation. Valid values:
   * - **true**: Enables the elastic plan immediately.
   * - **false**: Does not enable the elastic plan.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of rules.
   */
  rules?: ModifyDBResourceGroupRequestGpuElasticPlanRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': ModifyDBResourceGroupRequestGpuElasticPlanRules },
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

export class ModifyDBResourceGroupRequestRayConfigAppConfigImageSelector extends $dara.Model {
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * lab2.10.0-ray2.43.0
   */
  image?: string;
  /**
   * @remarks
   * The inference engine.
   * 
   * @example
   * vLLM
   */
  inferenceEngine?: string;
  /**
   * @remarks
   * The LLM model.
   * 
   * @example
   * Deepseek-R1
   */
  llmModel?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      inferenceEngine: 'InferenceEngine',
      llmModel: 'LlmModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      inferenceEngine: 'string',
      llmModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourceGroupRequestRayConfigAppConfig extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * app01
   */
  appName?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * IsaacLab
   */
  appType?: string;
  /**
   * @remarks
   * The image configuration.
   */
  imageSelector?: ModifyDBResourceGroupRequestRayConfigAppConfigImageSelector;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      imageSelector: 'ImageSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
      imageSelector: ModifyDBResourceGroupRequestRayConfigAppConfigImageSelector,
    };
  }

  validate() {
    if(this.imageSelector && typeof (this.imageSelector as any).validate === 'function') {
      (this.imageSelector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourceGroupRequestRayConfigStorageMounts extends $dara.Model {
  /**
   * @remarks
   * The mount path.
   * 
   * @example
   * /mnt/data01
   */
  mountPath?: string;
  /**
   * @remarks
   * The storage ID.
   * 
   * @example
   * 1
   */
  storageId?: number;
  storageName?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      storageId: 'StorageId',
      storageName: 'StorageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      storageId: 'number',
      storageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourceGroupRequestRayConfigWorkerGroups extends $dara.Model {
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
   * The worker group name.
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

export class ModifyDBResourceGroupRequestRayConfig extends $dara.Model {
  /**
   * @remarks
   * The Ray application configuration.
   */
  appConfig?: ModifyDBResourceGroupRequestRayConfigAppConfig;
  /**
   * @remarks
   * The Ray cluster type. Valid values:
   * 
   * - BASIC: basic type, non-high-availability
   * 
   * - HIGH_AVAILABILITY: high-availability type
   * 
   * @example
   * BASIC
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to enable ENI.
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
  /**
   * @remarks
   * The storage mount list.
   */
  storageMounts?: ModifyDBResourceGroupRequestRayConfigStorageMounts[];
  userDefinedRequirements?: string;
  /**
   * @remarks
   * The list of Ray worker group configurations.
   */
  workerGroups?: ModifyDBResourceGroupRequestRayConfigWorkerGroups[];
  static names(): { [key: string]: string } {
    return {
      appConfig: 'AppConfig',
      category: 'Category',
      enableUserEni: 'EnableUserEni',
      headAllocateUnit: 'HeadAllocateUnit',
      headDiskCapacity: 'HeadDiskCapacity',
      headSpec: 'HeadSpec',
      headSpecType: 'HeadSpecType',
      storageMounts: 'StorageMounts',
      userDefinedRequirements: 'UserDefinedRequirements',
      workerGroups: 'WorkerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfig: ModifyDBResourceGroupRequestRayConfigAppConfig,
      category: 'string',
      enableUserEni: 'boolean',
      headAllocateUnit: 'string',
      headDiskCapacity: 'string',
      headSpec: 'string',
      headSpecType: 'string',
      storageMounts: { 'type': 'array', 'itemType': ModifyDBResourceGroupRequestRayConfigStorageMounts },
      userDefinedRequirements: 'string',
      workerGroups: { 'type': 'array', 'itemType': ModifyDBResourceGroupRequestRayConfigWorkerGroups },
    };
  }

  validate() {
    if(this.appConfig && typeof (this.appConfig as any).validate === 'function') {
      (this.appConfig as any).validate();
    }
    if(Array.isArray(this.storageMounts)) {
      $dara.Model.validateArray(this.storageMounts);
    }
    if(Array.isArray(this.workerGroups)) {
      $dara.Model.validateArray(this.workerGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourceGroupRequestRules extends $dara.Model {
  /**
   * @remarks
   * The resource group name.
   * 
   * @example
   * user_default
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
   * The target resource group name.
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

export class ModifyDBResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The PromQL resource group configuration.
   */
  atmConfig?: ModifyDBResourceGroupRequestAtmConfig;
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
  engineParams?: { [key: string]: any };
  /**
   * @remarks
   * The GPU time-sharing elastic plan.
   */
  gpuElasticPlan?: ModifyDBResourceGroupRequestGpuElasticPlan;
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
  rayConfig?: ModifyDBResourceGroupRequestRayConfig;
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
  rules?: ModifyDBResourceGroupRequestRules[];
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
      atmConfig: 'AtmConfig',
      autoStopInterval: 'AutoStopInterval',
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      DBClusterId: 'DBClusterId',
      enableSpot: 'EnableSpot',
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
      specName: 'SpecName',
      status: 'Status',
      targetResourceGroupName: 'TargetResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atmConfig: ModifyDBResourceGroupRequestAtmConfig,
      autoStopInterval: 'string',
      clusterMode: 'string',
      clusterSizeResource: 'string',
      DBClusterId: 'string',
      enableSpot: 'boolean',
      engineParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuElasticPlan: ModifyDBResourceGroupRequestGpuElasticPlan,
      groupName: 'string',
      groupType: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      maxGpuQuantity: 'number',
      minClusterCount: 'number',
      minComputeResource: 'string',
      minGpuQuantity: 'number',
      rayConfig: ModifyDBResourceGroupRequestRayConfig,
      regionId: 'string',
      rules: { 'type': 'array', 'itemType': ModifyDBResourceGroupRequestRules },
      specName: 'string',
      status: 'string',
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

