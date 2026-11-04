// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateBuildConfig } from "./CreateTemplateBuildConfig";
import { CreateTemplateRuntimeConfig } from "./CreateTemplateRuntimeConfig";


export class CreateTemplateInput extends $dara.Model {
  /**
   * @remarks
   * The build configuration of the template. The build process is specified in blocks by action. If this parameter is not specified, the service automatically infers the configuration based on the source image: public runtime images are used directly without building, and other images automatically execute copy and envdInject.
   */
  buildConfig?: CreateTemplateBuildConfig;
  /**
   * @remarks
   * The template name, which must be unique within the same team.
   * 
   * @example
   * python-data-analysis
   */
  name?: string;
  /**
   * @remarks
   * The runtime configuration of the template. This configuration determines the specifications and environment of sandbox instances created from this template.
   */
  runtimeConfig?: CreateTemplateRuntimeConfig;
  /**
   * @remarks
   * The ID of the team to which the template belongs, in UUID format. If this parameter is not specified, the default team of the current account is used.
   * 
   * @example
   * 5f4a2c18-****
   */
  teamID?: string;
  static names(): { [key: string]: string } {
    return {
      buildConfig: 'buildConfig',
      name: 'name',
      runtimeConfig: 'runtimeConfig',
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildConfig: CreateTemplateBuildConfig,
      name: 'string',
      runtimeConfig: CreateTemplateRuntimeConfig,
      teamID: 'string',
    };
  }

  validate() {
    if(this.buildConfig && typeof (this.buildConfig as any).validate === 'function') {
      (this.buildConfig as any).validate();
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

