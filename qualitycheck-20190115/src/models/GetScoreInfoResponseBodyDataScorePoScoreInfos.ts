// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam } from "./GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam";


export class GetScoreInfoResponseBodyDataScorePoScoreInfos extends $dara.Model {
  scoreParam?: GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam[];
  static names(): { [key: string]: string } {
    return {
      scoreParam: 'ScoreParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreParam: { 'type': 'array', 'itemType': GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam },
    };
  }

  validate() {
    if(Array.isArray(this.scoreParam)) {
      $dara.Model.validateArray(this.scoreParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

