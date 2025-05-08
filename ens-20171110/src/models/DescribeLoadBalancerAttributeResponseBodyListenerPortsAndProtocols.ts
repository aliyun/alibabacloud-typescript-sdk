// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocols extends $dara.Model {
  /**
   * @remarks
   * The backend port that is used by the ELB instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 6000
   */
  backendServerPort?: number;
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
   * The destination listening port to which requests are forwarded.
   * 
   * @example
   * 0
   */
  forwardPort?: number;
  /**
   * @remarks
   * Indicates whether the listener is enabled.
   * 
   * @example
   * off
   */
  listenerForward?: string;
  /**
   * @remarks
   * The listener port of the instance.
   * 
   * @example
   * 8080
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol of the instance.
   * 
   * @example
   * tcp
   */
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      description: 'Description',
      forwardPort: 'ForwardPort',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      description: 'string',
      forwardPort: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

