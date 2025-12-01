// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmDjbhReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * OK
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
   * Return message.
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
   * EF801DD1-D934-51B3-92D4-776CE17B184F
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

