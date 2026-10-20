// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromptTemplateItem extends $dara.Model {
  /**
   * @remarks
   * The content, which supports {{variable name}} placeholders.
   * 
   * @example
   * Please answer: {{question}}
   */
  content?: string;
  /**
   * @remarks
   * The role: system/user/assistant.
   * 
   * @example
   * user
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

