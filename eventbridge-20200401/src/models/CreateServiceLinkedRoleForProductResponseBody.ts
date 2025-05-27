// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceLinkedRoleForProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. The value Success indicates that the request is successful. Other values indicate that the request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  httpCode?: number;
  /**
   * @remarks
   * The returned message. If the request is successful, success is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C36345A1-75F3-5A1A-BFCF-33B8271971FA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. If the operation was successful, the value true is returned.
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

