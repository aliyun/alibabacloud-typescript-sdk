// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayOption } from "./GatewayOption";


export class GetGatewayOptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The gateway operation details.
   * 
   * - **TraceDetails**: The XTrace sampling description. It includes TraceEnabled, which indicates whether XTrace is enabled, and Sample, which indicates the XTrace sampling rate.
   * 
   * - **LogConfigDetails**: The log delivery service description. It includes LogEnabled, which indicates whether log delivery to Simple Log Service (SLS) is enabled, ProjectName, which indicates the destination project for log delivery, and LogStoreName, which indicates the Logstore name.
   * 
   * - **EnableHardwareAcceleration**: Indicates whether hardware acceleration is enabled.
   * 
   * - **DisableHttp2Alpn**: Indicates whether HTTP/2 is disabled.
   * 
   * - **EnableWaf**: Indicates whether Web Application Firewall (WAF) is enabled.
   * 
   * @example
   * {\\"LogConfigDetails\\": {\\"LogEnabled\\": False}, \\"TraceDetails\\": {\\"TraceEnabled\\": False}}
   */
  data?: GatewayOption;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * - If the request is successful, a success message is returned.
   * - If the request fails, the cause of the failure is returned, such as TaskId not found.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C92F4A4D-A2FD-593E-839E-F3D4DFD2****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * - `true`: The request is successful.
   * - `false`: The request fails.
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

