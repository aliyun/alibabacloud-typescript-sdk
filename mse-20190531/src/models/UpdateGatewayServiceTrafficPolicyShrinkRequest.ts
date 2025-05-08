// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayServiceTrafficPolicyShrinkRequest extends $dara.Model {
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
  gatewayTrafficPolicyShrink?: string;
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
      gatewayTrafficPolicyShrink: 'GatewayTrafficPolicy',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayTrafficPolicyShrink: 'string',
      gatewayUniqueId: 'string',
      serviceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

