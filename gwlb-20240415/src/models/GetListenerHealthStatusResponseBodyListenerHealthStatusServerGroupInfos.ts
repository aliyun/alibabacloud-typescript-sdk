// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosServers } from "./GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosServers";


export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfos extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-0vdsbyszro3nr6****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The backend servers.
   */
  servers?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosServers[];
  static names(): { [key: string]: string } {
    return {
      healthCheckEnabled: 'HealthCheckEnabled',
      serverGroupId: 'ServerGroupId',
      servers: 'Servers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckEnabled: 'boolean',
      serverGroupId: 'string',
      servers: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosServers },
    };
  }

  validate() {
    if(Array.isArray(this.servers)) {
      $dara.Model.validateArray(this.servers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

