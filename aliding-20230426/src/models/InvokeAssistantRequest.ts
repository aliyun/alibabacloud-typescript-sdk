// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InvokeAssistantRequestMessages } from "./InvokeAssistantRequestMessages";


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
   */
  messages?: InvokeAssistantRequestMessages[];
  /**
   * @example
   * assistantId2
   */
  originalAssistantId?: string;
  /**
   * @example
   * sessionId1
   */
  sessionId?: string;
  /**
   * @example
   * agentKey1
   */
  sourceIdOfOriginalAssistantId?: string;
  /**
   * @example
   * 1
   */
  sourceTypeOfOriginalAssistantId?: string;
  /**
   * @example
   * false
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      messages: 'messages',
      originalAssistantId: 'originalAssistantId',
      sessionId: 'sessionId',
      sourceIdOfOriginalAssistantId: 'sourceIdOfOriginalAssistantId',
      sourceTypeOfOriginalAssistantId: 'sourceTypeOfOriginalAssistantId',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      messages: { 'type': 'array', 'itemType': InvokeAssistantRequestMessages },
      originalAssistantId: 'string',
      sessionId: 'string',
      sourceIdOfOriginalAssistantId: 'string',
      sourceTypeOfOriginalAssistantId: 'string',
      stream: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

