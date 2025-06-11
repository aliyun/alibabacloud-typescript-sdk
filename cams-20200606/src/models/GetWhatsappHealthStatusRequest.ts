// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWhatsappHealthStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account or the instance ID of the customer of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 2993****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The template language.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The node type.
   * 
   * Valid values:
   * 
   * *   template: message template
   * *   phone: phone number
   * *   waba: WhatsApp Business Account (WABA)
   * 
   * This parameter is required.
   * 
   * @example
   * waba
   */
  nodeType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number of the enterprise.
   * 
   * @example
   * 86138***
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 399299***
   */
  templateCode?: string;
  /**
   * @remarks
   * WabaId
   * 
   * @example
   * 299399****
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      language: 'Language',
      nodeType: 'NodeType',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      language: 'string',
      nodeType: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
      wabaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

