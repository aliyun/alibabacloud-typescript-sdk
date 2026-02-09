// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OutlineWritingArticle extends $dara.Model {
  content?: string;
  outline?: string;
  primaryOutline?: string;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  searchSource?: string;
  searchSourceName?: string;
  title?: string;
  /**
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

