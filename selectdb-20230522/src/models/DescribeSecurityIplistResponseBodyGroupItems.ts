// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityIPListResponseBodyGroupItems extends $dara.Model {
  /**
   * @remarks
   * The IP address type. Valid values:
   * 
   * *   ipv4
   * *   ipv6 (not supported)
   * 
   * @example
   * ipv4
   */
  aecurityIPType?: string;
  /**
   * @remarks
   * The name of the whitelist.
   * 
   * @example
   * group1
   */
  groupName?: string;
  /**
   * @remarks
   * The tag of the whitelist.
   * 
   * @example
   * ""
   */
  groupTag?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist. Multiple IP addresses are separated by commas (,).
   * 
   * @example
   * 127.0.XX.XX
   */
  securityIPList?: string;
  /**
   * @remarks
   * The network type of the whitelist.
   * 
   * @example
   * mix
   */
  whitelistNetType?: string;
  static names(): { [key: string]: string } {
    return {
      aecurityIPType: 'AecurityIPType',
      groupName: 'GroupName',
      groupTag: 'GroupTag',
      securityIPList: 'SecurityIPList',
      whitelistNetType: 'WhitelistNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aecurityIPType: 'string',
      groupName: 'string',
      groupTag: 'string',
      securityIPList: 'string',
      whitelistNetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

