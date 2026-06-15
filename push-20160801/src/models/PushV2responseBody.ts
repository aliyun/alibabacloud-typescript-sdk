// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the push message.
   * 
   * @example
   * 11747540****88320
   */
  messageId?: string;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 159E4422-6624-****-8943-DFD98D34858C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
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

