// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateChatappTemplateRequestComponentsCardsCardComponents } from "./CreateChatappTemplateRequestComponentsCardsCardComponents";


export class CreateChatappTemplateRequestComponentsCards extends $dara.Model {
  /**
   * @remarks
   * The components of the carousel card.
   * 
   * This parameter is required.
   */
  cardComponents?: CreateChatappTemplateRequestComponentsCardsCardComponents[];
  static names(): { [key: string]: string } {
    return {
      cardComponents: 'CardComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardComponents: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsCardsCardComponents },
    };
  }

  validate() {
    if(Array.isArray(this.cardComponents)) {
      $dara.Model.validateArray(this.cardComponents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

