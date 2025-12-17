// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * B725275B-50C6-5A49-A9FD-F0332FCB3351
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

