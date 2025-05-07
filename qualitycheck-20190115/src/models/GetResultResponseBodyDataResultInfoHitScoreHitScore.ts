// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResultResponseBodyDataResultInfoHitScoreHitScore extends $dara.Model {
  /**
   * @example
   * 123
   */
  ruleId?: string;
  /**
   * @example
   * 123456
   */
  scoreId?: string;
  scoreName?: string;
  /**
   * @example
   * -20
   */
  scoreNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
      scoreNumber: 'ScoreNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      scoreId: 'string',
      scoreName: 'string',
      scoreNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

