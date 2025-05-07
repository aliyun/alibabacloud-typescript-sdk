// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDTCSecurityIpHostsForSQLServerResponseBodyItemsWhiteListGroups extends $dara.Model {
  /**
   * @remarks
   * The IP address of the ECS instance and the hostname of the Windows computer. Format: `IP address,Hostname`. Multiple values are separated with semicolons (;).
   * 
   * @example
   * 192.168.1.100,k3ecstest
   */
  securityIpHosts?: string;
  /**
   * @remarks
   * The name of the distributed transaction whitelist.
   * 
   * @example
   * test1
   */
  whitelistGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      securityIpHosts: 'SecurityIpHosts',
      whitelistGroupName: 'WhitelistGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpHosts: 'string',
      whitelistGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

