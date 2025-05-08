// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateGatewayRouteRetryRequestRetryJSON } from "./UpdateGatewayRouteRetryRequestRetryJson";


export class UpdateGatewayRouteRetryRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
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
   * 501
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-3f97e2989c344f35ab3fd62b19f1d10a
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the associated record.
   * 
   * @example
   * 508
   */
  id?: number;
  /**
   * @remarks
   * The information about the retry policy.
   */
  retryJSON?: UpdateGatewayRouteRetryRequestRetryJSON;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      retryJSON: 'RetryJSON',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
      retryJSON: UpdateGatewayRouteRetryRequestRetryJSON,
    };
  }

  validate() {
    if(this.retryJSON && typeof (this.retryJSON as any).validate === 'function') {
      (this.retryJSON as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

