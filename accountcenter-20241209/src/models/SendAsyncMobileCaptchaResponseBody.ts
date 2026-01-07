// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncMobileCaptchaResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * False
   */
  data?: boolean;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1409E8EE-8F9A-506B-BACB-B9DF3634C287
   */
  requestId?: string;
  /**
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

