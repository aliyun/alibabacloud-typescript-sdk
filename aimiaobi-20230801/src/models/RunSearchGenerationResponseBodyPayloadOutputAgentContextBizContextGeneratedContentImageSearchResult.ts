// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResult";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResult extends $dara.Model {
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResult[];
  static names(): { [key: string]: string } {
    return {
      searchResult: 'SearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResult },
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

