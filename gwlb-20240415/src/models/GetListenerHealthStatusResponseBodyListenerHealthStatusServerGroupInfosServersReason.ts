// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosServersReason extends $dara.Model {
  /**
   * @remarks
   * The reason why **Status** indicates an unhealthy status. Valid values:
   * 
   * *   **CONNECT_TIMEOUT**: The GWLB instance failed to connect to the backend server within the specified period of time.
   * *   **CONNECT_FAILED**: The GWLB instance failed to connect to the backend server.
   * *   **RECV_RESPONSE_TIMEOUT**: The GWLB instance failed to receive a response from the backend server within the specified period of time.
   * *   **CONNECT_INTERRUPT**: The connection between the health check and the backend server was interrupted.
   * *   **HTTP_CODE_NOT_MATCH**: The HTTP status code from the backend server is not the expected one.
   * *   **HTTP_INVALID_HEADER**: The format of the response from the backend servers is invalid.
   * 
   * @example
   * CONNECT_TIMEOUT
   */
  reasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      reasonCode: 'ReasonCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

