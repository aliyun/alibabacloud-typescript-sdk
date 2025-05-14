// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFeatureViewsResponseBodyFeatureViews } from "./ListFeatureViewsResponseBodyFeatureViews";


export class ListFeatureViewsResponseBody extends $dara.Model {
  featureViews?: ListFeatureViewsResponseBodyFeatureViews[];
  /**
   * @example
   * C03B2680-AC9C-59CD-93C5-8142B92537FA
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      featureViews: 'FeatureViews',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViews: { 'type': 'array', 'itemType': ListFeatureViewsResponseBodyFeatureViews },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.featureViews)) {
      $dara.Model.validateArray(this.featureViews);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

