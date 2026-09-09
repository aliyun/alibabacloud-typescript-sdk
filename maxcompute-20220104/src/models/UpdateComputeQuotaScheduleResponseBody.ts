// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeQuotaScheduleResponseBody extends $dara.Model {
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
   * QUOTA_PLAN_NOT_FOUND
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * plan \\"***\\" does not exist
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: an informational response. The request was received and is being processed.
   * 
   * - 2xx: a success response. The request was successfully received, understood, and accepted by the server.
   * 
   * - 3xx: a redirection response. The request was redirected. You must take further action to complete the request.
   * 
   * - 4xx: a client error. The request contains invalid request parameters or syntax, or cannot be fulfilled for a specific reason.
   * 
   * - 5xx: a server error. The server cannot fulfill the request for other reasons.
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
   * 0be3e0aa16667684362147582e038f
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

