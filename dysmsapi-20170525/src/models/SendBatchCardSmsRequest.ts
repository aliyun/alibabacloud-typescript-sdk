// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendBatchCardSmsRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the card SMS template. On the **Card SMS** [Template Management](https://dysms.console.aliyun.com/domestic/card) page in the console, select the code of a card SMS template that has been **approved**.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_3**5
   */
  cardTemplateCode?: string;
  /**
   * @remarks
   * The actual values of the variables in the card SMS template. This parameter is required when the card SMS template specified by **CardTemplateCode** contains variables.
   * 
   * >If the JSON contains line breaks, handle them based on the standard JSON protocol.
   * 
   * @example
   * [{"customurl":"http://www.alibaba.com","dyncParams":"{"a":"hello","b":"world"}"}]
   */
  cardTemplateParamJson?: string;
  /**
   * @remarks
   * The code of the digital SMS template used for fallback. This parameter is required when **FallbackType** is set to **DIGITALSMS** (fallback to digital SMS).
   * 
   * You can view the list of digital SMS templates on the **Domestic Digital SMS** [Template Management](https://dysms.console.aliyun.com/domestic/digit) page in the console.
   * >The template must be added and approved.
   * 
   * @example
   * DIGITAL_SMS_23408****
   */
  digitalTemplateCode?: string;
  /**
   * @remarks
   * The actual values of the variables in the digital SMS template. This parameter is required when the fallback digital SMS template specified by **DigitalTemplateCode** contains variables.
   * >If the JSON contains line breaks, handle them based on the standard JSON protocol.
   * 
   * @example
   * [{"a":1,"b":2},{"a":9,"b":8}]
   */
  digitalTemplateParamJson?: string;
  /**
   * @remarks
   * The fallback type. Valid values:
   * - **SMS**: Phone numbers that do not support card SMS messages fall back to text SMS messages.
   * - **DIGITALSMS**: Phone numbers that do not support card SMS messages fall back to digital SMS messages.
   * - **NONE**: No fallback is required.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS
   */
  fallbackType?: string;
  /**
   * @remarks
   * The ID reserved for the caller.
   * 
   * @example
   * 16545681783595370
   */
  outId?: string;
  /**
   * @remarks
   * The mobile phone numbers that receive the SMS messages.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1390000****","1370000****"]
   */
  phoneNumberJson?: string;
  /**
   * @remarks
   * The name of the SMS signature.
   * You can call the [QuerySmsSignList](https://help.aliyun.com/document_detail/419282.html) operation to query the signatures that have been submitted under the current account, or you can view the list of signatures in the [Short Message Service console](https://dysms.console.aliyun.com/domestic/text/sign).
   * >The signature must be added and approved. The number of SMS signatures must be the same as the number of phone numbers, and the signatures must be in one-to-one correspondence with the phone numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * ["阿里云","阿里巴巴"]
   */
  signNameJson?: string;
  /**
   * @remarks
   * The code of the text SMS template used for fallback. This parameter is required when **FallbackType** is set to **SMS** (fallback to text SMS).
   * 
   * You can call the [QuerySmsTemplateList](https://help.aliyun.com/document_detail/419288.html) operation to query the templates that have been submitted under the current account, or you can view the list of templates in the [Short Message Service console](https://dysms.console.aliyun.com/domestic/text/template).
   * >The template must be added and approved.
   * 
   * @example
   * SMS_23425****
   */
  smsTemplateCode?: string;
  /**
   * @remarks
   * The actual values of the variables in the text SMS template. This parameter is required when the fallback text SMS template specified by **SmsTemplateCode** contains variables.
   * 
   * >If the JSON contains line breaks, handle them based on the standard JSON protocol.
   * 
   * @example
   * [{"a":1,"b":2},{"a":9,"b":8}]
   */
  smsTemplateParamJson?: string;
  /**
   * @remarks
   * The extension code of the MO (mobile-originated) SMS message.
   * 
   * @example
   * [\\"6\\",\\"6\\"]
   */
  smsUpExtendCodeJson?: string;
  /**
   * @remarks
   * The code of the custom send content template.
   * 
   * The custom content is sent to the terminal in the form of the selected text SMS template plus the card parsing link. You can log on to the [Short Message Service console](https://dysms.console.aliyun.com/overview), choose **Domestic Messages** or **International/Hong Kong, Macao, and Taiwan Messages**, and then view the **Template Code** on the **Template Management** page.
   * 
   * > - The template must be added and approved. To send international or Hong Kong, Macao, and Taiwan messages, use an international or Hong Kong, Macao, and Taiwan SMS template.
   * > - For example, the selected text SMS template content is: You have a message to check; the card parsing link is: `1*.cn/2**d`. The final delivered content is: `You have a message to check 1*.cn/2**d`. Perform testing and control the number of characters before sending.
   * 
   * @example
   * SMS_20375****
   */
  templateCode?: string;
  /**
   * @remarks
   * The actual values of the variables in the custom send content template. This parameter is required when the SMS template specified by **TemplateCode** contains variables.
   * 
   * > - If the JSON contains line breaks, handle them based on the standard JSON protocol.
   * > - The number of template variable values must be the same as the number of phone numbers and signatures, and they must be in one-to-one correspondence. This indicates that an SMS message with the corresponding signature is sent to the specified phone number, and the variable parameters in the SMS template are replaced with the corresponding values.
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

