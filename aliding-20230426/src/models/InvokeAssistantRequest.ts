// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InvokeAssistantRequestContent } from "./InvokeAssistantRequestContent";
import { InvokeAssistantRequestHistory } from "./InvokeAssistantRequestHistory";


export class InvokeAssistantRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * assistantId1
   */
  assistantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [
   *     {
   *         "type": "text",
   *         "text": "你好"
   *     }
   * ]
   */
  content?: InvokeAssistantRequestContent[];
  /**
   * @example
   * []
   */
  history?: InvokeAssistantRequestHistory[];
  /**
   * @example
   * sessionId1
   */
  sessionId?: string;
  /**
   * @example
   * false
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      content: 'content',
      history: 'history',
      sessionId: 'sessionId',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      content: { 'type': 'array', 'itemType': InvokeAssistantRequestContent },
      history: { 'type': 'array', 'itemType': InvokeAssistantRequestHistory },
      sessionId: 'string',
      stream: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    if(Array.isArray(this.history)) {
      $dara.Model.validateArray(this.history);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

