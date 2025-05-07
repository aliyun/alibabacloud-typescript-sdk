// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsertInterveneGlobalReplyRequestReplyMessagList } from "./InsertInterveneGlobalReplyRequestReplyMessagList";


export class InsertInterveneGlobalReplyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx_efm
   */
  agentKey?: string;
  replyMessagList?: InsertInterveneGlobalReplyRequestReplyMessagList[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      replyMessagList: 'ReplyMessagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      replyMessagList: { 'type': 'array', 'itemType': InsertInterveneGlobalReplyRequestReplyMessagList },
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

