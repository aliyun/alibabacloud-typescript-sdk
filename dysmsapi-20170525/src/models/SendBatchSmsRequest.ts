// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendBatchSmsRequest extends $dara.Model {
  /**
   * @remarks
   * An external business ID. It must be a string of fewer than 256 characters.
   * 
   * > You can leave this parameter empty if you have no special requirements.
   * 
   * @example
   * abcdefg
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The recipient phone numbers. Format:
   * 
   * - For domestic SMS: Phone numbers with or without a country code such as `+`, `+86`, `0086`, or `86`. Example: `1590000****`.
   * 
   * - For international SMS: The country code followed by the phone number. Example: `852000012****`.
   * 
   * > For time-sensitive messages like verification codes, use the [SendSms](https://help.aliyun.com/document_detail/419273.html) operation to send messages individually.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1590000****","1350000****"]
   */
  phoneNumberJson?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature names. The number of signatures must match the number of phone numbers.
   * 
   * You can call the [QuerySmsSignList](https://help.aliyun.com/document_detail/419282.html) operation or check the [Short Message Service console](https://dysms.console.aliyun.com/domestic/text/sign) to find approved signatures. You must use an approved signature.
   * 
   * > - The system uses the selected signature to send SMS messages.
   * 
   * This parameter is required.
   * 
   * @example
   * ["阿里云","阿里巴巴"]
   */
  signNameJson?: string;
  /**
   * @remarks
   * A JSON array of MO SMS extension codes.
   * 
   * > You can leave this parameter empty if you have no special requirements.
   * 
   * @example
   * ["90999","90998"]
   */
  smsUpExtendCodeJson?: string;
  /**
   * @remarks
   * The message template code. You cannot use templates for domestic SMS and international SMS interchangeably.
   * 
   * You can call the [QuerySmsTemplateList](https://help.aliyun.com/document_detail/419288.html) operation or check the [Short Message Service console](https://dysms.console.aliyun.com/domestic/text/template) to find approved template codes. You must use an approved template code.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_15255****
   */
  templateCode?: string;
  /**
   * @remarks
   * The actual values for the template variables. This parameter is required if the template contains variables.
   * 
   * > - The number of template variable sets must match the number of phone numbers and signatures. The elements in the PhoneNumberJson, SignNameJson, and TemplateParamJson arrays must correspond by index to ensure each message is sent with the correct signature and variable values.
   * >
   * > - If you need to include a line break in the JSON string, follow the standard JSON format.
   * 
   * @example
   * [{"name":"TemplateParamJson"},{"name":"TemplateParamJson"}]
   */
  templateParamJson?: string;
  static names(): { [key: string]: string } {
    return {
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumberJson: 'PhoneNumberJson',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signNameJson: 'SignNameJson',
      smsUpExtendCodeJson: 'SmsUpExtendCodeJson',
      templateCode: 'TemplateCode',
      templateParamJson: 'TemplateParamJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outId: 'string',
      ownerId: 'number',
      phoneNumberJson: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signNameJson: 'string',
      smsUpExtendCodeJson: 'string',
      templateCode: 'string',
      templateParamJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

