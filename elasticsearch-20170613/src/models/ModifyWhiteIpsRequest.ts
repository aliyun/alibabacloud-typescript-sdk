// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyWhiteIpsRequestWhiteIpGroup } from "./ModifyWhiteIpsRequestWhiteIpGroup";


export class ModifyWhiteIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the IP address whitelist that you want to update. You can specify only one whitelist.
   * 
   * > You cannot configure both the whiteIpList and whiteIpGroup parameters.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist. This parameter is available if the whiteIpGroup parameter is left empty. The default IP address whitelist is updated based on the value of this parameter.
   * 
   * > You cannot configure both the whiteIpList and whiteIpGroup parameters.
   * 
   * @example
   * PUBLIC
   */
  networkType?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist. This parameter is available if the whiteIpGroup parameter is left empty. The default IP address whitelist is updated based on the value of this parameter.
   * 
   * @example
   * WORKER
   */
  nodeType?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist. This parameter is required if you configure the whiteIpGroup parameter.
   */
  whiteIpGroup?: ModifyWhiteIpsRequestWhiteIpGroup;
  /**
   * @remarks
   * The name of the whitelist. This parameter is required if you configure the whiteIpGroup parameter.
   */
  whiteIpList?: string[];
  /**
   * @remarks
   * The network type. This parameter is required if you configure the whiteIpList parameter. Valid values:
   * 
   * *   PRIVATE
   * *   PUBLIC
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      modifyMode: 'modifyMode',
      networkType: 'networkType',
      nodeType: 'nodeType',
      whiteIpGroup: 'whiteIpGroup',
      whiteIpList: 'whiteIpList',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyMode: 'string',
      networkType: 'string',
      nodeType: 'string',
      whiteIpGroup: ModifyWhiteIpsRequestWhiteIpGroup,
      whiteIpList: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
    };
  }

  validate() {
    if(this.whiteIpGroup && typeof (this.whiteIpGroup as any).validate === 'function') {
      (this.whiteIpGroup as any).validate();
    }
    if(Array.isArray(this.whiteIpList)) {
      $dara.Model.validateArray(this.whiteIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

