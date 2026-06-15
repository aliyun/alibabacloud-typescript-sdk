// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatisticsReadWriteCount extends $dara.Model {
  /**
   * @remarks
   * Date.
   * 
   * @example
   * 2025-03-18T00:00:00+08:00
   */
  date?: string;
  /**
   * @remarks
   * Read count.
   * 
   * @example
   * 200
   */
  readCount?: number;
  /**
   * @remarks
   * Write count.
   * 
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
   * @remarks
   * Disk usage.
   * 
   * @example
   * 1.23
   */
  diskUsage?: number;
  /**
   * @remarks
   * Memory usage.
   * 
   * @example
   * 0.12
   */
  memoryUsage?: number;
  /**
   * @remarks
   * Read/write count statistics.
   */
  readWriteCount?: ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatisticsReadWriteCount[];
  /**
   * @remarks
   * Row count.
   * 
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
   * @remarks
   * Feature view configuration. Only feature views using FeatureDB have values, showing number of shards and number of replicas.
   * 
   * @example
   * {"shard_count":5,"replication_count":1}
   */
  config?: string;
  /**
   * @remarks
   * Feature entity name.
   * 
   * @example
   * user
   */
  featureEntityName?: string;
  /**
   * @remarks
   * Feature view ID.
   * 
   * @example
   * 3
   */
  featureViewId?: string;
  /**
   * @remarks
   * Feature view name.
   * 
   * @example
   * fv1
   */
  name?: string;
  /**
   * @remarks
   * Project name.
   * 
   * @example
   * p1
   */
  projectName?: string;
  /**
   * @remarks
   * Lifecycle. Unit: seconds.
   * 
   * @example
   * 86400
   */
  TTL?: number;
  /**
   * @remarks
   * Feature view type.
   * 
   * - Batch - offline feature
   * 
   * - Stream - real-time feature
   * 
   * - Sequence - sequence feature
   * 
   * @example
   * Batch
   */
  type?: string;
  /**
   * @remarks
   * Usage statistics. Only displayed for feature views using FeatureDB.
   */
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
   * @remarks
   * Date.
   * 
   * @example
   * 2025-03-18T00:00:00+08:00
   */
  date?: string;
  /**
   * @remarks
   * Total read count.
   * 
   * @example
   * 456
   */
  totalReadCount?: number;
  /**
   * @remarks
   * Total write count.
   * 
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
   * @remarks
   * Total disk usage.
   * 
   * @example
   * 12.3
   */
  totalDiskUsage?: number;
  /**
   * @remarks
   * Total memory usage.
   * 
   * @example
   * 1.23
   */
  totalMemoryUsage?: number;
  /**
   * @remarks
   * Total read/write count statistics.
   */
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
  /**
   * @remarks
   * Feature view list.
   */
  featureViews?: ListDatasourceFeatureViewsResponseBodyFeatureViews[];
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * Overall usage statistics. Only displayed for feature views using FeatureDB.
   */
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

