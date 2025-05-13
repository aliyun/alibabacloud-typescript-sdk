// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateWhiteIpsResponseBodyResultNetworkConfig } from "./UpdateWhiteIpsResponseBodyResultNetworkConfig";


export class UpdateWhiteIpsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The list of whitelists.
   */
  esIPWhitelist?: string[];
  /**
   * @remarks
   * The name of the whitelist. By default, the default whitelist is included.
   */
  networkConfig?: UpdateWhiteIpsResponseBodyResultNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      esIPWhitelist: 'esIPWhitelist',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      networkConfig: UpdateWhiteIpsResponseBodyResultNetworkConfig,
    };
  }

  validate() {
    if(Array.isArray(this.esIPWhitelist)) {
      $dara.Model.validateArray(this.esIPWhitelist);
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

