// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceLinkedRoleForProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request. \\`Success\\` indicates that the request was successful. For more information about error codes, see the Error codes section.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: a 2xx status code.
   * 
   * - **3xx**: a 3xx status code.
   * 
   * - **4xx**: a 4xx status code.
   * 
   * - **5xx**: a 5xx status code.
   * 
   * If this parameter is not specified, all HTTP status codes are queried.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The returned message. If the request is successful, \\`success\\` is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C36345A1-75F3-5A1A-BFCF-33B8271971FA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. If the request is successful, \\`true\\` is returned.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
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

