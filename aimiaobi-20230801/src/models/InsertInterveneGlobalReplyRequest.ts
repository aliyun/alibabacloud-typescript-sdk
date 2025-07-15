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

