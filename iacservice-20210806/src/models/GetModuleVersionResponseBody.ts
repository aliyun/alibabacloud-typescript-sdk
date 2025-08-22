// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModuleVersionResponseBodyVersion extends $dara.Model {
  /**
   * @example
   * 2022-09-08T18:07:40Z
   */
  createTime?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * mod-4267dcfbf1b6dfffbc27e218d1b66
   */
  moduleId?: string;
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  name?: string;
  /**
   * @example
   * OSS
   */
  source?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/terraform.tfstate
   */
  statePath?: string;
  terraformContext?: { [key: string]: any };
  /**
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
   * @example
   * 0D298375-F92F-5B65-82E4-EA68F02521F1
   */
  requestId?: string;
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

