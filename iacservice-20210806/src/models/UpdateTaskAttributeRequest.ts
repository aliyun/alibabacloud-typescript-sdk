// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskAttributeRequestGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g-433aead7560571e66e31274ffd3
   */
  groupId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-433aead75605713865c386cb9d
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAttributeRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the node.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the node.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically execute the node. Default value: false.
   * - true: After the preview is complete (terraform plan), the execution (terraform apply) is automatically performed without manual confirmation.
   * - false: After the preview is complete (terraform plan), manual confirmation is required before the execution (terraform apply) starts.
   * 
   * @example
   * true
   */
  autoApply?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically destroy resources after creation. Default value: false.
   * - true: After the execution is complete (terraform apply), the destroy operation (terraform destroy) is automatically performed without manual confirmation.
   * - false: After the execution is complete (terraform apply), no further action is taken.
   * 
   * @example
   * true
   */
  autoDestroy?: boolean;
  /**
   * @remarks
   * The idempotency token. Format: [0-9a-zA-Z-]{1,64}. Use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
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
   * The project group information.
   */
  groupInfo?: UpdateTaskAttributeRequestGroupInfo;
  /**
   * @remarks
   * Specifies whether to use a state file. Default value: false. This parameter applies to templates that originate from resource export. Only one node can use this parameter.
   * 
   * @example
   * false
   */
  initModuleState?: boolean;
  /**
   * @remarks
   * The template version.
   * 
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @remarks
   * The node name. The name must meet the following requirements:
   * 
   * - The name must be 2 to 128 characters in length.
   * - The name can contain letters, digits, Chinese characters, hyphens (-), underscores (_), and periods (.). The name cannot start or end with a hyphen, underscore, or period.
   * - The name must be unique among all node resources within the current account.
   * 
   * @example
   * TaskName
   */
  name?: string;
  /**
   * @remarks
   * The list of resource protection strategies.
   */
  protectionStrategy?: string[];
  /**
   * @remarks
   * The RAM role. The system assumes this role to execute the template when a new job is triggered. This parameter is required when the job trigger method is not manual.
   * 
   * @example
   * role
   */
  ramRole?: string;
  /**
   * @remarks
   * Specifies whether to skip enumeration value validation. Default value: false.
   * 
   * @example
   * false
   */
  skipPropertyValidation?: boolean;
  /**
   * @remarks
   * Specifies whether to skip region validation. Valid values: true indicates skipping, false indicates not skipping.
   */
  skipRegionValidation?: boolean;
  /**
   * @remarks
   * The list of tags for the node.
   */
  tags?: UpdateTaskAttributeRequestTags[];
  /**
   * @remarks
   * The Terraform Provider version. Use the **ListTerraformProviderVersions** API to query the list of supported versions.
   * 
   * @example
   * 1.248.0
   */
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The Terraform version. Use the **ListAvailableTerraformVersions** API to obtain the list of supported versions. Default value: 1.5.7.
   * 
   * @example
   * 1.5.7
   */
  terraformVersion?: string;
  /**
   * @remarks
   * The job trigger method.
   * 
   * - Manual: manual trigger (default).
   * - NewVersion: triggered when a new template version is published.
   * - ParameterSetUpdated: triggered when the parameter set content changes or the parameter set attach relationship changes.
   * - Auto: automatically triggered when the node properties change, such as creating a node, changing the execution version, or changing the job trigger policy (when changed from another method to Auto).
   * 
   * The **ramRole** parameter is required for non-manual triggers.
   * 
   * @example
   * Manual
   */
  triggerStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      autoDestroy: 'autoDestroy',
      clientToken: 'clientToken',
      description: 'description',
      groupInfo: 'groupInfo',
      initModuleState: 'initModuleState',
      moduleVersion: 'moduleVersion',
      name: 'name',
      protectionStrategy: 'protectionStrategy',
      ramRole: 'ramRole',
      skipPropertyValidation: 'skipPropertyValidation',
      skipRegionValidation: 'skipRegionValidation',
      tags: 'tags',
      terraformProviderVersion: 'terraformProviderVersion',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      autoDestroy: 'boolean',
      clientToken: 'string',
      description: 'string',
      groupInfo: UpdateTaskAttributeRequestGroupInfo,
      initModuleState: 'boolean',
      moduleVersion: 'string',
      name: 'string',
      protectionStrategy: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      skipPropertyValidation: 'boolean',
      skipRegionValidation: 'boolean',
      tags: { 'type': 'array', 'itemType': UpdateTaskAttributeRequestTags },
      terraformProviderVersion: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
    }
    if(Array.isArray(this.protectionStrategy)) {
      $dara.Model.validateArray(this.protectionStrategy);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

