// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectFeatureViewsResponseBodyFeatureViews } from "./ListProjectFeatureViewsResponseBodyFeatureViews";


export class ListProjectFeatureViewsResponseBody extends $dara.Model {
  featureViews?: ListProjectFeatureViewsResponseBodyFeatureViews[];
  /**
   * @example
   * AE2AF33E-0C0D-51A8-B89B-C5F1DF261D92
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
      featureViews: { 'type': 'array', 'itemType': ListProjectFeatureViewsResponseBodyFeatureViews },
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

