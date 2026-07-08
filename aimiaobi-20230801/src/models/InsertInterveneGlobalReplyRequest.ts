// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertInterveneGlobalReplyRequestReplyMessagList extends $dara.Model {
  /**
   * @remarks
   * Reply content
   * 
   * @example
   * 抱歉，问题我无法回答
   */
  message?: string;
  /**
   * @remarks
   * Reply type
   * 
   * @example
   * 全局回复的类型
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

export class InsertInterveneGlobalReplyRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxx_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * List of reply content
   */
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

