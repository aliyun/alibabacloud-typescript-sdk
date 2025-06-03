// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAssistantCapabilityRequestMessages } from "./GetAssistantCapabilityRequestMessages";


export class GetAssistantCapabilityRequest extends $dara.Model {
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
  messages?: GetAssistantCapabilityRequestMessages[];
  /**
   * @example
   * originalAssistantId1
   */
  originalAssistantId?: string;
  /**
   * @example
   * cfp
   */
  protocol?: string;
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
   * threadId
   */
  threadId?: string;
  /**
   * @example
   * 5000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      messages: 'messages',
      originalAssistantId: 'originalAssistantId',
      protocol: 'protocol',
      sourceIdOfOriginalAssistantId: 'sourceIdOfOriginalAssistantId',
      sourceTypeOfOriginalAssistantId: 'sourceTypeOfOriginalAssistantId',
      threadId: 'threadId',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      messages: { 'type': 'array', 'itemType': GetAssistantCapabilityRequestMessages },
      originalAssistantId: 'string',
      protocol: 'string',
      sourceIdOfOriginalAssistantId: 'string',
      sourceTypeOfOriginalAssistantId: 'string',
      threadId: 'string',
      timeout: 'number',
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

