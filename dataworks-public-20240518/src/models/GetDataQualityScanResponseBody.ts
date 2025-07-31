// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityScanResponseBodyDataQualityScanComputeResourceRuntime extends $dara.Model {
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

export class GetDataQualityScanResponseBodyDataQualityScanComputeResource extends $dara.Model {
  /**
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @example
   * polardb_to_holo
   */
  name?: string;
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

export class GetDataQualityScanResponseBodyDataQualityScanParameters extends $dara.Model {
  /**
   * @example
   * e2e_autolabel
   */
  name?: string;
  /**
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
   * @example
   * 10
   */
  cu?: number;
  /**
   * @example
   * 122878
   */
  id?: string;
  /**
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

export class GetDataQualityScanResponseBodyDataQualityScan extends $dara.Model {
  computeResource?: GetDataQualityScanResponseBodyDataQualityScanComputeResource;
  /**
   * @example
   * 1731550150000
   */
  createTime?: number;
  /**
   * @example
   * 2374924198591250
   */
  createUser?: string;
  description?: string;
  hooks?: GetDataQualityScanResponseBodyDataQualityScanHooks[];
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * 1731550150000
   */
  modifyTime?: number;
  /**
   * @example
   * 23482597582479
   */
  modifyUser?: string;
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
  parameters?: GetDataQualityScanResponseBodyDataQualityScanParameters[];
  /**
   * @example
   * 101
   */
  projectId?: number;
  runtimeResource?: GetDataQualityScanResponseBodyDataQualityScanRuntimeResource;
  spec?: string;
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

