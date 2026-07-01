// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCardSmsLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The encoding type of the short URL for the card message. Valid values:
   * - 1: bulk sending.
   * - 2: personalized.
   * 
   * @example
   * 2
   */
  cardCodeType?: number;
  /**
   * @remarks
   * The type of the short URL for the card message. Valid values:
   * - 1: standard short URL.
   * - 2: custom short URL.
   * 
   * > If **CardLinkType** is left empty, the default value is standard short URL. To generate a custom short URL, contact Alibaba Cloud operations to register in advance.
   * 
   * @example
   * 1
   */
  cardLinkType?: number;
  /**
   * @remarks
   * The code of the card message template. In the console, go to the [Card Messages > Template Management](https://dysms.console.aliyun.com/domestic/card) page and select the code of an approved card message template.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_****
   */
  cardTemplateCode?: string;
  /**
   * @remarks
   * The variables of the card message template.
   * 
   * @example
   * [{\\"customUrl\\":\\"https://alibaba.com\\",\\"dyncParams\\": \\"{\\\\\\"动参key\\\\\\":\\\\\\"动参value\\\\\\"}\\"},{\\"customUrl\\":\\"https://alibaba.com\\",\\"dyncParams\\": \\"{\\\\\\"动参key\\\\\\":\\\\\\"动参value\\\\\\"}\\"}]
   */
  cardTemplateParamJson?: string;
  /**
   * @remarks
   * The custom short code. The value must be 4 to 8 digits or letters.
   * 
   * > This parameter is required when the generation type is custom short URL.
   * 
   * @example
   * abCde
   */
  customShortCodeJson?: string;
  /**
   * @remarks
   * The short URL domain assigned to the sending account. The domain must be registered in advance.
   * 
   * > - When **CardLinkType** is set to **2**, the **Domain** parameter is required.
   * > - If the **Domain** parameter is left empty, the system default domain is used. The value can be up to 100 characters in length.
   * 
   * @example
   * xxx.com
   */
  domain?: string;
  /**
   * @remarks
   * The external extension field.
   * 
   * @example
   * BC20220608102511660860762****
   */
  outId?: string;
  /**
   * @remarks
   * The phone number, user ID, or internal system identifier.
   * 
   * > - Supports up to 10,000 phone numbers.
   * > - You can also specify a custom identifier of up to 60 characters.
   * > - For OPPO templates, you can submit up to 10 requests at a time.
   * 
   * @example
   * [\\"1390000****
   * \\",\\"1370000****
   * \\"]
   */
  phoneNumberJson?: string;
  /**
   * @remarks
   * The signature name of the SMS message.
   * In the console, go to the [Domestic Messages > Signature Management](https://dysms.console.aliyun.com/domestic/text/sign) tab and view the name in the **Signature Name** column. You can also call the [QuerySmsSignList](https://www.alibabacloud.com/help/en/sms/developer-reference/api-dysmsapi-2017-05-25-querysmssignlist) operation to view SMS signature names.
   * 
   * > The signature must be added and approved. The number of SMS signatures must match the number of phone numbers, and each signature must correspond to a phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"阿里云\\", \\"阿里云2\\"]
   */
  signNameJson?: string;
  static names(): { [key: string]: string } {
    return {
      cardCodeType: 'CardCodeType',
      cardLinkType: 'CardLinkType',
      cardTemplateCode: 'CardTemplateCode',
      cardTemplateParamJson: 'CardTemplateParamJson',
      customShortCodeJson: 'CustomShortCodeJson',
      domain: 'Domain',
      outId: 'OutId',
      phoneNumberJson: 'PhoneNumberJson',
      signNameJson: 'SignNameJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardCodeType: 'number',
      cardLinkType: 'number',
      cardTemplateCode: 'string',
      cardTemplateParamJson: 'string',
      customShortCodeJson: 'string',
      domain: 'string',
      outId: 'string',
      phoneNumberJson: 'string',
      signNameJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

