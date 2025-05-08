// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetBackendServersRequestBackendServers } from "./SetBackendServersRequestBackendServers";


export class SetBackendServersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of backend servers that you added. You can modify the weights of up to 20 backend servers in each request.
   * 
   * This parameter is required.
   */
  backendServers?: SetBackendServersRequestBackendServers[];
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
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: { 'type': 'array', 'itemType': SetBackendServersRequestBackendServers },
      loadBalancerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backendServers)) {
      $dara.Model.validateArray(this.backendServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

