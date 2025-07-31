// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityScansResponseBodyPageInfoDataQualityScansComputeResourceRuntime extends $dara.Model {
  /**
   * @example
   * Hive
   */
  engine?: string;
  /**
   * @example
   * mapreduce.job.queuename=dq_queue
   */
  hiveConf?: string;
  /**
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
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @example
   * emr_cluster_001
   */
  name?: string;
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
   * @example
   * results.any { r -> r.status == \\"Fail\\" && r.rule.severity == \\"Normal\\" || r.status == \\"Error\\" && r.rule.severity == \\"High\\" || r.status == \\"Warn\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
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
   * @example
   * dt
   */
  name?: string;
  /**
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
   * @example
   * 0.25
   */
  cu?: number;
  /**
   * @example
   * Serverless_resource_group_xxxxx
   */
  id?: string;
  /**
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
  taskIds?: number[];
  /**
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
  computeResource?: ListDataQualityScansResponseBodyPageInfoDataQualityScansComputeResource;
  /**
   * @example
   * 1694512304000
   */
  createTime?: number;
  /**
   * @example
   * 7892346529452
   */
  createUser?: string;
  /**
   * @example
   * This is a hourly run data quality evaluation plan.
   */
  description?: string;
  hooks?: ListDataQualityScansResponseBodyPageInfoDataQualityScansHooks[];
  /**
   * @example
   * 26433
   */
  id?: number;
  /**
   * @example
   * 17236236472
   */
  modifyTime?: number;
  /**
   * @example
   * 23782382795249
   */
  modifyUser?: string;
  name?: string;
  /**
   * @example
   * 23782382795249
   */
  owner?: string;
  parameters?: ListDataQualityScansResponseBodyPageInfoDataQualityScansParameters[];
  /**
   * @example
   * 59094
   */
  projectId?: number;
  runtimeResource?: ListDataQualityScansResponseBodyPageInfoDataQualityScansRuntimeResource;
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
  dataQualityScans?: ListDataQualityScansResponseBodyPageInfoDataQualityScans[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
  pageInfo?: ListDataQualityScansResponseBodyPageInfo;
  /**
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

