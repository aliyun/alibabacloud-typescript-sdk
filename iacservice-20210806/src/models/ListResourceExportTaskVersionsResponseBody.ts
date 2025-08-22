// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceExportTaskVersionsResponseBodyExportTasksExportToModule extends $dara.Model {
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

export class ListResourceExportTaskVersionsResponseBodyExportTasksIncludeRules extends $dara.Model {
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

export class ListResourceExportTaskVersionsResponseBodyExportTasksModules extends $dara.Model {
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
   * v1
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

export class ListResourceExportTaskVersionsResponseBodyExportTasksVariables extends $dara.Model {
  properties?: string[];
  /**
   * @example
   * Vswitch
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

export class ListResourceExportTaskVersionsResponseBodyExportTasks extends $dara.Model {
  /**
   * @example
   * 2025-05-11T02:18:50Z
   */
  createTime?: string;
  /**
   * @example
   * demo
   */
  description?: string;
  /**
   * @example
   * 4521
   */
  elapsedTime?: number;
  /**
   * @example
   * ex-al1711jl6hd8u5crggeq6v
   */
  exportTaskId?: string;
  exportToModule?: ListResourceExportTaskVersionsResponseBodyExportTasksExportToModule;
  /**
   * @example
   * v3
   */
  exportVersion?: string;
  /**
   * @example
   * Reason
   */
  failedReason?: string;
  includeRules?: ListResourceExportTaskVersionsResponseBodyExportTasksIncludeRules[];
  modules?: ListResourceExportTaskVersionsResponseBodyExportTasksModules[];
  /**
   * @example
   * vpc_all
   */
  name?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  variables?: ListResourceExportTaskVersionsResponseBodyExportTasksVariables[];
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
      status: 'status',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      elapsedTime: 'number',
      exportTaskId: 'string',
      exportToModule: ListResourceExportTaskVersionsResponseBodyExportTasksExportToModule,
      exportVersion: 'string',
      failedReason: 'string',
      includeRules: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasksIncludeRules },
      modules: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasksModules },
      name: 'string',
      status: 'string',
      variables: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasksVariables },
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
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBody extends $dara.Model {
  exportTasks?: ListResourceExportTaskVersionsResponseBodyExportTasks[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 860FDEEE-1CA3-55F3-97F6-63FC40B7962D
   */
  requestId?: string;
  /**
   * @example
   * 72
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      exportTasks: 'exportTasks',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTasks: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.exportTasks)) {
      $dara.Model.validateArray(this.exportTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

