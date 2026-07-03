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
   * The ID of the ACL instance.
   * 
   * @example
   * acl-jdc7tir4fkplwr****
   */
  aclId?: string;
  /**
   * @remarks
   * The ID of the access control rule.
   * 
   * @example
   * acr-r8hezn2pi39s5a****
   */
  acrId?: string;
  /**
   * @remarks
   * The description of the access control rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * The destination CIDR block is in CIDR format. For example: 192.168.10.0/24.
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
   * The direction in which the access control rule is applied. Valid values:
   * 
   * - **in**: inbound. This is the direction of traffic from an external network to the on-premises network where the Smart Access Gateway instance is deployed.
   * - **out**: outbound. This is the direction of traffic from the on-premises network where the Smart Access Gateway instance is deployed to an external network.
   * 
   * @example
   * in
   */
  direction?: string;
  dpiGroupIds?: ModifyACLRuleResponseBodyDpiGroupIds;
  dpiSignatureIds?: ModifyACLRuleResponseBodyDpiSignatureIds;
  /**
   * @remarks
   * The timestamp that indicates when the access control rule was created.
   * 
   * The value is a UNIX timestamp. If rules have the same priority, the one with the smaller timestamp takes precedence.
   * 
   * @example
   * 1553777700000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The protocol used by the access control rule.
   * 
   * @example
   * ALL
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The name of the access control rule.
   * 
   * @example
   * doctest
   */
  name?: string;
  /**
   * @remarks
   * The authorization policy of the access control rule.
   * 
   * - **accept**: allows access.
   * - **drop**: denies access.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The priority of the access control rule.
   * 
   * A smaller value indicates a higher priority. If rules have the same priority, the one that is first delivered to the Smart Access Gateway device takes precedence.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F3DD2C1-0F6B-4575-9106-B2D50DF7A711
   */
  requestId?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * The source CIDR block is in CIDR format. For example: 192.168.1.0/24.
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

