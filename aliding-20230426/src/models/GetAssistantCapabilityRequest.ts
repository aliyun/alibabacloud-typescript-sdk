// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAssistantCapabilityRequestContent } from "./GetAssistantCapabilityRequestContent";


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
   * 
   * @example
   * []
   */
  content?: GetAssistantCapabilityRequestContent[];
  /**
   * @example
   * id1
   */
  id?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
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
      content: 'content',
      id: 'id',
      metadata: 'metadata',
      originalAssistantId: 'originalAssistantId',
      protocol: 'protocol',
      threadId: 'threadId',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      content: { 'type': 'array', 'itemType': GetAssistantCapabilityRequestContent },
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      originalAssistantId: 'string',
      protocol: 'string',
      threadId: 'string',
      timeout: 'number',
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

