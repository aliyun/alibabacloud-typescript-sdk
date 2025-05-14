// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRunRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * assistantId1
   */
  assistantId?: string;
  /**
   * @example
   * 你是一个聪明的小助理
   */
  instructions?: string;
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
   * @example
   * false
   */
  stream?: boolean;
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
      instructions: 'instructions',
      metadata: 'metadata',
      originalAssistantId: 'originalAssistantId',
      stream: 'stream',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      instructions: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      originalAssistantId: 'string',
      stream: 'boolean',
      threadId: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

