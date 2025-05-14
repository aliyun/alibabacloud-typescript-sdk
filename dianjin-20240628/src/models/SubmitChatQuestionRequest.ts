// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitChatQuestionRequestQuestionList } from "./SubmitChatQuestionRequestQuestionList";


export class SubmitChatQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtService?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  liveScriptContent?: string;
  /**
   * @example
   * true
   */
  openSmallTalk?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  questionList?: SubmitChatQuestionRequestQuestionList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 237645726354
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtService: 'gmtService',
      liveScriptContent: 'liveScriptContent',
      openSmallTalk: 'openSmallTalk',
      questionList: 'questionList',
      requestId: 'requestId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtService: 'string',
      liveScriptContent: 'string',
      openSmallTalk: 'boolean',
      questionList: { 'type': 'array', 'itemType': SubmitChatQuestionRequestQuestionList },
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.questionList)) {
      $dara.Model.validateArray(this.questionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

