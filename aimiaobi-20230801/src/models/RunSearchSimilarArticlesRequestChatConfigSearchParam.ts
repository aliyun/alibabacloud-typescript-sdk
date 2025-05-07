// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchSimilarArticlesRequestChatConfigSearchParamSearchSources } from "./RunSearchSimilarArticlesRequestChatConfigSearchParamSearchSources";


export class RunSearchSimilarArticlesRequestChatConfigSearchParam extends $dara.Model {
  searchSources?: RunSearchSimilarArticlesRequestChatConfigSearchParamSearchSources[];
  static names(): { [key: string]: string } {
    return {
      searchSources: 'SearchSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchSources: { 'type': 'array', 'itemType': RunSearchSimilarArticlesRequestChatConfigSearchParamSearchSources },
    };
  }

  validate() {
    if(Array.isArray(this.searchSources)) {
      $dara.Model.validateArray(this.searchSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

