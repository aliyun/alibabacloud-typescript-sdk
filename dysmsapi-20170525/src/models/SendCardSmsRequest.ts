// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SendCardSmsRequestCardObjects } from "./SendCardSmsRequestCardObjects";


export class SendCardSmsRequest extends $dara.Model {
  /**
   * @remarks
   * The objects of the message template.
   * 
   * This parameter is required.
   */
  cardObjects?: SendCardSmsRequestCardObjects[];
  /**
   * @remarks
   * The code of the message template. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_70
   */
  cardTemplateCode?: string;
  /**
   * @remarks
   * The code of the digital message template that applies when the card message is rolled back. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * @example
   * SMS_003
   */
  digitalTemplateCode?: string;
  /**
   * @remarks
   * The variables of the digital message template.
   * 
   * > If you need to add line breaks to the JSON template, make sure that the format is valid.
   * 
   * @example
   * {\\"msg\\",\\"xxxd\\"}
   */
  digitalTemplateParam?: string;
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
   * 38d76c9b-4a9a-4c89-afae-61fd8e0e****
   */
  outId?: string;
  /**
   * @remarks
   * The signature. You can view the template code in the **Signature** column on the **Signaturess** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > The signature must be approved.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  signName?: string;
  /**
   * @remarks
   * The code of the text message template that applies when the card message is rolled back. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved. If you set the **FallbackType** parameter to **SMS**, this parameter is required.
   * 
   * @example
   * SIER_TEST_01
   */
  smsTemplateCode?: string;
  /**
   * @remarks
   * The variables of the text message template.
   * 
   * > If you need to add line breaks to the JSON template, make sure that the format is valid.
   * 
   * @example
   * {\\"uri\\":\\"Zg11tZ\\"}
   */
  smsTemplateParam?: string;
  /**
   * @remarks
   * The extension code of the upstream message. Upstream messages are messages sent to the communication service provider. Upstream messages are used to customize a service, complete an inquiry, or send a request. You are charged for sending upstream messages based on the billing standards of the service provider.
   * 
   * > If you do not need upstream messages, ignore this parameter.
   * 
   * @example
   * 1
   */
  smsUpExtendCode?: string;
  /**
   * @remarks
   * The code of the text message template.
   * 
   * Log on to the Alibaba Cloud SMS console. In the left-side navigation pane, click **Go Globe** or **Go China**. You can view the message template in the **Template Code** column on the **Message Templates** tab.
   * 
   * > The message templates must be created on the Go Globe page and approved.
   * 
   * @example
   * SMS_2322****
   */
  templateCode?: string;
  /**
   * @remarks
   * The variables of the message template. Format: JSON.
   * 
   * > If you need to add line breaks to the JSON template, make sure that the format is valid.
   * 
   * @example
   * {
   *       \\"code\\": \\"1111\\"
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

