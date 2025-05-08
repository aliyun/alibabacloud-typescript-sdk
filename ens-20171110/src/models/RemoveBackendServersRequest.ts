// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveBackendServersRequestBackendServers } from "./RemoveBackendServersRequestBackendServers";


export class RemoveBackendServersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of backend servers that you want to remove. You can remove up to 20 backend servers at a time.
   * 
   * This parameter is required.
   */
  backendServers?: RemoveBackendServersRequestBackendServers[];
  /**
   * @remarks
   * The ID of the Edge Load Balancer (ELB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5ovkn1piwqmoqrfjdyhq4****
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
      backendServers: { 'type': 'array', 'itemType': RemoveBackendServersRequestBackendServers },
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

