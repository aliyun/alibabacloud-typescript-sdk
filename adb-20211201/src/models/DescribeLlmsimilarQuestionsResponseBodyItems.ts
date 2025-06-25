// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLLMSimilarQuestionsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The answer to the similar question.
   */
  answer?: string;
  /**
   * @remarks
   * The ID of the similar question.
   * 
   * @example
   * 2389899
   */
  id?: string;
  /**
   * @remarks
   * The similarity of the similar question.
   * 
   * @example
   * 0.58
   */
  score?: number;
  /**
   * @remarks
   * The source of the similar question.
   */
  source?: string;
  /**
   * @remarks
   * The summary of the similar question.
   */
  summary?: string;
  /**
   * @remarks
   * The content of the similar question.
   */
  title?: string;
  /**
   * @remarks
   * The URL of the answer to the similar question.
   * 
   * @example
   * www.aliyun.com/product
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      id: 'Id',
      score: 'Score',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      id: 'string',
      score: 'number',
      source: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

