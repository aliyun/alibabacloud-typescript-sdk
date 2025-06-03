// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMessageResponseBodyMessagesContentStructViewPartsRecommendPartRecommends } from "./CreateMessageResponseBodyMessagesContentStructViewPartsRecommendPartRecommends";


export class CreateMessageResponseBodyMessagesContentStructViewPartsRecommendPart extends $dara.Model {
  recommends?: CreateMessageResponseBodyMessagesContentStructViewPartsRecommendPartRecommends[];
  static names(): { [key: string]: string } {
    return {
      recommends: 'recommends',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommends: { 'type': 'array', 'itemType': CreateMessageResponseBodyMessagesContentStructViewPartsRecommendPartRecommends },
    };
  }

  validate() {
    if(Array.isArray(this.recommends)) {
      $dara.Model.validateArray(this.recommends);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

