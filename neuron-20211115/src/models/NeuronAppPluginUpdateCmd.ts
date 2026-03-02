// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MobiPluginConfig } from "./MobiPluginConfig";


export class NeuronAppPluginUpdateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  config?: MobiPluginConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: MobiPluginConfig,
      id: 'number',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

