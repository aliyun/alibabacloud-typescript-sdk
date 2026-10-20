// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetBackendServersRequestBackendServers extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.0.10
   */
  ip?: string;
  /**
   * @remarks
   * The instance ID of the backend server.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5ze0o05xccvbljtn****
   */
  serverId?: string;
  /**
   * @remarks
   * The server type of the backend server. Valid values:
   * - **ens**: ENS instance.
   * - **eni**: elastic network interfaces (ENIs) instance. The backend server is a network interface controller (NIC).
   * 
   * @example
   * ens
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server. Default value: 100. Valid values: **0** to **100**.
   * 
   * > A value of 0 indicates that no requests are forwarded to the backend server.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
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
   * The list of backend servers to add. You can modify up to 20 backend servers in each call.
   * 
   * This parameter is required.
   */
  backendServers?: SetBackendServersRequestBackendServers[];
  /**
   * @remarks
   * The ID of the load balancing instance.
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

