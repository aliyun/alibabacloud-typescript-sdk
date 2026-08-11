// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBodyTaskGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g-59d8d22e78792ffe3d3eb6154d727
   */
  groupId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * abc
   */
  groupName?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-433aead756057fff47ecbfd94d76
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * abc
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      groupName: 'groupName',
      projectId: 'projectId',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskTags extends $dara.Model {
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

export class GetTaskResponseBodyTaskTaskBackend extends $dara.Model {
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

export class GetTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task is automatically executed.
   * 
   * @example
   * true
   */
  autoApply?: boolean;
  /**
   * @remarks
   * Indicates whether automatic deletion is enabled. When enabled, resources are automatically destroyed after the task is completed.
   * 
   * @example
   * false
   */
  autoDestroy?: boolean;
  /**
   * @remarks
   * The time when the task was created, in UTC in the ISO 8601 format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2022-06-15T02:44:37Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job ID of the current task.
   * 
   * @example
   * job-absdf
   */
  currentJobId?: string;
  /**
   * @remarks
   * The current job status.
   * 
   * @example
   * Planned
   */
  currentJobStatus?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
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
   * The group information.
   */
  groupInfo?: GetTaskResponseBodyTaskGroupInfo;
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
   * The latest version number of the template.
   * 
   * @example
   * v3
   */
  latestModuleVersion?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * mod-4267dcfbf1b6d14625614ddbe15
   */
  moduleId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * moduleName
   */
  moduleName?: string;
  /**
   * @remarks
   * The template version.
   * 
   * @example
   * v2
   */
  moduleVersion?: string;
  /**
   * @remarks
   * The task name.
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
   * The RAM role.
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
   * Specifies whether to skip region validation. Valid values: true and false.
   */
  skipRegionValidation?: boolean;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - Available: the task is available and no job is running.
   * - Running: the task is running and a job is in progress.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The list of task tags.
   */
  tags?: GetTaskResponseBodyTaskTags[];
  /**
   * @remarks
   * The task backend configuration. After this parameter is configured, runtime log information is saved to the specified OSS bucket.
   */
  taskBackend?: GetTaskResponseBodyTaskTaskBackend;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-433aead756057154bda7f1c2e98
   */
  taskId?: string;
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
   * The Terraform version.
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
   * - Auto: automatically triggered when the task properties change, such as task creation, execution version change, or job trigger policy change (when changed from another value to Auto).
   * 
   * @example
   * Manual
   */
  triggerStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      autoDestroy: 'autoDestroy',
      createTime: 'createTime',
      currentJobId: 'currentJobId',
      currentJobStatus: 'currentJobStatus',
      deletionProtection: 'deletionProtection',
      description: 'description',
      groupInfo: 'groupInfo',
      initModuleState: 'initModuleState',
      latestModuleVersion: 'latestModuleVersion',
      moduleId: 'moduleId',
      moduleName: 'moduleName',
      moduleVersion: 'moduleVersion',
      name: 'name',
      protectionStrategy: 'protectionStrategy',
      ramRole: 'ramRole',
      skipPropertyValidation: 'skipPropertyValidation',
      skipRegionValidation: 'skipRegionValidation',
      status: 'status',
      tags: 'tags',
      taskBackend: 'taskBackend',
      taskId: 'taskId',
      taskOutputPath: 'taskOutputPath',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      autoDestroy: 'boolean',
      createTime: 'string',
      currentJobId: 'string',
      currentJobStatus: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      groupInfo: GetTaskResponseBodyTaskGroupInfo,
      initModuleState: 'boolean',
      latestModuleVersion: 'string',
      moduleId: 'string',
      moduleName: 'string',
      moduleVersion: 'string',
      name: 'string',
      protectionStrategy: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      skipPropertyValidation: 'boolean',
      skipRegionValidation: 'boolean',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskTags },
      taskBackend: GetTaskResponseBodyTaskTaskBackend,
      taskId: 'string',
      taskOutputPath: 'string',
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
    if(this.taskBackend && typeof (this.taskBackend as any).validate === 'function') {
      (this.taskBackend as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C24C498A-09CF-54D3-8972-8DC074CF8614
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
  task?: GetTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetTaskResponseBodyTask,
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

