// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyChatappTemplateRequestComponentsCardsCardComponents } from "./ModifyChatappTemplateRequestComponentsCardsCardComponents";


export class ModifyChatappTemplateRequestComponentsCards extends $dara.Model {
  /**
   * @remarks
   * The components of the carousel card.
   * 
   * This parameter is required.
   */
  cardComponents?: ModifyChatappTemplateRequestComponentsCardsCardComponents[];
  static names(): { [key: string]: string } {
    return {
      cardComponents: 'CardComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardComponents: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsCardsCardComponents },
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

