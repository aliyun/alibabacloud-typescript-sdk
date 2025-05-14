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
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * assistantId
   */
  originalAssistantId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      metadata: 'metadata',
      originalAssistantId: 'originalAssistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      originalAssistantId: 'string',
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

