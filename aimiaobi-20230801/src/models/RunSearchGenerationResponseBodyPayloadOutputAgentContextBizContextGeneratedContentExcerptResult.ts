// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResult";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * concise
   */
  generateLevel?: string;
  reasonTextGenerate?: string;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResult[];
  /**
   * @example
   * xx
   */
  textGenerate?: string;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'GenerateFinished',
      generateLevel: 'GenerateLevel',
      reasonTextGenerate: 'ReasonTextGenerate',
      searchResult: 'SearchResult',
      textGenerate: 'TextGenerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      generateLevel: 'string',
      reasonTextGenerate: 'string',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResult },
      textGenerate: 'string',
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

