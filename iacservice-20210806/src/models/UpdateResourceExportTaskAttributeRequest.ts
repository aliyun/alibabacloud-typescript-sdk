// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceExportTaskAttributeRequestExportToModule extends $dara.Model {
  /**
   * @remarks
   * The module type for saving the exported template. Valid values:
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
   * The path for saving the template content. This parameter is required when source is set to OSS. Format: oss::https://<bucket>.oss-<region>.aliyuncs.com/<path>.zip.
   * 
   * @example
   * oss::https://iac-daily.oss-ap-southeast-1.aliyuncs.com/iacservice/vpc.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The path for saving the state file of the template. This parameter is required when source is set to OSS. Format: oss::https://<bucket>.oss-<region>.aliyuncs.com/<path>/terraform.tfstate.
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

export class UpdateResourceExportTaskAttributeRequestIncludeRules extends $dara.Model {
  /**
   * @remarks
   * The name of the inclusion rule for resource export. Valid values:
   * 
   * - ResourceType: Required. The resource type. You can call the **ListResourceTypes** operation to view the supported resources. Example: ALIYUN::VPC::VPC.
   * - RegionId: Required. The region to which the resource belongs. Only one region is supported. Example: cn-chengdu.
   * - <ResourceType>:Id: The resource ID. Example: ALIYUN::VPC::VPC:Id.
   * - ResourceGroupId: The resource group ID. Example: rg-1234.
   * - ZoneId: The zone to which the resource belongs. Only one zone is supported. Example: cn-hangzhou-h.
   * 
   * By default, multiple filter conditions use the AND logical operator. A resource matches the filter only when it meets all the conditions.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The values of the inclusion rule for a group of resources to be exported.
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

export class UpdateResourceExportTaskAttributeRequestVariables extends $dara.Model {
  /**
   * @remarks
   * The list of properties for the Terraform resource that corresponds to the resource type.
   */
  properties?: string[];
  /**
   * @remarks
   * The resource type. You can call the **ListResourceTypes** operation to view the supported resources.
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

export class UpdateResourceExportTaskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token. The format is [0-9a-zA-Z-]{1,64}. A UUID is recommended.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
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
   * Saves the exported template as a module. If this parameter is not specified, the template is automatically saved in the registry.
   */
  exportToModule?: UpdateResourceExportTaskAttributeRequestExportToModule;
  /**
   * @remarks
   * The list of inclusion rules used when exporting resources.
   */
  includeRules?: UpdateResourceExportTaskAttributeRequestIncludeRules[];
  /**
   * @remarks
   * The name of the resource export task. The name must meet the following requirements:
   * 
   * - The name must be 2 to 128 characters in length.
   * - The name can contain letters, digits, Chinese characters, hyphens (-), underscores (_), and periods (.). It cannot start or end with a hyphen, underscore, or period.
   * - The name must be unique among the resource export tasks within the current account.
   * 
   * @example
   * TaskName
   */
  name?: string;
  /**
   * @remarks
   * The RAM role.
   * 
   * @example
   * ramName
   */
  ramRole?: string;
  /**
   * @remarks
   * The Terraform provider version. You can call the **ListTerraformProviderVersions** operation to view the supported versions. Default value: the latest version.
   * 
   * @example
   * 1.183.0
   */
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The Terraform version. You can call the **ListAvailableTerraformVersions** operation to view the supported versions. Default value: 1.5.7.
   * 
   * @example
   * 1.5.7
   */
  terraformVersion?: string;
  /**
   * @remarks
   * The trigger strategy. Valid values:
   * - Auto: Triggered when a rule is modified or the trigger strategy is changed to Auto.
   * - Manual: Manually triggered.
   * 
   * Default value: Manual.
   * 
   * @example
   * Manual
   */
  triggerStrategy?: string;
  /**
   * @remarks
   * The list of variables. Sets the parameters of the exported resources as variables.
   */
  variables?: UpdateResourceExportTaskAttributeRequestVariables[];
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
      exportToModule: UpdateResourceExportTaskAttributeRequestExportToModule,
      includeRules: { 'type': 'array', 'itemType': UpdateResourceExportTaskAttributeRequestIncludeRules },
      name: 'string',
      ramRole: 'string',
      terraformProviderVersion: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
      variables: { 'type': 'array', 'itemType': UpdateResourceExportTaskAttributeRequestVariables },
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

