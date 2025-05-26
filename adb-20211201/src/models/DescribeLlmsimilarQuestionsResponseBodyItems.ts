// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLLMSimilarQuestionsResponseBodyItems extends $dara.Model {
  answer?: string;
  /**
   * @example
   * 2389899
   */
  id?: string;
  /**
   * @example
   * 0.58
   */
  score?: number;
  source?: string;
  summary?: string;
  title?: string;
  /**
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

