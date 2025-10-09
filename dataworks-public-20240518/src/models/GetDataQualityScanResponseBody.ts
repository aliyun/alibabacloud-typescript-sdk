// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityScanResponseBodyDataQualityScanComputeResourceRuntime extends $dara.Model {
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

export class GetDataQualityScanResponseBodyDataQualityScanComputeResource extends $dara.Model {
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
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The name of the compute engine, which is a unique identifier.
   * 
   * @example
   * polardb_to_holo
   */
  name?: string;
  /**
   * @remarks
   * More settings for data quality monitor at runtime.
   */
  runtime?: GetDataQualityScanResponseBodyDataQualityScanComputeResourceRuntime;
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
      runtime: GetDataQualityScanResponseBodyDataQualityScanComputeResourceRuntime,
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

export class GetDataQualityScanResponseBodyDataQualityScanHooks extends $dara.Model {
  /**
   * @remarks
   * The Hook trigger condition. The hook will run if the condition is met. Currently, only one type of expression syntax is supported:
   * 
   * *   You can specify multiple combinations of rule severity levels and validation statuses using an expression such as `results.any { r -> r.status == \\"Fail\\" && r.rule.severity == \\"Normal\\" || r.status == \\"Error\\" && r.rule.severity == \\"High\\" || r.status == \\"Warn\\" && r.rule.severity == \\"High\\" }`. This expression means the condition is met if any executed rule has a result of Fail with severity Normal, Error with severity High, or Warn with severity High. In the condition expression, the values of severity and status are predefined enums. The values of severity must match those defined in the Spec, and the values of status must match those in DataQualityResult.
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
   * *   BlockTaskInstance: BlockTaskInstance: Blocks the scheduling of the task instance.
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

export class GetDataQualityScanResponseBodyDataQualityScanParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * e2e_autolabel
   */
  name?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * 10
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

export class GetDataQualityScanResponseBodyDataQualityScanRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * Reserved compute units (CU) for the resource group.
   * 
   * @example
   * 10
   */
  cu?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 122878
   */
  id?: string;
  /**
   * @remarks
   * The image ID used in the runtime configuration.
   * 
   * @example
   * hp-tlp-e2e-repo-registry-vpc.cn-heyuan-acdr-1.cr.aliyuncs.com/hp-service/worker:9b28b6d-202506091008
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

export class GetDataQualityScanResponseBodyDataQualityScanTrigger extends $dara.Model {
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

export class GetDataQualityScanResponseBodyDataQualityScan extends $dara.Model {
  /**
   * @remarks
   * The compute engine used at runtime. Optional. If not specified, the data source defined in the Spec is used.
   */
  computeResource?: GetDataQualityScanResponseBodyDataQualityScanComputeResource;
  /**
   * @remarks
   * The creation time of the data quality monitor.
   * 
   * @example
   * 1731550150000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who creates the data quality monitor.
   * 
   * @example
   * 2374924198591250
   */
  createUser?: string;
  /**
   * @remarks
   * The data quality monitor description.
   * 
   * @example
   * aily data quality scanning of ods tables.
   */
  description?: string;
  /**
   * @remarks
   * The Hook configurations after the data quality monitoring run ends.
   */
  hooks?: GetDataQualityScanResponseBodyDataQualityScanHooks[];
  /**
   * @remarks
   * The data quality monitoring ID.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * Last modified time of the data quality monitor.
   * 
   * @example
   * 1731550150000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the user who last modifies the data quality monitor.
   * 
   * @example
   * 23482597582479
   */
  modifyUser?: string;
  /**
   * @remarks
   * The data quality monitor name.
   * 
   * @example
   * data_quality_scan_001
   */
  name?: string;
  /**
   * @remarks
   * The ID of the user who owns the data quality monitor.
   * 
   * @example
   * 231263586109857423
   */
  owner?: string;
  /**
   * @remarks
   * The definition of execution parameters for the data quality monitor.
   */
  parameters?: GetDataQualityScanResponseBodyDataQualityScanParameters[];
  /**
   * @remarks
   * The workspace ID where the data quality monitor resides. You can obtain the workspace ID by calling the [ListProjects](https://help.aliyun.com/document_detail/2780068.html) operation.
   * 
   * @example
   * 101
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group used during the running of the data quality monitor.
   */
  runtimeResource?: GetDataQualityScanResponseBodyDataQualityScanRuntimeResource;
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
  trigger?: GetDataQualityScanResponseBodyDataQualityScanTrigger;
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
      computeResource: GetDataQualityScanResponseBodyDataQualityScanComputeResource,
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      hooks: { 'type': 'array', 'itemType': GetDataQualityScanResponseBodyDataQualityScanHooks },
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      owner: 'string',
      parameters: { 'type': 'array', 'itemType': GetDataQualityScanResponseBodyDataQualityScanParameters },
      projectId: 'number',
      runtimeResource: GetDataQualityScanResponseBodyDataQualityScanRuntimeResource,
      spec: 'string',
      trigger: GetDataQualityScanResponseBodyDataQualityScanTrigger,
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

export class GetDataQualityScanResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data quality monitoring details.
   */
  dataQualityScan?: GetDataQualityScanResponseBodyDataQualityScan;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 204EAF68-CCE3-5112-8DA0-E7A60F02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityScan: 'DataQualityScan',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityScan: GetDataQualityScanResponseBodyDataQualityScan,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataQualityScan && typeof (this.dataQualityScan as any).validate === 'function') {
      (this.dataQualityScan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

