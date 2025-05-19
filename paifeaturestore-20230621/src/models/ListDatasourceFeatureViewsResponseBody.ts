// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatasourceFeatureViewsResponseBodyFeatureViews } from "./ListDatasourceFeatureViewsResponseBodyFeatureViews";
import { ListDatasourceFeatureViewsResponseBodyTotalUsageStatistics } from "./ListDatasourceFeatureViewsResponseBodyTotalUsageStatistics";


export class ListDatasourceFeatureViewsResponseBody extends $dara.Model {
  featureViews?: ListDatasourceFeatureViewsResponseBodyFeatureViews[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  totalUsageStatistics?: ListDatasourceFeatureViewsResponseBodyTotalUsageStatistics;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 514F82AF-3C04-5C3D-8F38-A11261BF37B0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      featureViews: 'FeatureViews',
      totalCount: 'TotalCount',
      totalUsageStatistics: 'TotalUsageStatistics',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViews: { 'type': 'array', 'itemType': ListDatasourceFeatureViewsResponseBodyFeatureViews },
      totalCount: 'number',
      totalUsageStatistics: ListDatasourceFeatureViewsResponseBodyTotalUsageStatistics,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.featureViews)) {
      $dara.Model.validateArray(this.featureViews);
    }
    if(this.totalUsageStatistics && typeof (this.totalUsageStatistics as any).validate === 'function') {
      (this.totalUsageStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

