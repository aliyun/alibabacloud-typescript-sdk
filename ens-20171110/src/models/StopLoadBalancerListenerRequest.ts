// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopLoadBalancerListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The listener port that you want to disable. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the ELB instance.
   * 
   * >  This parameter is required if the same port is used by listeners that use different protocols.
   * 
   * @example
   * tcp
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5sc1s9zrui8lpb8u7cl4f****
   */
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

