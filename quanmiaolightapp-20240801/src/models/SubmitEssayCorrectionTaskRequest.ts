// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEssayCorrectionTaskRequestTasks extends $dara.Model {
  /**
   * @example
   * xxx
   */
  answer?: string;
  /**
   * @example
   * 高中二年级
   */
  grade?: string;
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
  /**
   * @example
   * 60
   */
  totalScore?: number;
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      grade: 'grade',
      otherReviewPoints: 'otherReviewPoints',
      question: 'question',
      subject: 'subject',
      totalScore: 'totalScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      grade: 'string',
      otherReviewPoints: 'string',
      question: 'string',
      subject: 'string',
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

export class SubmitEssayCorrectionTaskRequest extends $dara.Model {
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
  tasks?: SubmitEssayCorrectionTaskRequestTasks[];
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
      tasks: 'tasks',
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
      tasks: { 'type': 'array', 'itemType': SubmitEssayCorrectionTaskRequestTasks },
      totalScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

