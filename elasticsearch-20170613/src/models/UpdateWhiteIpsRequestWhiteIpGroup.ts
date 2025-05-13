// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhiteIpsRequestWhiteIpGroup extends $dara.Model {
  /**
   * @remarks
   * The type of the whitelist. Set the value to **PRIVATE_ES**. This value indicates a private IP address whitelist.
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
   * The returned result.
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

