// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBackendServersRequestBackendServers extends $dara.Model {
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.168.X.X
   */
  ip?: string;
  /**
   * @remarks
   * The backend port that is used by the ELB instance.
   * 
   * @example
   * 3309
   */
  port?: number;
  /**
   * @remarks
   * The ID of the ENS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5uf6dwyzch3wly790****
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

