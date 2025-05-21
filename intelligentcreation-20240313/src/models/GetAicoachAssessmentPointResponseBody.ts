// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachAssessmentPointResponseBodyAnswerList } from "./GetAicoachAssessmentPointResponseBodyAnswerList";


export class GetAICoachAssessmentPointResponseBody extends $dara.Model {
  answerList?: GetAICoachAssessmentPointResponseBodyAnswerList[];
  /**
   * @example
   * 10
   */
  citations?: number;
  /**
   * @example
   * 1
   */
  documentId?: string;
  /**
   * @example
   * demo
   */
  documentName?: string;
  /**
   * @example
   * 2025-02-24 12:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-02-24 12:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  kbId?: string;
  /**
   * @example
   * Cloudcode
   */
  kbType?: string;
  knowledgeList?: string[];
  /**
   * @example
   * demo
   */
  name?: string;
  pointId?: string;
  /**
   * @example
   * demo
   */
  questionDescription?: string;
  /**
   * @example
   * demo
   */
  questionSample?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4830493A-728F-5F19-BBCC-1443292E9C49
   */
  requestId?: string;
  /**
   * @example
   * DRAFT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      answerList: 'answerList',
      citations: 'citations',
      documentId: 'documentId',
      documentName: 'documentName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      kbId: 'kbId',
      kbType: 'kbType',
      knowledgeList: 'knowledgeList',
      name: 'name',
      pointId: 'pointId',
      questionDescription: 'questionDescription',
      questionSample: 'questionSample',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerList: { 'type': 'array', 'itemType': GetAICoachAssessmentPointResponseBodyAnswerList },
      citations: 'number',
      documentId: 'string',
      documentName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      kbId: 'string',
      kbType: 'string',
      knowledgeList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      pointId: 'string',
      questionDescription: 'string',
      questionSample: 'string',
      requestId: 'string',
      status: 'string',
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

