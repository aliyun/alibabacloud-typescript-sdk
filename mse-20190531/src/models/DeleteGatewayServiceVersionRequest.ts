// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGatewayServiceVersionRequest extends $dara.Model {
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
   * The unique ID of the gateway.
   * 
   * @example
   * gw-b6988bd16920479d9104e1729f97****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 777
   */
  serviceId?: number;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * {\\"name\\":\\"app\\",\\"labels\\":[{\\"key\\":\\"app\\",\\"value\\":\\"demo-server\\"}]}
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      serviceId: 'number',
      serviceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

