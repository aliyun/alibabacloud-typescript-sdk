// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishMessageRequestMessageAttributes extends $dara.Model {
  directMail?: string;
  directSMS?: string;
  push?: string;
  static names(): { [key: string]: string } {
    return {
      directMail: 'DirectMail',
      directSMS: 'DirectSMS',
      push: 'Push',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directMail: 'string',
      directSMS: 'string',
      push: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishMessageRequest extends $dara.Model {
  messageAttributes?: PublishMessageRequestMessageAttributes;
  messageBody?: string;
  messageTag?: string;
  static names(): { [key: string]: string } {
    return {
      messageAttributes: 'MessageAttributes',
      messageBody: 'MessageBody',
      messageTag: 'MessageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageAttributes: PublishMessageRequestMessageAttributes,
      messageBody: 'string',
      messageTag: 'string',
    };
  }

  validate() {
    if(this.messageAttributes && typeof (this.messageAttributes as any).validate === 'function') {
      (this.messageAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

