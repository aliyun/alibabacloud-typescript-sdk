// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetComputeQuotaScheduleResponseBodyData } from "./GetComputeQuotaScheduleResponseBodyData";


export class GetComputeQuotaScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetComputeQuotaScheduleResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * QUOTA_UNKNOWN_NICKNAME
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Cannot found quota **
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
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
   * B42CA730-8187-50F1-9FE0-6733297036DB
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
      data: { 'type': 'array', 'itemType': GetComputeQuotaScheduleResponseBodyData },
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

