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
   * The number of insert nodes.
   * 
   * @example
   * 1
   */
  insertNodeNum?: string;
  /**
   * @remarks
   * The insert node specifications.
   * 
   * @example
   * 8ACU
   */
  insertNodeSpec?: string;
  /**
   * @remarks
   * The cache size of the query node.
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
   * The disk size of the storage node.
   * 
   * @example
   * 100
   */
  storageNodeDiskSize?: string;
  /**
   * @remarks
   * The disk type of the storage node.
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
   * The end time in cron expression format. The interval must be no less than 1 hour.
   * 
   * @example
   * 0 0 3 * * ?
   */
  endCronExpression?: string;
  /**
   * @remarks
   * The start time in cron expression format. The interval must be no less than 1 hour.
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
   * Indicates whether the GPU time-based elastic plan is enabled.
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
   * The large language model (LLM).
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
   * The name of the Ray application.
   * 
   * @example
   * app01
   */
  appName?: string;
  /**
   * @remarks
   * The type of the Ray application.
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
  /**
   * @remarks
   * The name of the mounted storage.
   * 
   * @example
   * training-data
   */
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
   * The name of the Ray worker group.
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
   * The disk size of each worker.
   * 
   * @example
   * 100G
   */
  workerDiskCapacity?: string;
  /**
   * @remarks
   * The specification of the worker.
   * 
   * @example
   * large
   */
  workerSpecName?: string;
  /**
   * @remarks
   * The resource type of the Ray worker.
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
   * - **BASIC**: the basic type, which is not highly available.
   * 
   * - **HIGH_AVAILABILITY**: the high-availability type.
   * 
   * @example
   * BASIC
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to enable the elastic network interface (ENI).
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
   * The disk size of the head node.
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
   * The address of the Ray cluster.
   * 
   * @example
   * http://ray-cluster-address.example.com
   */
  rayClusterAddress?: string;
  /**
   * @remarks
   * The address of the Ray dashboard.
   * 
   * @example
   * http://ray-dashboard-address.example.com
   */
  rayDashboardAddress?: string;
  /**
   * @remarks
   * The address of Ray Grafana.
   * 
   * @example
   * http://ray-grafana-address.example.com
   */
  rayGrafanaAddress?: string;
  /**
   * @remarks
   * The public endpoint of Ray Serve.
   * 
   * @example
   * 1.2.3.4:8100
   */
  rayServePublicAddress?: string;
  /**
   * @remarks
   * The list of mounted storage.
   */
  storageMounts?: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigStorageMounts[];
  /**
   * @remarks
   * The custom Python dependencies for RayCluster. Specify the content in the requirements.txt format, with one pip dependency per line. A maximum of 200 lines are allowed, and each line cannot exceed 512 characters. Version constraints, extras, PEP 440 direct URLs, and # comments are supported, but shell metacharacters are not supported. This parameter applies only to AI resource groups of the RayCluster type.
   * 
   * @example
   * numpy==1.24.0
   */
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
   * The name of the resource group.
   * 
   * @example
   * user_default
   */
  groupName?: string;
  /**
   * @remarks
   * The threshold for query execution time. Unit: milliseconds.
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

export class DescribeDBResourceGroupResponseBodyGroupsInfo extends $dara.Model {
  /**
   * @remarks
   * The PromQL resource group configuration.
   */
  atmConfig?: DescribeDBResourceGroupResponseBodyGroupsInfoAtmConfig;
  /**
   * @remarks
   * The auto-stop interval. The value is in the format of a number followed by "m", which indicates minutes. Valid values range from 0m or 5m to 10080m. A value of 0m indicates that the resource group does not automatically stop.
   * 
   * @example
   * 0m
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
   * The reserved parameter. This parameter is not applicable.
   * 
   * @example
   * Reserved parameter
   */
  clusterMode?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not applicable.
   * 
   * @example
   * Reserved parameter
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * The time when the resource group was created. The time is displayed in UTC in the <i>yyyy-MM-ddTHH:mm:ssZ</i> format.
   * 
   * @example
   * 2022-08-29T03:34:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The minimum elastic compute resources. Unit: ACU.
   * 
   * @example
   * 16ACU
   */
  elasticMinComputeResource?: string;
  /**
   * @remarks
   * Specifies whether to enable the spot instance feature for the resource group. After you enable this feature, the unit price of resources decreases, but the instances may be released. Valid values:
   * - **True**: enables the spot instance feature.
   * - **False**: disables the spot instance feature.
   * 
   * This parameter can be set to True only for Job resource groups.
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
   * The GPU time-based elastic plan.
   */
  gpuElasticPlan?: DescribeDBResourceGroupResponseBodyGroupsInfoGpuElasticPlan;
  /**
   * @remarks
   * The name of the resource group.
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
   * > For more information about Data Lakehouse Edition resource groups, see [Resource group overview (Data Lakehouse Edition)](https://help.aliyun.com/document_detail/428610.html).
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
   * The reserved parameter. This parameter is not applicable.
   * 
   * @example
   * Reserved parameter
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum reserved compute resources. Unit: ACU.
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
   * The message of the job delivery rule.
   * 
   * This parameter is required.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not applicable.
   * 
   * @example
   * Reserved parameter
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum reserved compute resources. Unit: ACU.
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
   * The job delivery rules.
   */
  rules?: DescribeDBResourceGroupResponseBodyGroupsInfoRules[];
  /**
   * @remarks
   * The reserved parameter. This parameter is not applicable.
   * 
   * @example
   * Reserved parameter
   */
  runningClusterCount?: number;
  /**
   * @remarks
   * The scale-out policy of the resource group. Valid values:
   * - AutoScaling: enables the AutoScaling policy.
   * - Disable: disables auto scaling.
   * - MultiCluster: enables the MultiCluster policy.
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
   * The status of the resource group. Valid values:
   * - **Pending**: The resource group is being created.
   * - **Running**: The resource group is running.
   * - **Scaling**: The resource group is being scaled.
   * - **Deleting**: The resource group is being deleted.
   * - **Deleted**: The resource group is deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The name of the destination resource group.
   * 
   * @example
   * test
   */
  targetResourceGroupName?: string;
  /**
   * @remarks
   * The time when the resource group was updated. The time is displayed in UTC in the <i>yyyy-MM-ddTHH:mm:ssZ</i> format.
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

