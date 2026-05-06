// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunEssayCorrectionShrinkRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  answer?: string;
  /**
   * @example
   * [{"name": "内容完整度", "rubric": "文章内容是否完整，是否涵盖了题目的核心要求", "maxScore": 30}]
   */
  dimensionsShrink?: string;
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
      dimensionsShrink: 'dimensions',
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
      dimensionsShrink: 'string',
      grade: 'string',
      modelId: 'string',
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

