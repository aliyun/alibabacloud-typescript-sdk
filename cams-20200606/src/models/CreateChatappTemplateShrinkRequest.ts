// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatappTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to allow Facebook to automatically change the category of the template. This can increase the approval rate of the template. This parameter is valid only when TemplateType is set to WHATSAPP.
   * >Notice: This property is deprecated. WhatsApp no longer supports this property.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  allowCategoryChange?: boolean;
  /**
   * @remarks
   * WhatsApp template categories:
   * 
   * - **UTILITY**: Transactional.
   * 
   * - **MARKETING**: Marketing.
   * 
   * - **AUTHENTICATION**: Authentication.
   * 
   * Viber template categories:
   * 
   * - **UTILITY**: Transactional.
   * 
   * - **MARKETING**: Marketing.
   * 
   * - **AUTHENTICATION**: Authentication.
   * 
   * This parameter is required.
   * 
   * @example
   * UTILITY
   */
  category?: string;
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * The list of message template components.
   * 
   * > When Category is set to AUTHENTICATION, the Components array cannot contain a component of the HEADER type. If the component type is BODY or FOOTER, the Text parameter must be empty.
   * 
   * This parameter is required.
   */
  componentsShrink?: string;
  /**
   * @remarks
   * The Space ID of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business Account (WABA) ID of the independent software vendor (ISV) customer.
   * 
   * > This parameter is deprecated. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * An example of how to create a template.
   * 
   * @example
   * hello_whatsapp
   */
  exampleShrink?: string;
  /**
   * @remarks
   * The ISV verification code, used to verify whether the RAM user is authorized by the ISV.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The template language. For more information about language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the template message in WhatsApp.
   * 
   * - For AUTHENTICATION templates, the value ranges from 30 to 900.
   * 
   * - For UTILITY templates, the value ranges from 30 to 43200.
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
   * The template type.
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

