// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayOption } from "./GatewayOption";


export class GetGatewayOptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The value 200 indicates that the request is successfully processed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The detailed configurations of the gateway.
   * 
   * *   **TraceDetails**: the sampling description of Managed Service for OpenTelemetry. Content: TraceEnabled indicates whether Managed Service for OpenTelemetry is activated. Sample indicates the sampling rate of Managed Service for OpenTelemetry.
   * *   **LogConfigDetails**: the description of Simple Log Service. Content: LogEnabled indicates whether Simple Log Service is activated. ProjectName indicates the Simple Log Service project to which logs are delivered. LogStoreName indicates the name of the Logstore.
   * *   **EnableHardwareAcceleration**: indicates whether hardware acceleration is enabled.
   * *   **DisableHttp2Alpn**: indicates whether the HTTP/2 protocol is disabled.
   * *   **EnableWaf**: indicates whether Web Application Firewall (WAF) is enabled.
   * 
   * @example
   * {\\"LogConfigDetails\\": {\\"LogEnabled\\": False}, \\"TraceDetails\\": {\\"TraceEnabled\\": False}}
   */
  data?: GatewayOption;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * *   If the request is successful, a success message is returned.
   * *   If the request fails, an error message is returned, such as the "TaskId not found" message.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C92F4A4D-A2FD-593E-839E-F3D4DFD2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GatewayOption,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

