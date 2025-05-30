// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobMetricResponseBodyData } from "./ListJobMetricResponseBodyData";


export class ListJobMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListJobMetricResponseBodyData;
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
   * HTTP status code.
   * - 1xx: Informational response - Request received, processing continues.
   * - 2xx: Success - The request has been successfully received, understood, and accepted by the server.
   * - 3xx: Redirection - Further action must be taken to complete the request.
   * - 4xx: Client error - The request contains bad syntax or cannot be fulfilled.
   * - 5xx: Server error - The server failed to fulfill an apparently valid request.
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
      data: ListJobMetricResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
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

