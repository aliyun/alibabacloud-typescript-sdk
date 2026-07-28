// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceExportTaskRequestExportToModule extends $dara.Model {
  /**
   * @remarks
   * The module type in which the exported template is saved. Valid values:
   * 
   * - OSS: OSS.
   * - Registry: Terraform Registry.
   * 
   * @example
   * Registry
   */
  source?: string;
  /**
   * @remarks
   * The path for saving the template content. Set this parameter when source is set to OSS.
   * 
   * @example
   * oss::https://iac-daily.oss-ap-southeast-1.aliyuncs.com/iacservice/vpc.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The path for saving the template state file. Set this parameter when source is set to OSS.
   * 
   * @example
   * oss::https://iac-daily.oss-ap-southeast-1.aliyuncs.com/default/terraform.tfstate
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

export class CreateResourceExportTaskRequestIncludeRules extends $dara.Model {
  /**
   * @remarks
   * The name of the inclusion rule used when exporting resources. Valid values:
   * 
   * - ResourceType: required. The resource type. Call **ListResourceTypes** to view the list of supported resources. Example: ALIYUN::VPC::VPC.
   * - RegionId: required. The region to which the resource belongs. Only one region is supported. Example: cn-chengdu.
   * - \\<ResourceType>:Id: the resource ID. Example: ALIYUN::VPC::VPC:Id.
   * - ResourceGroupId: the resource group ID. Example: rg-1234.
   * - ZoneId: the zone to which the resource belongs. Only one zone is supported. Example: cn-hangzhou-h.
   * 
   * By default, multiple filter conditions are evaluated using the AND operator. A resource is considered a match only when all filter conditions are met.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The list of values for the inclusion rule used when exporting resources.
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

export class CreateResourceExportTaskRequestVariables extends $dara.Model {
  /**
   * @remarks
   * The list of properties of the Terraform resource that corresponds to the resource type.
   */
  properties?: string[];
  /**
   * @remarks
   * The resource type. Call **ListResourceTypes** to view the list of supported resources.
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

export class CreateResourceExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token. Format: [0-9a-zA-Z-]{1,64}. We recommend that you use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the resource export task.
   * 
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * Saves the exported template as a module. If this parameter is not specified, the template is automatically saved in the Registry.
   */
  exportToModule?: CreateResourceExportTaskRequestExportToModule;
  /**
   * @remarks
   * The list of inclusion rules used when exporting resources.
   */
  includeRules?: CreateResourceExportTaskRequestIncludeRules[];
  /**
   * @remarks
   * The name of the resource export task. The name must meet the following requirements:
   * 
   * - The name must be 3 to 63 characters in length.
   * - The name can contain letters, digits, Chinese characters, hyphens (-), underscores (_), and periods (.). The name cannot start or end with a hyphen, underscore, or period.
   * - The name must be unique among resource export tasks within the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The RAM role (1 to 128 characters). The system assumes this role to execute the template when a new job is triggered. This parameter is required when the job trigger method is not manual.
   * 
   * @example
   * role-name
   */
  ramRole?: string;
  /**
   * @remarks
   * The Terraform provider version. Call **ListTerraformProviderVersions** to view the list of supported versions. Default value: the latest version.
   * 
   * @example
   * 1.247.0
   */
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The Terraform version. Call **ListAvailableTerraformVersions** to view the list of supported versions. Default value: 1.5.7.
   * 
   * @example
   * 1.5.7
   */
  terraformVersion?: string;
  /**
   * @remarks
   * The trigger strategy. Valid values:
   * - Auto: triggered when rules are modified or the trigger strategy is changed to Auto.
   * - Manual: manually triggered.
   * 
   * Default value: Manual.
   * 
   * @example
   * Auto
   */
  triggerStrategy?: string;
  /**
   * @remarks
   * The list of variables. Exported resource parameters are set as variables.
   */
  variables?: CreateResourceExportTaskRequestVariables[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      exportToModule: 'exportToModule',
      includeRules: 'includeRules',
      name: 'name',
      ramRole: 'ramRole',
      terraformProviderVersion: 'terraformProviderVersion',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      exportToModule: CreateResourceExportTaskRequestExportToModule,
      includeRules: { 'type': 'array', 'itemType': CreateResourceExportTaskRequestIncludeRules },
      name: 'string',
      ramRole: 'string',
      terraformProviderVersion: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
      variables: { 'type': 'array', 'itemType': CreateResourceExportTaskRequestVariables },
    };
  }

  validate() {
    if(this.exportToModule && typeof (this.exportToModule as any).validate === 'function') {
      (this.exportToModule as any).validate();
    }
    if(Array.isArray(this.includeRules)) {
      $dara.Model.validateArray(this.includeRules);
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

