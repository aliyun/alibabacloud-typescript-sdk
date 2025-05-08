// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateGatewayRouteCORSRequestCorsJSON } from "./UpdateGatewayRouteCorsrequestCorsJson";


export class UpdateGatewayRouteCORSRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. In compliance with [RFC 7231](https://tools.ietf.org/html/rfc7231), the backend service must return a response based on the language used by the user.
   * 
   * *   No default value.
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The information about the CORS policy.
   */
  corsJSON?: UpdateGatewayRouteCORSRequestCorsJSON;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 85
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-f70a6ddf2f0941a2bb997b2d16028f37
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the associated record.
   * 
   * @example
   * 55
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      corsJSON: 'CorsJSON',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      corsJSON: UpdateGatewayRouteCORSRequestCorsJSON,
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  validate() {
    if(this.corsJSON && typeof (this.corsJSON as any).validate === 'function') {
      (this.corsJSON as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

