// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityScanRunResponseBodyDataQualityScanRunParameters extends $dara.Model {
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

export class GetDataQualityScanRunResponseBodyDataQualityScanRunResultsDetails extends $dara.Model {
  /**
   * @example
   * 100.0
   */
  checkValue?: string;
  /**
   * @example
   * 0.0
   */
  referenceValue?: string;
  /**
   * @example
   * Fail
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkValue: 'CheckValue',
      referenceValue: 'ReferenceValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkValue: 'string',
      referenceValue: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityScanRunResponseBodyDataQualityScanRunResults extends $dara.Model {
  /**
   * @example
   * 1725506795000
   */
  createTime?: number;
  details?: GetDataQualityScanRunResponseBodyDataQualityScanRunResultsDetails[];
  rule?: string;
  /**
   * @example
   * {
   *   "value": "100.0"
   * }
   */
  sample?: string;
  /**
   * @example
   * Fail
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      details: 'Details',
      rule: 'Rule',
      sample: 'Sample',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      details: { 'type': 'array', 'itemType': GetDataQualityScanRunResponseBodyDataQualityScanRunResultsDetails },
      rule: 'string',
      sample: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityScanRunResponseBodyDataQualityScanRunScanComputeResourceRuntime extends $dara.Model {
  /**
   * @example
   * Hive
   */
  engine?: string;
  /**
   * @example
   * mapreduce.job.queuename=dq_queue
   */
  hiveConf?: { [key: string]: any };
  /**
   * @example
   * spark.yarn.queue=dq_queue
   */
  sparkConf?: { [key: string]: any };
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
      hiveConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sparkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.hiveConf) {
      $dara.Model.validateMap(this.hiveConf);
    }
    if(this.sparkConf) {
      $dara.Model.validateMap(this.sparkConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityScanRunResponseBodyDataQualityScanRunScanComputeResource extends $dara.Model {
  /**
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @example
   * emr_cluster_001
   */
  name?: string;
  runtime?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanComputeResourceRuntime;
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
      runtime: GetDataQualityScanRunResponseBodyDataQualityScanRunScanComputeResourceRuntime,
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

export class GetDataQualityScanRunResponseBodyDataQualityScanRunScanHooks extends $dara.Model {
  /**
   * @example
   * results.any { r -> r.status == \\"fail\\" && r.rule.severity == \\"High\\" }
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

export class GetDataQualityScanRunResponseBodyDataQualityScanRunScanParameters extends $dara.Model {
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

export class GetDataQualityScanRunResponseBodyDataQualityScanRunScanRuntimeResource extends $dara.Model {
  /**
   * @example
   * 1
   */
  cu?: number;
  /**
   * @example
   * 60597
   */
  id?: string;
  /**
   * @example
   * i-xxxx
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

export class GetDataQualityScanRunResponseBodyDataQualityScanRunScanTrigger extends $dara.Model {
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

export class GetDataQualityScanRunResponseBodyDataQualityScanRunScan extends $dara.Model {
  computeResource?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanComputeResource;
  /**
   * @example
   * 1706247622000
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
  hooks?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanHooks[];
  /**
   * @example
   * 21077
   */
  id?: number;
  /**
   * @example
   * 1706247622000
   */
  modifyTime?: number;
  /**
   * @example
   * 7892346529452
   */
  modifyUser?: string;
  name?: string;
  /**
   * @example
   * 7892346529452
   */
  owner?: string;
  parameters?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanParameters[];
  /**
   * @example
   * 164024
   */
  projectId?: number;
  runtimeResource?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanRuntimeResource;
  spec?: string;
  trigger?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanTrigger;
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
      spec: 'Spec',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: GetDataQualityScanRunResponseBodyDataQualityScanRunScanComputeResource,
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      hooks: { 'type': 'array', 'itemType': GetDataQualityScanRunResponseBodyDataQualityScanRunScanHooks },
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      owner: 'string',
      parameters: { 'type': 'array', 'itemType': GetDataQualityScanRunResponseBodyDataQualityScanRunScanParameters },
      projectId: 'number',
      runtimeResource: GetDataQualityScanRunResponseBodyDataQualityScanRunScanRuntimeResource,
      spec: 'string',
      trigger: GetDataQualityScanRunResponseBodyDataQualityScanRunScanTrigger,
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

export class GetDataQualityScanRunResponseBodyDataQualityScanRun extends $dara.Model {
  /**
   * @example
   * 1706247622000
   */
  createTime?: number;
  /**
   * @example
   * 1706247622000
   */
  finishTime?: number;
  /**
   * @example
   * 1016440997
   */
  id?: number;
  parameters?: GetDataQualityScanRunResponseBodyDataQualityScanRunParameters[];
  results?: GetDataQualityScanRunResponseBodyDataQualityScanRunResults[];
  scan?: GetDataQualityScanRunResponseBodyDataQualityScanRunScan;
  /**
   * @example
   * Fail
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      id: 'Id',
      parameters: 'Parameters',
      results: 'Results',
      scan: 'Scan',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      finishTime: 'number',
      id: 'number',
      parameters: { 'type': 'array', 'itemType': GetDataQualityScanRunResponseBodyDataQualityScanRunParameters },
      results: { 'type': 'array', 'itemType': GetDataQualityScanRunResponseBodyDataQualityScanRunResults },
      scan: GetDataQualityScanRunResponseBodyDataQualityScanRunScan,
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    if(this.scan && typeof (this.scan as any).validate === 'function') {
      (this.scan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityScanRunResponseBody extends $dara.Model {
  dataQualityScanRun?: GetDataQualityScanRunResponseBodyDataQualityScanRun;
  /**
   * @example
   * 0bc14115****159376359
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityScanRun: 'DataQualityScanRun',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityScanRun: GetDataQualityScanRunResponseBodyDataQualityScanRun,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataQualityScanRun && typeof (this.dataQualityScanRun as any).validate === 'function') {
      (this.dataQualityScanRun as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

