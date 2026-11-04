// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyChatappTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The template category for Viber templates. This parameter is invalid for WhatsApp templates.
   * 
   * @example
   * MARKETING
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to pause sending the template when its category is changed from Utility to Marketing.
   * 
   * @example
   * true
   */
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * The list of message template components.
   * 
   * > When Category is AUTHENTICATION, Components cannot contain nodes with Type set to HEADER. When Type is BODY or FOOTER, if Text is empty, the content is automatically generated.
   * 
   * This parameter is required.
   */
  componentsShrink?: string;
  /**
   * @remarks
   * The Space ID of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * @example
   * cams-did***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WABA ID of the ISV customer. This parameter is deprecated. Use CustSpaceId instead.
   * 
   * @example
   * 939***
   */
  custWabaId?: string;
  /**
   * @remarks
   * The variables in a key-value structure.
   */
  exampleShrink?: string;
  /**
   * @remarks
   * The ISV verification code, which is used to verify whether the RAM user is authorized by the ISV.
   * 
   * @example
   * 9393***
   * 
   * @deprecated
   */
  isvCode?: string;
  /**
   * @remarks
   * The language.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The validity period for sending WhatsApp authentication template messages.
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
   * 93938**
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
   * The templatetype to modify. Valid values: WHATSAPP and VIBER. Default value: WHATSAPP.
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

