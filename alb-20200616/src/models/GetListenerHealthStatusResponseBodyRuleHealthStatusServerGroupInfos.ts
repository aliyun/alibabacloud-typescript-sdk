// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServers } from "./GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServers";


export class GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfos extends $dara.Model {
  /**
   * @remarks
   * The action specified for the server group.
   * 
   * @example
   * TrafficMirror
   */
  actionType?: string;
  /**
   * @remarks
   * Indicates whether health checks are enabled. If **on** is returned, it indicates that health checks are enabled.
   * 
   * @example
   * on
   */
  healthCheckEnabled?: string;
  /**
   * @remarks
   * A list of unhealthy backend servers.
   */
  nonNormalServers?: GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServers[];
  /**
   * @remarks
   * The ID of the server group that is associated with the listener.
   * 
   * @example
   * vsp-bp1qjwo61pqz3ahlt****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      healthCheckEnabled: 'HealthCheckEnabled',
      nonNormalServers: 'NonNormalServers',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      healthCheckEnabled: 'string',
      nonNormalServers: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServers },
      serverGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nonNormalServers)) {
      $dara.Model.validateArray(this.nonNormalServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

