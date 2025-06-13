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

