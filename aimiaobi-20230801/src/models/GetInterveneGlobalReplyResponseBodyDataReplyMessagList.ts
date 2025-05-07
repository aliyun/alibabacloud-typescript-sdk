// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterveneGlobalReplyResponseBodyDataReplyMessagList extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * namespace_qa_query
   */
  replyType?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      replyType: 'ReplyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      replyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

