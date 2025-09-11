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

export class DescribeSecurityIPListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * TestCluster
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The details about the whitelists.
   */
  groupItems?: DescribeSecurityIPListResponseBodyDataGroupItems[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      groupItems: 'GroupItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      groupItems: { 'type': 'array', 'itemType': DescribeSecurityIPListResponseBodyDataGroupItems },
    };
  }

  validate() {
    if(Array.isArray(this.groupItems)) {
      $dara.Model.validateArray(this.groupItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeSecurityIPListResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSecurityIPListResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

