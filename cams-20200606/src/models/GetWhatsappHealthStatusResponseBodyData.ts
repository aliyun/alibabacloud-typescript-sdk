// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWhatsappHealthStatusResponseBodyDataEntities } from "./GetWhatsappHealthStatusResponseBodyDataEntities";


export class GetWhatsappHealthStatusResponseBodyData extends $dara.Model {
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
   * The queried entities.
   */
  entities?: GetWhatsappHealthStatusResponseBodyDataEntities[];
  static names(): { [key: string]: string } {
    return {
      canSendMessage: 'CanSendMessage',
      entities: 'Entities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSendMessage: 'string',
      entities: { 'type': 'array', 'itemType': GetWhatsappHealthStatusResponseBodyDataEntities },
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

