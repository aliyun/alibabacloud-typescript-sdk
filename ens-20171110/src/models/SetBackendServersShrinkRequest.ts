// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetBackendServersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of backend servers that you added. You can modify the weights of up to 20 backend servers in each request.
   * 
   * This parameter is required.
   */
  backendServersShrink?: string;
  /**
   * @remarks
   * The ID of the Edge Load Balancer (ELB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5s7crik3yo3bp03gqrbp5****
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

