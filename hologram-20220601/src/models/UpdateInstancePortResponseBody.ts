// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstancePortResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D1303CD4-AA70-5998-8025-F55B22C50840
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
      data: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

