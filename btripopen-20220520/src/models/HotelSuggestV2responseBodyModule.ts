// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelSuggestV2ResponseBodyModuleGuessSuggestInfos } from "./HotelSuggestV2responseBodyModuleGuessSuggestInfos";
import { HotelSuggestV2ResponseBodyModuleKeywordSuggestInfos } from "./HotelSuggestV2responseBodyModuleKeywordSuggestInfos";
import { HotelSuggestV2ResponseBodyModulePopularSuggestInfos } from "./HotelSuggestV2responseBodyModulePopularSuggestInfos";


export class HotelSuggestV2ResponseBodyModule extends $dara.Model {
  guessSuggestInfos?: HotelSuggestV2ResponseBodyModuleGuessSuggestInfos[];
  keywordSuggestInfos?: HotelSuggestV2ResponseBodyModuleKeywordSuggestInfos[];
  popularSuggestInfos?: HotelSuggestV2ResponseBodyModulePopularSuggestInfos[];
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      guessSuggestInfos: 'guess_suggest_infos',
      keywordSuggestInfos: 'keyword_suggest_infos',
      popularSuggestInfos: 'popular_suggest_infos',
      tips: 'tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guessSuggestInfos: { 'type': 'array', 'itemType': HotelSuggestV2ResponseBodyModuleGuessSuggestInfos },
      keywordSuggestInfos: { 'type': 'array', 'itemType': HotelSuggestV2ResponseBodyModuleKeywordSuggestInfos },
      popularSuggestInfos: { 'type': 'array', 'itemType': HotelSuggestV2ResponseBodyModulePopularSuggestInfos },
      tips: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.guessSuggestInfos)) {
      $dara.Model.validateArray(this.guessSuggestInfos);
    }
    if(Array.isArray(this.keywordSuggestInfos)) {
      $dara.Model.validateArray(this.keywordSuggestInfos);
    }
    if(Array.isArray(this.popularSuggestInfos)) {
      $dara.Model.validateArray(this.popularSuggestInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

