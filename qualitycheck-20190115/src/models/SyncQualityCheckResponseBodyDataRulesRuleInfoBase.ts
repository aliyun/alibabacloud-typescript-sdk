// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncQualityCheckResponseBodyDataRulesRuleInfoBase extends $dara.Model {
  comments?: string;
  level?: number;
  ruleCategoryName?: string;
  scoreNum?: number;
  scoreNumType?: number;
  scoreType?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      level: 'Level',
      ruleCategoryName: 'RuleCategoryName',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreType: 'ScoreType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      level: 'number',
      ruleCategoryName: 'string',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreType: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

