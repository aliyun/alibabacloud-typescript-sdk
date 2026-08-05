// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendLiveMessageGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the message, which can be used to delete the message. The ID can contain only letters and digits and can be up to 64 bytes in length.
   * 
   * @example
   * 169830****
   */
  msgTid?: string;
  /**
   * @remarks
   * The ID of the request.
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

