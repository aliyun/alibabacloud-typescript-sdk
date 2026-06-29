// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether voting is required. Valid values:  
   * - True: Yes  
   * - False: No
   * 
   * @example
   * False
   */
  isNeedVoteJudge?: boolean;
  /**
   * @remarks
   * Question result.
   * 
   * @example
   * b
   */
  markResult?: string;
  /**
   * @remarks
   * Question ID.
   * 
   * @example
   * 1500***849089597440
   */
  markResultId?: string;
  /**
   * @remarks
   * Annotation time.
   * 
   * @example
   * Mon Mar 07 17:02:48 CST 2022
   */
  markTime?: string;
  /**
   * @remarks
   * Question name.
   * 
   * @example
   * 单选
   */
  markTitle?: string;
  /**
   * @remarks
   * Progress. The return value is either None or data of JSON type. It includes:  
   * - Total: total number of results.  
   * - Finished: number of completed results.
   * 
   * @example
   * None
   */
  progress?: string;
  /**
   * @remarks
   * Attached question.
   * 
   * @example
   * 1
   */
  questionId?: string;
  /**
   * @remarks
   * Result type. Valid values:  
   * - RADIO: Radio  
   * - SLOT: Segment  
   * - INPUT: Fill-in-the-blank  
   * - CHECKBOX: Multiple Choice
   * 
   * @example
   * RADIO
   */
  resultType?: string;
  /**
   * @remarks
   * User annotation result ID.
   * 
   * @example
   * 1500***849358032896
   */
  userMarkResultId?: string;
  /**
   * @remarks
   * Version.
   * 
   * @example
   * 1646643768468
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      isNeedVoteJudge: 'IsNeedVoteJudge',
      markResult: 'MarkResult',
      markResultId: 'MarkResultId',
      markTime: 'MarkTime',
      markTitle: 'MarkTitle',
      progress: 'Progress',
      questionId: 'QuestionId',
      resultType: 'ResultType',
      userMarkResultId: 'UserMarkResultId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isNeedVoteJudge: 'boolean',
      markResult: 'string',
      markResultId: 'string',
      markTime: 'string',
      markTitle: 'string',
      progress: 'string',
      questionId: 'string',
      resultType: 'string',
      userMarkResultId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

