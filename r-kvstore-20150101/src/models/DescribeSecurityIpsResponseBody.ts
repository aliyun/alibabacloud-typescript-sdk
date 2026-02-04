// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityIpsResponseBodySecurityIpGroupsSecurityIpGroup extends $dara.Model {
  /**
   * @remarks
   * The attribute of the whitelist. This parameter is empty by default.
   * 
   * >  If the instance is authorized to use a service such as Database Autonomy Service (DAS), Data Management (DMS), or Data Transmission Service (DTS), this service automatically generates a **hidden** whitelist for the instance. This type of whitelists cannot be modified or deleted.
   * 
   * @example
   * hidden
   */
  securityIpGroupAttribute?: string;
  /**
   * @remarks
   * The name of the whitelist.
   * 
   * @example
   * default
   */
  securityIpGroupName?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist. A maximum of 1,000 IP addresses can be specified in a whitelist.
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
   * EFC9161F-15E3-4A6E-8A99-C09916D1****
   */
  requestId?: string;
  /**
   * @remarks
   * The whitelists of the instance.
   */
  securityIpGroups?: DescribeSecurityIpsResponseBodySecurityIpGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroups: 'SecurityIpGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroups: DescribeSecurityIpsResponseBodySecurityIpGroups,
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

