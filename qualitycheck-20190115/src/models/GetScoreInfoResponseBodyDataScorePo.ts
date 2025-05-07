// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetScoreInfoResponseBodyDataScorePoScoreInfos } from "./GetScoreInfoResponseBodyDataScorePoScoreInfos";


export class GetScoreInfoResponseBodyDataScorePo extends $dara.Model {
  /**
   * @example
   * 34
   */
  scoreId?: number;
  scoreInfos?: GetScoreInfoResponseBodyDataScorePoScoreInfos;
  scoreName?: string;
  static names(): { [key: string]: string } {
    return {
      scoreId: 'ScoreId',
      scoreInfos: 'ScoreInfos',
      scoreName: 'ScoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreId: 'number',
      scoreInfos: GetScoreInfoResponseBodyDataScorePoScoreInfos,
      scoreName: 'string',
    };
  }

  validate() {
    if(this.scoreInfos && typeof (this.scoreInfos as any).validate === 'function') {
      (this.scoreInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

