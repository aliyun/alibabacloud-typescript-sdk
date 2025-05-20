// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTextGenerationResponseBodyResultSearchResults } from "./GetTextGenerationResponseBodyResultSearchResults";


export class GetTextGenerationResponseBodyResult extends $dara.Model {
  searchResults?: GetTextGenerationResponseBodyResultSearchResults[];
  text?: string;
  static names(): { [key: string]: string } {
    return {
      searchResults: 'search_results',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResults: { 'type': 'array', 'itemType': GetTextGenerationResponseBodyResultSearchResults },
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.searchResults)) {
      $dara.Model.validateArray(this.searchResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

