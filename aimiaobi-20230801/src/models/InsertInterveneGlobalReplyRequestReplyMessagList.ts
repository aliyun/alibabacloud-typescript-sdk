// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertInterveneGlobalReplyRequestReplyMessagList extends $dara.Model {
  message?: string;
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

