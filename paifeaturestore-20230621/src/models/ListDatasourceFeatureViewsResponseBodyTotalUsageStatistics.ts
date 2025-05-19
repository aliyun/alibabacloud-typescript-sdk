// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatasourceFeatureViewsResponseBodyTotalUsageStatisticsTotalReadWriteCount } from "./ListDatasourceFeatureViewsResponseBodyTotalUsageStatisticsTotalReadWriteCount";


export class ListDatasourceFeatureViewsResponseBodyTotalUsageStatistics extends $dara.Model {
  /**
   * @example
   * 12.3
   */
  totalDiskUsage?: number;
  /**
   * @example
   * 1.23
   */
  totalMemoryUsage?: number;
  totalReadWriteCount?: ListDatasourceFeatureViewsResponseBodyTotalUsageStatisticsTotalReadWriteCount[];
  static names(): { [key: string]: string } {
    return {
      totalDiskUsage: 'TotalDiskUsage',
      totalMemoryUsage: 'TotalMemoryUsage',
      totalReadWriteCount: 'TotalReadWriteCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDiskUsage: 'number',
      totalMemoryUsage: 'number',
      totalReadWriteCount: { 'type': 'array', 'itemType': ListDatasourceFeatureViewsResponseBodyTotalUsageStatisticsTotalReadWriteCount },
    };
  }

  validate() {
    if(Array.isArray(this.totalReadWriteCount)) {
      $dara.Model.validateArray(this.totalReadWriteCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

