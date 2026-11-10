// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceExportTasksResponseBodyExportTasksExportToModule extends $dara.Model {
  /**
   * @remarks
   * The module type where the exported template is saved. Valid values:
   * - OSS: OSS
   * - Registry: Terraform Registry
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The path where the template content is saved.
   * - When Source is Registry, the format is: "cloudregistry::iacservice//".
   * - When Source is OSS, the format is: "oss::https://.oss-cn-hangzhou.aliyuncs.com/xxx.zip".
   * 
   * @example
   * oss::https://.oss-cn-hangzhou.aliyuncs.com/xxx.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The path where the state file of the template is saved.
   * 
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
   * @remarks
   * The name of the inclusion rule for resource export. Valid values:
   * - ResourceType: required. The resource type. Example: ALIYUN::VPC::VPC.
   * - RegionId: required. The region to which the resource belongs. Only one region is supported. Example: cn-chengdu.
   * - \\<ResourceType>:Id: the resource ID. Example: ALIYUN::VPC::VPC:Id.
   * - ResourceGroupId: the resource group ID. Example: rg-1234.
   * - ZoneId: the zone to which the resource belongs. Only one zone is supported. Example: cn-hangzhou-h.
   * 
   * By default, multiple filter conditions use the AND logical operator. A resource matches the filter conditions only when it meets all the conditions.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The values of the inclusion rules for resource export.
   */
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
   * @remarks
   * The module type where the exported template is stored. Two formats are supported: CloudRegistry and OSS. If the ExportToModule parameter is specified, both formats are returned. Otherwise, only CloudRegistry is returned.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The download URL of the module where the exported template is stored.
   * - When Source is CloudRegistry, the format is: "cloudregistry::iacservice/<exportTaskId>/<Provider Name>".
   * - When Source is OSS, the format is: "oss::https://<BucketName>.oss-cn-hangzhou.aliyuncs.com/xxx.zip".
   * 
   * @example
   * oss::https://.oss-cn-hangzhou.aliyuncs.com/xxx.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The version of the module where the exported template is stored.
   * 
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
  /**
   * @remarks
   * The list of properties for the Terraform resource that corresponds to the resource type.
   */
  properties?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::VPC::VSwitch
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
   * @remarks
   * The creation time. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2025-02-20T02:10:06Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the export task.
   * 
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * The execution duration.
   * 
   * @example
   * 4243
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The export status. Valid values:
   * - Queue: queued
   * - Pending: pending
   * - Success: succeeded
   * - Errored: failed
   * - Canceled: canceled
   * 
   * @example
   * Success
   */
  exportStatus?: string;
  /**
   * @remarks
   * The ID of the resource export task.
   * 
   * @example
   * ex-kw1a1ol8c0pngjav17q8eri
   */
  exportTaskId?: string;
  /**
   * @remarks
   * Saves the exported template as a module. If this parameter is not specified, the template is automatically saved in the registry.
   */
  exportToModule?: ListResourceExportTasksResponseBodyExportTasksExportToModule;
  /**
   * @remarks
   * The export version.
   * 
   * @example
   * v2
   */
  exportVersion?: string;
  /**
   * @remarks
   * The values of the inclusion rules for resource export.
   */
  includeRules?: ListResourceExportTasksResponseBodyExportTasksIncludeRules[];
  /**
   * @remarks
   * The module configurations for the exported resources.
   */
  modules?: ListResourceExportTasksResponseBodyExportTasksModules[];
  /**
   * @remarks
   * The name of the export task.
   * 
   * @example
   * TaskName
   */
  name?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - Available: available
   * - Running: running
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of variables. The parameters of the exported resources are set as variables.
   */
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
  /**
   * @remarks
   * The list of export tasks.
   */
  exportTasks?: ListResourceExportTasksResponseBodyExportTasks[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results to return per page. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65287CB9-AC46-5FE7-B785-0106C159DA42
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

