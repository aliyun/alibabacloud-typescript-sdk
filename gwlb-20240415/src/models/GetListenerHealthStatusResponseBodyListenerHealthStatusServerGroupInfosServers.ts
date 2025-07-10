// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosServersReason } from "./GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosServersReason";


export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosServers extends $dara.Model {
  /**
   * @remarks
   * The backend port.
   * 
   * @example
   * 6081
   */
  port?: number;
  /**
   * @remarks
   * The reason why **Status** indicates an unhealthy status.
   */
  reason?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosServersReason;
  /**
   * @remarks
   * The backend server ID.
   * 
   * @example
   * i-2ze4rnh8yj9kif3z****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 192.168.0.XXX
   */
  serverIp?: string;
  /**
   * @remarks
   * The health status of the backend server. Valid values:
   * 
   * *   **Initial**: Health checks are configured for the GWLB instance, but no data is found.
   * *   **Unhealthy**: The backend server consecutively fails health checks.
   * *   **Unused**: The backend server is not in use.
   * *   **Unavailable**: Health checks are disabled.
   * *   **Healthy**: The backend server is healthy.
   * 
   * @example
   * Healthy
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      reason: 'Reason',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      reason: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosServersReason,
      serverId: 'string',
      serverIp: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.reason && typeof (this.reason as any).validate === 'function') {
      (this.reason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

