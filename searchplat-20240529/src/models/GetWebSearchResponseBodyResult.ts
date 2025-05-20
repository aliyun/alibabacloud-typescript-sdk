// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWebSearchResponseBodyResultSearchResult } from "./GetWebSearchResponseBodyResultSearchResult";


export class GetWebSearchResponseBodyResult extends $dara.Model {
  searchResult?: GetWebSearchResponseBodyResultSearchResult[];
  static names(): { [key: string]: string } {
    return {
      searchResult: 'search_result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': GetWebSearchResponseBodyResultSearchResult },
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

