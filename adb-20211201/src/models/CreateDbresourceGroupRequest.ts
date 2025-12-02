// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBResourceGroupRequestGpuElasticPlanRules extends $dara.Model {
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

export class CreateDBResourceGroupRequestGpuElasticPlan extends $dara.Model {
  enabled?: boolean;
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
   * @example
   * 1
   */
  allocateUnit?: string;
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * 2
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
   * xlarge
   */
  workerSpecName?: string;
  /**
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
   * @example
   * BASIC
   */
  category?: string;
  enableUserEni?: boolean;
  headAllocateUnit?: string;
  headDiskCapacity?: string;
  /**
   * @example
   * xlarge
   */
  headSpec?: string;
  headSpecType?: string;
  workerGroups?: CreateDBResourceGroupRequestRayConfigWorkerGroups[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      enableUserEni: 'EnableUserEni',
      headAllocateUnit: 'HeadAllocateUnit',
      headDiskCapacity: 'HeadDiskCapacity',
      headSpec: 'HeadSpec',
      headSpecType: 'HeadSpecType',
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
   * 
   * *   The name can be up to 255 characters in length.
   * *   The name must start with a letter or digit.
   * *   The name can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * test_group
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
   * The name of the resource group to which you want to resubmit the query job.
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
  /**
   * @example
   * 5m
   */
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
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the spot instance feature for the resource group. After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * True
   */
  enableSpot?: boolean;
  /**
   * @example
   * SparkWarehouse
   */
  engine?: string;
  /**
   * @example
   * {\\"spark.adb.version\\":\\"3.5\\"}
   */
  engineParams?: { [key: string]: any };
  gpuElasticPlan?: CreateDBResourceGroupRequestGpuElasticPlan;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * *   The name can be up to 255 characters in length.
   * *   The name must start with a letter or a digit.
   * *   The name can contain letters, digits, hyphens (_), and underscores (_).
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
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * >  For more information about resource groups, see [Resource group overview](https://help.aliyun.com/document_detail/428610.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Job
   */
  groupType?: string;
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
   * The maximum reserved computing resources.
   * 
   * *   If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16ACU.
   * *   If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8ACU.
   * 
   * @example
   * 48ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * A reserved parameter.
   */
  maxGpuQuantity?: number;
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
   * The minimum reserved computing resources.
   * 
   * *   When GroupType is set to Interactive, set this parameter to 16ACU.
   * *   When GroupType is set to Job, set this parameter to 0ACU.
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
  /**
   * @remarks
   * A reserved parameter.
   */
  minGpuQuantity?: number;
  rayConfig?: CreateDBResourceGroupRequestRayConfig;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612393.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The job resubmission rules.
   */
  rules?: CreateDBResourceGroupRequestRules[];
  /**
   * @remarks
   * A reserved parameter.
   */
  specName?: string;
  /**
   * @remarks
   * A reserved parameter.
   */
  targetResourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      autoStopInterval: 'AutoStopInterval',
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
      specName: 'SpecName',
      targetResourceGroupName: 'TargetResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStopInterval: 'string',
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
      specName: 'string',
      targetResourceGroupName: 'string',
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

