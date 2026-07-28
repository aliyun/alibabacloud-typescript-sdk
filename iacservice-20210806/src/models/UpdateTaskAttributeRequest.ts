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
   * The tag key of the task.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the task.
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
   * Specifies whether to automatically execute the task. Default value: false.
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
   * The description of the task.
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
   * Specifies whether to use a state file. Default value: false. This parameter is applicable when the template originates from resource export. Only one task can use this parameter.
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
   * The task name. The name must meet the following requirements:
   * 
   * - The name must be 2 to 128 characters in length.
   * - The name can contain letters, digits, Chinese characters, hyphens (-), underscores (_), and periods (.). It cannot start or end with a hyphen, underscore, or period.
   * - The name must be unique among all tasks under the current account.
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
   * Specifies whether to skip enum value validation. Default value: false.
   * 
   * @example
   * false
   */
  skipPropertyValidation?: boolean;
  skipRegionValidation?: boolean;
  /**
   * @remarks
   * The list of tags for the task.
   */
  tags?: UpdateTaskAttributeRequestTags[];
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The Terraform version. Call the **ListAvailableTerraformVersions** operation to obtain the list of supported versions. Default value: 1.5.7.
   * 
   * @example
   * 1.5.7
   */
  terraformVersion?: string;
  /**
   * @remarks
   * The job trigger method. Valid values:
   * 
   * - Manual: manually triggered (default).
   * - NewVersion: triggered when a new template version is published.
   * - ParameterSetUpdated: triggered when the parameter set content changes or the parameter set attach relationship changes.
   * - Auto: automatically triggered when the task\\"s own properties change, such as task creation, execution version change, or job trigger policy change (when changed from another value to Auto).
   * 
   * The **ramRole** parameter is required when the trigger method is not manual.
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

