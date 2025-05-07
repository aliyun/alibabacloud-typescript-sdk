// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetScoreInfoResponseBodyDataScorePo } from "./GetScoreInfoResponseBodyDataScorePo";


export class GetScoreInfoResponseBodyData extends $dara.Model {
  scorePo?: GetScoreInfoResponseBodyDataScorePo[];
  static names(): { [key: string]: string } {
    return {
      scorePo: 'ScorePo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scorePo: { 'type': 'array', 'itemType': GetScoreInfoResponseBodyDataScorePo },
    };
  }

  validate() {
    if(Array.isArray(this.scorePo)) {
      $dara.Model.validateArray(this.scorePo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

