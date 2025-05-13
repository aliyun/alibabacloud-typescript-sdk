// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKibanaWhiteIpsRequestWhiteIpGroup extends $dara.Model {
  /**
   * @remarks
   * The type of the whitelist. Set the value to PUBLIC_KIBANA. This value indicates a public IP address whitelist.
   * 
   * @example
   * test_group_name
   */
  groupName?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist. This parameter is required if you configure the whiteIpGroup parameter.
   */
  ips?: string[];
  /**
   * @remarks
   * The IP addresses in the whitelist.
   * 
   * @example
   * PUBLIC_KIBANA
   */
  whiteIpType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
      whiteIpType: 'whiteIpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      whiteIpType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

