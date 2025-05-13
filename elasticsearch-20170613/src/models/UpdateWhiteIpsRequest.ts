// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateWhiteIpsRequestWhiteIpGroup } from "./UpdateWhiteIpsRequestWhiteIpGroup";


export class UpdateWhiteIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the whitelist. This parameter is required if you configure the whiteIpGroup parameter.
   */
  esIPWhitelist?: string[];
  /**
   * @remarks
   * The IP addresses in the whitelist. This parameter is required if you configure the whiteIpGroup parameter.
   */
  whiteIpGroup?: UpdateWhiteIpsRequestWhiteIpGroup;
  /**
   * @remarks
   * The IP addresses in the whitelist.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist. This parameter is available if the whiteIpGroup parameter is left empty. The default IP address whitelist is updated based on the value of this parameter.
   * 
   * >  You cannot configure both the esIPWhitelist and whiteIpGroup parameters.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      esIPWhitelist: 'esIPWhitelist',
      whiteIpGroup: 'whiteIpGroup',
      clientToken: 'clientToken',
      modifyMode: 'modifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      whiteIpGroup: UpdateWhiteIpsRequestWhiteIpGroup,
      clientToken: 'string',
      modifyMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.esIPWhitelist)) {
      $dara.Model.validateArray(this.esIPWhitelist);
    }
    if(this.whiteIpGroup && typeof (this.whiteIpGroup as any).validate === 'function') {
      (this.whiteIpGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

