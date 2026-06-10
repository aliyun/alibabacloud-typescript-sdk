// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * OK
   */
  code?: string;
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
   * Response message
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
  /**
   * @remarks
   * Version number
   * 
   * @example
   * v2.4.1.xxxxxxx_release
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

