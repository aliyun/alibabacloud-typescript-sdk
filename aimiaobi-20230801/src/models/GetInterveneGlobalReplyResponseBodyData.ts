// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInterveneGlobalReplyResponseBodyDataReplyMessagList } from "./GetInterveneGlobalReplyResponseBodyDataReplyMessagList";


export class GetInterveneGlobalReplyResponseBodyData extends $dara.Model {
  code?: number;
  replyMessagList?: GetInterveneGlobalReplyResponseBodyDataReplyMessagList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      replyMessagList: 'ReplyMessagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      replyMessagList: { 'type': 'array', 'itemType': GetInterveneGlobalReplyResponseBodyDataReplyMessagList },
    };
  }

  validate() {
    if(Array.isArray(this.replyMessagList)) {
      $dara.Model.validateArray(this.replyMessagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

