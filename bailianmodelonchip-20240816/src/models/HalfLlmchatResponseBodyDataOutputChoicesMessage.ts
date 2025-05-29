// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HalfLLMChatResponseBodyDataOutputChoicesMessage extends $dara.Model {
  content?: string;
  /**
   * @example
   * assistant
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

