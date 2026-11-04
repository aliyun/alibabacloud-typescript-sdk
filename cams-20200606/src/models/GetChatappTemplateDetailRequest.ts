// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappTemplateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The SpaceId of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WabaId of the ISV customer.
   * 
   * > **[Deprecated]** Use CustSpaceId.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The ISV verification code used to verify whether the RAM user is authorized by the ISV.
   * 
   * @example
   * skdi3kksloslikdkkdk
   * 
   * @deprecated
   */
  isvCode?: string;
  /**
   * @remarks
   * The template language. For more information about language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en_US
   */
  language?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * ****4b5c79c9432497a075bdfca36bf5
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype. Valid values:
   * 
   * - **WHATSAPP**
   * 
   * - **VIBER**
   * 
   * Default value: WHATSAPP.
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

