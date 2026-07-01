// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendCardSmsRequestCardObjects extends $dara.Model {
  /**
   * @remarks
   * 渲染失败后跳转链接。
   * 
   * @example
   * https://alibaba.com
   */
  customUrl?: string;
  /**
   * @remarks
   * 动态参数。动参变量不需要${}
   * 
   * @example
   * {"param3":"李四3","param1":"李四","param2":"李四2"}
   */
  dyncParams?: string;
  /**
   * @remarks
   * 接收卡片短信的手机号码。
   * 
   * @example
   * 1390000****
   */
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      customUrl: 'customUrl',
      dyncParams: 'dyncParams',
      mobile: 'mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUrl: 'string',
      dyncParams: 'string',
      mobile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsRequest extends $dara.Model {
  /**
   * @remarks
   * The card message objects.
   * 
   * This parameter is required.
   * 
   * @example
   * SendCardSms
   */
  cardObjects?: SendCardSmsRequestCardObjects[];
  /**
   * @remarks
   * The code of the card message template. On the [Template Management](https://dysms.console.aliyun.com/domestic/card) page of the **Card Messages** module in the console, select the code of an approved card message template.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_70
   */
  cardTemplateCode?: string;
  /**
   * @remarks
   * The code of the fallback digital message template. This parameter is required if you set **FallbackType** to **DIGITALSMS**.
   * 
   * You can view the digital message template list on the [Template Management](https://dysms.console.aliyun.com/domestic/digit) page of the **Digital Messages** module in the console.
   * 
   * > The template must be added and approved.
   * 
   * @example
   * DIGITAL_SMS_31359****
   */
  digitalTemplateCode?: string;
  /**
   * @remarks
   * The actual values of the variables in the fallback digital message template. This parameter is required if the digital message template specified by **DigitalTemplateCode** contains variables.
   * 
   * > If the JSON value contains line breaks, follow the standard JSON protocol.
   * 
   * @example
   * {"msg","xxxd"}
   */
  digitalTemplateParam?: string;
  /**
   * @remarks
   * The fallback type. Valid values:
   * - **SMS**: Falls back to a text message for phone numbers that do not support card messages.
   * - **DIGITALSMS**: Falls back to a digital message for phone numbers that do not support card messages.
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
   * 38d76c9b-4a9a-4c89-afae-61fd8e0e****
   */
  outId?: string;
  /**
   * @remarks
   * The signature name. You can call the [QuerySmsSignList](https://help.aliyun.com/document_detail/419282.html) operation to query the signatures applied for under the current account or view the signature list in the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/domestic/text/sign).
   * > The signature must be approved.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云
   */
  signName?: string;
  /**
   * @remarks
   * The code of the fallback text message template. This parameter is required if you set **FallbackType** to **SMS**.
   * 
   * You can call the [QuerySmsTemplateList](https://help.aliyun.com/document_detail/419288.html) operation to query the templates applied for under the current account or view the template list in the [SMS console](https://dysms.console.aliyun.com/domestic/text/template).
   * > The template must be added and approved.
   * 
   * @example
   * SMS_48068****
   */
  smsTemplateCode?: string;
  /**
   * @remarks
   * The actual values of the variables in the fallback text message template. This parameter is required if the text message template specified by **SmsTemplateCode** contains variables.
   * 
   * > If the JSON value contains line breaks, follow the standard JSON protocol.
   * 
   * @example
   * {"jifen":"积分"}
   */
  smsTemplateParam?: string;
  /**
   * @remarks
   * The extension code of the MO message. An MO message is a message sent to the communications service provider to customize a service, perform a query, or handle other business. The message is charged at the standard rate of the carrier.
   * > If you do not have such requirements, ignore this parameter.
   * 
   * @example
   * 1
   */
  smsUpExtendCode?: string;
  /**
   * @remarks
   * The code of the custom content template.
   * 
   * The custom content is sent to the recipient as a text message template combined with a card parsing link. Log on to the [SMS console](https://dysms.console.aliyun.com/overview), choose **Domestic Messages** or **International/HK/MO/TW Messages**, and view the **Template Code** on the **Template Management** tab.
   * 
   * > - The template code must be added and approved. To send international or Hong Kong, Macao, or Taiwan messages, use an international or Hong Kong, Macao, or Taiwan message template.
   * > - For example, if the selected text message template is "You have a new message" and the card parsing link is `1*.cn/2**d`, the final content is `You have a new message 1*.cn/2**d`. Test the message and control the word count before sending.
   * 
   * @example
   * SMS_2322****
   */
  templateCode?: string;
  /**
   * @remarks
   * The actual values of the variables in the custom content template. This parameter is required if the message template specified by **TemplateCode** contains variables.
   * 
   * > If the JSON value contains line breaks, follow the standard JSON protocol.
   * 
   * @example
   * {
   *       "code": "1111"
   * }
   */
  templateParam?: string;
  static names(): { [key: string]: string } {
    return {
      cardObjects: 'CardObjects',
      cardTemplateCode: 'CardTemplateCode',
      digitalTemplateCode: 'DigitalTemplateCode',
      digitalTemplateParam: 'DigitalTemplateParam',
      fallbackType: 'FallbackType',
      outId: 'OutId',
      signName: 'SignName',
      smsTemplateCode: 'SmsTemplateCode',
      smsTemplateParam: 'SmsTemplateParam',
      smsUpExtendCode: 'SmsUpExtendCode',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardObjects: { 'type': 'array', 'itemType': SendCardSmsRequestCardObjects },
      cardTemplateCode: 'string',
      digitalTemplateCode: 'string',
      digitalTemplateParam: 'string',
      fallbackType: 'string',
      outId: 'string',
      signName: 'string',
      smsTemplateCode: 'string',
      smsTemplateParam: 'string',
      smsUpExtendCode: 'string',
      templateCode: 'string',
      templateParam: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cardObjects)) {
      $dara.Model.validateArray(this.cardObjects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

