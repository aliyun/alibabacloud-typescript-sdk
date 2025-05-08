// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryClusterInfoResponseBodyDataInstanceModels extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  creationTimestamp?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  healthStatus?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  internetIp?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  ip?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  podName?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  role?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  singleTunnelVip?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      creationTimestamp: 'CreationTimestamp',
      healthStatus: 'HealthStatus',
      internetIp: 'InternetIp',
      ip: 'Ip',
      podName: 'PodName',
      role: 'Role',
      singleTunnelVip: 'SingleTunnelVip',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTimestamp: 'string',
      healthStatus: 'string',
      internetIp: 'string',
      ip: 'string',
      podName: 'string',
      role: 'string',
      singleTunnelVip: 'string',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

