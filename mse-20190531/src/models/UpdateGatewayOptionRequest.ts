// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayOption } from "./GatewayOption";


export class UpdateGatewayOptionRequest extends $dara.Model {
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
   * 421
   */
  gatewayId?: number;
  /**
   * @remarks
   * The detailed configurations of the gateway.
   * 
   * *   **TraceDetails**: the sampling description of Managed Service for OpenTelemetry. Content: TraceEnabled indicates whether Managed Service for OpenTelemetry is activated. Sample indicates the sampling rate of Managed Service for OpenTelemetry.
   * *   **LogConfigDetails**: the description of Simple Log Service. Content: LogEnabled indicates whether Simple Log Service is activated. ProjectName indicates the Simple Log Service project to which logs are delivered. LogStoreName indicates the name of the Logstore.
   * *   **EnableHardwareAcceleration**: indicates whether hardware acceleration is enabled.
   * *   **DisableHttp2Alpn**: indicates whether the HTTP/2 protocol is disabled.
   * *   **EnableWaf**: indicates whether Web Application Firewall (WAF) is enabled.
   */
  gatewayOption?: GatewayOption;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-83b0ddb569434f82b9fe8e4c60c4****
   */
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayOption: 'GatewayOption',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayOption: GatewayOption,
      gatewayUniqueId: 'string',
    };
  }

  validate() {
    if(this.gatewayOption && typeof (this.gatewayOption as any).validate === 'function') {
      (this.gatewayOption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

