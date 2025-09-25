// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SseChatResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: any;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 30D68C4C-4512-58A7-A328-568015B39A02
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
      data: 'any',
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

