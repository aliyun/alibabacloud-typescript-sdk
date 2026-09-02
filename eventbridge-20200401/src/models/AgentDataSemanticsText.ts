// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentDataSemanticsText extends $dara.Model {
  /**
   * @remarks
   * The content of the Markdown-formatted text knowledge.
   * 
   * This parameter is required.
   * 
   * @example
   * ## Data description
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

