// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup extends $dara.Model {
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
   * The IP address in the whitelist.
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

