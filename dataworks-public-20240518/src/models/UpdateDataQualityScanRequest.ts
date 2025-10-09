// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityScanRequestComputeResourceRuntime extends $dara.Model {
  /**
   * @remarks
   * The engine type. These settings are only supported for the EMR compute engine.This setting? Valid values:
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

export class UpdateDataQualityScanRequestComputeResource extends $dara.Model {
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
   * The name of the compute engine, which is a unique identifier.
   * 
   * @example
   * auto_createAlertRule_Finished_1kUTk6
   */
  name?: string;
  /**
   * @remarks
   * Additional settings for the compute engine.
   */
  runtime?: UpdateDataQualityScanRequestComputeResourceRuntime;
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
      runtime: UpdateDataQualityScanRequestComputeResourceRuntime,
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

export class UpdateDataQualityScanRequestHooks extends $dara.Model {
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
   * *   BlockTaskInstance: Block the scheduling of the task instance.
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

export class UpdateDataQualityScanRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * temp_237669.zip_byBwm_1734661241752
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * smtp.qiye.aliyun.com
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

export class UpdateDataQualityScanRequestRuntimeResource extends $dara.Model {
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
   * The ID of the resource group.
   * 
   * @example
   * 20315
   */
  id?: string;
  /**
   * @remarks
   * The image ID of the task runtime configuration.
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

export class UpdateDataQualityScanRequestTrigger extends $dara.Model {
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

export class UpdateDataQualityScanRequest extends $dara.Model {
  /**
   * @remarks
   * The compute engine used during execution. If it\\"s not specified, the data source connection defined in the Spec will be used.
   */
  computeResource?: UpdateDataQualityScanRequestComputeResource;
  /**
   * @remarks
   * Description of the data quality monitor.
   * 
   * @example
   * Daily data quality scanning of ods tables.
   */
  description?: string;
  /**
   * @remarks
   * The hook configuration after the data quality monitor stops.
   */
  hooks?: UpdateDataQualityScanRequestHooks[];
  /**
   * @remarks
   * The ID of the data quality monitor.
   * 
   * @example
   * 10001
   */
  id?: number;
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
   * 231263586109857423
   */
  owner?: string;
  /**
   * @remarks
   * The definition of execution parameters for the data quality monitor.
   */
  parameters?: UpdateDataQualityScanRequestParameters[];
  /**
   * @remarks
   * The ID of the DataWorks workspace where the data quality monitor resides. You can obtain the workspace ID by calling the [ListProjects](https://help.aliyun.com/document_detail/2852607.html) operation.
   * 
   * @example
   * 101
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group used during the execution of the data quality monitor.
   */
  runtimeResource?: UpdateDataQualityScanRequestRuntimeResource;
  /**
   * @remarks
   * The Spec code of the data quality monitoring content. For more information, see [Data quality Spec configuration description](https://help.aliyun.com/document_detail/2963394.html).
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
   * Trigger settings for the data quality monitor.
   */
  trigger?: UpdateDataQualityScanRequestTrigger;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      description: 'Description',
      hooks: 'Hooks',
      id: 'Id',
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
      computeResource: UpdateDataQualityScanRequestComputeResource,
      description: 'string',
      hooks: { 'type': 'array', 'itemType': UpdateDataQualityScanRequestHooks },
      id: 'number',
      name: 'string',
      owner: 'string',
      parameters: { 'type': 'array', 'itemType': UpdateDataQualityScanRequestParameters },
      projectId: 'number',
      runtimeResource: UpdateDataQualityScanRequestRuntimeResource,
      spec: 'string',
      trigger: UpdateDataQualityScanRequestTrigger,
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

