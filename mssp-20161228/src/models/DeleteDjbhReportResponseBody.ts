// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDjbhReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Prompt message for the returned result.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 86786E4C-6416-55CF-9AB6-5E275B68801D
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

