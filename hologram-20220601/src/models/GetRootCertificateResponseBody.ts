// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRootCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result. The value is a JSON string, and the final certificate format is PEM.
   * 
   * @example
   * { "rootCertificate": "BEGIN xxxx"}
   */
  data?: string;
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
   * Indicates whether the operation is successful. Valid values: true: Successful. false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819A7F0F-2951-540F-BD94-6A41ECF0281F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      success: 'boolean',
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

