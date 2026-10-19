// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishMessageRequestMessageAttributes extends $dara.Model {
  /**
   * @remarks
   * **Email push attributes** (JSON-formatted string).
   * 
   * @example
   * For more information, see https://www.alibabacloud.com/help/en/direct-mail/singlesendmail.
   */
  directMail?: string;
  /**
   * @remarks
   * SMS push attributes (JSON-formatted string), including `FreeSignName`, `TemplateCode`, `Type`, `Receiver`, and `SmsParams`.
   * 
   * @example
   * {"FreeSignName":"Alibaba Cloud","TemplateCode":"SMS_123456","Type":"singleContent","Receiver":"13800000000","SmsParams":"{\\"code\\":\\"1234\\"}"}
   */
  directSMS?: string;
  /**
   * @remarks
   * Mobile push attributes (JSON-formatted string).
   * 
   * @example
   * Sample mobile push attributes value.
   */
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
  /**
   * @remarks
   * **Message attributes**. You do not need to set this parameter when pushing messages to queues or HTTP endpoints.
   */
  messageAttributes?: PublishMessageRequestMessageAttributes;
  /**
   * @remarks
   * **Message content**. Base64-encode the content beforehand.
   * Maximum size: 64 KB.
   * 
   * @example
   * hello topic
   */
  messageBody?: string;
  messageGroupId?: string;
  /**
   * @remarks
   * **Message tag**, used for message filtering on subscriptions.
   * Maximum length: 64 characters.
   * 
   * @example
   * order-event
   */
  messageTag?: string;
  static names(): { [key: string]: string } {
    return {
      messageAttributes: 'MessageAttributes',
      messageBody: 'MessageBody',
      messageGroupId: 'MessageGroupId',
      messageTag: 'MessageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageAttributes: PublishMessageRequestMessageAttributes,
      messageBody: 'string',
      messageGroupId: 'string',
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

