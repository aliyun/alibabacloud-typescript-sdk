// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceExportTaskVersionsResponseBodyExportTasksExportToModule extends $dara.Model {
  /**
   * @remarks
   * The module type to which the exported template is saved. Valid values:
   * 
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
   * 
   * - If Source is set to Registry, the format is: "cloudregistry::iacservice//"
   * 
   * - If Source is set to OSS, the format is: "oss::https://.oss-cn-hangzhou.aliyuncs.com/xxx.zip"
   * 
   * @example
   * oss::https://.oss-cn-hangzhou.aliyuncs.com/xxx.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The path of the State file corresponding to the module.
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

export class ListResourceExportTaskVersionsResponseBodyExportTasksIncludeRules extends $dara.Model {
  /**
   * @remarks
   * The name of the include rule for resource export. Valid values:
   * 
   * - ResourceType: required. The resource type. Example: ALIYUN::VPC::VPC.
   * - RegionId: required. The region to which the resource belongs. Only one region is supported. Example: cn-chengdu.
   * - \\<ResourceType>:Id: the resource ID. Example: ALIYUN::VPC::VPC:Id.
   * - ResourceGroupId: the resource group ID. Example: rg-1234.
   * - ZoneId: the zone to which the resource belongs. Only one zone is supported. Example: cn-hangzhou-h.
   * 
   * Multiple filter conditions have an AND relationship by default. A resource must meet all filter conditions to be considered a match.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The values of the include rule for resource export.
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

export class ListResourceExportTaskVersionsResponseBodyExportTasksModules extends $dara.Model {
  /**
   * @remarks
   * The module type where the exported template is located. Two formats are supported: CloudRegistry and OSS. If the ExportToModule parameter is specified, both formats are returned. Otherwise, only CloudRegistry is returned.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The download address of the exported template within the module.
   * 
   * - If Source is CloudRegistry, the format is: "cloudregistry::iacservice//"
   * 
   * - If Source is OSS, the format is: "oss::https://.oss-cn-hangzhou.aliyuncs.com/xxx.zip"
   * 
   * @example
   * oss::https://.oss-cn-hangzhou.aliyuncs.com/xxx.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The version of the module where the exported template is located.
   * 
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
  /**
   * @remarks
   * The list of Terraform resource properties corresponding to the resource type.
   */
  properties?: string[];
  /**
   * @remarks
   * The resource type.
   * 
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
   * @remarks
   * The creation time in UTC, in the ISO 8601 format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2025-05-11T02:18:50Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
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
   * 4521
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The ID of the resource export task.
   * 
   * @example
   * ex-al1711jl6hd8u5crggeq6v
   */
  exportTaskId?: string;
  /**
   * @remarks
   * The module to which the exported template is saved. If this parameter is not set, the template is automatically saved in the Registry.
   */
  exportToModule?: ListResourceExportTaskVersionsResponseBodyExportTasksExportToModule;
  /**
   * @remarks
   * The resource export version.
   * 
   * @example
   * v3
   */
  exportVersion?: string;
  /**
   * @remarks
   * The reason for the export failure.
   * 
   * @example
   * Reason
   */
  failedReason?: string;
  /**
   * @remarks
   * The list of include rules used when exporting resources.
   */
  includeRules?: ListResourceExportTaskVersionsResponseBodyExportTasksIncludeRules[];
  managedTaskId?: string;
  /**
   * @remarks
   * The module configuration of the exported resources.
   */
  modules?: ListResourceExportTaskVersionsResponseBodyExportTasksModules[];
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
   * The version export status. Valid values:
   * - Queue: queued
   * - Pending: preparing to run
   * - Success: succeeded
   * - Errored: failed
   * - Canceled: canceled
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The list of variables. Parameters of exported resources are set as variables.
   */
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
      managedTaskId: 'managedTaskId',
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
      managedTaskId: 'string',
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
  /**
   * @remarks
   * The list of export task versions.
   */
  exportTasks?: ListResourceExportTaskVersionsResponseBodyExportTasks[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 100.
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
   * 860FDEEE-1CA3-55F3-97F6-63FC40B7962D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

