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

