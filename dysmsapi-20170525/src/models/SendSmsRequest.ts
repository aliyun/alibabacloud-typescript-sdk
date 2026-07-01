// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendSmsRequest extends $dara.Model {
  /**
   * @remarks
   * The external transaction ID.
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
   * The recipient\\"s mobile number. The format varies based on the destination region:
   * 
   * - For messages to the Chinese mainland: A mobile number, with or without a country code. Valid prefixes are +, +86, 0086, and 86. Example: 1390000\\*\\*\\*\\*.
   * 
   * - For international messages or messages to Hong Kong, Macao, or Taiwan: Use the format [Country code][Mobile number]. Example: 852000012\\*\\*\\*\\*.
   * 
   * - To send a test message, bind a test mobile number in the [console](https://dysms.console.aliyun.com/quickstart).
   * 
   * > To send a message to multiple numbers, separate them with commas (,). You can specify up to 1,000 mobile numbers per request. Bulk sending may have higher latency than sending single messages. For time-sensitive messages such as verification codes, we recommend sending them individually.
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
   * The signature name.
   * 
   * Call the [QuerySmsSignList](https://help.aliyun.com/document_detail/419282.html) API or view your list of signatures in the [Short Message Service console](https://dysms.console.aliyun.com/domestic/text/sign). You must use a signature that has been **approved**.
   * 
   * > - 1\\. If a verification code signature and a general-purpose signature share the same name, the general-purpose signature is used by default.
   * >
   * > - 2\\. The system uses the specified signature to send the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云
   */
  signName?: string;
  /**
   * @remarks
   * The upstream SMS extension code. An upstream SMS message is a message sent from a user to a service provider to subscribe to a service, make a query, or perform other tasks. Such messages are charged by the carrier at standard rates.
   * 
   * > The system assigns a default extension code when a signature is created. Use this parameter to specify a different code. You can ignore this parameter if you do not have special requirements.
   * 
   * @example
   * 90999
   */
  smsUpExtendCode?: string;
  /**
   * @remarks
   * The code of the template.
   * 
   * Call the [QuerySmsTemplateList](https://help.aliyun.com/document_detail/419288.html) API or view your list of templates in the [Short Message Service console](https://dysms.console.aliyun.com/domestic/text/template). You must use the code of a template that has been **approved**.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_15305****
   */
  templateCode?: string;
  /**
   * @remarks
   * The values for the template variables, specified as a **JSON string**. This parameter is required if the template contains variables. The JSON string must provide a value for each variable.
   * 
   * > - If the JSON string needs to include line breaks, format it according to standard JSON specifications.
   * >
   * > - For more information about template variable formatting, see [SMS template specifications](https://help.aliyun.com/document_detail/463161.html).
   * 
   * @example
   * {"name":"张三","number":"1390000****"}
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

