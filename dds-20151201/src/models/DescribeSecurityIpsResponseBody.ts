// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityIpsResponseBodySecurityIpGroupsSecurityIpGroup extends $dara.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist.
   * 
   * @example
   * hidden
   */
  securityIpGroupAttribute?: string;
  /**
   * @remarks
   * The name of the IP whitelist.
   * 
   * @example
   * default
   */
  securityIpGroupName?: string;
  /**
   * @remarks
   * The name of the IP whitelist.
   * 
   * @example
   * 47.xxx.xxx.xx,100.xxx.xxx.0/24
   */
  securityIpList?: string;
  static names(): { [key: string]: string } {
    return {
      securityIpGroupAttribute: 'SecurityIpGroupAttribute',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIpList: 'SecurityIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpGroupAttribute: 'string',
      securityIpGroupName: 'string',
      securityIpList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponseBodySecurityIpGroups extends $dara.Model {
  securityIpGroup?: DescribeSecurityIpsResponseBodySecurityIpGroupsSecurityIpGroup[];
  static names(): { [key: string]: string } {
    return {
      securityIpGroup: 'SecurityIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpGroup: { 'type': 'array', 'itemType': DescribeSecurityIpsResponseBodySecurityIpGroupsSecurityIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.securityIpGroup)) {
      $dara.Model.validateArray(this.securityIpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FC724D23-2962-479E-ABB1-606C935AE7FD
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the information of IP whitelists.
   */
  securityIpGroups?: DescribeSecurityIpsResponseBodySecurityIpGroups;
  /**
   * @remarks
   * The IP addresses in the default whitelist.
   * 
   * @example
   * 47.xxx.xxx.xx,100.xxx.xxx.0/24
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroups: 'SecurityIpGroups',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroups: DescribeSecurityIpsResponseBodySecurityIpGroups,
      securityIps: 'string',
    };
  }

  validate() {
    if(this.securityIpGroups && typeof (this.securityIpGroups as any).validate === 'function') {
      (this.securityIpGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

