// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityIPListResponseBodyDataGroupItems extends $dara.Model {
  /**
   * @remarks
   * The name of the whitelist.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The tag of the whitelist.
   * 
   * @example
   * test
   */
  groupTag?: string;
  /**
   * @remarks
   * The IP addresses and CIDR blocks in the whitelist.
   * 
   * @example
   * 127.0.XX.XX
   */
  securityIPList?: string;
  /**
   * @remarks
   * The IP address type.
   * 
   * @example
   * ipv4
   */
  securityIPType?: string;
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
      groupName: 'GroupName',
      groupTag: 'GroupTag',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
      whitelistNetType: 'WhitelistNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      groupTag: 'string',
      securityIPList: 'string',
      securityIPType: 'string',
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

