// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatappTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * SMS_232907****
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * hello_whatsapp
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

