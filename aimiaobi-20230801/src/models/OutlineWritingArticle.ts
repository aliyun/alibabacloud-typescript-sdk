// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OutlineWritingArticle extends $dara.Model {
  /**
   * @remarks
   * Content
   * 
   * @example
   * 新闻内容
   */
  content?: string;
  /**
   * @remarks
   * The leaf outline this material belongs to
   * 
   * @example
   * 大纲名称
   */
  outline?: string;
  /**
   * @remarks
   * The primary outline this material belongs to
   * 
   * @example
   * 一级大纲名称
   */
  primaryOutline?: string;
  /**
   * @remarks
   * Publish time
   * 
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  /**
   * @remarks
   * Retrieval source encoding
   * 
   * @example
   * 检索源编码
   */
  searchSource?: string;
  /**
   * @remarks
   * Retrieval name
   * 
   * @example
   * 检索源名称
   */
  searchSourceName?: string;
  /**
   * @remarks
   * News title
   * 
   * @example
   * 新闻标题
   */
  title?: string;
  /**
   * @remarks
   * News URL
   * 
   * @example
   * http://www.example.com/xxxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      outline: 'Outline',
      primaryOutline: 'PrimaryOutline',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      outline: 'string',
      primaryOutline: 'string',
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
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

