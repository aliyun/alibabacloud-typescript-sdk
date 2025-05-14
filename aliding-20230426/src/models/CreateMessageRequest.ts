// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMessageRequestContent } from "./CreateMessageRequestContent";


export class CreateMessageRequest extends $dara.Model {
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
   * 你好！
   */
  content?: CreateMessageRequestContent[];
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * assistantId
   */
  originalAssistantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * threadId123
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      content: 'content',
      metadata: 'metadata',
      originalAssistantId: 'originalAssistantId',
      role: 'role',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      content: { 'type': 'array', 'itemType': CreateMessageRequestContent },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      originalAssistantId: 'string',
      role: 'string',
      threadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

