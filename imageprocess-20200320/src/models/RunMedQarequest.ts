// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunMedQARequestAnswerImageDataList } from "./RunMedQarequestAnswerImageDataList";
import { RunMedQARequestAnswerImageURLList } from "./RunMedQarequestAnswerImageUrllist";
import { RunMedQARequestAnswerTextList } from "./RunMedQarequestAnswerTextList";


export class RunMedQARequest extends $dara.Model {
  answerImageDataList?: RunMedQARequestAnswerImageDataList[];
  answerImageURLList?: RunMedQARequestAnswerImageURLList[];
  answerTextList?: RunMedQARequestAnswerTextList[];
  /**
   * @remarks
   * This parameter is required.
   */
  department?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0001
   */
  orgId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * weiyi
   */
  orgName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chiefComplaint
   */
  questionType?: string;
  /**
   * @example
   * d1f6a6c2444f4c01adfadd413938e5c7
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      answerImageDataList: 'AnswerImageDataList',
      answerImageURLList: 'AnswerImageURLList',
      answerTextList: 'AnswerTextList',
      department: 'Department',
      orgId: 'OrgId',
      orgName: 'OrgName',
      questionType: 'QuestionType',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerImageDataList: { 'type': 'array', 'itemType': RunMedQARequestAnswerImageDataList },
      answerImageURLList: { 'type': 'array', 'itemType': RunMedQARequestAnswerImageURLList },
      answerTextList: { 'type': 'array', 'itemType': RunMedQARequestAnswerTextList },
      department: 'string',
      orgId: 'string',
      orgName: 'string',
      questionType: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.answerImageDataList)) {
      $dara.Model.validateArray(this.answerImageDataList);
    }
    if(Array.isArray(this.answerImageURLList)) {
      $dara.Model.validateArray(this.answerImageURLList);
    }
    if(Array.isArray(this.answerTextList)) {
      $dara.Model.validateArray(this.answerTextList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

