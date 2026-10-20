// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBackendServersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of backend servers to add. You can add up to 20 backend servers per invoke.
   * 
   * > Backend servers (ENS instances) must be in the Running state before they can be added to a load balancing instance.
   * 
   * This parameter is required.
   */
  backendServersShrink?: string;
  /**
   * @remarks
   * The frontend port used by the load balancing instance. Valid values: **1** to **65535**.
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

