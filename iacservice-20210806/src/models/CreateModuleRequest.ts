// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModuleRequestGroupInfo extends $dara.Model {
  /**
   * @example
   * g-5fd38c9b92d541a7083a86432e2
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

export class CreateModuleRequestTags extends $dara.Model {
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

export class CreateModuleRequest extends $dara.Model {
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
   * test
   */
  description?: string;
  groupInfo?: CreateModuleRequestGroupInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @example
   * OSS：
   * "oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip"
   * Registry：
   * "alibaba/security-group/alicloud:2.1.0"
   */
  sourcePath?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/terraform.tfstate
   */
  statePath?: string;
  tags?: CreateModuleRequestTags[];
  /**
   * @example
   * Manual
   */
  versionStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      groupInfo: 'groupInfo',
      name: 'name',
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
      tags: 'tags',
      versionStrategy: 'versionStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      groupInfo: CreateModuleRequestGroupInfo,
      name: 'string',
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
      tags: { 'type': 'array', 'itemType': CreateModuleRequestTags },
      versionStrategy: 'string',
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
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

