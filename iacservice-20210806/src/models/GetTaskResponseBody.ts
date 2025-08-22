// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBodyTaskGroupInfo extends $dara.Model {
  /**
   * @example
   * g-59d8d22e78792ffe3d3eb6154d727
   */
  groupId?: string;
  /**
   * @example
   * abc
   */
  groupName?: string;
  /**
   * @example
   * p-433aead756057fff47ecbfd94d76
   */
  projectId?: string;
  /**
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
  tagKey?: string;
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
  bucketEndpoint?: string;
  bucketName?: string;
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
   * @example
   * true
   */
  autoApply?: boolean;
  /**
   * @example
   * false
   */
  autoDestroy?: boolean;
  /**
   * @example
   * 2022-06-15T02:44:37Z
   */
  createTime?: string;
  /**
   * @example
   * job-absdf
   */
  currentJobId?: string;
  currentJobStatus?: string;
  deletionProtection?: boolean;
  /**
   * @example
   * demo
   */
  description?: string;
  groupInfo?: GetTaskResponseBodyTaskGroupInfo;
  initModuleState?: boolean;
  latestModuleVersion?: string;
  /**
   * @example
   * mod-4267dcfbf1b6d14625614ddbe15
   */
  moduleId?: string;
  moduleName?: string;
  /**
   * @example
   * v2
   */
  moduleVersion?: string;
  name?: string;
  protectionStrategy?: string[];
  /**
   * @example
   * {}
   */
  ramRole?: string;
  skipPropertyValidation?: boolean;
  /**
   * @example
   * Running
   */
  status?: string;
  tags?: GetTaskResponseBodyTaskTags[];
  taskBackend?: GetTaskResponseBodyTaskTaskBackend;
  /**
   * @example
   * task-433aead756057154bda7f1c2e98
   */
  taskId?: string;
  /**
   * @example
   * /
   */
  taskOutputPath?: string;
  /**
   * @example
   * 1.2.6
   */
  terraformVersion?: string;
  /**
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
   * Id of the request
   * 
   * @example
   * C24C498A-09CF-54D3-8972-8DC074CF8614
   */
  requestId?: string;
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

