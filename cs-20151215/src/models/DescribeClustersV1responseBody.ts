// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClustersV1ResponseBodyClusters } from "./DescribeClustersV1responseBodyClusters";
import { DescribeClustersV1ResponseBodyPageInfo } from "./DescribeClustersV1responseBodyPageInfo";


export class DescribeClustersV1ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried cluster details.
   */
  clusters?: DescribeClustersV1ResponseBodyClusters[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeClustersV1ResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      clusters: 'clusters',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeClustersV1ResponseBodyClusters },
      pageInfo: DescribeClustersV1ResponseBodyPageInfo,
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

