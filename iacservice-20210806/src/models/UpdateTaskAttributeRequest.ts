// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskAttributeRequestGroupInfo extends $dara.Model {
  /**
   * @example
   * g-433aead7560571e66e31274ffd3
   */
  groupId?: string;
  /**
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

export class UpdateTaskAttributeRequest extends $dara.Model {
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
   */
  clientToken?: string;
  /**
   * @example
   * demo
   */
  description?: string;
  groupInfo?: UpdateTaskAttributeRequestGroupInfo;
  initModuleState?: boolean;
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
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
  tags?: UpdateTaskAttributeRequestTags[];
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
      clientToken: 'clientToken',
      description: 'description',
      groupInfo: 'groupInfo',
      initModuleState: 'initModuleState',
      moduleVersion: 'moduleVersion',
      name: 'name',
      protectionStrategy: 'protectionStrategy',
      ramRole: 'ramRole',
      skipPropertyValidation: 'skipPropertyValidation',
      tags: 'tags',
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
      tags: { 'type': 'array', 'itemType': UpdateTaskAttributeRequestTags },
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

