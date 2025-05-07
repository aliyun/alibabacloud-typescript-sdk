// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebNetworkConfig } from "./WebNetworkConfig";


export class UpdateWebApplicationInput extends $dara.Model {
  /**
   * @example
   * sae-app
   */
  description?: string;
  webNetworkConfig?: WebNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      webNetworkConfig: 'WebNetworkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      webNetworkConfig: WebNetworkConfig,
    };
  }

  validate() {
    if(this.webNetworkConfig && typeof (this.webNetworkConfig as any).validate === 'function') {
      (this.webNetworkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

