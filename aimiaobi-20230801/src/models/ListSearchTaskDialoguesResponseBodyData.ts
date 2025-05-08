// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSearchTaskDialoguesResponseBodyDataChatConfig } from "./ListSearchTaskDialoguesResponseBodyDataChatConfig";


export class ListSearchTaskDialoguesResponseBodyData extends $dara.Model {
  chatConfig?: ListSearchTaskDialoguesResponseBodyDataChatConfig;
  /**
   * @example
   * 2024-11-25 13:33:01
   */
  createTime?: string;
  /**
   * @example
   * 24
   */
  dialogueType?: number;
  /**
   * @example
   * xxx
   */
  goodText?: string;
  /**
   * @example
   * xxxx
   */
  originSessionId?: string;
  /**
   * @example
   * xxx
   */
  prompt?: string;
  /**
   * @example
   * thumbsUp
   */
  rating?: string;
  /**
   * @example
   * {}
   */
  responseBodyStr?: string;
  /**
   * @example
   * xxxx
   */
  sessionId?: string;
  tags?: string[];
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      chatConfig: 'ChatConfig',
      createTime: 'CreateTime',
      dialogueType: 'DialogueType',
      goodText: 'GoodText',
      originSessionId: 'OriginSessionId',
      prompt: 'Prompt',
      rating: 'Rating',
      responseBodyStr: 'ResponseBodyStr',
      sessionId: 'SessionId',
      tags: 'Tags',
      taskId: 'TaskId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConfig: ListSearchTaskDialoguesResponseBodyDataChatConfig,
      createTime: 'string',
      dialogueType: 'number',
      goodText: 'string',
      originSessionId: 'string',
      prompt: 'string',
      rating: 'string',
      responseBodyStr: 'string',
      sessionId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      text: 'string',
    };
  }

  validate() {
    if(this.chatConfig && typeof (this.chatConfig as any).validate === 'function') {
      (this.chatConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

