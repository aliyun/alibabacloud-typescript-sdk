// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachScriptResponseBodyPointsAnswerListAnswerValues } from "./GetAicoachScriptResponseBodyPointsAnswerListAnswerValues";
import { GetAICoachScriptResponseBodyPointsAnswerListParameters } from "./GetAicoachScriptResponseBodyPointsAnswerListParameters";


export class GetAICoachScriptResponseBodyPointsAnswerList extends $dara.Model {
  answerValues?: GetAICoachScriptResponseBodyPointsAnswerListAnswerValues[];
  enabledKeyword?: boolean;
  name?: string;
  nameList?: string[];
  operators?: string;
  parameters?: GetAICoachScriptResponseBodyPointsAnswerListParameters[];
  /**
   * @example
   * normalKnowledge
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
      name: 'name',
      nameList: 'nameList',
      operators: 'operators',
      parameters: 'parameters',
      type: 'type',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerValues: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerListAnswerValues },
      enabledKeyword: 'boolean',
      name: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      operators: 'string',
      parameters: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerListParameters },
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

