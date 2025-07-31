// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityScanRequestComputeResourceRuntime extends $dara.Model {
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

export class UpdateDataQualityScanRequestComputeResource extends $dara.Model {
  /**
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @example
   * auto_createAlertRule_Finished_1kUTk6
   */
  name?: string;
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

export class UpdateDataQualityScanRequestParameters extends $dara.Model {
  /**
   * @example
   * temp_237669.zip_byBwm_1734661241752
   */
  name?: string;
  /**
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
   * @example
   * 0.25
   */
  cu?: number;
  /**
   * @example
   * 20315
   */
  id?: string;
  /**
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

export class UpdateDataQualityScanRequest extends $dara.Model {
  computeResource?: UpdateDataQualityScanRequestComputeResource;
  description?: string;
  hooks?: UpdateDataQualityScanRequestHooks[];
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * data_quality_scan_001
   */
  name?: string;
  /**
   * @example
   * 231263586109857423
   */
  owner?: string;
  parameters?: UpdateDataQualityScanRequestParameters[];
  /**
   * @example
   * 101
   */
  projectId?: number;
  runtimeResource?: UpdateDataQualityScanRequestRuntimeResource;
  spec?: string;
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

