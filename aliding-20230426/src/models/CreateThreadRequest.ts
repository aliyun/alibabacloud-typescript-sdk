// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateThreadRequest extends $dara.Model {
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
   * assistantId
   */
  originalAssistantId?: string;
  /**
   * @example
   * agentKey1
   */
  sourceIdOfOriginalAssistantId?: string;
  sourceTypeOfOriginalAssistantId?: number;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      originalAssistantId: 'originalAssistantId',
      sourceIdOfOriginalAssistantId: 'sourceIdOfOriginalAssistantId',
      sourceTypeOfOriginalAssistantId: 'sourceTypeOfOriginalAssistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      originalAssistantId: 'string',
      sourceIdOfOriginalAssistantId: 'string',
      sourceTypeOfOriginalAssistantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

