// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunScriptRefineResponseBodyPayloadOutput extends $dara.Model {
  content?: { [key: string]: string }[];
  outline?: string;
  role?: string;
  scene?: string;
  summary?: string;
  /**
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      outline: 'outline',
      role: 'role',
      scene: 'scene',
      summary: 'summary',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      outline: 'string',
      role: 'string',
      scene: 'string',
      summary: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

