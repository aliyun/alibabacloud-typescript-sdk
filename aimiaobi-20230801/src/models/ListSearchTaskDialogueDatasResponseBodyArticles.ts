// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSearchTaskDialogueDatasResponseBodyArticlesMultimodalMedias } from "./ListSearchTaskDialogueDatasResponseBodyArticlesMultimodalMedias";


export class ListSearchTaskDialogueDatasResponseBodyArticles extends $dara.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @example
   * text
   */
  docType?: string;
  /**
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @example
   * xx
   */
  extend3?: string;
  multimodalMedias?: ListSearchTaskDialogueDatasResponseBodyArticlesMultimodalMedias[];
  /**
   * @example
   * 2024-11-25 14:25:59
   */
  pubTime?: string;
  /**
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      categoryUuid: 'CategoryUuid',
      content: 'Content',
      docId: 'DocId',
      docType: 'DocType',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      categoryUuid: 'string',
      content: 'string',
      docId: 'string',
      docType: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': ListSearchTaskDialogueDatasResponseBodyArticlesMultimodalMedias },
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

