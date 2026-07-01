// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckMobilesCardSupportRequest extends $dara.Model {
  /**
   * @remarks
   * The list of phone numbers to be queried.
   * 
   * This parameter is required.
   */
  mobiles?: { [key: string]: any }[];
  /**
   * @remarks
   * The code of the card SMS template.
   * Log on to the SMS Service console and go to the [Domestic Card SMS](https://dysms.console.aliyun.com/domestic/card) page. On the **Template Management** tab, you can view the list of card SMS templates.
   * 
   * >The template must be added and approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      mobiles: 'Mobiles',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

