// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBResourceGroupResponseBodyGroupsInfoGpuElasticPlanRules extends $dara.Model {
  endCronExpression?: string;
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
  enabled?: boolean;
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
   * @example
   * lab2.10.0-ray2.43.0
   */
  image?: string;
  /**
   * @example
   * vLLM
   */
  inferenceEngine?: string;
  /**
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
   * @example
   * app01
   */
  appName?: string;
  /**
   * @example
   * IsaacLab
   */
  appType?: string;
  /**
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
   * @example
   * /mnt/data01
   */
  mountPath?: string;
  /**
   * @example
   * 1
   */
  storageId?: number;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      storageId: 'StorageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      storageId: 'number',
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
   * @example
   * 1
   */
  allocateUnit?: string;
  /**
   * @example
   * g01
   */
  groupName?: string;
  /**
   * @example
   * 1
   */
  maxWorkerQuantity?: number;
  /**
   * @example
   * 1
   */
  minWorkerQuantity?: number;
  /**
   * @example
   * 100G
   */
  workerDiskCapacity?: string;
  /**
   * @example
   * large
   */
  workerSpecName?: string;
  /**
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
   * **if can be null:**
   * true
   */
  appConfig?: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigAppConfig;
  category?: string;
  /**
   * **if can be null:**
   * false
   */
  enableUserEni?: boolean;
  headAllocateUnit?: string;
  headDiskCapacity?: string;
  headSpec?: string;
  headSpecType?: string;
  /**
   * @example
   * http://ray-cluster-address.example.com
   */
  rayClusterAddress?: string;
  /**
   * @example
   * http://ray-dashboard-address.example.com
   */
  rayDashboardAddress?: string;
  /**
   * @example
   * http://ray-grafana-address.example.com
   */
  rayGrafanaAddress?: string;
  storageMounts?: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigStorageMounts[];
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
      storageMounts: 'StorageMounts',
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
      storageMounts: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigStorageMounts },
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
   * The execution duration of the query. Unit: milliseconds.
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
  autoStopInterval?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterMode?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * The time when the resource group was created. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-29T03:34:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The minimum amount of elastic computing resources.
   * 
   * @example
   * 16ACU
   */
  elasticMinComputeResource?: string;
  /**
   * @remarks
   * Indicates whether the preemptible instance feature is enabled for the resource group. After the preemptible instance feature is enabled, you are charged for resources at a lower unit price but the resources are probably released. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * The True value is returned only for job resource groups.
   * 
   * @example
   * True
   */
  enableSpot?: string;
  engine?: string;
  engineParams?: { [key: string]: any };
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
   * The type of the resource group. Valid values:
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * >  For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * @example
   * Job
   */
  groupType?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) user that is associated with the resource group.
   * 
   * @example
   * testb,testc
   */
  groupUsers?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum amount of reserved computing resources.
   * 
   * @example
   * 512ACU
   */
  maxComputeResource?: string;
  maxGpuQuantity?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  message?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum amount of reserved computing resources.
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
  minGpuQuantity?: number;
  rayConfig?: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfig;
  /**
   * @remarks
   * The job resubmission rules.
   */
  rules?: DescribeDBResourceGroupResponseBodyGroupsInfoRules[];
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  runningClusterCount?: number;
  specName?: string;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   **creating**: The resource group is being created.
   * *   **ok**: The resource group is created.
   * *   **pendingdelete**: The resource group is pending to be deleted.
   * 
   * @example
   * ok
   */
  status?: string;
  targetResourceGroupName?: string;
  /**
   * @remarks
   * The time when the resource group was updated. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-31T03:34:30Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoStopInterval: 'AutoStopInterval',
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
      specName: 'SpecName',
      status: 'Status',
      targetResourceGroupName: 'TargetResourceGroupName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStopInterval: 'string',
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
      specName: 'string',
      status: 'string',
      targetResourceGroupName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
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
   * The queried resource groups.
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

