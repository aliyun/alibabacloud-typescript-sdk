// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InteractTextRequest extends $dara.Model {
  agentId?: string;
  content?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      content: 'content',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      content: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

