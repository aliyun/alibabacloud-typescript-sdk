// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateKibanaWhiteIpsRequestWhiteIpGroup } from "./UpdateKibanaWhiteIpsRequestWhiteIpGroup";


export class UpdateKibanaWhiteIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelists. This parameter is available if the whiteIpGroup parameter is left empty. The default IP address whitelist is updated based on the value of this parameter.
   * 
   * You cannot configure both the kibanaIPWhitelist and whiteIpGroup parameters.
   */
  kibanaIPWhitelist?: string[];
  /**
   * @remarks
   * The name of the whitelist. This parameter is required if you configure the whiteIpGroup parameter.
   */
  whiteIpGroup?: UpdateKibanaWhiteIpsRequestWhiteIpGroup;
  /**
   * @remarks
   * The update mode. Valid values:
   * 
   * *   Cover: overwrites the IP addresses in the specified IP address whitelist with the IP addresses specified by using the ips parameter. This is the default value.
   * *   Append: adds the IP addresses specified by using the ips parameter to the specified IP address whitelist.
   * *   Delete: deletes the IP addresses specified by using the ips parameter from the specified IP address whitelist. At least one IP address must be retained for the whitelist.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The body of the request.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      kibanaIPWhitelist: 'kibanaIPWhitelist',
      whiteIpGroup: 'whiteIpGroup',
      clientToken: 'clientToken',
      modifyMode: 'modifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kibanaIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      whiteIpGroup: UpdateKibanaWhiteIpsRequestWhiteIpGroup,
      clientToken: 'string',
      modifyMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kibanaIPWhitelist)) {
      $dara.Model.validateArray(this.kibanaIPWhitelist);
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

