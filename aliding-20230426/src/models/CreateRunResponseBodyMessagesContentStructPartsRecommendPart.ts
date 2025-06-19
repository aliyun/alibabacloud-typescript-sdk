// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRunResponseBodyMessagesContentStructPartsRecommendPartRecommends } from "./CreateRunResponseBodyMessagesContentStructPartsRecommendPartRecommends";


export class CreateRunResponseBodyMessagesContentStructPartsRecommendPart extends $dara.Model {
  recommends?: CreateRunResponseBodyMessagesContentStructPartsRecommendPartRecommends[];
  static names(): { [key: string]: string } {
    return {
      recommends: 'recommends',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommends: { 'type': 'array', 'itemType': CreateRunResponseBodyMessagesContentStructPartsRecommendPartRecommends },
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

