// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMobilesCardSupportShrinkRequest extends $dara.Model {
  /**
   * @example
   * NORMAL
   * 
   * **if can be null:**
   * true
   */
  encryptType?: string;
  /**
   * @remarks
   * The list of mobile phone numbers.
   * 
   * This parameter is required.
   */
  mobilesShrink?: string;
  /**
   * @remarks
   * The code of the message template. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_0000
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      encryptType: 'EncryptType',
      mobilesShrink: 'Mobiles',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptType: 'string',
      mobilesShrink: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

