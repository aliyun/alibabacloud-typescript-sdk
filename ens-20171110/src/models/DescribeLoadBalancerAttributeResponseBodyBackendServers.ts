// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerAttributeResponseBodyBackendServers extends $dara.Model {
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port that is used by the backend server.
   * 
   * @example
   * 0
   */
  port?: string;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * i-5vb5h5njxiuhn48a****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server.
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
      port: 'string',
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

