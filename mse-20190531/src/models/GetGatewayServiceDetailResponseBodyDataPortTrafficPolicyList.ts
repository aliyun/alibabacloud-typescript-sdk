// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrafficPolicy } from "./TrafficPolicy";


export class GetGatewayServiceDetailResponseBodyDataPortTrafficPolicyList extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-2837hfd91h34dbg87364g*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1667460287386
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1667460287386
   */
  gmtModified?: string;
  /**
   * @remarks
   * The port ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @remarks
   * The service port number.
   * 
   * @example
   * 8080
   */
  servicePort?: number;
  /**
   * @remarks
   * The traffic policy.
   */
  trafficPolicy?: TrafficPolicy;
  static names(): { [key: string]: string } {
    return {
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      serviceId: 'ServiceId',
      servicePort: 'ServicePort',
      trafficPolicy: 'TrafficPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      serviceId: 'number',
      servicePort: 'number',
      trafficPolicy: TrafficPolicy,
    };
  }

  validate() {
    if(this.trafficPolicy && typeof (this.trafficPolicy as any).validate === 'function') {
      (this.trafficPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

