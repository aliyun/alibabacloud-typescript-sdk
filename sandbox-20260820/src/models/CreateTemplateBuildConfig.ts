// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateCopyAction } from "./CreateTemplateCopyAction";
import { CreateTemplateEnvdInjectAction } from "./CreateTemplateEnvdInjectAction";


export class CreateTemplateBuildConfig extends $dara.Model {
  /**
   * @remarks
   * The action configuration for pulling the source image and pushing it to the destination repository.
   */
  copy?: CreateTemplateCopyAction;
  /**
   * @remarks
   * The action configuration for packaging the envd daemon process into the image. This is an optional intermediate step in the copy process and is supported only by first-generation sandboxes.
   */
  envdInject?: CreateTemplateEnvdInjectAction;
  /**
   * @remarks
   * The installation of clients required for storage mounting.
   */
  installStorageClients?: boolean;
  static names(): { [key: string]: string } {
    return {
      copy: 'copy',
      envdInject: 'envdInject',
      installStorageClients: 'installStorageClients',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copy: CreateTemplateCopyAction,
      envdInject: CreateTemplateEnvdInjectAction,
      installStorageClients: 'boolean',
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

