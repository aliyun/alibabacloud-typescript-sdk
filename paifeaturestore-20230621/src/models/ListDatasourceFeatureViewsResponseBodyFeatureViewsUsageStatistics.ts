// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatisticsReadWriteCount } from "./ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatisticsReadWriteCount";


export class ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatistics extends $dara.Model {
  /**
   * @example
   * 1.23
   */
  diskUsage?: number;
  /**
   * @example
   * 0.12
   */
  memoryUsage?: number;
  readWriteCount?: ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatisticsReadWriteCount[];
  /**
   * @example
   * 10000
   */
  rowCount?: number;
  static names(): { [key: string]: string } {
    return {
      diskUsage: 'DiskUsage',
      memoryUsage: 'MemoryUsage',
      readWriteCount: 'ReadWriteCount',
      rowCount: 'RowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskUsage: 'number',
      memoryUsage: 'number',
      readWriteCount: { 'type': 'array', 'itemType': ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatisticsReadWriteCount },
      rowCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.readWriteCount)) {
      $dara.Model.validateArray(this.readWriteCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

