// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateBuildConfig } from "./CreateTemplateBuildConfig";
import { CreateTemplateRuntimeConfig } from "./CreateTemplateRuntimeConfig";


export class CreateTemplateInput extends $dara.Model {
  /**
   * @remarks
   * The template build configuration.
   */
  buildConfig?: CreateTemplateBuildConfig;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * my-template
   */
  name?: string;
  /**
   * @remarks
   * The template runtime configuration.
   */
  runtimeConfig?: CreateTemplateRuntimeConfig;
  /**
   * @remarks
   * The unique identifier of the team.
   * 
   * @example
   * 70d1c834-0383-58d8-97ac-5336eb91abcd
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

