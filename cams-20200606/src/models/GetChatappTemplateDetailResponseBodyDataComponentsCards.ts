// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponents } from "./GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponents";


export class GetChatappTemplateDetailResponseBodyDataComponentsCards extends $dara.Model {
  /**
   * @remarks
   * The components of the carousel card.
   */
  cardComponents?: GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponents[];
  static names(): { [key: string]: string } {
    return {
      cardComponents: 'CardComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardComponents: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponents },
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

