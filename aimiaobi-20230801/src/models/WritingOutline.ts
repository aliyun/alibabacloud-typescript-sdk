// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OutlineWritingArticle } from "./OutlineWritingArticle";


export class WritingOutline extends $dara.Model {
  /**
   * @remarks
   * List of articles referenced in the outline
   */
  articles?: OutlineWritingArticle[];
  /**
   * @remarks
   * List of sub-outlines
   */
  children?: WritingOutline[];
  /**
   * @remarks
   * Outline
   * 
   * @example
   * 大纲名称
   */
  outline?: string;
  /**
   * @remarks
   * Unique outline identifier
   * 
   * @example
   * xxx
   */
  outlineId?: string;
  /**
   * @remarks
   * Outline writing search keyword list
   */
  searchKeyWordList?: string[];
  /**
   * @remarks
   * Description of word count requirements, such as 1K words, 2K words, or no less than 500 words.
   * 
   * @example
   * 写作字数要求的描述
   */
  wordCount?: string;
  /**
   * @remarks
   * Outline writing requirements, writing tips
   * 
   * @example
   * 大纲写作要求、写作提示
   */
  writingTips?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      children: 'Children',
      outline: 'Outline',
      outlineId: 'OutlineId',
      searchKeyWordList: 'SearchKeyWordList',
      wordCount: 'WordCount',
      writingTips: 'WritingTips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': OutlineWritingArticle },
      children: { 'type': 'array', 'itemType': WritingOutline },
      outline: 'string',
      outlineId: 'string',
      searchKeyWordList: { 'type': 'array', 'itemType': 'string' },
      wordCount: 'string',
      writingTips: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(Array.isArray(this.searchKeyWordList)) {
      $dara.Model.validateArray(this.searchKeyWordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

