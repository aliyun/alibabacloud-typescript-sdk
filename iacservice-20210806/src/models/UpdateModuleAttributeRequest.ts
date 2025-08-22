// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModuleAttributeRequestGroupInfo extends $dara.Model {
  groupId?: string;
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

export class UpdateModuleAttributeRequestTags extends $dara.Model {
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

export class UpdateModuleAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  groupInfo?: UpdateModuleAttributeRequestGroupInfo;
  /**
   * @example
   * test
   */
  name?: string;
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
  tags?: UpdateModuleAttributeRequestTags[];
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
      groupInfo: UpdateModuleAttributeRequestGroupInfo,
      name: 'string',
      sourcePath: 'string',
      statePath: 'string',
      tags: { 'type': 'array', 'itemType': UpdateModuleAttributeRequestTags },
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

