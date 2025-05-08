// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerListenersResponseBodyListenersListener extends $dara.Model {
  /**
   * @remarks
   * The backend port that is used by the ELB instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 3306
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The timestamp when the listener was created.
   * 
   * @example
   * 2022-08-15T08:42:57Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The listener port that is used for HTTP-to-HTTPS redirection.
   * 
   * @example
   * 443
   */
  forwardPort?: string;
  /**
   * @remarks
   * Indicates whether HTTP-to-HTTPS redirection is enabled for the listener. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  listenerForward?: string;
  /**
   * @remarks
   * The listening port.
   * 
   * @example
   * 8080
   */
  listenerPort?: string;
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * @example
   * lb-51a5fhou****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The network transmission protocol that is used by the listener.
   * 
   * *   **tcp**
   * *   **udp**
   * *   **http**
   * *   **https**
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **running**
   * *   **stopped**
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      createTime: 'CreateTime',
      description: 'Description',
      forwardPort: 'ForwardPort',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      createTime: 'string',
      description: 'string',
      forwardPort: 'string',
      listenerForward: 'string',
      listenerPort: 'string',
      loadBalancerId: 'string',
      protocol: 'string',
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

