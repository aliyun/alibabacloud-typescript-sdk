// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachAssessmentPointResponseBodyAnswerListAnswerValues } from "./GetAicoachAssessmentPointResponseBodyAnswerListAnswerValues";
import { GetAICoachAssessmentPointResponseBodyAnswerListParameters } from "./GetAicoachAssessmentPointResponseBodyAnswerListParameters";


export class GetAICoachAssessmentPointResponseBodyAnswerList extends $dara.Model {
  answerValues?: GetAICoachAssessmentPointResponseBodyAnswerListAnswerValues[];
  /**
   * @example
   * true
   */
  enabledKeyword?: boolean;
  nameList?: string[];
  /**
   * @example
   * and
   */
  operators?: string;
  parameters?: GetAICoachAssessmentPointResponseBodyAnswerListParameters[];
  /**
   * @example
   * custom
   */
  type?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      answerValues: 'answerValues',
      enabledKeyword: 'enabledKeyword',
      nameList: 'nameList',
      operators: 'operators',
      parameters: 'parameters',
      type: 'type',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerValues: { 'type': 'array', 'itemType': GetAICoachAssessmentPointResponseBodyAnswerListAnswerValues },
      enabledKeyword: 'boolean',
      nameList: { 'type': 'array', 'itemType': 'string' },
      operators: 'string',
      parameters: { 'type': 'array', 'itemType': GetAICoachAssessmentPointResponseBodyAnswerListParameters },
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.answerValues)) {
      $dara.Model.validateArray(this.answerValues);
    }
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

