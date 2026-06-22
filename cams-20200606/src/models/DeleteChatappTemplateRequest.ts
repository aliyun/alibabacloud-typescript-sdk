// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatappTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The Space ID of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business Account (WABA) ID of the Independent Software Vendor (ISV) customer.
   * 
   * > This parameter is deprecated. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   */
  custWabaId?: string;
  /**
   * @remarks
   * The ISV verification code, which is used to verify whether the user is authorized by the ISV.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh_CN
   */
  language?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The code of the template.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the template. This parameter is required when you delete a template for a specific language.
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
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

