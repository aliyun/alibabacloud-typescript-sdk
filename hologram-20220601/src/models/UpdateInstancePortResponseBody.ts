// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstancePortResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
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
   * @remarks
   * Indicates whether an exception occurred during the request, which is independent of the business result.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true: Successful. false: Failed.
   * 
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

