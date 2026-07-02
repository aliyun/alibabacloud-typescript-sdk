// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GuidingQuestion extends $dara.Model {
  /**
   * @remarks
   * The answer.
   * 
   * @example
   * "将场景文本检测和布局分析统一起来是重要的，因为这两个任务虽然在文献中通常被独立研究，但实际上是紧密相关的。"
   */
  answer?: string;
  /**
   * @remarks
   * The question.
   * 
   * @example
   * "为什么将场景文本检测和布局分析统一起来是重要的？"
   */
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      question: 'Question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

