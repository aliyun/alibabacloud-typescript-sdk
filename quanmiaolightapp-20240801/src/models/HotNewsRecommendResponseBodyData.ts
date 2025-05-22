// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotNewsRecommendResponseBodyDataNews } from "./HotNewsRecommendResponseBodyDataNews";


export class HotNewsRecommendResponseBodyData extends $dara.Model {
  news?: HotNewsRecommendResponseBodyDataNews[];
  static names(): { [key: string]: string } {
    return {
      news: 'news',
    };
  }

  static types(): { [key: string]: any } {
    return {
      news: { 'type': 'array', 'itemType': HotNewsRecommendResponseBodyDataNews },
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

