// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the card SMS template. Valid values:
   * 
   * - After you call the [CreateCardSmsTemplate](~~CreateCardSmsTemplate~~) operation, the value of the **TemplateCode** response parameter is the code of the newly created card SMS template.
   * 
   * - You can also log on to the [Domestic Card SMS](https://dysms.console.aliyun.com/domestic/card) page in the console and view the card SMS template code on the **Template Management** tab.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_2****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

