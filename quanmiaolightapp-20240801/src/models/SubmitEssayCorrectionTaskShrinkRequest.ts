// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEssayCorrectionTaskShrinkRequest extends $dara.Model {
  /**
   * @example
   * 高中二年级
   */
  grade?: string;
  /**
   * @example
   * xxx
   */
  modelId?: string;
  /**
   * @example
   * xxx
   */
  otherReviewPoints?: string;
  /**
   * @example
   * xxx
   */
  question?: string;
  /**
   * @example
   * 语文
   */
  subject?: string;
  tasksShrink?: string;
  /**
   * @example
   * 60
   */
  totalScore?: number;
  static names(): { [key: string]: string } {
    return {
      grade: 'grade',
      modelId: 'modelId',
      otherReviewPoints: 'otherReviewPoints',
      question: 'question',
      subject: 'subject',
      tasksShrink: 'tasks',
      totalScore: 'totalScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grade: 'string',
      modelId: 'string',
      otherReviewPoints: 'string',
      question: 'string',
      subject: 'string',
      tasksShrink: 'string',
      totalScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

