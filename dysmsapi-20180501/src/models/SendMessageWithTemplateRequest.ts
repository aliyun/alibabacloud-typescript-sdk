// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageWithTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel.
   * 
   * @example
   * 5739
   */
  channelId?: string;
  /**
   * @remarks
   * The signature. To query the signature, log on to the [Short Message Service (SMS) console](https://sms-intl.console.aliyun.com/overview) and navigate to the **Signatures** tab of the **Go China** page.
   * 
   * This parameter is required.
   * 
   * @example
   * Alicloud321
   */
  from?: string;
  /**
   * @remarks
   * The extension code of the MO message.
   * 
   * @example
   * 90999
   */
  smsUpExtendCode?: string;
  /**
   * @remarks
   * The code of the message template. To query the code, log on to the [SMS console](https://sms-intl.console.aliyun.com/overview) and navigate to the **Templates** tab of the **Go China** page.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_****
   */
  templateCode?: string;
  /**
   * @remarks
   * The value of the variable in the message template. If a variable exists in the template, the parameter is required.
   * 
   * @example
   * {"code":"1234","product":"ytx"}
   */
  templateParam?: string;
  /**
   * @remarks
   * The mobile phone number to which the message is sent. You must add the country code to the beginning of the mobile phone number. Example: 861503871\\*\\*\\*\\*.
   * 
   * For more information, see [Dialing codes](https://www.alibabacloud.com/help/en/sms/product-overview/dialing-codes?spm=a2c63.p38356.0.0.367279cbwQFoeM).
   * 
   * This parameter is required.
   * 
   * @example
   * 861503871****
   */
  to?: string;
  /**
   * @remarks
   * The validity period of the message.
   * 
   * @example
   * 1
   */
  validityPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      from: 'From',
      smsUpExtendCode: 'SmsUpExtendCode',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
      to: 'To',
      validityPeriod: 'ValidityPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      from: 'string',
      smsUpExtendCode: 'string',
      templateCode: 'string',
      templateParam: 'string',
      to: 'string',
      validityPeriod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

