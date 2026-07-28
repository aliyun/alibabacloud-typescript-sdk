// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceExportTaskResponseBodyTaskExportToModule extends $dara.Model {
  /**
   * @remarks
   * The module type in which the exported template is saved. Valid values:
   * 
   * - OSS: OSS
   * - Registry: Terraform Registry.
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
   * - If Source is set to OSS, the format is: "oss::https://.oss-ap-southeast-1.aliyuncs.com/xxx.zip".
   * 
   * @example
   * oss::https://.oss-cn-hangzhou.aliyuncs.com/xxx.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The path of the state file that corresponds to the module.
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

export class GetResourceExportTaskResponseBodyTaskIncludeRules extends $dara.Model {
  /**
   * @remarks
   * The name of the include rule for resource export. Valid values:
   * 
   * - ResourceType: required. The resource type. Example: ALIYUN::VPC::VPC.
   * - RegionId: required. The region to which the resource belongs. Only one region is supported. Example: ap-southeast-1.
   * - \\<ResourceType>:Id: the resource ID. Example: ALIYUN::VPC::VPC:Id.
   * - ResourceGroupId: the resource group ID. Example: rg-1234.
   * - ZoneId: the zone to which the resource belongs. Only one zone is supported. Example: ap-southeast-1a.
   * 
   * By default, the relationship between multiple filter conditions is AND. A resource is considered matched only if all filter conditions are met.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The values of the include rules for resource export.
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

export class GetResourceExportTaskResponseBodyTaskModules extends $dara.Model {
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
   * 
   * - If Source is set to CloudRegistry, the format is: "cloudregistry::iacservice//"
   * 
   * - If Source is set to OSS, the format is: "oss::https://.oss-ap-southeast-1.aliyuncs.com/xxx.zip".
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

export class GetResourceExportTaskResponseBodyTaskVariables extends $dara.Model {
  /**
   * @remarks
   * The list of properties of the Terraform resource that corresponds to the resource type.
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

export class GetResourceExportTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-06-15T02:44:37Z
   */
  createTime?: string;
  /**
   * @remarks
   * The task description.
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
   * 4533
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The ID of the resource export task.
   * 
   * @example
   * ex-al1111jlfh53i6mo4o94jj
   */
  exportTaskId?: string;
  /**
   * @remarks
   * Saves the exported template as a module. If this parameter is not set, the template is automatically saved in the registry.
   */
  exportToModule?: GetResourceExportTaskResponseBodyTaskExportToModule;
  /**
   * @remarks
   * The resource export version.
   * 
   * @example
   * v2
   */
  exportVersion?: string;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * Reason
   */
  failedReason?: string;
  /**
   * @remarks
   * The values of the include rules for resource export.
   */
  includeRules?: GetResourceExportTaskResponseBodyTaskIncludeRules[];
  /**
   * @remarks
   * The module configuration for the exported resources.
   */
  modules?: GetResourceExportTaskResponseBodyTaskModules[];
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * vpc_all
   */
  name?: string;
  /**
   * @remarks
   * The RAM role.
   * 
   * @example
   * role
   */
  ramRole?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - Available: the task is available and no job is running.
   * - Running: a job is currently running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task output path.
   * 
   * @example
   * /
   */
  taskOutputPath?: string;
  /**
   * @remarks
   * The Terraform context.
   * 
   * @example
   * {}
   */
  terraformContext?: { [key: string]: any };
  /**
   * @remarks
   * The Terraform provider version.
   * 
   * @example
   * 1.246.0
   */
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The Terraform version.
   * 
   * @example
   * 1.5.7
   */
  terraformVersion?: string;
  /**
   * @remarks
   * The trigger strategy. Valid values:
   * - Auto: triggered automatically when rules are modified or the trigger strategy is changed to Auto.
   * - Manual: triggered manually.
   * 
   * Default value: Manual.
   * 
   * @example
   * Manual
   */
  triggerStrategy?: string;
  /**
   * @remarks
   * The list of variables. Parameters in the exported resources are set as variables.
   */
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
   * @remarks
   * The request ID.
   * 
   * @example
   * FC49AA8C-0A19-5556-8929-E7447F18D529
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
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

