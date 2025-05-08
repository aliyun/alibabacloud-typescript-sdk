// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveBackendServersResponseBodyBackendServersBackendServer extends $dara.Model {
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.1XX.X.X
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
   * The instance ID of the backend server.
   * 
   * @example
   * i-5vb5h5njxiuhn48a****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **ens**: an ENS instance.
   * *   **eni**: an ENI.
   * 
   * @example
   * ens
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * >  The value 0 indicates that requests are not forwarded to the backend server.
   * 
   * @example
   * 50
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

