// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParamSearchSources } from "./ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParamSearchSources";


export class ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParam extends $dara.Model {
  endTime?: string;
  multimodalSearchTypes?: string[];
  searchSources?: ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParamSearchSources[];
  startTime?: string;
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
      endTime: 'string',
      multimodalSearchTypes: { 'type': 'array', 'itemType': 'string' },
      searchSources: { 'type': 'array', 'itemType': ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParamSearchSources },
      startTime: 'string',
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

