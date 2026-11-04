// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatappTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow Facebook to automatically change the category of the template to improve the approval rate. This property is valid only when TemplateType is set to WHATSAPP.
   * >Notice: **[Deprecated]** WhatsApp no longer supports this property.</notice>
   * 
   * @example
   * true
   */
  allowCategoryChange?: boolean;
  /**
   * @remarks
   * WhatsApp template categories:
   * 
   * - **UTILITY**: Transaction-related.
   * 
   * - **MARKETING**: Marketing templates.
   * 
   * - **AUTHENTICATION**: Authenticate identity.
   * 
   * Viber template categories:
   * 
   * - **UTILITY**: Transaction-related.
   * 
   * - **MARKETING**: Marketing templates.
   * 
   * - **AUTHENTICATION**: Authenticate identity.
   * 
   * This parameter is required.
   * 
   * @example
   * UTILITY
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to pause sending the template when a utility template is changed to a marketing template. This property is valid only for WhatsApp templates.
   * 
   * @example
   * false
   */
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * The list of message template components.
   * 
   * > When Category is set to AUTHENTICATION, Components cannot contain nodes with Type set to HEADER. Additionally, when Type is set to BODY or FOOTER, the Text content must be empty.
   * 
   * This parameter is required.
   */
  componentsShrink?: string;
  /**
   * @remarks
   * The SpaceId of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WabaId of the ISV customer.
   * 
   * > **[Deprecated]** Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The example for creating a template.
   * 
   * @example
   * hello_whatsapp
   */
  exampleShrink?: string;
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
   * The template language. For detailed language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
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
   * - AUTHENTICATION: 30 to 900. 
   * - UTILITY: 30 to 43200.
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * hello_whatsapp
   */
  name?: string;
  /**
   * @remarks
   * productSetId
   * 
   * @example
   * 9928**
   */
  productSetId?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * - **WHATSAPP**
   * 
   * - **VIBER**
   * 
   * This parameter is required.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      allowCategoryChange: 'AllowCategoryChange',
      category: 'Category',
      categoryChangePaused: 'CategoryChangePaused',
      componentsShrink: 'Components',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      exampleShrink: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      messageSendTtlSeconds: 'MessageSendTtlSeconds',
      name: 'Name',
      productSetId: 'ProductSetId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCategoryChange: 'boolean',
      category: 'string',
      categoryChangePaused: 'boolean',
      componentsShrink: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      exampleShrink: 'string',
      isvCode: 'string',
      language: 'string',
      messageSendTtlSeconds: 'number',
      name: 'string',
      productSetId: 'string',
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

