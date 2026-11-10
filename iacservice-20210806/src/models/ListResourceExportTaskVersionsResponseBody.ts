// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceExportTaskVersionsResponseBodyExportTasksExportToModule extends $dara.Model {
  /**
   * @remarks
   * The module type where the exported template is saved. Valid values:
   * - OSS: OSS.
   * - Registry: Terraform Registry.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The path where the template content is saved.
   * - If Source is set to Registry, the format is "cloudregistry::iacservice//".
   * - If Source is set to OSS, the format is "oss::https://.oss-cn-hangzhou.aliyuncs.com/xxx.zip".
   * 
   * @example
   * oss::https://.oss-cn-hangzhou.aliyuncs.com/xxx.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The path of the state file corresponding to the module.
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
   * The name of the inclusion rule for resource export. Valid values:
   * - ResourceType: Required. The resource type, such as ALIYUN::VPC::VPC.
   * - RegionId: Required. The region to which the resource belongs. Only one region is supported, such as cn-chengdu.
   * - <ResourceType>:Id: The resource ID, such as ALIYUN::VPC::VPC:Id.
   * - ResourceGroupId: The resource group ID, such as rg-1234.
   * - ZoneId: The zone to which the resource belongs. Only one zone is supported, such as cn-hangzhou-h.
   * 
   * By default, multiple filter conditions use the AND logical operator. A resource matches the filter conditions only if it meets all the conditions.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The values of the inclusion rule for resource export.
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
   * The download URL in the module where the exported template is located.
   * - If Source is set to CloudRegistry, the format is "cloudregistry::iacservice//".
   * - If Source is set to OSS, the format is "oss::https://.oss-cn-hangzhou.aliyuncs.com/xxx.zip".
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
   * The list of properties for the Terraform resource corresponding to the resource type.
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
   * The creation time. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
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
   * Saves the exported template as a module. If this parameter is not specified, the template is automatically saved in the registry.
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
   * The list of inclusion rules used when exporting resources.
   */
  includeRules?: ListResourceExportTaskVersionsResponseBodyExportTasksIncludeRules[];
  /**
   * @remarks
   * The ID of the managed task created by this resource export version.
   * 
   * @example
   * task-433aead756057fffeaba4828f5195
   */
  managedTaskId?: string;
  /**
   * @remarks
   * The module configurations after the resources are exported.
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
   * The export status of the version. Valid values:
   * - Queue: Queued.
   * - Pending: Ready to run.
   * - Success: Succeeded.
   * - Errored: Failed.
   * - Canceled: Canceled.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The Terraform provider version.
   * 
   * @example
   * 1.206.0
   */
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The list of variables. The parameters after the resources are exported are set as variables.
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
      terraformProviderVersion: 'terraformProviderVersion',
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
      terraformProviderVersion: 'string',
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

