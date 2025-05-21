// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesKeywordValues } from "./GetAicoachScriptResponseBodyPointsAnswerListAnswerValuesKeywordValues";
import { GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesScoringRules } from "./GetAicoachScriptResponseBodyPointsAnswerListAnswerValuesScoringRules";


export class GetAICoachScriptResponseBodyPointsAnswerListAnswerValues extends $dara.Model {
  answerName?: string;
  answerWeight?: number;
  keywordValues?: GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesKeywordValues[];
  keywordWeight?: number;
  scoringRules?: GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesScoringRules[];
  static names(): { [key: string]: string } {
    return {
      answerName: 'answerName',
      answerWeight: 'answerWeight',
      keywordValues: 'keywordValues',
      keywordWeight: 'keywordWeight',
      scoringRules: 'scoringRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerName: 'string',
      answerWeight: 'number',
      keywordValues: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesKeywordValues },
      keywordWeight: 'number',
      scoringRules: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesScoringRules },
    };
  }

  validate() {
    if(Array.isArray(this.keywordValues)) {
      $dara.Model.validateArray(this.keywordValues);
    }
    if(Array.isArray(this.scoringRules)) {
      $dara.Model.validateArray(this.scoringRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

