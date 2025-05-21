// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachScriptResponseBodyPointsAnswerList } from "./GetAicoachScriptResponseBodyPointsAnswerList";


export class GetAICoachScriptResponseBodyPoints extends $dara.Model {
  answerList?: GetAICoachScriptResponseBodyPointsAnswerList[];
  knowledgeList?: string[];
  /**
   * @example
   * demo
   */
  name?: string;
  pointId?: string;
  /**
   * @example
   * test
   */
  questionDescription?: string;
  /**
   * @example
   * 1
   */
  sortNo?: number;
  /**
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      answerList: 'answerList',
      knowledgeList: 'knowledgeList',
      name: 'name',
      pointId: 'pointId',
      questionDescription: 'questionDescription',
      sortNo: 'sortNo',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerList: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerList },
      knowledgeList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      pointId: 'string',
      questionDescription: 'string',
      sortNo: 'number',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.answerList)) {
      $dara.Model.validateArray(this.answerList);
    }
    if(Array.isArray(this.knowledgeList)) {
      $dara.Model.validateArray(this.knowledgeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

