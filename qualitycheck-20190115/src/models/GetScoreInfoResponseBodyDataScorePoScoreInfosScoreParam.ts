// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam extends $dara.Model {
  /**
   * @example
   * 32
   */
  scoreNum?: number;
  /**
   * @example
   * 3422
   */
  scoreSubId?: number;
  scoreSubName?: string;
  /**
   * @example
   * 1
   */
  scoreType?: number;
  static names(): { [key: string]: string } {
    return {
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
      scoreType: 'ScoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
      scoreType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

