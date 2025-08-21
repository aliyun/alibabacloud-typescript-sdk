// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetBackendServersRequestBackendServers extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that you use as the backend server.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5ze0o05xccvbljtn****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **ens**: ENS instance
   * *   **eni**: elastic network interface (ENI)
   * 
   * @example
   * ens
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server. Default value: 100. Valid values: **0** to **100**.
   * 
   * >  The value 0 indicates that requests are not forwarded to the backend server.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

