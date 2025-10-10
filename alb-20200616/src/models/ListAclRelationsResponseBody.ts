// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAclRelationsResponseBodyAclRelationsRelatedListeners extends $dara.Model {
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
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
   * The ID of the SLB instance.
   * 
   * @example
   * lb-bp1b6c719dfa08ex****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The association status between the ACL and the listener.
   * 
   * *   **Associating**
   * *   **Associated**
   * *   **Dissociating**
   * 
   * @example
   * Associated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclRelationsResponseBodyAclRelations extends $dara.Model {
  /**
   * @remarks
   * ACL ID
   * 
   * @example
   * nacl-hp34s2h0xx1ht4nwo****
   */
  aclId?: string;
  /**
   * @remarks
   * The listeners that are associated with the ACL.
   */
  relatedListeners?: ListAclRelationsResponseBodyAclRelationsRelatedListeners[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      relatedListeners: 'RelatedListeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      relatedListeners: { 'type': 'array', 'itemType': ListAclRelationsResponseBodyAclRelationsRelatedListeners },
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

export class ListAclRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The relations between the specified ACL and the listeners.
   */
  aclRelations?: ListAclRelationsResponseBodyAclRelations[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclRelations: 'AclRelations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRelations: { 'type': 'array', 'itemType': ListAclRelationsResponseBodyAclRelations },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclRelations)) {
      $dara.Model.validateArray(this.aclRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

