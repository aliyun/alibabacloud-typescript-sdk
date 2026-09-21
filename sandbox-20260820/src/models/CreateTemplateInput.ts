// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateBuildConfig } from "./CreateTemplateBuildConfig";
import { CreateTemplateRuntimeConfig } from "./CreateTemplateRuntimeConfig";


export class CreateTemplateInput extends $dara.Model {
  buildConfig?: CreateTemplateBuildConfig;
  /**
   * @example
   * python-data-analysis
   */
  name?: string;
  runtimeConfig?: CreateTemplateRuntimeConfig;
  /**
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

