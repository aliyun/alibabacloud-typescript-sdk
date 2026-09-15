// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicUpdateTemplateCopyAction } from "./PublicUpdateTemplateCopyAction";
import { PublicUpdateTemplateEnvdInjectAction } from "./PublicUpdateTemplateEnvdInjectAction";


export class PublicUpdateTemplateBuildConfig extends $dara.Model {
  /**
   * @remarks
   * The image copy action configuration.
   */
  copy?: PublicUpdateTemplateCopyAction;
  /**
   * @remarks
   * The envd injection action configuration.
   */
  envdInject?: PublicUpdateTemplateEnvdInjectAction;
  static names(): { [key: string]: string } {
    return {
      copy: 'copy',
      envdInject: 'envdInject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copy: PublicUpdateTemplateCopyAction,
      envdInject: PublicUpdateTemplateEnvdInjectAction,
    };
  }

  validate() {
    if(this.copy && typeof (this.copy as any).validate === 'function') {
      (this.copy as any).validate();
    }
    if(this.envdInject && typeof (this.envdInject as any).validate === 'function') {
      (this.envdInject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

