// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBResourceGroupResponseBodyGroupsInfoAtmConfig extends $dara.Model {
  /**
   * @remarks
   * The number of authentication nodes.
   * 
   * @example
   * 2
   */
  authNodeNum?: string;
  /**
   * @remarks
   * The authentication node specifications.
   * 
   * @example
   * 8ACU
   */
  authNodeSpec?: string;
  /**
   * @remarks
   * The number of write nodes.
   * 
   * @example
   * 1
   */
  insertNodeNum?: string;
  /**
   * @remarks
   * The write node specifications.
   * 
   * @example
   * 8ACU
   */
  insertNodeSpec?: string;
  /**
   * @remarks
   * The cache size of query nodes.
   * 
   * @example
   * 10
   */
  selectNodeCacheSize?: string;
  /**
   * @remarks
   * The number of query nodes.
   * 
   * @example
   * 1
   */
  selectNodeNum?: string;
  /**
   * @remarks
   * The query node specifications.
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
   * 100
   */
  storageNodeDiskSize?: string;
  /**
   * @remarks
   * The disk type of storage nodes.
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
  storageNodeNum?: string;
  /**
   * @remarks
   * The storage node specifications.
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
      authNodeNum: 'string',
      authNodeSpec: 'string',
      insertNodeNum: 'string',
      insertNodeSpec: 'string',
      selectNodeCacheSize: 'string',
      selectNodeNum: 'string',
      selectNodeSpec: 'string',
      storageNodeDiskSize: 'string',
      storageNodeDiskType: 'string',
      storageNodeNum: 'string',
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

export class DescribeDBResourceGroupResponseBodyGroupsInfoGpuElasticPlanRules extends $dara.Model {
  /**
   * @remarks
   * The end time in Cron expression format. The interval must be at least 1 hour.
   * 
   * @example
   * 0 0 3 * * ?
   */
  endCronExpression?: string;
  /**
   * @remarks
   * The start time in Cron expression format. The interval must be at least 1 hour.
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

export class DescribeDBResourceGroupResponseBodyGroupsInfoGpuElasticPlan extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the plan is enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of rules.
   */
  rules?: DescribeDBResourceGroupResponseBodyGroupsInfoGpuElasticPlanRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyGroupsInfoGpuElasticPlanRules },
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

