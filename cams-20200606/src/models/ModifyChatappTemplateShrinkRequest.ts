// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyChatappTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The templatetype is immutable.
   * 
   * @example
   * text
   */
  category?: string;
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * A list of message template components.
   * 
   * > When Category is AUTHENTICATION, Components cannot contain a node with Type set to HEADER. If Type is BODY or FOOTER, the Text content is empty and is automatically generated.
   * 
   * This parameter is required.
   */
  componentsShrink?: string;
  /**
   * @remarks
   * The Space ID of the ISV sub-customer, or the instance ID of a direct customer.
   * 
   * @example
   * 28251486512358****
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
   * The template example.
   */
  exampleShrink?: string;
  /**
   * @remarks
   * The ISV verification code. This code is used to verify that the RAM user is authorized by the ISV.
   * 
   * @example
   * ksiekdki39ksks93939
   */
  isvCode?: string;
  /**
   * @remarks
   * The template language. For a list of language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the template message in seconds.
   * 
   * - For AUTHENTICATION templates, the value ranges from 30 to 900.
   * 
   * - For UTILITY templates, the value ranges from 30 to 43,200.
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
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
   * The template type.
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

