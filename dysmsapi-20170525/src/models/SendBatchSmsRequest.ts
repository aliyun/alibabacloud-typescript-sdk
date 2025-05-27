// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendBatchSmsRequest extends $dara.Model {
  /**
   * @remarks
   * The extension field of the external record. The value is a string that contains no more than 256 characters.
   * 
   * > The parameter is optional.
   * 
   * @example
   * abcdefg
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The mobile number of the recipient. Format:
   * 
   * *   Message delivery to the Chinese mainland: +/+86/0086/86 or an 11-digit mobile number without a prefix. Example: 1590000\\*\\*\\*\\*.
   * *   Message delivery to countries or regions outside the Chinese mainland: Dialing code + Mobile number. Example: 852000012\\*\\*\\*\\*.
   * 
   * > We recommend that you call the SendSms operation to send verification codes.
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
   * The signature.
   * 
   * Log on to the Alibaba Cloud SMS console. In the left-side navigation pane, click **Go Globe** or **Go China**. You can view the signature in the **Signature** column on the **Signatures** tab.
   * 
   * > The signatures must be approved and correspond to the mobile numbers in sequence.
   * 
   * This parameter is required.
   * 
   * @example
   * ["Aliyun","Alibaba"]
   */
  signNameJson?: string;
  /**
   * @remarks
   * The extension code of the MO message. Format: JSON array.
   * 
   * > The parameter is optional.
   * 
   * @example
   * ["90999","90998"]
   */
  smsUpExtendCodeJson?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * Log on to the Alibaba Cloud SMS console. In the left-side navigation pane, click **Go Globe** or **Go China**. You can view the message template in the **Template Code** column on the **Message Templates** tab.
   * 
   * > The message templates must be created on the Go Globe page and approved.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_15255****
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

