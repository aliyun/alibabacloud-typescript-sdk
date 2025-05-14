// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentTemplateConfigVoiceChatLlmHistory extends $dara.Model {
  content?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
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

