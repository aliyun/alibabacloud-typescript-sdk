// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UnifiedImageItem } from "./UnifiedImageItem";
import { MultimodalQueryContext } from "./MultimodalQueryContext";
import { SearchInformation } from "./SearchInformation";


export class MultimodalSearchOutput extends $dara.Model {
  imageItems?: UnifiedImageItem[];
  queryContext?: MultimodalQueryContext;
  requestId?: string;
  searchInformation?: SearchInformation;
  static names(): { [key: string]: string } {
    return {
      imageItems: 'imageItems',
      queryContext: 'queryContext',
      requestId: 'requestId',
      searchInformation: 'searchInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageItems: { 'type': 'array', 'itemType': UnifiedImageItem },
      queryContext: MultimodalQueryContext,
      requestId: 'string',
      searchInformation: SearchInformation,
    };
  }

  validate() {
    if(Array.isArray(this.imageItems)) {
      $dara.Model.validateArray(this.imageItems);
    }
    if(this.queryContext && typeof (this.queryContext as any).validate === 'function') {
      (this.queryContext as any).validate();
    }
    if(this.searchInformation && typeof (this.searchInformation as any).validate === 'function') {
      (this.searchInformation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

