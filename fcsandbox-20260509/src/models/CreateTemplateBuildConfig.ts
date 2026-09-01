// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateCopyAction } from "./CreateTemplateCopyAction";
import { CreateTemplateEnvdInjectAction } from "./CreateTemplateEnvdInjectAction";


export class CreateTemplateBuildConfig extends $dara.Model {
  /**
   * @remarks
   * The image copy build action.
   */
  copy?: CreateTemplateCopyAction;
  /**
   * @remarks
   * The envd injection build action.
   */
  envdInject?: CreateTemplateEnvdInjectAction;
  static names(): { [key: string]: string } {
    return {
      copy: 'copy',
      envdInject: 'envdInject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copy: CreateTemplateCopyAction,
      envdInject: CreateTemplateEnvdInjectAction,
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

