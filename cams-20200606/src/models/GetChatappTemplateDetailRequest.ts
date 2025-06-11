// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappTemplateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business account (WABA) ID of the user within the independent software vendor (ISV) account.
   * 
   * >  CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The independent software vendor (ISV) verification code. This parameter is used to verify whether the user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en_US
   */
  language?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * ****4b5c79c9432497a075bdfca36bf5
   */
  templateCode?: string;
  /**
   * @remarks
   * Name of a template.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the message template. Valid values:
   * 
   * *   **WHATSAPP**
   * *   **VIBER**
   * *   LINE (developing)
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      isvCode: 'IsvCode',
      language: 'Language',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      custWabaId: 'string',
      isvCode: 'string',
      language: 'string',
      templateCode: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

