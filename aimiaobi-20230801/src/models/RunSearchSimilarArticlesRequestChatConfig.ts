// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchSimilarArticlesRequestChatConfigSearchParam } from "./RunSearchSimilarArticlesRequestChatConfigSearchParam";


export class RunSearchSimilarArticlesRequestChatConfig extends $dara.Model {
  searchParam?: RunSearchSimilarArticlesRequestChatConfigSearchParam;
  static names(): { [key: string]: string } {
    return {
      searchParam: 'SearchParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchParam: RunSearchSimilarArticlesRequestChatConfigSearchParam,
    };
  }

  validate() {
    if(this.searchParam && typeof (this.searchParam as any).validate === 'function') {
      (this.searchParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

