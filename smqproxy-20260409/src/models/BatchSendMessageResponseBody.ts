// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSendMessageResponseBodyMessages extends $dara.Model {
  messageBodyMD5?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      messageBodyMD5: 'MessageBodyMD5',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageBodyMD5: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessageResponseBody extends $dara.Model {
  messages?: BatchSendMessageResponseBodyMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': BatchSendMessageResponseBodyMessages },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

