// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceExportTasksResponseBodyExportTasksExportToModule extends $dara.Model {
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

export class ListResourceExportTasksResponseBodyExportTasksIncludeRules extends $dara.Model {
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

export class ListResourceExportTasksResponseBodyExportTasksModules extends $dara.Model {
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

export class ListResourceExportTasksResponseBodyExportTasksVariables extends $dara.Model {
  properties?: string[];
  /**
   * @example
   * AliCloud::VPC::VPC
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

export class ListResourceExportTasksResponseBodyExportTasks extends $dara.Model {
  /**
   * @example
   * 2025-02-20T02:10:06Z
   */
  createTime?: string;
  /**
   * @example
   * demo
   */
  description?: string;
  /**
   * @example
   * 4243
   */
  elapsedTime?: number;
  /**
   * @example
   * Success
   */
  exportStatus?: string;
  /**
   * @example
   * ex-kw1a1ol8c0pngjav17q8eri
   */
  exportTaskId?: string;
  exportToModule?: ListResourceExportTasksResponseBodyExportTasksExportToModule;
  /**
   * @example
   * v2
   */
  exportVersion?: string;
  includeRules?: ListResourceExportTasksResponseBodyExportTasksIncludeRules[];
  modules?: ListResourceExportTasksResponseBodyExportTasksModules[];
  /**
   * @example
   * vpc_all
   */
  name?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  variables?: ListResourceExportTasksResponseBodyExportTasksVariables[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      elapsedTime: 'elapsedTime',
      exportStatus: 'exportStatus',
      exportTaskId: 'exportTaskId',
      exportToModule: 'exportToModule',
      exportVersion: 'exportVersion',
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
      exportStatus: 'string',
      exportTaskId: 'string',
      exportToModule: ListResourceExportTasksResponseBodyExportTasksExportToModule,
      exportVersion: 'string',
      includeRules: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasksIncludeRules },
      modules: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasksModules },
      name: 'string',
      status: 'string',
      variables: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasksVariables },
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

export class ListResourceExportTasksResponseBody extends $dara.Model {
  exportTasks?: ListResourceExportTasksResponseBodyExportTasks[];
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
   * 65287CB9-AC46-5FE7-B785-0106C159DA42
   */
  requestId?: string;
  /**
   * @example
   * 330
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
      exportTasks: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasks },
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

