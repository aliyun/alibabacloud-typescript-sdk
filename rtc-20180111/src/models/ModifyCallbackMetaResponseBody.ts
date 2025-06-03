// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCallbackMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * httpStatusCode
   * 
   * @example
   * 0
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * message
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * true
   */
  success?: boolean;
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

