// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityScanRequestComputeResourceRuntime extends $dara.Model {
  /**
   * @remarks
   * The type of the engine used. Only the E-MapReduce (EMR) compute engine supports this setting. Valid values:
   * - Hive: Hive SQL
   * - Spark: Spark SQL
   * - Kyuubi
   * 
   * @example
   * Hive
   */
  engine?: string;
  /**
   * @remarks
   * The additional parameter settings when the Hive engine is used. Currently, only the queue can be set by using mapreduce.job.queuename.
   * 
   * @example
   * {"mapreduce.job.queuename": "dq_queue"}
   */
  hiveConf?: { [key: string]: any };
  /**
   * @remarks
   * The additional parameter settings when the Spark engine is used. Currently, only the queue can be set by using spark.yarn.queue.
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

export class CreateDataQualityScanRequestComputeResource extends $dara.Model {
  /**
   * @remarks
   * The workspace environment to which the compute engine belongs. Valid values:
   * - Prod: production environment
   * - Dev: development environment
   * 
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @remarks
   * The name of the compute engine, which serves as a unique identifier.
   * 
   * @example
   * emr_first
   */
  name?: string;
  /**
   * @remarks
   * The additional settings for the data quality monitor at runtime.
   */
  runtime?: CreateDataQualityScanRequestComputeResourceRuntime;
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
      runtime: CreateDataQualityScanRequestComputeResourceRuntime,
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

export class CreateDataQualityScanRequestHooks extends $dara.Model {
  /**
   * @remarks
   * The condition that triggers the hook. When this condition is met, the hook is triggered. Currently, only one expression syntax is supported:
   * 
   * Specify multiple groups of rule severity levels and rule check statuses. For example, `results.any { r -> r.status == \\"Fail\\" && r.rule.severity == \\"Normal\\" || r.status == \\"Error\\" && r.rule.severity == \\"High\\" || r.status == \\"Warn\\" && r.rule.severity == \\"High\\" }` indicates that among the executed rules, if the check result of a rule with the severity of Normal is Fail, the check result of a rule with the severity of High is Error, or the check result of a rule with the severity of High is Warn, the condition is met. The enumerations of severity in the conditional expression are consistent with those in the spec, and the enumerations of status are consistent with those in DataQualityResult.
   * 
   * @example
   * results.any { r -> r.status == \\"Fail\\" && r.rule.severity == \\"Normal\\" || r.status == \\"Error\\" && r.rule.severity == \\"High\\" || r.status == \\"Warn\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @remarks
   * The type of the hook. Valid values:
   * - BlockTaskInstance: blocks task instance scheduling.
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

export class CreateDataQualityScanRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * triggerTime
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * $[yyyymmdd-1]
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

export class CreateDataQualityScanRequestRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The compute unit (CU) consumption of the runtime configuration.
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
   * 0525242e-d0ee-4bda-bc73-765d82f6a34a
   */
  id?: string;
  /**
   * @remarks
   * The image ID of the runtime configuration.
   * 
   * @example
   * i-xxxxxx
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

export class CreateDataQualityScanRequestTrigger extends $dara.Model {
  /**
   * @remarks
   * The IDs of the scheduled tasks that trigger the data quality monitor when the trigger method is set to BySchedule.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger method of the data quality monitor. Valid values:
   * - ByManual: manual trigger. This is the default value.
   * - BySchedule: scheduled task instance trigger.
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

export class CreateDataQualityScanRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token.
   * 
   * This parameter is required.
   * 
   * @example
   * a-customized-uuid
   */
  clientToken?: string;
  /**
   * @remarks
   * The compute engine used when the data quality monitor runs. This parameter is optional. If it is not specified, the data source connection specified in the Spec is used.
   */
  computeResource?: CreateDataQualityScanRequestComputeResource;
  /**
   * @remarks
   * The description of the data quality monitor.
   * 
   * @example
   * Daily data quality scanning of ods tables.
   */
  description?: string;
  /**
   * @remarks
   * The configuration for hooks that run after the data quality monitor finishes.
   */
  hooks?: CreateDataQualityScanRequestHooks[];
  /**
   * @remarks
   * The name of the data quality monitor.
   * 
   * @example
   * data_quality_scan_001
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the owner of the data quality monitor.
   * 
   * @example
   * 95279527****
   */
  owner?: string;
  /**
   * @remarks
   * The execution parameter definitions of the data quality monitor.
   */
  parameters?: CreateDataQualityScanRequestParameters[];
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and go to the Workspace Management page to obtain the workspace ID. This parameter specifies the DataWorks workspace for the API call.
   * 
   * @example
   * 101
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group used when the data quality monitor runs.
   */
  runtimeResource?: CreateDataQualityScanRequestRuntimeResource;
  /**
   * @remarks
   * The Spec code that defines the data quality monitor. For more information, see [Data quality spec configuration guide](https://help.aliyun.com/document_detail/2963394.html).
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
   * The trigger settings of the data quality monitor.
   */
  trigger?: CreateDataQualityScanRequestTrigger;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      computeResource: 'ComputeResource',
      description: 'Description',
      hooks: 'Hooks',
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
      clientToken: 'string',
      computeResource: CreateDataQualityScanRequestComputeResource,
      description: 'string',
      hooks: { 'type': 'array', 'itemType': CreateDataQualityScanRequestHooks },
      name: 'string',
      owner: 'string',
      parameters: { 'type': 'array', 'itemType': CreateDataQualityScanRequestParameters },
      projectId: 'number',
      runtimeResource: CreateDataQualityScanRequestRuntimeResource,
      spec: 'string',
      trigger: CreateDataQualityScanRequestTrigger,
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

