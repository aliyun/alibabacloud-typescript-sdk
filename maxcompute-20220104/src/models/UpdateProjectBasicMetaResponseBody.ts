// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectBasicMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the request.
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
   * - 1xx: Informational response - The request has been received and is being processed.
   * 
   * - 2xx: Success - The request was successfully received, understood, and accepted.
   * 
   * - 3xx: Redirection - The request was redirected. Further action is needed to complete the request.
   * 
   * - 4xx: Client error - The request contains incorrect request parameters or syntax, or cannot be fulfilled.
   * 
   * - 5xx: Server error - The server failed to fulfill the request for other reasons.
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
   * 0b87b7e216652820458545253e8b0a
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

