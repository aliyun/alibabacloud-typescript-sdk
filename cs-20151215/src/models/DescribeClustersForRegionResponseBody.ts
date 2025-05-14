// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClustersForRegionResponseBodyClusters } from "./DescribeClustersForRegionResponseBodyClusters";
import { DescribeClustersForRegionResponseBodyPageInfo } from "./DescribeClustersForRegionResponseBodyPageInfo";


export class DescribeClustersForRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the queried clusters.
   */
  clusters?: DescribeClustersForRegionResponseBodyClusters[];
  /**
   * @remarks
   * The pagination details.
   */
  pageInfo?: DescribeClustersForRegionResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      clusters: 'clusters',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeClustersForRegionResponseBodyClusters },
      pageInfo: DescribeClustersForRegionResponseBodyPageInfo,
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

