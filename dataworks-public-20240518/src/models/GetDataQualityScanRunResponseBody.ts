// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityScanRunResponseBodyDataQualityScanRunParameters extends $dara.Model {
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

export class GetDataQualityScanRunResponseBodyDataQualityScanRunResultsDetails extends $dara.Model {
  /**
   * @remarks
   * The final value used for comparison with the threshold.
   * 
   * @example
   * 100.0
   */
  checkValue?: string;
  /**
   * @remarks
   * The reference sample used as the baseline for calculating the CheckedValue.
   * 
   * @example
   * 0.0
   */
  referenceValue?: string;
  /**
   * @remarks
   * The final comparison result status.
   * 
   * *   Pass
   * *   Error
   * *   Warn
   * *   Fail
   * 
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
   * @remarks
   * The time when the validation result is generated.
   * 
   * @example
   * 1725506795000
   */
  createTime?: number;
  /**
   * @remarks
   * The information about the data quality check.
   */
  details?: GetDataQualityScanRunResponseBodyDataQualityScanRunResultsDetails[];
  /**
   * @remarks
   * The snapshot of the rule Spec at the start of the validation.
   * 
   * @example
   * {
   *     "templateId": "SYSTEM:field:null_value:fixed",
   *     "pass": "when = 0",
   *     "name": "The id cannot be empty.",
   *     "severity": "High",
   *     "identity": "a-customized-data-quality-rule-uuid"
   * }
   */
  rule?: string;
  /**
   * @remarks
   * The sample value used in the validation.
   * 
   * @example
   * {
   *   "value": "100.0"
   * }
   */
  sample?: string;
  /**
   * @remarks
   * The validation result status.
   * 
   * *   Pass
   * *   Running
   * *   Error
   * *   Warn
   * *   Fail
   * 
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
   * @remarks
   * The type of the compute engine. Only EMR compute engines support these settings.
   * 
   * *   Hive
   * *   Spark
   * *   Kyuubi
   * 
   * @example
   * Hive
   */
  engine?: string;
  /**
   * @remarks
   * Additional parameters for the Hive engine. Currently, only mapreduce.job.queuename is supported to specify the queue.
   * 
   * @example
   * mapreduce.job.queuename=dq_queue
   */
  hiveConf?: { [key: string]: any };
  /**
   * @remarks
   * Additional parameters for the Spark engine. Currently, only spark.yarn.queue is supported to specify the queue.
   * 
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
   * @remarks
   * The workspace environment to which the compute engine belongs.
   * 
   * *   Prod
   * *   Dev
   * 
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @remarks
   * The name of the computing resource, which corresponds to the Name attribute in the ComputeResource data structure of the computing resource API.
   * 
   * @example
   * emr_cluster_001
   */
  name?: string;
  /**
   * @remarks
   * The additional runtime settings of the data quality monitor.
   */
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
   * @remarks
   * The hook trigger condition. Currently, only one type of expression syntax is supported:
   * 
   * *   Specify combinations of severity levels and validation statuses for multiple rules, such as `results.any { r -> r.status == \\"Fail\\" && r.rule.severity == \\"Normal\\" || r.status == \\"Error\\" && r.rule.severity == \\"High\\" || r.status == \\"Warn\\" && r.rule.severity == \\"High\\" }`. This means the hook is triggered if any executed rule has Fail with Normal severity, Error with High severity, or Warn with High severity. In the conditional expression, the severity value matches that in the Spec code, and the status value matches that in DataQualityResult.
   * 
   * @example
   * results.any { r -> r.status == \\"fail\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @remarks
   * The type of the hook.
   * 
   * *   BlockTaskInstance
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

export class GetDataQualityScanRunResponseBodyDataQualityScanRunScanParameters extends $dara.Model {
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

export class GetDataQualityScanRunResponseBodyDataQualityScanRunScanRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * Reserved CUs for the resource group.
   * 
   * @example
   * 1
   */
  cu?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 60597
   */
  id?: string;
  /**
   * @remarks
   * The image ID of the run configuration.
   * 
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
  /**
   * @remarks
   * If the trigger mode is set to BySchedule, the scheduling task ID must be specified.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger method of the data quality monitor.
   * 
   * *   ByManual
   * *   BySchedule
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

export class GetDataQualityScanRunResponseBodyDataQualityScanRunScan extends $dara.Model {
  /**
   * @remarks
   * The computing resource settings of the data quality monitor.
   */
  computeResource?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanComputeResource;
  /**
   * @remarks
   * The creation time of the data quality monitor.
   * 
   * @example
   * 1706247622000
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
   * The description of the data quality validation task. Maximum length: 65,535 characters.
   * 
   * @example
   * This is a hourly run data quality evaluation plan.
   */
  description?: string;
  /**
   * @remarks
   * The hook configurations after the data quality monitor stops.
   */
  hooks?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanHooks[];
  /**
   * @remarks
   * The data quality monitor ID.
   * 
   * @example
   * 21077
   */
  id?: number;
  /**
   * @remarks
   * The last update time of the data quality monitor.
   * 
   * @example
   * 1706247622000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The last updater of the data quality monitor.
   * 
   * @example
   * 7892346529452
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the data quality validation task. It can contain digits, letters, Chinese characters, and both half-width and full-width punctuation marks, with a maximum length of 255 characters.
   * 
   * @example
   * Hourly partition quality monitoring
   */
  name?: string;
  /**
   * @remarks
   * The owner of the data quality monitor.
   * 
   * @example
   * 7892346529452
   */
  owner?: string;
  /**
   * @remarks
   * The parameter settings of the data quality monitor.
   */
  parameters?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanParameters[];
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 164024
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group used for running the data quality monitor.
   */
  runtimeResource?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanRuntimeResource;
  /**
   * @remarks
   * The data quality monitor Spec. For more information, see [Data quality Spec configuration description](https://help.aliyun.com/document_detail/2963394.html).
   * 
   * @example
   * {
   *     "datasets": [
   *         {
   *             "type": "Table",
   *             "dataSource": {
   *                 "name": "odps_first",
   *                 "envType": "Prod"
   *             },
   *             "tables": [
   *                 "ods_d_user_info"
   *             ],
   *             "filter": "pt = $[yyyymmdd-1]"
   *         }
   *     ],
   *     "rules": [
   *         {
   *             "assertion": "row_count > 0"
   *         }, {
   *             "templateId": "SYSTEM:field:null_value:fixed",
   *             "pass": "when = 0",
   *             "name": "The id cannot be empty.",
   *             "severity": "High",
   *              "identity": "a-customized-data-quality-rule-uuid"
   *         }
   *     ]
   * }
   */
  spec?: string;
  /**
   * @remarks
   * The trigger configurations of the data quality monitor.
   */
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
   * @remarks
   * The time when the data quality monitor starts running.
   * 
   * @example
   * 1706247622000
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the data quality monitor stops.
   * 
   * @example
   * 1706247622000
   */
  finishTime?: number;
  /**
   * @remarks
   * The running record ID.
   * 
   * @example
   * 1016440997
   */
  id?: number;
  /**
   * @remarks
   * The parameter settings used during the actual running.
   */
  parameters?: GetDataQualityScanRunResponseBodyDataQualityScanRunParameters[];
  /**
   * @remarks
   * The validation results of each rule.
   */
  results?: GetDataQualityScanRunResponseBodyDataQualityScanRunResults[];
  /**
   * @remarks
   * The snapshot of the data quality monitor configuration at the start of the validation.
   */
  scan?: GetDataQualityScanRunResponseBodyDataQualityScanRunScan;
  /**
   * @remarks
   * The current running status.
   * 
   * *   Pass
   * *   Running
   * *   Error
   * *   Warn
   * *   Fail
   * 
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
  /**
   * @remarks
   * Data quality monitoring running records.
   */
  dataQualityScanRun?: GetDataQualityScanRunResponseBodyDataQualityScanRun;
  /**
   * @remarks
   * The request ID.
   * 
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

