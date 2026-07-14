// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyChatappTemplatePropertiesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether sending is allowed.
   * 
   * @example
   * true
   */
  allowSend?: boolean;
  /**
   * @remarks
   * Specifies whether to block sending after the Utility template category is changed.
   * 
   * @example
   * false
   */
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * The space ID of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-idk***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The template language. For more information about language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
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
   * The template code.
   * 
   * This parameter is required.
   * 
   * @example
   * 929938***
   */
  templateCode?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * - **WHATSAPP**
   * 
   * This parameter is required.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      allowSend: 'AllowSend',
      categoryChangePaused: 'CategoryChangePaused',
      custSpaceId: 'CustSpaceId',
      language: 'Language',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSend: 'boolean',
      categoryChangePaused: 'boolean',
      custSpaceId: 'string',
      language: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
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

