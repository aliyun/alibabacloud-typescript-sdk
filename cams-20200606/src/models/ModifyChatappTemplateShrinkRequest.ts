// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyChatappTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The templatetype cannot be modified.
   * 
   * @example
   * text
   */
  category?: string;
  /**
   * @remarks
   * When a Utility template is changed to Marketing type, the template is paused for sending.
   * 
   * @example
   * 120
   */
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * The list of message template components.
   * 
   * > When Category is AUTHENTICATION, Components cannot contain a node with Type set to HEADER. When Type is BODY/FOOTER, the Text content is empty and is automatically generated.
   * 
   * This parameter is required.
   */
  componentsShrink?: string;
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
   * The ISV customer WabaId.
   * 
   * > This parameter is deprecated. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   */
  custWabaId?: string;
  /**
   * @remarks
   * The example for creating a template.
   */
  exampleShrink?: string;
  /**
   * @remarks
   * The ISV verification code used to verify whether the sub-account is authorized by the ISV.
   * 
   * @example
   * ksiekdki39ksks93939
   * 
   * @deprecated
   */
  isvCode?: string;
  /**
   * @remarks
   * The template language. For language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The validity period for sending template messages in WhatsApp.
   * - AUTHENTICATION: valid values range from 30 to 900. 
   * - UTILITY: valid values range from 30 to 43200.
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * productSetId
   * 
   * @example
   * 939***
   */
  productSetId?: string;
  /**
   * @remarks
   * The message template code.
   * 
   * @example
   * 8472929283883
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
   * The templatetype.
   * 
   * - **WHATSAPP**
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      categoryChangePaused: 'CategoryChangePaused',
      componentsShrink: 'Components',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      exampleShrink: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      messageSendTtlSeconds: 'MessageSendTtlSeconds',
      productSetId: 'ProductSetId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      categoryChangePaused: 'boolean',
      componentsShrink: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      exampleShrink: 'string',
      isvCode: 'string',
      language: 'string',
      messageSendTtlSeconds: 'number',
      productSetId: 'string',
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

