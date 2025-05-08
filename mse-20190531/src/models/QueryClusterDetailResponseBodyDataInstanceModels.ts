// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryClusterDetailResponseBodyDataInstanceModels extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the instance was created.
   * 
   * @example
   * 1578575377732
   */
  creationTimestamp?: string;
  /**
   * @remarks
   * The health status of the instance.
   * 
   * @example
   * Running
   */
  healthStatus?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.98.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.12.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * mse-7413****-159616656****-reg-center-0-0
   */
  podName?: string;
  /**
   * @remarks
   * The role.
   * 
   * @example
   * Peer
   */
  role?: string;
  /**
   * @remarks
   * The single-thread IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  singleTunnelVip?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-shanghai-f
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

