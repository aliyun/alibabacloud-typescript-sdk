// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendSmsRequest extends $dara.Model {
  /**
   * @remarks
   * The extension field.
   * 
   * > You can ignore this parameter if you do not have special requirements.
   * 
   * @example
   * abcdefgh
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The mobile numbers of the recipients. Format:
   * 
   * *   If you send messages to the Chinese mainland, specify mobile numbers that are prefixed with +, +86, 0086, or 86, or 11-digit mobile numbers without prefixes. Example: 1390000\\*\\*\\*\\*.
   * *   If you send messages to countries or regions outside the Chinese mainland, specify this parameter in the \\<Area code>\\<Mobile number> format. Example: 852000012\\*\\*\\*\\*.
   * 
   * You can send messages to multiple mobile numbers, separate the mobile numbers with commas (,). You can specify up to 1,000 mobile numbers in each request. Compared with sending messages to a single mobile number, sending messages to multiple mobile numbers requires longer response time.
   * 
   * > We recommend that you send one verification code message to a mobile number in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phoneNumbers?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature.
   * 
   * You can log on to the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview), click **Go China** or **Go Globe** in the left-side navigation pane, and then view the signature on the **Signatures** tab.
   * 
   * > You must specify a signature that is created in the SMS console and approved by Alibaba Cloud. For more information about SMS signature specifications, see [SMS signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * The extension code of the upstream message. Upstream messages are messages sent to the communication service provider. Upstream messages are used to customize a service, complete an inquiry, or send a request. You are charged for sending upstream messages based on the billing standards of the service provider.
   * 
   * > The extension code is automatically generated by the system when the signature is generated. You do not need to specify the extension code. You can ignore this parameter if you do not have special requirements.
   * 
   * @example
   * 90999
   */
  smsUpExtendCode?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can log on to the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview), click **Go China** or **Go Globe** in the left-side navigation pane, and then view the **template code** on the **Templates** tab.
   * 
   * > You must specify a message template that is created in the SMS console and approved by Alibaba Cloud. If you send messages to countries or regions outside the Chinese mainland, use the corresponding message templates.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_15305****
   */
  templateCode?: string;
  /**
   * @remarks
   * The value of the variable in the message template. You can specify multiple parameter values. Example:{"name":"Sam","number":"1390000\\*\\*\\*\\*"}.
   * 
   * > 
   * 
   * *   If line breaks are required in JSON-formatted data, they must meet the relevant requirements that are specified in the standard JSON protocol.
   * 
   * *   For more information about template variables, see [SMS template specifications](https://help.aliyun.com/document_detail/108253.html).
   * 
   * @example
   * {"code":"1111"}
   */
  templateParam?: string;
  static names(): { [key: string]: string } {
    return {
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumbers: 'PhoneNumbers',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      smsUpExtendCode: 'SmsUpExtendCode',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outId: 'string',
      ownerId: 'number',
      phoneNumbers: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      smsUpExtendCode: 'string',
      templateCode: 'string',
      templateParam: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

