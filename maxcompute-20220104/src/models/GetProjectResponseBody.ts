// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProjectResponseBodyData } from "./GetProjectResponseBodyData";


export class GetProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetProjectResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   1xx: informational response. The request is received and is being processed.
   * *   2xx: success. The request is successfully received, understood, and accepted by the server.
   * *   3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * *   4xx: client error. The request contains invalid request parameters and syntaxes, or specific request conditions cannot be met.
   * *   5xx: server error. The server cannot meet requirements due to other reasons.
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
   * 0b87b7b316643495896551555e855b
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
      data: GetProjectResponseBodyData,
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

