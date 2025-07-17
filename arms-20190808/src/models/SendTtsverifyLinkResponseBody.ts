// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendTTSVerifyLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the text message was sent.
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 21E85B16-75A6-429A-9F65-8AAC9A54****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
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

