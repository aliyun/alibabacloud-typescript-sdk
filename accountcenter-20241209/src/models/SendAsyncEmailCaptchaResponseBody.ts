// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncEmailCaptchaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The operation result.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Instance invalid-id-123 does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E9636D3-6C10-5FAB-B391-EDD122E28BC6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

