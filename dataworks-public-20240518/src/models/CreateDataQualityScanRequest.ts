// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityScanRequestComputeResourceRuntime extends $dara.Model {
  /**
   * @remarks
   * The type of the compute engine. Only EMR compute engines support these settings.
   * 
   * Valid values:
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
   * Additional Hive engine parameters. Currently, only the mapreduce.job.queuename parameter is supported.
   * 
   * @example
   * mapreduce.job.queuename=dq_queue
   */
  hiveConf?: { [key: string]: any };
  /**
   * @remarks
   * Additional Spark engine parameters. Currently, only the spark.yarn.queue parameter is supported.
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

export class CreateDataQualityScanRequestComputeResource extends $dara.Model {
  /**
   * @remarks
   * The workspace environment to which the compute engine belongs.
   * 
   * Valid values:
   * 
   * *   Prod: production environment .
   * *   Dev: development environment.
   * 
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @remarks
   * The name of the compute engine, which is a unique identifier.
   * 
   * @example
   * emr_first
   */
  name?: string;
  /**
   * @remarks
   * More settings for data quality monitoring at runtime.
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
   * The Hook trigger condition. The hook will run if the condition is met. Currently, only one type of expression syntax is supported:
   * 
   * You can specify multiple combinations of rule severity levels and validation statuses using an expression such as `results.any { r -> r.status == \\"Fail\\" && r.rule.severity == \\"Normal\\" || r.status == \\"Error\\" && r.rule.severity == \\"High\\" || r.status == \\"Warn\\" && r.rule.severity == \\"High\\" }`. This expression means the condition is met if any executed rule has a result of Fail with severity Normal, Error with severity High, or Warn with severity High. In the condition expression, the values of severity and status are predefined enums. The values of severity must match those defined in the Spec, and the values of status must match those in DataQualityResult.
   * 
   * @example
   * results.any { r -> r.status == \\"Fail\\" && r.rule.severity == \\"Normal\\" || r.status == \\"Error\\" && r.rule.severity == \\"High\\" || r.status == \\"Warn\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @remarks
   * The type of the Hook.
   * 
   * Valid values:
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

export class CreateDataQualityScanRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * triggerTime
   */
  name?: string;
  /**
   * @remarks
   * The parameter values.
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
   * The default number of CUs configured for task running.
   * 
   * @example
   * 0.25
   */
  cu?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 0525242e-d0ee-4bda-bc73-765d82f6a34a
   */
  id?: string;
  /**
   * @remarks
   * The ID of the image configured for task running.
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
   * If the trigger mode is set to BySchedule, the scheduling task ID must be specified.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger mode of the monitoring task.
   * 
   * Valid values:
   * 
   * *   ByManual: Manual trigger. This is the default setting.
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
   * The compute engine used at runtime. If not specified, the data source defined in the Spec is used.
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
   * The Hook configurations after the data quality monitoring run ends.
   */
  hooks?: CreateDataQualityScanRequestHooks[];
  /**
   * @remarks
   * The data quality monitoring name.
   * 
   * @example
   * data_quality_scan_001
   */
  name?: string;
  /**
   * @remarks
   * The ID of the user who owns of the data quality monitor.
   * 
   * @example
   * 95279527****
   */
  owner?: string;
  /**
   * @remarks
   * The definition of execution parameters for the data quality monitoring.
   */
  parameters?: CreateDataQualityScanRequestParameters[];
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the workspace configuration page to obtain the workspace ID. This parameter is required to specify the target DataWorks workspace for this API operation.
   * 
   * @example
   * 101
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group used during execution of the data quality monitoring.
   */
  runtimeResource?: CreateDataQualityScanRequestRuntimeResource;
  /**
   * @remarks
   * Spec code for the content of the data quality monitoring.
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
   * The trigger configurations of the data quality monitoring task.
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

