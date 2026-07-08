// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OutlineWritingArticle } from "./OutlineWritingArticle";


export class OutlineSearchResult extends $dara.Model {
  /**
   * @remarks
   * A list of retrieved materials.
   */
  articles?: OutlineWritingArticle[];
  /**
   * @remarks
   * The retrieved outline.
   * 
   * @example
   * 晨光中的自律：清晨6:30的校园
   */
  outline?: string;
  /**
   * @remarks
   * The unique identifier of the outline.
   * 
   * @example
   * xxxxxx
   */
  outlineId?: string;
  /**
   * @remarks
   * The primary outline.
   * 
   * @example
   * 大学生正能量的一天
   */
  primaryOutline?: string;
  /**
   * @remarks
   * The retrieval query.
   * 
   * @example
   * 高校环保义卖案例 大学生旧物循环利用率的文章
   */
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

