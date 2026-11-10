// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModuleRequestGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g-5fd38c9b92d541a7083a86432e2
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

export class CreateModuleRequestTags extends $dara.Model {
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

export class CreateModuleRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token. Use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the template. The description can be up to 256 characters in length.
   * 
   * @example
   * ECS instance module
   */
  description?: string;
  /**
   * @remarks
   * The project group information to which the template belongs.
   */
  groupInfo?: CreateModuleRequestGroupInfo;
  /**
   * @remarks
   * The name of the template. The name must meet the following requirements:
   * - The name must be 2 to 128 characters in length.
   * - The name can contain letters, digits, Chinese characters, hyphens (-), underscores (_), and periods (.). It cannot start or end with a hyphen, underscore, or period.
   * - The name must be unique among the template resources within the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * my-ecs-module
   */
  name?: string;
  /**
   * @remarks
   * The source of the template. Valid values:
   * - OSS: Imports a template from a ZIP file stored in OSS.
   * - Registry: Creates a template by using a module from the template center.
   * - ExportTask: References a template exported by a resource export task.
   * - Editor: Creates a blank template that supports online editing.
   * - Upload: Generates a template by uploading a local template file.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The path of the template source. This parameter is valid only when source is set to Registry, OSS, or ExportTask.
   * - If source is set to Registry, the value is in the <workspace name>/<module name>:<module version> format, such as terraform-alicloud-modules/rds:1.0.0.
   * - If source is set to OSS, the value is in the oss::<file URL> format. The file must be a ZIP file, such as oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip.
   * - If source is set to ExportTask, the value is in the <export task ID>:<exported version> format, such as ex-3b6cb9fa4751afff298da723c24ac:v1.
   * - If source is set to Editor or Upload, leave this parameter empty.
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The path of the state file corresponding to the template. This parameter is valid only when source is set to OSS.
   * The value is in the oss::<OSS path of the file>/terraform.tfstate format.
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/terraform.tfstate
   */
  statePath?: string;
  /**
   * @remarks
   * The list of tags for the template.
   */
  tags?: CreateModuleRequestTags[];
  /**
   * @remarks
   * The version generation strategy. Valid values:
   * - Manual: Manually generates a version. This is the default value.
   * - SourcePathUpdated: Generates a new version when sourcePath is modified.
   * 
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

