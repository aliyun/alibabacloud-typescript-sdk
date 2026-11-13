// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateBuildConfig } from "./CreateTemplateBuildConfig";
import { CreateTemplateRuntimeConfig } from "./CreateTemplateRuntimeConfig";


export class CreateTemplateInputResourceTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * project
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * demo
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateInput extends $dara.Model {
  /**
   * @remarks
   * The build configuration of the template. This configuration specifies the build process in action-based chunks. If this parameter is not specified, the service automatically derives the configuration based on the source image. Public runtime images are used directly without building. For other images, the copy and envdInject actions are automatically executed.
   */
  buildConfig?: CreateTemplateBuildConfig;
  /**
   * @remarks
   * The name of the template. The name must be unique within the same team.
   * 
   * @example
   * python-data-analysis
   */
  name?: string;
  /**
   * @remarks
   * The resource tags.
   */
  resourceTags?: CreateTemplateInputResourceTags[];
  /**
   * @remarks
   * The runtime configuration of the template. This configuration determines the specifications and environment of the sandbox instances created from the template.
   */
  runtimeConfig?: CreateTemplateRuntimeConfig;
  /**
   * @remarks
   * The ID of the team to which the template belongs. The ID must be in UUID format. If this parameter is not specified, the default team of the current account is used.
   * 
   * @example
   * 5f4a2c18-****
   */
  teamID?: string;
  /**
   * @remarks
   * The templatetype. Set this parameter to layer to build a layer template.
   * 
   * @example
   * layer
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      buildConfig: 'buildConfig',
      name: 'name',
      resourceTags: 'resourceTags',
      runtimeConfig: 'runtimeConfig',
      teamID: 'teamID',
      templateType: 'templateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildConfig: CreateTemplateBuildConfig,
      name: 'string',
      resourceTags: { 'type': 'array', 'itemType': CreateTemplateInputResourceTags },
      runtimeConfig: CreateTemplateRuntimeConfig,
      teamID: 'string',
      templateType: 'string',
    };
  }

  validate() {
    if(this.buildConfig && typeof (this.buildConfig as any).validate === 'function') {
      (this.buildConfig as any).validate();
    }
    if(Array.isArray(this.resourceTags)) {
      $dara.Model.validateArray(this.resourceTags);
    }
    if(this.runtimeConfig && typeof (this.runtimeConfig as any).validate === 'function') {
      (this.runtimeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

