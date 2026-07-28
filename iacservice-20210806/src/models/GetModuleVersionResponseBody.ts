// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModuleVersionResponseBodyVersion extends $dara.Model {
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 2022-09-08T18:07:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * mod-4267dcfbf1b6dfffbc27e218d1b66
   */
  moduleId?: string;
  /**
   * @remarks
   * The template version number.
   * 
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * versionName
   */
  name?: string;
  /**
   * @remarks
   * The version source. Valid values:
   * 
   * - OSS: imported from OSS.
   * - Registry: created by using a template from the template center.
   * - ExportTask: exported from a resource export task.
   * - Upload: uploaded as a file.
   * - Shared: cloned from a shared source.
   * - Editor: edited online.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The path of the version source.
   * 
   * - If the source is Registry, the value is in the format of <workspace name>/<module name>:<module version>. Example: terraform-alicloud-modules/rds:1.0.0.
   * - If the source is OSS, the value is in the format of oss::<file link>. Example: oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip.
   * - If the source is ExportTask, the value is in the format of <export task ID>:<exported version>. Example: ex-3b6cb9fa4751afff298da723c24ac:v1.
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The path of the State file that corresponds to the template. Currently, only OSS paths are supported. The value is in the format of oss::<OSS file path>/terraform.tfstate.
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/terraform.tfstate
   */
  statePath?: string;
  /**
   * @remarks
   * The Terraform content.
   */
  terraformContext?: { [key: string]: any };
  /**
   * @remarks
   * The version generation strategy. Valid values:
   * 
   * - Manual: manually generate a version. This is the default value.
   * - SourcePathUpdated: a new version is generated when the sourcePath is modified.
   * 
   * @example
   * Manual
   */
  versionStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
      terraformContext: 'terraformContext',
      versionStrategy: 'versionStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
      terraformContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      versionStrategy: 'string',
    };
  }

  validate() {
    if(this.terraformContext) {
      $dara.Model.validateMap(this.terraformContext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0D298375-F92F-5B65-82E4-EA68F02521F1
   */
  requestId?: string;
  /**
   * @remarks
   * The version details.
   */
  version?: GetModuleVersionResponseBodyVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      version: GetModuleVersionResponseBodyVersion,
    };
  }

  validate() {
    if(this.version && typeof (this.version as any).validate === 'function') {
      (this.version as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

