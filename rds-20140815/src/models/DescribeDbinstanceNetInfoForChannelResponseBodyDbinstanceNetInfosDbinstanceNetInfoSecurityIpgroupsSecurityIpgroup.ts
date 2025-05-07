// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup extends $dara.Model {
  /**
   * @remarks
   * The name of the IP address whitelist.
   * 
   * @example
   * Default
   */
  securityIPGroupName?: string;
  /**
   * @remarks
   * The IP addresses that is contained in the IP address whitelist.
   * 
   * @example
   * 127.0.XX.XX
   */
  securityIPs?: string;
  static names(): { [key: string]: string } {
    return {
      securityIPGroupName: 'SecurityIPGroupName',
      securityIPs: 'SecurityIPs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPGroupName: 'string',
      securityIPs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

