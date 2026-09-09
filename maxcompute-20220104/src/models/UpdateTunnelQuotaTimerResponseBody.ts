// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTunnelQuotaTimerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request was received and is being processed.
   * 
   * - 2xx: success. The request was successfully received, understood, and accepted by the server.
   * 
   * - 3xx: redirection. The request is redirected. You must take further action to complete the request.
   * 
   * - 4xx: client error. The request contains invalid request parameters or syntax, or cannot be fulfilled.
   * 
   * - 5xx: server error. The server cannot fulfill the request for other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc12e4316675560945192024e1044
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

