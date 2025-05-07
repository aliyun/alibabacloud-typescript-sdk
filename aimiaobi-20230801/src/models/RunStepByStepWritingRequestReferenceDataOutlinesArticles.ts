// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStepByStepWritingRequestReferenceDataOutlinesArticles extends $dara.Model {
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * 文章链接
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

