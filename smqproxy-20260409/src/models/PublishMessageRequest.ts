// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishMessageRequestMessageAttributes extends $dara.Model {
  /**
   * @example
   * 详见 https://help.aliyun.com/zh/direct-mail/singlesendmail
   */
  directMail?: string;
  /**
   * @example
   * {"FreeSignName":"阿里云","TemplateCode":"SMS_123456","Type":"singleContent","Receiver":"13800000000","SmsParams":"{\\"code\\":\\"1234\\"}"}
   */
  directSMS?: string;
  /**
   * @example
   * 移动推送属性示例值
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
  messageAttributes?: PublishMessageRequestMessageAttributes;
  /**
   * @example
   * hello topic
   */
  messageBody?: string;
  /**
   * @example
   * order-event
   */
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

