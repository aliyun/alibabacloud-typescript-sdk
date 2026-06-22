// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageRequest extends $dara.Model {
  delaySeconds?: number;
  messageBody?: string;
  messageGroupId?: string;
  priority?: number;
  userProperties?: string;
  static names(): { [key: string]: string } {
    return {
      delaySeconds: 'DelaySeconds',
      messageBody: 'MessageBody',
      messageGroupId: 'MessageGroupId',
      priority: 'Priority',
      userProperties: 'UserProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delaySeconds: 'number',
      messageBody: 'string',
      messageGroupId: 'string',
      priority: 'number',
      userProperties: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

