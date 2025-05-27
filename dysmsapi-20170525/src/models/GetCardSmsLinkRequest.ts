// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCardSmsLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The code type of the URLs.
   * 
   * *   **1**: group texting
   * *   **2**: personalization
   * 
   * @example
   * 2
   */
  cardCodeType?: number;
  /**
   * @remarks
   * The type of the short URLs.
   * 
   * *   1: standard short code.
   * *   2: custom short code.
   * 
   * > If the **CardLinkType** is not specified, standard short codes are generated. If you need to generate custom short codes, contact Alibaba Cloud SMS technical support.
   * 
   * @example
   * 1
   */
  cardLinkType?: number;
  /**
   * @remarks
   * The code of the message template. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_****
   */
  cardTemplateCode?: string;
  /**
   * @remarks
   * The variables of the message template.
   * 
   * @example
   * [{},{}]
   */
  cardTemplateParamJson?: string;
  /**
   * @remarks
   * The custom short code. It can contain 4 to 8 digits or letters.
   * 
   * > If the CardLinkType parameter is set to 2, the CustomShortCodeJson parameter is required.
   * 
   * @example
   * abCde
   */
  customShortCodeJson?: string;
  /**
   * @remarks
   * The original domain name. You must submit domain names for approval in advance.
   * 
   * > 
   * 
   * *   If the **CardLinkType** parameter is set to **2**, the **Domain** parameter is required.
   * 
   * *   The **Domain** parameter cannot exceed 100 characters in length. If the parameter is not specified, a default domain name is used.
   * 
   * @example
   * xxx.com
   */
  domain?: string;
  /**
   * @remarks
   * The extension field.
   * 
   * @example
   * BC20220608102511660860762****
   */
  outId?: string;
  /**
   * @remarks
   * The mobile phone numbers of recipients, custom identifiers, or system identifiers.
   * 
   * > 
   * 
   * *   A maximum of 10,000 mobile phone numbers are supported.
   * 
   * *   You can enter custom identifier. Each identifier can be a maximum of 60 characters in length.
   * 
   * *   You can apply for a maximum of 10 OPPO templates at a time.
   * 
   * @example
   * [\\"1390000****
   * \\",\\"1370000****
   * \\"]
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
   * [\\"aliyun\\", \\"aliyun2\\"]
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

