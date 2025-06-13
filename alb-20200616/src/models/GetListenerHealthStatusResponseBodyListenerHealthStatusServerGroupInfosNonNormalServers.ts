// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason } from "./GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason";


export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers extends $dara.Model {
  /**
   * @remarks
   * The backend port.
   * 
   * @example
   * 90
   */
  port?: number;
  /**
   * @remarks
   * The cause for the unhealthy state of the backend servers.
   */
  reason?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * rg-bp1bfa08ex*****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.168.8.10
   */
  serverIp?: string;
  /**
   * @remarks
   * The status of the health check. Valid values: Valid values:
   * 
   * *   **Initial**: indicates that health checks are configured for the NLB instance, but no data was found.
   * *   **Unhealthy**: indicates that the backend server consecutively fails health checks.
   * *   **Unused**: indicates that the weight of the backend server is 0.
   * *   **Unavailable**: indicates that health checks are disabled.
   * 
   * @example
   * Initial
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
      reason: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason,
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

