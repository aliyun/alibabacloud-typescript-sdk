// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEssayCorrectionTaskRequestDimensions extends $dara.Model {
  /**
   * @example
   * 30
   */
  maxScore?: number;
  /**
   * @example
   * 内容完整度
   */
  name?: string;
  /**
   * @example
   * 文章内容是否完整，是否涵盖了题目的核心要求
   */
  rubric?: string;
  static names(): { [key: string]: string } {
    return {
      maxScore: 'maxScore',
      name: 'name',
      rubric: 'rubric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxScore: 'number',
      name: 'string',
      rubric: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEssayCorrectionTaskRequestTasks extends $dara.Model {
  /**
   * @example
   * xxx
   */
  answer?: string;
  /**
   * @example
   * task-001
   */
  customId?: string;
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
      customId: 'customId',
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
      customId: 'string',
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
   * [{"name": "内容完整度", "rubric": "文章内容是否完整，是否涵盖了题目的核心要求", "maxScore": 30}]
   */
  dimensions?: SubmitEssayCorrectionTaskRequestDimensions[];
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
  /**
   * @example
   * [{"grade": "高中二年级", "subject": "语文", "totalScore": 60, "question": "请以我的梦想为主题写一篇作文", "answer": "我的梦想是成为一名科学家...", "customId": "task-001"}]
   */
  tasks?: SubmitEssayCorrectionTaskRequestTasks[];
  /**
   * @example
   * 60
   */
  totalScore?: number;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'dimensions',
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
      dimensions: { 'type': 'array', 'itemType': SubmitEssayCorrectionTaskRequestDimensions },
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
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

