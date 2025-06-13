// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServersReason extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned from the server, for example, **302**.
   * 
   * > A value is returned only if **ReasonCode** is set to **RESPONSE_MISMATCH**.
   * 
   * @example
   * 302
   */
  actualResponse?: string;
  /**
   * @remarks
   * The HTTP status code returned after backend servers pass health checks.
   * 
   * Valid values: **HTTP_2xx**, **HTTP_3xx**, **HTTP_4xx**, and **HTTP_5xx**. Multiple status codes are separated by commas (,).
   * 
   * > A value is returned only if **ReasonCode** is set to **RESPONSE_MISMATCH**.
   * 
   * @example
   * HTTP_2xx
   */
  expectedResponse?: string;
  /**
   * @remarks
   * The reason why the value of **Status** is Unhealthy. Only forwarding rules for HTTP and HTTPS listeners support this parameter.
   * 
   * *   **CONNECT_TIMEOUT**: ALB failed to connect to the backend server within the specified period of time.
   * *   **CONNECT_FAILED**: ALB failed to connect to the backend server.
   * *   **RECV_RESPONSE_FAILED**: ALB failed to receive a response from the backend server.
   * *   **RECV_RESPONSE_TIMEOUT**: ALB failed to receive a response from the backend server within the specified period of time.
   * *   **SEND_REQUEST_FAILED**: ALB failed to send a request to the backend server.
   * *   **SEND_REQUEST_TIMEOUT**: ALB failed to send a request to the backend server within the specified period of time.
   * *   **RESPONSE_FORMAT_ERROR**: The format of the response from the backend server is invalid.
   * *   **RESPONSE_MISMATCH**: The HTTP status code returned from the backend server is not the expected one.
   * 
   * @example
   * RESPONSE_MISMATCH
   */
  reasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      actualResponse: 'ActualResponse',
      expectedResponse: 'ExpectedResponse',
      reasonCode: 'ReasonCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualResponse: 'string',
      expectedResponse: 'string',
      reasonCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

