// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatisticsReadWriteCount extends $dara.Model {
  /**
   * @example
   * 2025-03-18T00:00:00+08:00
   */
  date?: string;
  /**
   * @example
   * 200
   */
  readCount?: number;
  /**
   * @example
   * 100
   */
  writeCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      readCount: 'ReadCount',
      writeCount: 'WriteCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      readCount: 'number',
      writeCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListDatasourceFeatureViewsResponseBodyFeatureViews extends $dara.Model {
  /**
   * @example
   * {"shard_count":5,"replication_count":1}
   */
  config?: string;
  /**
   * @example
   * user
   */
  featureEntityName?: string;
  /**
   * @example
   * 3
   */
  featureViewId?: string;
  /**
   * @example
   * fv1
   */
  name?: string;
  /**
   * @example
   * p1
   */
  projectName?: string;
  /**
   * @example
   * 86400
   */
  TTL?: number;
  /**
   * @example
   * Batch
   */
  type?: string;
  usageStatistics?: ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatistics;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      featureEntityName: 'FeatureEntityName',
      featureViewId: 'FeatureViewId',
      name: 'Name',
      projectName: 'ProjectName',
      TTL: 'TTL',
      type: 'Type',
      usageStatistics: 'UsageStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      featureEntityName: 'string',
      featureViewId: 'string',
      name: 'string',
      projectName: 'string',
      TTL: 'number',
      type: 'string',
      usageStatistics: ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatistics,
    };
  }

  validate() {
    if(this.usageStatistics && typeof (this.usageStatistics as any).validate === 'function') {
      (this.usageStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourceFeatureViewsResponseBodyTotalUsageStatisticsTotalReadWriteCount extends $dara.Model {
  /**
   * @example
   * 2025-03-18T00:00:00+08:00
   */
  date?: string;
  /**
   * @example
   * 456
   */
  totalReadCount?: number;
  /**
   * @example
   * 123
   */
  totalWriteCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      totalReadCount: 'TotalReadCount',
      totalWriteCount: 'TotalWriteCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      totalReadCount: 'number',
      totalWriteCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

