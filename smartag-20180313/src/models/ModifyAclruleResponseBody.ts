// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyACLRuleResponseBodyDpiGroupIds extends $dara.Model {
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

export class ModifyACLRuleResponseBodyDpiSignatureIds extends $dara.Model {
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

export class ModifyACLRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of ACL.
   * 
   * @example
   * acl-jdc7tir4fkplwr****
   */
  aclId?: string;
  /**
   * @remarks
   * The ID of the ACL rule.
   * 
   * @example
   * acr-r8hezn2pi39s5a****
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
   * The value of this parameter is in CIDR notation. Example: 192.168.10.0/24.
   * 
   * @example
   * 0.0.0.0/0
   */
  destCidr?: string;
  /**
   * @remarks
   * The destination port range.
   * 
   * @example
   * -1/-1
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
   * in
   */
  direction?: string;
  dpiGroupIds?: ModifyACLRuleResponseBodyDpiGroupIds;
  dpiSignatureIds?: ModifyACLRuleResponseBodyDpiSignatureIds;
  /**
   * @remarks
   * The timestamp when the ACL rule was created.
   * 
   * The timestamp is of the Long data type. If multiple ACL rules have the same priority, the rule with the earliest timestamp takes effect.
   * 
   * @example
   * 1553777700000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The protocol used by the ACL rule.
   * 
   * @example
   * ALL
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
   * The action of the ACL rule.
   * 
   * *   **accept**: allows network traffic.
   * *   **drop**: blocks network traffic.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The priority of the ACL rule.
   * 
   * A smaller value indicates a higher priority. If multiple rules have the same priority, the rule that is applied earlier takes effect.
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
   * 7F3DD2C1-0F6B-4575-9106-B2D50DF7A711
   */
  requestId?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * The value of this parameter is in CIDR notation. Example: 192.168.1.0/24.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The source port range.
   * 
   * @example
   * -1/-1
   */
  sourcePortRange?: string;
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
      dpiGroupIds: ModifyACLRuleResponseBodyDpiGroupIds,
      dpiSignatureIds: ModifyACLRuleResponseBodyDpiSignatureIds,
      gmtCreate: 'number',
      ipProtocol: 'string',
      name: 'string',
      policy: 'string',
      priority: 'number',
      requestId: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
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

