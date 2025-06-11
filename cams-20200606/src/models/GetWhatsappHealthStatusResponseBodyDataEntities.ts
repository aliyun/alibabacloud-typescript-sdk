// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWhatsappHealthStatusResponseBodyDataEntitiesErrors } from "./GetWhatsappHealthStatusResponseBodyDataEntitiesErrors";


export class GetWhatsappHealthStatusResponseBodyDataEntities extends $dara.Model {
  /**
   * @remarks
   * The Business Manager ID.
   * 
   * @example
   * 3992****
   */
  businessId?: string;
  /**
   * @remarks
   * Indicates whether the messages can be sent.
   * 
   * @example
   * AVAILABLE
   */
  canSendMessage?: string;
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * PHONE_NUMBER
   */
  entityType?: string;
  /**
   * @remarks
   * The reasons why the messages failed to be sent.
   */
  errors?: GetWhatsappHealthStatusResponseBodyDataEntitiesErrors[];
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
   * The phone number to which the messages are sent.
   * 
   * @example
   * 86138****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The template code. This parameter is returned when the NodeType parameter is set to **template**.
   * 
   * @example
   * 939928****
   */
  templateCode?: string;
  /**
   * @remarks
   * The WABA ID. You can view the WABA ID in the Chat App Message Service console after you create the WABA.
   * 
   * @example
   * 39939***
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      canSendMessage: 'CanSendMessage',
      entityType: 'EntityType',
      errors: 'Errors',
      language: 'Language',
      phoneNumber: 'PhoneNumber',
      templateCode: 'TemplateCode',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      canSendMessage: 'string',
      entityType: 'string',
      errors: { 'type': 'array', 'itemType': GetWhatsappHealthStatusResponseBodyDataEntitiesErrors },
      language: 'string',
      phoneNumber: 'string',
      templateCode: 'string',
      wabaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errors)) {
      $dara.Model.validateArray(this.errors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

