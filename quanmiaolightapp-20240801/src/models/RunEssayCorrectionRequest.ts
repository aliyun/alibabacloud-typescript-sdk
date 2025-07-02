// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunEssayCorrectionRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  answer?: string;
  grade?: string;
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

