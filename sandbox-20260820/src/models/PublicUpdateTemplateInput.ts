// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicUpdateTemplateBuildConfig } from "./PublicUpdateTemplateBuildConfig";
import { PublicUpdateTemplateRuntimeConfig } from "./PublicUpdateTemplateRuntimeConfig";


export class PublicUpdateTemplateInput extends $dara.Model {
  buildConfig?: PublicUpdateTemplateBuildConfig;
  runtimeConfig?: PublicUpdateTemplateRuntimeConfig;
  static names(): { [key: string]: string } {
    return {
      buildConfig: 'buildConfig',
      runtimeConfig: 'runtimeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildConfig: PublicUpdateTemplateBuildConfig,
      runtimeConfig: PublicUpdateTemplateRuntimeConfig,
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

