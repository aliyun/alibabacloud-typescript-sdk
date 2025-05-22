// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotNewsRecommendResponseBodyDataNews extends $dara.Model {
  /**
   * @example
   * xx
   */
  content?: string;
  imageUrls?: string[];
  /**
   * @example
   * 2024-09-10 15:32:00
   */
  pubTime?: string;
  searchSource?: string;
  source?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      imageUrls: 'imageUrls',
      pubTime: 'pubTime',
      searchSource: 'searchSource',
      source: 'source',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      searchSource: 'string',
      source: 'string',
      title: 'string',
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

