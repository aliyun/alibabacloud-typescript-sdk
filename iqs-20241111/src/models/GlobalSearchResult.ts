// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GlobalPageItem } from "./GlobalPageItem";
import { GlobalQueryContext } from "./GlobalQueryContext";
import { GlobalSceneItem } from "./GlobalSceneItem";
import { GlobalSearchInformation } from "./GlobalSearchInformation";


export class GlobalSearchResult extends $dara.Model {
  pageItems?: GlobalPageItem[];
  queryContext?: GlobalQueryContext;
  /**
   * @example
   * 123456
   */
  requestId?: string;
  sceneItems?: GlobalSceneItem[];
  searchInformation?: GlobalSearchInformation;
  static names(): { [key: string]: string } {
    return {
      pageItems: 'pageItems',
      queryContext: 'queryContext',
      requestId: 'requestId',
      sceneItems: 'sceneItems',
      searchInformation: 'searchInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageItems: { 'type': 'array', 'itemType': GlobalPageItem },
      queryContext: GlobalQueryContext,
      requestId: 'string',
      sceneItems: { 'type': 'array', 'itemType': GlobalSceneItem },
      searchInformation: GlobalSearchInformation,
    };
  }

  validate() {
    if(Array.isArray(this.pageItems)) {
      $dara.Model.validateArray(this.pageItems);
    }
    if(this.queryContext && typeof (this.queryContext as any).validate === 'function') {
      (this.queryContext as any).validate();
    }
    if(Array.isArray(this.sceneItems)) {
      $dara.Model.validateArray(this.sceneItems);
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

