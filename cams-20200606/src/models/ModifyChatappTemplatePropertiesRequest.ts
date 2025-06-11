// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyChatappTemplatePropertiesRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowSend?: boolean;
  /**
   * @example
   * false
   */
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-idk***
   */
  custSpaceId?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 929938***
   */
  templateCode?: string;
  /**
   * @remarks
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

