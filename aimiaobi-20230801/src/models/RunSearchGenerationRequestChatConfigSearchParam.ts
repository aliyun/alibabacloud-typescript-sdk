// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationRequestChatConfigSearchParamSearchSources } from "./RunSearchGenerationRequestChatConfigSearchParamSearchSources";


export class RunSearchGenerationRequestChatConfigSearchParam extends $dara.Model {
  /**
   * @example
   * 1725983999999
   */
  endTime?: number;
  multimodalSearchTypes?: string[];
  searchSources?: RunSearchGenerationRequestChatConfigSearchParamSearchSources[];
  /**
   * @example
   * 1725983999999
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      multimodalSearchTypes: 'MultimodalSearchTypes',
      searchSources: 'SearchSources',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      multimodalSearchTypes: { 'type': 'array', 'itemType': 'string' },
      searchSources: { 'type': 'array', 'itemType': RunSearchGenerationRequestChatConfigSearchParamSearchSources },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalSearchTypes)) {
      $dara.Model.validateArray(this.multimodalSearchTypes);
    }
    if(Array.isArray(this.searchSources)) {
      $dara.Model.validateArray(this.searchSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

