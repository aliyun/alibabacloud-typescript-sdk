// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBackendServersRequestBackendServers extends $dara.Model {
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.168.XXX
   */
  ip?: string;
  /**
   * @remarks
   * The backend port used by the load balancing instance.
   * 
   * @example
   * 3309
   */
  port?: number;
  /**
   * @remarks
   * The ENS instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5uf6dwyzch3wly790****
   */
  serverId?: string;
  /**
   * @remarks
   * The backend server type. Valid values:
   * - **ens**: ENS instance.
   * - **eni**: network interface controller (NIC) instance.
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
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
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

export class AddBackendServersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of backend servers to add. You can add up to 20 backend servers per invoke.
   * 
   * > Backend servers (ENS instances) must be in the Running state before they can be added to a load balancing instance.
   * 
   * This parameter is required.
   */
  backendServers?: AddBackendServersRequestBackendServers[];
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
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: { 'type': 'array', 'itemType': AddBackendServersRequestBackendServers },
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

