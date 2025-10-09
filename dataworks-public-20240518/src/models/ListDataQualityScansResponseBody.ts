// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityScansResponseBodyPageInfoDataQualityScansComputeResourceRuntime extends $dara.Model {
  /**
   * @remarks
   * The engine type. These settings are only supported for the EMR compute engine. Valid values:
   * 
   * *   Hive: Hive SQL
   * *   Spark: Spark SQL
   * *   Kyuubi
   * 
   * @example
   * Hive
   */
  engine?: string;
  /**
   * @remarks
   * Additional parameters for the Hive engine. Currently, only mapreduce.job.queuename is supported to set the queue.
   * 
   * @example
   * mapreduce.job.queuename=dq_queue
   */
  hiveConf?: string;
  /**
   * @remarks
   * Additional parameters for the Spark engine. Currently, only spark.yarn.queue is supported to set the queue.
   * 
   * @example
   * spark.yarn.queue=dq_queue
   */
  sparkConf?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      hiveConf: 'HiveConf',
      sparkConf: 'SparkConf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      hiveConf: 'string',
      sparkConf: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityScansResponseBodyPageInfoDataQualityScansComputeResource extends $dara.Model {
  /**
   * @remarks
   * Workspace environment of the compute engine. Valid values:
   * 
   * *   Prod
   * *   Dev
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The name of the computing engine. Uniquely identifies the engine.
   * 
   * @example
   * emr_cluster_001
   */
  name?: string;
  /**
   * @remarks
   * Additional runtime settings for the data quality monitor.
   */
  runtime?: ListDataQualityScansResponseBodyPageInfoDataQualityScansComputeResourceRuntime;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      name: 'Name',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      name: 'string',
      runtime: ListDataQualityScansResponseBodyPageInfoDataQualityScansComputeResourceRuntime,
    };
  }

  validate() {
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityScansResponseBodyPageInfoDataQualityScansHooks extends $dara.Model {
  /**
   * @remarks
   * The hook trigger condition. When this condition is met, the hook is triggered. Valid expression format:
   * 
   * Specifies multiple combinations of rule severity levels and rule validation statuses, such as `results.any { r -> r.status == \\"Fail\\" && r.rule.severity == \\"Normal\\" || r.status == \\"Error\\" && r.rule.severity == \\"High\\" || r.status == \\"Warn\\" && r.rule.severity == \\"High\\" }`. This means the hook is triggered if any executed rule has Fail with Normal severity, Error with High severity, or Warn with High severity. The severity values must match those defined in the Spec. The status values must match those in DataQualityResult.
   * 
   * @example
   * results.any { r -> r.status == \\"Fail\\" && r.rule.severity == \\"Normal\\" || r.status == \\"Error\\" && r.rule.severity == \\"High\\" || r.status == \\"Warn\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @remarks
   * The type of the hook. Valid values:
   * 
   * *   BlockTaskInstance: Blocks the scheduling of the task instance.
   * 
   * @example
   * BlockTaskInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityScansResponseBodyPageInfoDataQualityScansParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * dt
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * $[yyyy-mm-dd-1]
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityScansResponseBodyPageInfoDataQualityScansRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * CU consumption for task running.
   * 
   * @example
   * 0.25
   */
  cu?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * Serverless_resource_group_xxxxx
   */
  id?: string;
  /**
   * @remarks
   * The ID of the image configured for task running.
   * 
   * @example
   * i-xxxxx
   */
  image?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      id: 'Id',
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      id: 'string',
      image: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityScansResponseBodyPageInfoDataQualityScansTrigger extends $dara.Model {
  /**
   * @remarks
   * If the trigger mode is BySchedule, the ID of the scheduling task that triggers the monitor must be configured.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger mode of the data quality monitor. Valid values:
   * 
   * *   ByManual: Manually triggered. Default setting.
   * *   BySchedule: Triggered by a scheduled task instance.
   * 
   * @example
   * BySchedule
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityScansResponseBodyPageInfoDataQualityScans extends $dara.Model {
  /**
   * @remarks
   * The compute engine used during execution. If it is not specified, the data source connection defined in the Spec will be used.
   */
  computeResource?: ListDataQualityScansResponseBodyPageInfoDataQualityScansComputeResource;
  /**
   * @remarks
   * The creation time of the data quality monitor.
   * 
   * @example
   * 1694512304000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the data quality monitor.
   * 
   * @example
   * 7892346529452
   */
  createUser?: string;
  /**
   * @remarks
   * The description of the data quality scan task. Maximum length: 65,535 characters.
   * 
   * @example
   * This is a hourly run data quality evaluation plan.
   */
  description?: string;
  /**
   * @remarks
   * The hook configuration after the data quality monitor stops.
   */
  hooks?: ListDataQualityScansResponseBodyPageInfoDataQualityScansHooks[];
  /**
   * @remarks
   * The ID of the data quality monitor.
   * 
   * @example
   * 26433
   */
  id?: number;
  /**
   * @remarks
   * Last update time of the data quality monitor.
   * 
   * @example
   * 17236236472
   */
  modifyTime?: number;
  /**
   * @remarks
   * The user ID of the last person who updated the data quality monitor.
   * 
   * @example
   * 23782382795249
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the data quality scan task. Can include digits, letters, Chinese characters, and both half-width and full-width punctuation marks. Maximum length: 255 characters.
   * 
   * @example
   * Hourly partition quality monitoring
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the owner responsible for the data quality monitor.
   * 
   * @example
   * 23782382795249
   */
  owner?: string;
  /**
   * @remarks
   * Execution parameter definitions for the data quality monitor.
   */
  parameters?: ListDataQualityScansResponseBodyPageInfoDataQualityScansParameters[];
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 59094
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group used during the execution of the data quality monitor.
   */
  runtimeResource?: ListDataQualityScansResponseBodyPageInfoDataQualityScansRuntimeResource;
  /**
   * @remarks
   * Trigger settings for the data quality monitor.
   */
  trigger?: ListDataQualityScansResponseBodyPageInfoDataQualityScansTrigger;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      hooks: 'Hooks',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      owner: 'Owner',
      parameters: 'Parameters',
      projectId: 'ProjectId',
      runtimeResource: 'RuntimeResource',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: ListDataQualityScansResponseBodyPageInfoDataQualityScansComputeResource,
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      hooks: { 'type': 'array', 'itemType': ListDataQualityScansResponseBodyPageInfoDataQualityScansHooks },
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      owner: 'string',
      parameters: { 'type': 'array', 'itemType': ListDataQualityScansResponseBodyPageInfoDataQualityScansParameters },
      projectId: 'number',
      runtimeResource: ListDataQualityScansResponseBodyPageInfoDataQualityScansRuntimeResource,
      trigger: ListDataQualityScansResponseBodyPageInfoDataQualityScansTrigger,
    };
  }

  validate() {
    if(this.computeResource && typeof (this.computeResource as any).validate === 'function') {
      (this.computeResource as any).validate();
    }
    if(Array.isArray(this.hooks)) {
      $dara.Model.validateArray(this.hooks);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityScansResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The list of data quality monitors.
   */
  dataQualityScans?: ListDataQualityScansResponseBodyPageInfoDataQualityScans[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityScans: 'DataQualityScans',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityScans: { 'type': 'array', 'itemType': ListDataQualityScansResponseBodyPageInfoDataQualityScans },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityScans)) {
      $dara.Model.validateArray(this.dataQualityScans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityScansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page information.
   */
  pageInfo?: ListDataQualityScansResponseBodyPageInfo;
  /**
   * @remarks
   * The API request ID, which is generated as a UUID.
   * 
   * @example
   * 0bc14115***159376359
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListDataQualityScansResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

