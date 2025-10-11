// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OutlineWritingArticle } from "./OutlineWritingArticle";


export class WritingOutline extends $dara.Model {
  articles?: OutlineWritingArticle[];
  children?: WritingOutline[];
  outline?: string;
  outlineId?: string;
  searchKeyWordList?: string[];
  wordCount?: string;
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

