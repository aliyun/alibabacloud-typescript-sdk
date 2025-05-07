// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHotNewsWithTypeResponseBodyDataNews } from "./ListHotNewsWithTypeResponseBodyDataNews";


export class ListHotNewsWithTypeResponseBodyData extends $dara.Model {
  news?: ListHotNewsWithTypeResponseBodyDataNews[];
  /**
   * @example
   * society
   */
  newsType?: string;
  newsTypeName?: string;
  /**
   * @example
   * 77
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      news: 'News',
      newsType: 'NewsType',
      newsTypeName: 'NewsTypeName',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      news: { 'type': 'array', 'itemType': ListHotNewsWithTypeResponseBodyDataNews },
      newsType: 'string',
      newsTypeName: 'string',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

