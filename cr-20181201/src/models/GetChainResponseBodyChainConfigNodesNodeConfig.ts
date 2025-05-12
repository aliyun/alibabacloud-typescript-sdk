// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy } from "./GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy";


export class GetChainResponseBodyChainConfigNodesNodeConfig extends $dara.Model {
  denyPolicy?: GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy;
  /**
   * @example
   * 3
   */
  retry?: number;
  /**
   * @example
   * ACR_SCAN_SERVICE
   */
  scanEngine?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      denyPolicy: 'DenyPolicy',
      retry: 'Retry',
      scanEngine: 'ScanEngine',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      denyPolicy: GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy,
      retry: 'number',
      scanEngine: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(this.denyPolicy && typeof (this.denyPolicy as any).validate === 'function') {
      (this.denyPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

