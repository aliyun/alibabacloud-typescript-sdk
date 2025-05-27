// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendBatchCardSmsRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the message template. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_3245
   */
  cardTemplateCode?: string;
  /**
   * @remarks
   * The variables of the card message template.
   * 
   * @example
   * [{\\"customurl\\":\\"http://www.alibaba.com\\",\\"dyncParams\\":\\"{\\\\\\"a\\\\\\":\\\\\\"hello\\\\\\",\\\\\\"b\\\\\\":\\\\\\"world\\\\\\"}\\"}]
   */
  cardTemplateParamJson?: string;
  /**
   * @remarks
   * The code of the digital message template that applies when the card message is rolled back. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * @example
   * DIGITAL_SMS_234080176
   */
  digitalTemplateCode?: string;
  /**
   * @remarks
   * The variables of the digital message template.
   * 
   * @example
   * [{"a":1,"b":2},{"a":9,"b":8}]
   */
  digitalTemplateParamJson?: string;
  /**
   * @remarks
   * The rollback type. Valid values:
   * 
   * *   **SMS**: text message
   * *   **DIGITALSMS**: digital message
   * *   **NONE**: none
   * 
   * This parameter is required.
   * 
   * @example
   * SMS
   */
  fallbackType?: string;
  /**
   * @remarks
   * The ID that is reserved for the caller of the operation.
   * 
   * @example
   * 16545681783595370
   */
  outId?: string;
  /**
   * @remarks
   * The mobile numbers of the recipients.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"1390000****\\",\\"1370000****\\"]"
   */
  phoneNumberJson?: string;
  /**
   * @remarks
   * The signature. You can view the template code in the **Signature** column on the **Signaturess** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > The signatures must be approved and correspond to the mobile numbers in sequence.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"aliyun\\",\\"aliyuncode\\"]
   */
  signNameJson?: string;
  /**
   * @remarks
   * The code of the text message template that applies when the card message is rolled back. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * @example
   * SMS_234251075
   */
  smsTemplateCode?: string;
  /**
   * @remarks
   * The variables of the text message template.
   * 
   * @example
   * [{"a":1,"b":2},{"a":9,"b":8}]
   */
  smsTemplateParamJson?: string;
  /**
   * @remarks
   * The extension code of the upstream message.
   * 
   * @example
   * [\\"6\\",\\"6\\"]
   */
  smsUpExtendCodeJson?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can log on to the [Alibaba Cloud console](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview), click **Go China** or **Go Globe** in the left-side navigation pane, and then view the **template code** on the **Templates** tab.
   * 
   * > You must specify a message template that is created in the SMS console and approved by Alibaba Cloud. If you send messages to countries or regions outside the Chinese mainland, use the corresponding message templates.
   * 
   * @example
   * SMS_20375****
   */
  templateCode?: string;
  /**
   * @remarks
   * The value of the variable in the message template.
   * 
   * > If you need to add line breaks to the JSON template, make sure that the format is valid. In addition, the sequence of variable values must be the same as that of the mobile numbers and signatures.
   * 
   * @example
   * [{"name":"TemplateParamJson"},{"name":"TemplateParamJson"}]
   */
  templateParamJson?: string;
  static names(): { [key: string]: string } {
    return {
      cardTemplateCode: 'CardTemplateCode',
      cardTemplateParamJson: 'CardTemplateParamJson',
      digitalTemplateCode: 'DigitalTemplateCode',
      digitalTemplateParamJson: 'DigitalTemplateParamJson',
      fallbackType: 'FallbackType',
      outId: 'OutId',
      phoneNumberJson: 'PhoneNumberJson',
      signNameJson: 'SignNameJson',
      smsTemplateCode: 'SmsTemplateCode',
      smsTemplateParamJson: 'SmsTemplateParamJson',
      smsUpExtendCodeJson: 'SmsUpExtendCodeJson',
      templateCode: 'TemplateCode',
      templateParamJson: 'TemplateParamJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardTemplateCode: 'string',
      cardTemplateParamJson: 'string',
      digitalTemplateCode: 'string',
      digitalTemplateParamJson: 'string',
      fallbackType: 'string',
      outId: 'string',
      phoneNumberJson: 'string',
      signNameJson: 'string',
      smsTemplateCode: 'string',
      smsTemplateParamJson: 'string',
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

