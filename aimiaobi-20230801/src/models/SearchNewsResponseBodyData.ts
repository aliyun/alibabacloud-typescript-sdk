// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchNewsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 9a598b44c6444da5907b8ea68a5f82c4
   */
  docUuid?: string;
  imageUrls?: string[];
  /**
   * @example
   * 2024-01-18 06:46:22
   */
  pubTime?: string;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 夸克检索
   */
  searchSourceName?: string;
  /**
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标签
   */
  tag?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * 2024-01-18 06:46:22
   */
  updateTime?: string;
  /**
   * @example
   * 文章URL
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docUuid: 'DocUuid',
      imageUrls: 'ImageUrls',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      updateTime: 'UpdateTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docUuid: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      updateTime: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

