// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceExportTaskResponseBodyTaskExportToModule extends $dara.Model {
  /**
   * @example
   * OSS
   */
  source?: string;
  /**
   * @example
   * alibaba/security-group/alicloud
   */
  sourcePath?: string;
  /**
   * @example
   * /
   */
  statePath?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskIncludeRules extends $dara.Model {
  /**
   * @example
   * ZoneId
   */
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskModules extends $dara.Model {
  /**
   * @example
   * OSS
   */
  source?: string;
  /**
   * @example
   * oss::https://.oss-cn-hangzhou.aliyuncs.com/xxx.zip
   */
  sourcePath?: string;
  /**
   * @example
   * v3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskVariables extends $dara.Model {
  properties?: string[];
  /**
   * @example
   * ALIYUN::Bastionhost::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTask extends $dara.Model {
  /**
   * @example
   * 2022-06-15T02:44:37Z
   */
  createTime?: string;
  /**
   * @example
   * demo
   */
  description?: string;
  /**
   * @example
   * 4533
   */
  elapsedTime?: number;
  /**
   * @example
   * ex-al1111jlfh53i6mo4o94jj
   */
  exportTaskId?: string;
  exportToModule?: GetResourceExportTaskResponseBodyTaskExportToModule;
  /**
   * @example
   * v2
   */
  exportVersion?: string;
  /**
   * @example
   * Reason
   */
  failedReason?: string;
  includeRules?: GetResourceExportTaskResponseBodyTaskIncludeRules[];
  modules?: GetResourceExportTaskResponseBodyTaskModules[];
  /**
   * @example
   * vpc_all
   */
  name?: string;
  /**
   * @example
   * role
   */
  ramRole?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * /
   */
  taskOutputPath?: string;
  /**
   * @example
   * {}
   */
  terraformContext?: { [key: string]: any };
  /**
   * @example
   * 1.246.0
   */
  terraformProviderVersion?: string;
  /**
   * @example
   * 1.2.6
   */
  terraformVersion?: string;
  /**
   * @example
   * Manual
   */
  triggerStrategy?: string;
  variables?: GetResourceExportTaskResponseBodyTaskVariables[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      elapsedTime: 'elapsedTime',
      exportTaskId: 'exportTaskId',
      exportToModule: 'exportToModule',
      exportVersion: 'exportVersion',
      failedReason: 'failedReason',
      includeRules: 'includeRules',
      modules: 'modules',
      name: 'name',
      ramRole: 'ramRole',
      status: 'status',
      taskOutputPath: 'taskOutputPath',
      terraformContext: 'terraformContext',
      terraformProviderVersion: 'terraformProviderVersion',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      elapsedTime: 'number',
      exportTaskId: 'string',
      exportToModule: GetResourceExportTaskResponseBodyTaskExportToModule,
      exportVersion: 'string',
      failedReason: 'string',
      includeRules: { 'type': 'array', 'itemType': GetResourceExportTaskResponseBodyTaskIncludeRules },
      modules: { 'type': 'array', 'itemType': GetResourceExportTaskResponseBodyTaskModules },
      name: 'string',
      ramRole: 'string',
      status: 'string',
      taskOutputPath: 'string',
      terraformContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      terraformProviderVersion: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
      variables: { 'type': 'array', 'itemType': GetResourceExportTaskResponseBodyTaskVariables },
    };
  }

  validate() {
    if(this.exportToModule && typeof (this.exportToModule as any).validate === 'function') {
      (this.exportToModule as any).validate();
    }
    if(Array.isArray(this.includeRules)) {
      $dara.Model.validateArray(this.includeRules);
    }
    if(Array.isArray(this.modules)) {
      $dara.Model.validateArray(this.modules);
    }
    if(this.terraformContext) {
      $dara.Model.validateMap(this.terraformContext);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * FC49AA8C-0A19-5556-8929-E7447F18D529
   */
  requestId?: string;
  task?: GetResourceExportTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetResourceExportTaskResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

