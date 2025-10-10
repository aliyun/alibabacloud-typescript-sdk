// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners extends $dara.Model {
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-0bfuc****
   */
  listenerId?: string;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol.
   * 
   * @example
   * HTTPS
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The Server Load Balancer (SLB) instance ID.
   * 
   * @example
   * lb-bp1o94dp5i6ea****
   */
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations extends $dara.Model {
  /**
   * @remarks
   * The listeners that are associated with the security policy.
   */
  relatedListeners?: ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners[];
  /**
   * @remarks
   * The security policy ID.
   * 
   * @example
   * scp-bp1bpn0kn9****
   */
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      relatedListeners: 'RelatedListeners',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedListeners: { 'type': 'array', 'itemType': ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners },
      securityPolicyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedListeners)) {
      $dara.Model.validateArray(this.relatedListeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  requestId?: string;
  /**
   * @remarks
   * The security policies and the listeners that are associated with the security policies.
   */
  secrityPolicyRelations?: ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secrityPolicyRelations: 'SecrityPolicyRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secrityPolicyRelations: { 'type': 'array', 'itemType': ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations },
    };
  }

  validate() {
    if(Array.isArray(this.secrityPolicyRelations)) {
      $dara.Model.validateArray(this.secrityPolicyRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

