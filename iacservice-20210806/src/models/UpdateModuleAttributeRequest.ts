// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModuleAttributeRequestGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g-433aead7560571e66e31274ffd3
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

export class UpdateModuleAttributeRequestTags extends $dara.Model {
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

export class UpdateModuleAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. Format: [0-9a-zA-Z-]{1,64}. We recommend that you use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The template description. The description can be up to 256 characters in length.
   * 
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * The project group information.
   */
  groupInfo?: UpdateModuleAttributeRequestGroupInfo;
  /**
   * @remarks
   * The template name. The name must meet the following requirements:
   * 
   * - The name must be 2 to 128 characters in length.
   * - The name can contain letters, digits, Chinese characters, hyphens (-), underscores (_), and periods (.). It cannot start or end with a hyphen, underscore, or period.
   * - The name must be unique among all templates within the current account.
   * 
   * @example
   * ModuleName
   */
  name?: string;
  /**
   * @remarks
   * The path of the template source.
   * 
   * - If the source is Registry, set this parameter to <workspace name>/<module name>:<module version>. Example: terraform-alicloud-modules/rds:1.0.0.
   * - If the source is OSS, set this parameter to oss::<file URL>. The file must be a ZIP file. Example: oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip.
   * - If the source is ExportTask, set this parameter to <export task ID>:<exported version>. Example: ex-3b6cb9fa4751afff298da723c24ac:v1.
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The path of the state file that corresponds to the template. Currently, only OSS paths are supported. Set this parameter to oss::<OSS file path>/terraform.tfstate.
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/terraform.tfstate
   */
  statePath?: string;
  /**
   * @remarks
   * The tags of the template.
   */
  tags?: UpdateModuleAttributeRequestTags[];
  /**
   * @remarks
   * The version generation strategy. Valid values:
   * 
   * - Manual: manually generate versions. This is the default value.
   * - SourcePathUpdated: a new version is generated when sourcePath is modified.
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

