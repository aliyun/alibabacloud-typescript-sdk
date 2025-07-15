// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendLiveMessageGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the message, which is a unique identifier that can be used to delete the message. The ID can be up to 64 bytes in length and can contain letters and digits.
   * 
   * @example
   * 169830****
   */
  msgTid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E4C1245F-597B-1BD1-B9BB-9D220E99****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      msgTid: 'MsgTid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgTid: 'string',
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

