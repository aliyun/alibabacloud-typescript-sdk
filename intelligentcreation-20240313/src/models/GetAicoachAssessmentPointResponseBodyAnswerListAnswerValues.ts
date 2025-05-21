// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesKeywordValues } from "./GetAicoachAssessmentPointResponseBodyAnswerListAnswerValuesKeywordValues";
import { GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesScoringRules } from "./GetAicoachAssessmentPointResponseBodyAnswerListAnswerValuesScoringRules";


export class GetAICoachAssessmentPointResponseBodyAnswerListAnswerValues extends $dara.Model {
  /**
   * @example
   * demo
   */
  answerName?: string;
  /**
   * @example
   * 50
   */
  answerWeight?: number;
  keywordValues?: GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesKeywordValues[];
  /**
   * @example
   * 50
   */
  keywordWeight?: number;
  scoringRules?: GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesScoringRules[];
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
      keywordValues: { 'type': 'array', 'itemType': GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesKeywordValues },
      keywordWeight: 'number',
      scoringRules: { 'type': 'array', 'itemType': GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesScoringRules },
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

