// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrafficPolicy } from "./TrafficPolicy";


export class UpdateGatewayServiceTrafficPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   **zh-CN** (default): Chinese
   * *   **en-US**: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 429
   */
  gatewayId?: number;
  /**
   * @remarks
   * The traffic policy of the gateway.
   * 
   * This parameter is required.
   */
  gatewayTrafficPolicy?: TrafficPolicy;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-75c5036c083e4f89ba8ef9fafff2e902
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 411
   */
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayTrafficPolicy: 'GatewayTrafficPolicy',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayTrafficPolicy: TrafficPolicy,
      gatewayUniqueId: 'string',
      serviceId: 'number',
    };
  }

  validate() {
    if(this.gatewayTrafficPolicy && typeof (this.gatewayTrafficPolicy as any).validate === 'function') {
      (this.gatewayTrafficPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

