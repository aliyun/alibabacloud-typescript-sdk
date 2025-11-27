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

export class DescribeDTCSecurityIpHostsForSQLServerResponseBodyItems extends $dara.Model {
  whiteListGroups?: DescribeDTCSecurityIpHostsForSQLServerResponseBodyItemsWhiteListGroups[];
  static names(): { [key: string]: string } {
    return {
      whiteListGroups: 'WhiteListGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteListGroups: { 'type': 'array', 'itemType': DescribeDTCSecurityIpHostsForSQLServerResponseBodyItemsWhiteListGroups },
    };
  }

  validate() {
    if(Array.isArray(this.whiteListGroups)) {
      $dara.Model.validateArray(this.whiteListGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDTCSecurityIpHostsForSQLServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The number of distributed transaction whitelists.
   * 
   * @example
   * 1
   */
  ipHostPairNum?: string;
  /**
   * @remarks
   * Details of distributed transaction whitelists.
   */
  items?: DescribeDTCSecurityIpHostsForSQLServerResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2CA62A70-2203-45C6-8E90-8971D5ACC0C2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ipHostPairNum: 'IpHostPairNum',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ipHostPairNum: 'string',
      items: DescribeDTCSecurityIpHostsForSQLServerResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

