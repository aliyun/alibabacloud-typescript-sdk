// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunChatResultGenerationResponseBodyChoicesMessage extends $dara.Model {
  content?: string;
  /**
   * @example
   * user
   */
  role?: string;
  toolCalls?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
      toolCalls: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.toolCalls)) {
      $dara.Model.validateArray(this.toolCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

