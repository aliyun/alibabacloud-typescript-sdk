// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveBackendServersRequestBackendServers extends $dara.Model {
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.XXX.X.X
   */
  ip?: string;
  /**
   * @remarks
   * The backend port that is used by the Edge Load Balancer (ELB) instance.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The instance ID of the backend server.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5uf68ts0fqexe1a4n****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **ens**: an Edge Node Service (ENS) instance.
   * *   **eni**: an Elastic Network Interface (ENI).
   * 
   * @example
   * ens
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
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

