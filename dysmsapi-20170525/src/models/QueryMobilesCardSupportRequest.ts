// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMobilesCardSupportRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption method for the phone number. Valid values:
   * - SHA1: SHA1 encryption.
   * - NORMAL: no encryption. The phone number is transmitted in plaintext.
   * 
   * @example
   * NORMAL
   * 
   * **if can be null:**
   * true
   */
  encryptType?: string;
  /**
   * @remarks
   * The list of phone numbers.
   * 
   * This parameter is required.
   */
  mobiles?: { [key: string]: any }[];
  /**
   * @remarks
   * The code of the card SMS template. To view the code, log on to the console and choose **Domestic Messages** > [Template Management](https://dysms.console.aliyun.com/domestic/text/template).
   * 
   * >The template must be added and approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_2****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      encryptType: 'EncryptType',
      mobiles: 'Mobiles',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptType: 'string',
      mobiles: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      templateCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mobiles)) {
      $dara.Model.validateArray(this.mobiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

