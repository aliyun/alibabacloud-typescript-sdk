// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OutlineWritingArticle } from "./OutlineWritingArticle";


export class OutlineSearchResult extends $dara.Model {
  articles?: OutlineWritingArticle[];
  outline?: string;
  outlineId?: string;
  primaryOutline?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      outline: 'Outline',
      outlineId: 'OutlineId',
      primaryOutline: 'PrimaryOutline',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': OutlineWritingArticle },
      outline: 'string',
      outlineId: 'string',
      primaryOutline: 'string',
      query: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

