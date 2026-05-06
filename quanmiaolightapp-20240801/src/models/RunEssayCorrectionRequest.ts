// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunEssayCorrectionRequestDimensions extends $dara.Model {
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

export class RunEssayCorrectionRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  answer?: string;
  /**
   * @example
   * [{"name": "内容完整度", "rubric": "文章内容是否完整，是否涵盖了题目的核心要求", "maxScore": 30}]
   */
  dimensions?: RunEssayCorrectionRequestDimensions[];
  /**
   * @example
   * 高一
   */
  grade?: string;
  /**
   * @example
   * qwen-custom-correction-v1
   */
  modelId?: string;
  /**
   * @example
   * xxx
   */
  otherReviewPoints?: string;
  /**
   * @example
   * xx
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
      dimensions: 'dimensions',
      grade: 'grade',
      modelId: 'modelId',
      otherReviewPoints: 'otherReviewPoints',
      question: 'question',
      subject: 'subject',
      totalScore: 'totalScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      dimensions: { 'type': 'array', 'itemType': RunEssayCorrectionRequestDimensions },
      grade: 'string',
      modelId: 'string',
      otherReviewPoints: 'string',
      question: 'string',
      subject: 'string',
      totalScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

