// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWhiteIpsRequestWhiteIpGroup extends $dara.Model {
  /**
   * @remarks
   * The type of the IP address whitelist. Valid values:
   * 
   * *   PRIVATE_KIBANA
   * *   PRIVATE_ES
   * *   PUBLIC_ES
   * *   PUBLIC_KIBANA
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The returned result.
   */
  ips?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * PRIVATE_ES
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

