// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModuleResponseBodyModuleGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g-fu1a1ol8cob1oni01ekcloi
   */
  groupId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * groupName
   */
  groupName?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-al1d11jlvlsbvr11lf3pqo
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * projectName
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

export class GetModuleResponseBodyModuleTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the template.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the template.
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

export class GetModuleResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2022-09-06T06:11:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * The group information.
   */
  groupInfo?: GetModuleResponseBodyModuleGroupInfo;
  /**
   * @remarks
   * The latest version number.
   * 
   * @example
   * v1
   */
  latestVersion?: string;
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
   * ModuleName
   */
  name?: string;
  /**
   * @remarks
   * The storage path of the template.
   * 
   * @example
   * /
   */
  outputPath?: string;
  /**
   * @remarks
   * The source of the template. Valid values:
   * 
   * - OSS: imported from OSS
   * - Registry: created by using a template from the template center
   * - ExportTask: referenced from a template exported by a resource export task
   * - Upload: uploaded as a file
   * - Shared: cloned from a shared template
   * - Editor: edited online
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The path value of the template source.
   * 
   * - If the source is Registry, the value is in the <Workspace name>/<Module name>:<Module version> format. Example: terraform-alicloud-modules/rds:1.0.0.
   * - If the source is OSS, the value is in the oss::<File URL> format. Example: oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip.
   * - If the source is ExportTask, the value is in the <Export task ID>:<Exported version> format. Example: ex-3b6cb9fa4751afff298da723c24ac:v1.
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The path of the state file corresponding to the template. This parameter is applicable only to OSS paths. The value is in the oss::<OSS path of the file>/terraform.tfstate format.
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/terraform.tfstate
   */
  statePath?: string;
  /**
   * @remarks
   * The status of the template. Valid values:
   * 
   * - Creating: The template is being created.
   * - Created: The template is created.
   * You can publish a version after the template is created.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The list of tags for the template.
   */
  tags?: GetModuleResponseBodyModuleTags[];
  /**
   * @remarks
   * The version generation strategy. Valid values:
   * 
   * - Manual: manually generates versions (default)
   * - SourcePathUpdated: generates a new version when sourcePath is modified
   * 
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
  /**
   * @remarks
   * The template information.
   */
  module?: GetModuleResponseBodyModule;
  /**
   * @remarks
   * The request ID.
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

