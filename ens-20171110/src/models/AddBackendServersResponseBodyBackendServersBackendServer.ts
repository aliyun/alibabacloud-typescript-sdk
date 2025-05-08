// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBackendServersResponseBodyBackendServersBackendServer extends $dara.Model {
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.168.0.1
   */
  ip?: string;
  /**
   * @remarks
   * The backend port that is used by the ELB instance.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The ID of the instance that is used as the backend server.
   * 
   * @example
   * i-5uf6hj58zvml4ali8****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **ens**: ENS instance.
   * *   **eni**: ENI.
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

