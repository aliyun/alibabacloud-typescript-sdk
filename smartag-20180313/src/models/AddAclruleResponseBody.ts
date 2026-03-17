// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddACLRuleResponseBodyDpiGroupIds extends $dara.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dpiGroupId)) {
      $dara.Model.validateArray(this.dpiGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddACLRuleResponseBodyDpiSignatureIds extends $dara.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dpiSignatureId)) {
      $dara.Model.validateArray(this.dpiSignatureId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddACLRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * @example
   * acl-xhwhyuo43l0*******
   */
  aclId?: string;
  /**
   * @remarks
   * The ID of the ACL rule.
   * 
   * @example
   * acr-c1hkd054qywi******
   */
  acrId?: string;
  /**
   * @remarks
   * The description of the ACL rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * The value of this parameter is specified in CIDR notation. Example: 192.168.10.0/24.
   * 
   * @example
   * 192.168.10.0/24
   */
  destCidr?: string;
  /**
   * @remarks
   * The destination port range.
   * 
   * @example
   * 1/65535
   */
  destPortRange?: string;
  /**
   * @remarks
   * The direction of traffic in which the ACL rule is applied. Valid values:
   * 
   * *   **in**: The ACL rule controls inbound network traffic of the on-premises network that is associated with the SAG instance.
   * *   **out**: The ACL rule controls outbound network traffic of the on-premises network that is associated with the SAG instance.
   * 
   * @example
   * out
   */
  direction?: string;
  dpiGroupIds?: AddACLRuleResponseBodyDpiGroupIds;
  dpiSignatureIds?: AddACLRuleResponseBodyDpiSignatureIds;
  /**
   * @remarks
   * The timestamp when the ACL rule was created.
   * 
   * The timestamp is of the Long data type. If multiple ACL rules have the same priority, the rule with the earliest timestamp takes effect.
   * 
   * @example
   * 1553766882689
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The protocol used by the ACL rule.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The name of the ACL rule.
   * 
   * @example
   * doctest
   */
  name?: string;
  /**
   * @remarks
   * The action policy of the ACL rule.
   * 
   * *   **accept**: allows the network traffic.
   * *   **drop**: blocks the network traffic.
   * 
   * @example
   * drop
   */
  policy?: string;
  /**
   * @remarks
   * The priority of the ACL rule.
   * 
   * A smaller value indicates a higher priority. If rules have the same priority, whichever applied to the SAG devices earlier takes effect.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 880F84CB-9B54-4413-A8A3-8832C82D1BC4
   */
  requestId?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * The value of this parameter is specified in CIDR notation. Example: 192.168.1.0/24.
   * 
   * @example
   * 192.168.20.0/24
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The source port range.
   * 
   * @example
   * 1/65535
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The type of the ACL rule:
   * 
   * *   **LAN**: The ACL rule controls network traffic transmitted through private IP addresses.
   * *   **WAN**: The ACL rule controls network traffic transmitted through public IP addresses.
   * 
   * @example
   * LAN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      acrId: 'AcrId',
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      direction: 'Direction',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      gmtCreate: 'GmtCreate',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      policy: 'Policy',
      priority: 'Priority',
      requestId: 'RequestId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      acrId: 'string',
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      direction: 'string',
      dpiGroupIds: AddACLRuleResponseBodyDpiGroupIds,
      dpiSignatureIds: AddACLRuleResponseBodyDpiSignatureIds,
      gmtCreate: 'number',
      ipProtocol: 'string',
      name: 'string',
      policy: 'string',
      priority: 'number',
      requestId: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.dpiGroupIds && typeof (this.dpiGroupIds as any).validate === 'function') {
      (this.dpiGroupIds as any).validate();
    }
    if(this.dpiSignatureIds && typeof (this.dpiSignatureIds as any).validate === 'function') {
      (this.dpiSignatureIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

