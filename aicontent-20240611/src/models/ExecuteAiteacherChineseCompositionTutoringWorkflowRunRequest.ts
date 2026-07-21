// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherChineseCompositionTutoringWorkflowRunRequest extends $dara.Model {
  /**
   * @remarks
   * The essay outline.
   * 
   * @example
   * 题目： 春天的色彩
   * 开头： 开门见山，点明主题。
   * 中间： 分段描写春天的不同色彩。
   * 结尾： 总结全文，抒发情感。
   */
  essayOutline?: string;
  /**
   * @remarks
   * The essay requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * 生动形象，字数不得少于100字
   */
  essayRequirements?: string;
  /**
   * @remarks
   * The essay topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 春天的景色
   */
  essayTopic?: string;
  /**
   * @remarks
   * The essay type.
   * 
   * outline: An outline.
   * 
   * essay: A full essay.
   * 
   * This parameter is required.
   * 
   * @example
   * essay
   */
  essayType?: string;
  /**
   * @remarks
   * The target word count.
   * 
   * @example
   * 100
   */
  essayWordCount?: number;
  /**
   * @remarks
   * The student\\"s grade level.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  grade?: number;
  /**
   * @remarks
   * The response mode.
   * 
   * This parameter is required.
   * 
   * @example
   * streaming
   */
  responseMode?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      essayOutline: 'essayOutline',
      essayRequirements: 'essayRequirements',
      essayTopic: 'essayTopic',
      essayType: 'essayType',
      essayWordCount: 'essayWordCount',
      grade: 'grade',
      responseMode: 'responseMode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      essayOutline: 'string',
      essayRequirements: 'string',
      essayTopic: 'string',
      essayType: 'string',
      essayWordCount: 'number',
      grade: 'number',
      responseMode: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

