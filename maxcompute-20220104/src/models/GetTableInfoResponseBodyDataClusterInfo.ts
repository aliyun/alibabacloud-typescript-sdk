// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableInfoResponseBodyDataClusterInfoSortCols } from "./GetTableInfoResponseBodyDataClusterInfoSortCols";


export class GetTableInfoResponseBodyDataClusterInfo extends $dara.Model {
  /**
   * @remarks
   * Optional. The number of buckets in the clustered table. The value 0 indicates that the number of buckets dynamically changes when a job is running.
   * 
   * @example
   * 1024
   */
  bucketNum?: number;
  /**
   * @remarks
   * The cluster keys.
   */
  clusterCols?: string[];
  /**
   * @remarks
   * The clustering type of the table. MaxCompute supports [hash clustering](https://www.alibabacloud.com/help/maxcompute/use-cases/hash-clustering) and
   * 
   * [range clustering](https://www.alibabacloud.com/help/maxcompute/use-cases/range-clustering).
   * 
   * @example
   * Hash
   */
  clusterType?: string;
  /**
   * @remarks
   * The condition by which the results are sorted.
   */
  sortCols?: GetTableInfoResponseBodyDataClusterInfoSortCols[];
  static names(): { [key: string]: string } {
    return {
      bucketNum: 'bucketNum',
      clusterCols: 'clusterCols',
      clusterType: 'clusterType',
      sortCols: 'sortCols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketNum: 'number',
      clusterCols: { 'type': 'array', 'itemType': 'string' },
      clusterType: 'string',
      sortCols: { 'type': 'array', 'itemType': GetTableInfoResponseBodyDataClusterInfoSortCols },
    };
  }

  validate() {
    if(Array.isArray(this.clusterCols)) {
      $dara.Model.validateArray(this.clusterCols);
    }
    if(Array.isArray(this.sortCols)) {
      $dara.Model.validateArray(this.sortCols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

