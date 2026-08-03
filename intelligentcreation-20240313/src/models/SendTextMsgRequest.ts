// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendTextMsgRequest extends $dara.Model {
  projectId?: string;
  requestId?: string;
  sessionId?: string;
  text?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      requestId: 'requestId',
      sessionId: 'sessionId',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      requestId: 'string',
      sessionId: 'string',
      text: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

