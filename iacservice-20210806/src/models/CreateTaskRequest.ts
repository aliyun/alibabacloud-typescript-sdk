// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskRequestGroupInfo extends $dara.Model {
  /**
   * @example
   * g-5fd38c9b92d541a7083a86432e2
   */
  groupId?: string;
  /**
   * @example
   * project-433aead7560572057e5d9167608
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

export class CreateTaskRequestTaskBackend extends $dara.Model {
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

export class CreateTaskRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoApply?: boolean;
  /**
   * @example
   * true
   */
  autoDestroy?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * demo
   */
  description?: string;
  groupInfo?: CreateTaskRequestGroupInfo;
  initModuleState?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mod-148e7853433574fff6b316f4eb737e
   */
  moduleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  protectionStrategy?: string[];
  /**
   * @example
   * {}
   */
  ramRole?: string;
  skipPropertyValidation?: boolean;
  tags?: CreateTaskRequestTags[];
  taskBackend?: CreateTaskRequestTaskBackend;
  /**
   * @example
   * 1.2.6
   */
  terraformVersion?: string;
  /**
   * @example
   * Always
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
      protectionStrategy: 'protectionStrategy',
      ramRole: 'ramRole',
      skipPropertyValidation: 'skipPropertyValidation',
      tags: 'tags',
      taskBackend: 'taskBackend',
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
      protectionStrategy: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      skipPropertyValidation: 'boolean',
      tags: { 'type': 'array', 'itemType': CreateTaskRequestTags },
      taskBackend: CreateTaskRequestTaskBackend,
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

