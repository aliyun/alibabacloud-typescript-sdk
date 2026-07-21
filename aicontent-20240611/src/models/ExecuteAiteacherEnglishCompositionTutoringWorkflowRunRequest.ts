// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherEnglishCompositionTutoringWorkflowRunRequest extends $dara.Model {
  /**
   * @remarks
   * The essay outline.
   * 
   * @example
   * Title: The Importance of Reading
   * I. Introduction
   * II. Body
   * III. Conclusion
   */
  essayOutline?: string;
  /**
   * @remarks
   * The essay requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * No less than 100 words
   */
  essayRequirements?: string;
  /**
   * @remarks
   * The essay topic.
   * 
   * This parameter is required.
   * 
   * @example
   * Discuss what to eat
   */
  essayTopic?: string;
  /**
   * @remarks
   * The essay type. Valid values:
   * 
   * `outline`: an outline
   * 
   * essay: essay
   * 
   * This parameter is required.
   * 
   * @example
   * essay
   */
  essayType?: string;
  /**
   * @remarks
   * The required word count.
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
   * The response mode. For example, set this value to `streaming` to receive server-sent events.
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
   * xxxxxxx
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

