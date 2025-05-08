// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScorePageItem } from "./ScorePageItem";
import { QueryContext } from "./QueryContext";
import { SceneItem } from "./SceneItem";
import { SearchInformation } from "./SearchInformation";
import { WeiboItem } from "./WeiboItem";


export class GenericSearchResult extends $dara.Model {
  pageItems?: ScorePageItem[];
  queryContext?: QueryContext;
  /**
   * @example
   * 123456
   */
  requestId?: string;
  sceneItems?: SceneItem[];
  searchInformation?: SearchInformation;
  weiboItems?: WeiboItem[];
  static names(): { [key: string]: string } {
    return {
      pageItems: 'pageItems',
      queryContext: 'queryContext',
      requestId: 'requestId',
      sceneItems: 'sceneItems',
      searchInformation: 'searchInformation',
      weiboItems: 'weiboItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageItems: { 'type': 'array', 'itemType': ScorePageItem },
      queryContext: QueryContext,
      requestId: 'string',
      sceneItems: { 'type': 'array', 'itemType': SceneItem },
      searchInformation: SearchInformation,
      weiboItems: { 'type': 'array', 'itemType': WeiboItem },
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
    if(Array.isArray(this.weiboItems)) {
      $dara.Model.validateArray(this.weiboItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

