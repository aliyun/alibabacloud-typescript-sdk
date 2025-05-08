// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBackendServersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of backend servers that you want to add to the Edge Load Balancer (ELB) instance. You can add up to 20 backend servers at a time.
   * 
   * >  Only Edge Node Service (ENS) instances that are in the running state can be added to the ELB instance as backend servers.
   * 
   * This parameter is required.
   */
  backendServersShrink?: string;
  /**
   * @remarks
   * The frontend port that is used by the Edge Load Balance (ELB) instance. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5qzdmxefgrpxd7oz2mefonvtx
   */
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServersShrink: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServersShrink: 'string',
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

