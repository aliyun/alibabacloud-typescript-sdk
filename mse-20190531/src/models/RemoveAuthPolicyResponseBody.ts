// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAuthPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 500
   */
  code?: number;
  /**
   * @remarks
   * Data overview.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 9515ACA4-E94D-440D-989E-C379FCED****
   */
  requestId?: string;
  /**
   * @remarks
   * Request result, with the following values:
   * 
   * - `true`: The request is successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
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

