// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModuleResponseBodyModuleGroupInfo extends $dara.Model {
  groupId?: string;
  groupName?: string;
  projectId?: string;
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

export class GetModuleResponseBodyModuleTags extends $dara.Model {
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

export class GetModuleResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2022-09-06T06:11:27Z
   */
  createTime?: string;
  /**
   * @example
   * test1
   */
  description?: string;
  groupInfo?: GetModuleResponseBodyModuleGroupInfo;
  /**
   * @example
   * v1
   */
  latestVersion?: string;
  /**
   * @example
   * mod-4267dcfbf1b6d14625614ddbe15
   */
  moduleId?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * /
   */
  outputPath?: string;
  /**
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
  /**
   * @example
   * Created
   */
  status?: string;
  tags?: GetModuleResponseBodyModuleTags[];
  /**
   * @example
   * Manual
   */
  versionStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      groupInfo: 'groupInfo',
      latestVersion: 'latestVersion',
      moduleId: 'moduleId',
      name: 'name',
      outputPath: 'outputPath',
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
      status: 'status',
      tags: 'tags',
      versionStrategy: 'versionStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      groupInfo: GetModuleResponseBodyModuleGroupInfo,
      latestVersion: 'string',
      moduleId: 'string',
      name: 'string',
      outputPath: 'string',
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetModuleResponseBodyModuleTags },
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

export class GetModuleResponseBody extends $dara.Model {
  module?: GetModuleResponseBodyModule;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1E7BA3EB-B0EF-53F5-9999-07CAD6D9F8A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'module',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: GetModuleResponseBodyModule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

