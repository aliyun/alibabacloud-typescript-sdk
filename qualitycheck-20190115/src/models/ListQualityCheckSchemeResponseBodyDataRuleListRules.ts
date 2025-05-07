// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityCheckSchemeResponseBodyDataRuleListRules extends $dara.Model {
  /**
   * @example
   * 1
   */
  checkType?: number;
  name?: string;
  /**
   * @example
   * 12
   */
  rid?: number;
  /**
   * @example
   * 1
   */
  ruleScoreType?: number;
  /**
   * @example
   * 2
   */
  scoreNum?: number;
  /**
   * @example
   * 0
   */
  scoreNumType?: number;
  /**
   * @example
   * 1
   */
  scoreType?: number;
  /**
   * @example
   * 10
   */
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      name: 'Name',
      rid: 'Rid',
      ruleScoreType: 'RuleScoreType',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreType: 'ScoreType',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      name: 'string',
      rid: 'number',
      ruleScoreType: 'number',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreType: 'number',
      targetType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

