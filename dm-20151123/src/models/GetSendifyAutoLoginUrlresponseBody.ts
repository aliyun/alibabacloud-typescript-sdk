// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSendifyAutoLoginURLResponseBody extends $dara.Model {
  /**
   * @example
   * https://dingstore.cn
   */
  autoLoginURL?: string;
  /**
   * @example
   * 123423
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoLoginURL: 'AutoLoginURL',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLoginURL: 'string',
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

