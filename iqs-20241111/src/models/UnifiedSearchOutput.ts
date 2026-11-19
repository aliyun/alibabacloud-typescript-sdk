// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UnifiedCostCredits } from "./UnifiedCostCredits";
import { UnifiedPageItem } from "./UnifiedPageItem";
import { UnifiedQueryContext } from "./UnifiedQueryContext";
import { UnifiedSceneItem } from "./UnifiedSceneItem";
import { UnifiedSearchInformation } from "./UnifiedSearchInformation";


export class UnifiedSearchOutput extends $dara.Model {
  /**
   * @remarks
   * The consumed credits information.
   */
  costCredits?: UnifiedCostCredits;
  /**
   * @remarks
   * The web page search results.
   */
  pageItems?: UnifiedPageItem[];
  /**
   * @remarks
   * The search context information.
   */
  queryContext?: UnifiedQueryContext;
  /**
   * @remarks
   * The web page results.
   * 
   * @example
   * 35E5608A-A737-2038-****-D9D34C6BFD9E
   */
  requestId?: string;
  /**
   * @remarks
   * The vertical API scenario-based results.
   */
  sceneItems?: UnifiedSceneItem[];
  /**
   * @remarks
   * The basic search information.
   */
  searchInformation?: UnifiedSearchInformation;
  static names(): { [key: string]: string } {
    return {
      costCredits: 'costCredits',
      pageItems: 'pageItems',
      queryContext: 'queryContext',
      requestId: 'requestId',
      sceneItems: 'sceneItems',
      searchInformation: 'searchInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCredits: UnifiedCostCredits,
      pageItems: { 'type': 'array', 'itemType': UnifiedPageItem },
      queryContext: UnifiedQueryContext,
      requestId: 'string',
      sceneItems: { 'type': 'array', 'itemType': UnifiedSceneItem },
      searchInformation: UnifiedSearchInformation,
    };
  }

  validate() {
    if(this.costCredits && typeof (this.costCredits as any).validate === 'function') {
      (this.costCredits as any).validate();
    }
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

