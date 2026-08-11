// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskRequestGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g-5fd38c9b83a86432e2
   */
  groupId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-433aeade5d9167608
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

export class CreateTaskRequestTags extends $dara.Model {
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

export class CreateTaskRequestTaskBackend extends $dara.Model {
  /**
   * @remarks
   * The endpoint information.
   * 
   * @example
   * ss-cn-beijing.aliyuncs.com
   */
  bucketEndpoint?: string;
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * iac-runtime-test
   */
  bucketName?: string;
  /**
   * @remarks
   * The object path.
   * 
   * @example
   * /log
   */
  objectPath?: string;
  static names(): { [key: string]: string } {
    return {
      bucketEndpoint: 'bucketEndpoint',
      bucketName: 'bucketName',
      objectPath: 'objectPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketEndpoint: 'string',
      bucketName: 'string',
      objectPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically execute the task. Default value: false.
   * - true: After the preview is complete (terraform plan), the execution (terraform apply) is automatically performed without manual confirmation.
   * - false: After the preview is complete (terraform plan), manual confirmation is required before the execution (terraform apply) starts.
   * 
   * @example
   * false
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
   * The task description.
   * 
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * The project group information.
   */
  groupInfo?: CreateTaskRequestGroupInfo;
  /**
   * @remarks
   * Specifies whether to use a state file. Default value: false. This parameter applies to templates that originate from resource export. Only one task can use this parameter at a time.
   * 
   * @example
   * false
   */
  initModuleState?: boolean;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mod-144fff6b316f4eb737e
   */
  moduleId?: string;
  /**
   * @remarks
   * The template version.
   * 
   * This parameter is required.
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
   * - The name can contain letters, digits, Chinese characters, hyphens (-), underscores (_), and periods (.). The name cannot start or end with a hyphen, underscore, or period.
   * - The name must be unique among all tasks under the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * TaskName
   */
  name?: string;
  /**
   * @remarks
   * The collection of associated parameter set IDs.
   */
  parameterSetIds?: string[];
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
   * RoleName
   */
  ramRole?: string;
  /**
   * @remarks
   * Specifies whether to skip enumeration value validation. Default value: false.
   * 
   * @example
   * true
   */
  skipPropertyValidation?: boolean;
  /**
   * @remarks
   * Specifies whether to skip region validation. Valid values: true (skip) and false (do not skip).
   */
  skipRegionValidation?: boolean;
  /**
   * @remarks
   * The list of tags for the task.
   */
  tags?: CreateTaskRequestTags[];
  /**
   * @remarks
   * The task configuration. After this parameter is configured, runtime log information is saved to the specified OSS bucket.
   */
  taskBackend?: CreateTaskRequestTaskBackend;
  /**
   * @remarks
   * The Terraform Provider version. You can call the **ListTerraformProviderVersions** operation to obtain the list of supported versions.
   * 
   * @example
   * 1.248.0
   */
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The Terraform version. You can call the **ListAvailableTerraformVersions** operation to obtain the list of supported versions. Default value: 1.5.7.
   * 
   * @example
   * 1.5.7
   */
  terraformVersion?: string;
  /**
   * @remarks
   * The job trigger method. Valid values:
   * 
   * - Manual: Manual trigger (default).
   * - NewVersion: Triggered when a new template version is published.
   * - ParameterSetUpdated: Triggered when the parameter set content changes or the parameter set binding relationship changes.
   * - Auto: Automatically triggered when the task\\"s own properties change, such as task creation, execution version change, or job trigger strategy change (when changed from another value to Auto).
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
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      parameterSetIds: 'parameterSetIds',
      protectionStrategy: 'protectionStrategy',
      ramRole: 'ramRole',
      skipPropertyValidation: 'skipPropertyValidation',
      skipRegionValidation: 'skipRegionValidation',
      tags: 'tags',
      taskBackend: 'taskBackend',
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
      groupInfo: CreateTaskRequestGroupInfo,
      initModuleState: 'boolean',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      parameterSetIds: { 'type': 'array', 'itemType': 'string' },
      protectionStrategy: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      skipPropertyValidation: 'boolean',
      skipRegionValidation: 'boolean',
      tags: { 'type': 'array', 'itemType': CreateTaskRequestTags },
      taskBackend: CreateTaskRequestTaskBackend,
      terraformProviderVersion: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
    }
    if(Array.isArray(this.parameterSetIds)) {
      $dara.Model.validateArray(this.parameterSetIds);
    }
    if(Array.isArray(this.protectionStrategy)) {
      $dara.Model.validateArray(this.protectionStrategy);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.taskBackend && typeof (this.taskBackend as any).validate === 'function') {
      (this.taskBackend as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

