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
   * The final value used to compare with the threshold.
   * 
   * @example
   * 100.0
   */
  checkValue?: string;
  /**
   * @remarks
   * The baseline value from the referenced sample used to calculate CheckedValue.
   * 
   * @example
   * 0.0
   */
  referenceValue?: string;
  /**
   * @remarks
   * The status of the final comparison result. Valid values:
   * - Pass
   * - Error
   * - Warn
   * - Fail
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
   * The time when the check result was generated.
   * 
   * The value is a 13-digit number, such as `1725506795000`.
   * 
   * @example
   * 1725506795000
   */
  createTime?: number;
  /**
   * @remarks
   * The details of the current check.
   */
  details?: GetDataQualityScanRunResponseBodyDataQualityScanRunResultsDetails[];
  /**
   * @remarks
   * The snapshot of the rule spec at the start of the check.
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
   * The sample value used for the current check.
   * 
   * @example
   * {
   *   "value": "100.0"
   * }
   */
  sample?: string;
  /**
   * @remarks
   * The status of the check result. Valid values:
   * - Pass
   * - Running
   * - Error
   * - Warn
   * - Fail
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
   * The type of the engine used. Only the E-MapReduce (EMR) compute engine supports this setting. Valid values:
   * - Hive
   * - Spark
   * - Kyuubi
   * 
   * @example
   * Hive
   */
  engine?: string;
  /**
   * @remarks
   * The additional parameter settings when the Hive engine is used. Currently, only the queue can be configured by using mapreduce.job.queuename.
   * 
   * @example
   * {"mapreduce.job.queuename": "dq_queue"}
   */
  hiveConf?: { [key: string]: any };
  /**
   * @remarks
   * The additional parameter settings when the Spark engine is used. Currently, only the queue can be configured by using spark.yarn.queue.
   * 
   * @example
   * {"spark.yarn.queue": "dq_queue"}
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
   * The workspace environment to which the compute engine belongs. Valid values:
   * - Prod
   * - Dev
   * 
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @remarks
   * The name of the compute resource. This corresponds to the Name property in the ComputeResource data structure of the compute resource API.
   * 
   * @example
   * emr_cluster_001
   */
  name?: string;
  /**
   * @remarks
   * The additional runtime settings for the data quality monitoring task.
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
   * The condition that triggers the hook. Currently, only one expression syntax is supported:
   * 
   * * Specify multiple groups of rule severity types and rule check statuses. For example, `results.any { r -> r.status == \\"Fail\\" && r.rule.severity == \\"Normal\\" || r.status == \\"Error\\" && r.rule.severity == \\"High\\" || r.status == \\"Warn\\" && r.rule.severity == \\"High\\" }` indicates that the condition is met if the check result of a rule with the severity of Normal is Fail, the check result of a rule with the severity of High is Error, or the check result of a rule with the severity of High is Warn among the executed rules. The enum values of severity in the conditional expression are the same as those in the spec, and the enum values of status are the same as those in DataQualityResult.
   * 
   * @example
   * results.any { r -> r.status == \\"fail\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @remarks
   * The hook type. Valid values:
   * - BlockTaskInstance
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
   * The reserved compute units (CUs) of the resource group.
   * 
   * @example
   * 1
   */
  cu?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 60597
   */
  id?: string;
  /**
   * @remarks
   * The ID of the image used for the run configuration.
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
   * The IDs of the scheduling tasks that trigger the data quality monitoring task when the trigger method is set to BySchedule.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger method of the data quality monitoring task. Valid values:
   * - ByManual
   * - BySchedule
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
   * The compute resource settings of the data quality monitoring task.
   */
  computeResource?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanComputeResource;
  /**
   * @remarks
   * The time when the data quality monitoring task was created.
   * 
   * The value is a 13-digit number, such as `1706247622000`.
   * 
   * @example
   * 1706247622000
   */
  createTime?: number;
  /**
   * @remarks
   * The user who created the data quality monitoring task.
   * 
   * @example
   * 7892346529452
   */
  createUser?: string;
  /**
   * @remarks
   * The description of the data quality check task. The description can be up to 65,535 characters in length.
   * 
   * @example
   * This is a hourly run data quality evaluation plan.
   */
  description?: string;
  /**
   * @remarks
   * The configuration for hooks that run after the data quality monitor finishes.
   */
  hooks?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanHooks[];
  /**
   * @remarks
   * The ID of the data quality monitor.
   * 
   * @example
   * 21077
   */
  id?: number;
  /**
   * @remarks
   * The time when the data quality monitoring task was updated.
   * 
   * The value is a 13-digit number, such as `1706247622000`.
   * 
   * @example
   * 1706247622000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The user who last updated the data quality monitoring task.
   * 
   * @example
   * 7892346529452
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the data quality check task. The name can contain digits, letters, Chinese characters, and half-width or full-width punctuation marks, and can be up to 255 characters in length.
   * 
   * @example
   * Hourly partition quality monitoring
   */
  name?: string;
  /**
   * @remarks
   * The owner of the data quality monitoring task.
   * 
   * @example
   * 7892346529452
   */
  owner?: string;
  /**
   * @remarks
   * The parameter settings of the data quality monitoring task.
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
   * The resource group used when the data quality monitoring task runs.
   */
  runtimeResource?: GetDataQualityScanRunResponseBodyDataQualityScanRunScanRuntimeResource;
  /**
   * @remarks
   * The spec of the data quality monitoring task. For more information, see [Data quality spec configuration guide](https://help.aliyun.com/document_detail/2963394.html).
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
   * The trigger configuration of the data quality monitoring task.
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
   * The time when the data quality monitoring run started.
   * 
   * The value is a 13-digit number, such as `1706247622000`.
   * 
   * @example
   * 1706247622000
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the data quality monitoring run ended.
   * 
   * The value is a 13-digit number, such as `1706247622000`.
   * 
   * @example
   * 1706247622000
   */
  finishTime?: number;
  /**
   * @remarks
   * The ID of the run record.
   * 
   * @example
   * 1016440997
   */
  id?: number;
  /**
   * @remarks
   * The parameter settings used during the actual run.
   */
  parameters?: GetDataQualityScanRunResponseBodyDataQualityScanRunParameters[];
  /**
   * @remarks
   * The check results for individual rules.
   */
  results?: GetDataQualityScanRunResponseBodyDataQualityScanRunResults[];
  /**
   * @remarks
   * The snapshot of the data quality monitoring configuration at the start of the check.
   */
  scan?: GetDataQualityScanRunResponseBodyDataQualityScanRunScan;
  /**
   * @remarks
   * The current run status. Valid values:
   * - Pass
   * - Running
   * - Error
   * - Warn
   * - Fail
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
   * The run record of the data quality monitor.
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