export class DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigAppConfigImageSelector extends $dara.Model {
  /**
   * @remarks
   * The image.
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

export class DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigAppConfig extends $dara.Model {
  /**
   * @remarks
   * The Ray application name.
   * 
   * @example
   * app01
   */
  appName?: string;
  /**
   * @remarks
   * The Ray application type.
   * 
   * @example
   * IsaacLab
   */
  appType?: string;
  /**
   * @remarks
   * The image configuration.
   * 
   * **if can be null:**
   * true
   */
  imageSelector?: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigAppConfigImageSelector;
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
      imageSelector: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigAppConfigImageSelector,
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

export class DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigStorageMounts extends $dara.Model {
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

export class DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigWorkerGroups extends $dara.Model {
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
   * The Ray worker group name.
   * 
   * @example
   * g01
   */
  groupName?: string;
  /**
   * @remarks
   * The maximum number of workers.
   * 
   * @example
   * 1
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
   * The disk capacity per worker.
   * 
   * @example
   * 100G
   */
  workerDiskCapacity?: string;
  /**
   * @remarks
   * The worker specification name.
   * 
   * @example
   * large
   */
  workerSpecName?: string;
  /**
   * @remarks
   * The Ray worker resource type.
   * 
   * @example
   * CPU
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

export class DescribeDBResourceGroupResponseBodyGroupsInfoRayConfig extends $dara.Model {
  /**
   * @remarks
   * The Ray application configuration.
   * 
   * **if can be null:**
   * true
   */
  appConfig?: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigAppConfig;
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
   * Indicates whether ENI is enabled.
   * 
   * **if can be null:**
   * false
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
   * The disk capacity of the head node.
   * 
   * @example
   * 100Gi
   */
  headDiskCapacity?: string;
  /**
   * @remarks
   * The node specifications of the head node.
   * 
   * @example
   * ADB.MLLarge.2
   */
  headSpec?: string;
  /**
   * @remarks
   * The resource type of the head node.
   * 
   * @example
   * cpu
   */
  headSpecType?: string;
  /**
   * @remarks
   * The Ray cluster address.
   * 
   * @example
   * http://ray-cluster-address.example.com
   */
  rayClusterAddress?: string;
  /**
   * @remarks
   * The Ray Dashboard address.
   * 
   * @example
   * http://ray-dashboard-address.example.com
   */
  rayDashboardAddress?: string;
  /**
   * @remarks
   * The Ray Grafana address.
   * 
   * @example
   * http://ray-grafana-address.example.com
   */
  rayGrafanaAddress?: string;
  /**
   * @remarks
   * The Ray Serve public address.
   * 
   * @example
   * 1.2.3.4:8100
   */
  rayServePublicAddress?: string;
  /**
   * @remarks
   * The list of storage mounts.
   */
  storageMounts?: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigStorageMounts[];
  userDefinedRequirements?: string;
  /**
   * @remarks
   * The list of Ray worker groups.
   */
  workerGroups?: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigWorkerGroups[];
  static names(): { [key: string]: string } {
    return {
      appConfig: 'AppConfig',
      category: 'Category',
      enableUserEni: 'EnableUserEni',
      headAllocateUnit: 'HeadAllocateUnit',
      headDiskCapacity: 'HeadDiskCapacity',
      headSpec: 'HeadSpec',
      headSpecType: 'HeadSpecType',
      rayClusterAddress: 'RayClusterAddress',
      rayDashboardAddress: 'RayDashboardAddress',
      rayGrafanaAddress: 'RayGrafanaAddress',
      rayServePublicAddress: 'RayServePublicAddress',
      storageMounts: 'StorageMounts',
      userDefinedRequirements: 'UserDefinedRequirements',
      workerGroups: 'WorkerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfig: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigAppConfig,
      category: 'string',
      enableUserEni: 'boolean',
      headAllocateUnit: 'string',
      headDiskCapacity: 'string',
      headSpec: 'string',
      headSpecType: 'string',
      rayClusterAddress: 'string',
      rayDashboardAddress: 'string',
      rayGrafanaAddress: 'string',
      rayServePublicAddress: 'string',
      storageMounts: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigStorageMounts },
      userDefinedRequirements: 'string',
      workerGroups: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigWorkerGroups },
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

export class DescribeDBResourceGroupResponseBodyGroupsInfoRules extends $dara.Model {
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
   * The query execution time threshold, in milliseconds (ms).
   * 
   * @example
   * 180000
   */
  queryTime?: string;
  /**
   * @remarks
   * The name of the target resource group.
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

export class DescribeDBResourceGroupResponseBodyGroupsInfo extends $dara.Model {
  /**
   * @remarks
   * The PromQL resource group configuration.
   */
  atmConfig?: DescribeDBResourceGroupResponseBodyGroupsInfoAtmConfig;
  /**
   * @remarks
   * The automatic stop interval, in the format of a number followed by m (minutes). The value ranges from 0m or 5m to 10080m. A value of 0m indicates that automatic stop is disabled.
   * 
   * @example
   * 0m
   */
  autoStopInterval?: string;
  /**
   * @remarks
   * The classification of the resource group. Valid values:
   * 
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
   * A reserved parameter. Not applicable.
   * 
   * @example
   * Reserved parameter
   */
  clusterMode?: string;
  /**
   * @remarks
   * A reserved parameter. Not applicable.
   * 
   * @example
   * Reserved parameter
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * The time when the resource group was created, in UTC. Format: <i>yyyy-MM-ddTHH:mm:ssZ</i>.
   * 
   * @example
   * 2022-08-29T03:34:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The minimum elastic computing resources, in ACUs.
   * 
   * @example
   * 16ACU
   */
  elasticMinComputeResource?: string;
  /**
   * @remarks
   * Indicates whether the spot instance feature is enabled for the resource group. When the spot instance feature is enabled, the unit price of resources is reduced, but instances may be released. Valid values:
   * - **True**: The spot instance feature is enabled.
   * - **False**: The spot instance feature is disabled.
   * 
   * Only Job-type resource groups can be set to True.
   * 
   * @example
   * True
   */
  enableSpot?: string;
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * AnalyticDB
   */
  engine?: string;
  /**
   * @remarks
   * The engine parameters.
   */
  engineParams?: { [key: string]: any };
  /**
   * @remarks
   * The GPU time-sharing elastic plan.
   */
  gpuElasticPlan?: DescribeDBResourceGroupResponseBodyGroupsInfoGpuElasticPlan;
  /**
   * @remarks
   * The resource group name.
   * 
   * @example
   * test1
   */
  groupName?: string;
  /**
   * @remarks
   * The resource group type. Valid values:
   * - **Interactive**
   * - **Job**
   * > For more information about resource groups in Data Lakehouse Edition, see [Resource group introduction (Data Lakehouse Edition)](https://help.aliyun.com/document_detail/428610.html).
   * 
   * @example
   * Job
   */
  groupType?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) users attached to the resource group.
   * 
   * @example
   * testb,testc
   */
  groupUsers?: string;
  /**
   * @remarks
   * A reserved parameter. Not applicable.
   * 
   * @example
   * Reserved parameter
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum reserved computing resources, in ACUs.
   * 
   * @example
   * 512ACU
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
   * The job routing rule message.
   * 
   * This parameter is required.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * A reserved parameter. Not applicable.
   * 
   * @example
   * Reserved parameter
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum reserved computing resources, in ACUs.
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
   */
  rayConfig?: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfig;
  /**
   * @remarks
   * The job routing rules.
   */
  rules?: DescribeDBResourceGroupResponseBodyGroupsInfoRules[];
  /**
   * @remarks
   * A reserved parameter. Not applicable.
   * 
   * @example
   * Reserved parameter
   */
  runningClusterCount?: number;
  /**
   * @remarks
   * The scaling policy of the resource group. Valid values:
   * 
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
   * The resource group status. Valid values:
   * - **creating**: being created
   * - **ok**: created
   * - **pendingdelete**: pending deletion
   * 
   * @example
   * ok
   */
  status?: string;
  /**
   * @remarks
   * The name of the target resource group.
   * 
   * @example
   * test
   */
  targetResourceGroupName?: string;
  /**
   * @remarks
   * The time when the resource group was last updated, in UTC. Format: <i>yyyy-MM-ddTHH:mm:ssZ</i>.
   * 
   * @example
   * 2022-08-31T03:34:30Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      atmConfig: 'AtmConfig',
      autoStopInterval: 'AutoStopInterval',
      classification: 'Classification',
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      createTime: 'CreateTime',
      elasticMinComputeResource: 'ElasticMinComputeResource',
      enableSpot: 'EnableSpot',
      engine: 'Engine',
      engineParams: 'EngineParams',
      gpuElasticPlan: 'GpuElasticPlan',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupUsers: 'GroupUsers',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      maxGpuQuantity: 'MaxGpuQuantity',
      message: 'Message',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      minGpuQuantity: 'MinGpuQuantity',
      rayConfig: 'RayConfig',
      rules: 'Rules',
      runningClusterCount: 'RunningClusterCount',
      scalePolicy: 'ScalePolicy',
      specName: 'SpecName',
      status: 'Status',
      targetResourceGroupName: 'TargetResourceGroupName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atmConfig: DescribeDBResourceGroupResponseBodyGroupsInfoAtmConfig,
      autoStopInterval: 'string',
      classification: 'string',
      clusterMode: 'string',
      clusterSizeResource: 'string',
      createTime: 'string',
      elasticMinComputeResource: 'string',
      enableSpot: 'string',
      engine: 'string',
      engineParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuElasticPlan: DescribeDBResourceGroupResponseBodyGroupsInfoGpuElasticPlan,
      groupName: 'string',
      groupType: 'string',
      groupUsers: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      maxGpuQuantity: 'number',
      message: 'string',
      minClusterCount: 'number',
      minComputeResource: 'string',
      minGpuQuantity: 'number',
      rayConfig: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfig,
      rules: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyGroupsInfoRules },
      runningClusterCount: 'number',
      scalePolicy: 'string',
      specName: 'string',
      status: 'string',
      targetResourceGroupName: 'string',
      updateTime: 'string',
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

export class DescribeDBResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of resource group information.
   */
  groupsInfo?: DescribeDBResourceGroupResponseBodyGroupsInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A94B6C02-7BD4-5D67-9776-3AC8317E8DD3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupsInfo: 'GroupsInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupsInfo: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyGroupsInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupsInfo)) {
      $dara.Model.validateArray(this.groupsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

