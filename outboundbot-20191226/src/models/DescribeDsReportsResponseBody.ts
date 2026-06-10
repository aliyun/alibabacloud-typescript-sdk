// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDsReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Conversation flow information, formatted as key:{value:count}
   * 
   * @example
   * "{\\"标签1\\":{\\"标签值1\\":2},\\"标签2\\":{\\"标签值1\\":2},\\"标签3\\":{\\"标签值1\\":1,\\"标签值2\\":1}}"
   */
  dsReports?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 1364f208-982d-4d0c-89aa-d56e22b47589
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dsReports: 'DsReports',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dsReports: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

