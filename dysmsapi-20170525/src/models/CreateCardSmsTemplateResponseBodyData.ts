// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCardSmsTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview).
   * 
   * > Make sure that the message template has been approved.
   * 
   * @example
   * CARD_SMS_60000****
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

