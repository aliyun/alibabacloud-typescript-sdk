// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListListenersResponseBodyListenersTags } from "./ListListenersResponseBodyListenersTags";


export class ListListenersResponseBodyListeners extends $dara.Model {
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * listener-description
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-vu7folhh5ntm8u****
   */
  listenerId?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **Provisioning**: The listener is being created.
   * *   **Running**: The listener is running.
   * *   **Configuring**: The listener is being configured.
   * *   **Deleting**: The listener is being deleted.
   * 
   * @example
   * Running
   */
  listenerStatus?: string;
  /**
   * @remarks
   * The GWLB instance ID.
   * 
   * @example
   * gwlb-uf6hbeh795xlqln7g****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-5yapcb422i51ru****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListListenersResponseBodyListenersTags[];
  /**
   * @remarks
   * The timeout period of an idle TCP connection. Unit: seconds.
   * 
   * @example
   * 350
   */
  tcpIdleTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      serverGroupId: 'ServerGroupId',
      tags: 'Tags',
      tcpIdleTimeout: 'TcpIdleTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerDescription: 'string',
      listenerId: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      serverGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersTags },
      tcpIdleTimeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

