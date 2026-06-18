// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeContainerAppStatsResponseBodyPoints extends $dara.Model {
  /**
   * @remarks
   * The CPU usage as a percentage of the limit.
   * 
   * @example
   * 0.1
   */
  containerCpuUsageSecondsQuotaRate?: number;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  containerCpuUsageSecondsTotal?: number;
  /**
   * @remarks
   * The read IO.
   * 
   * @example
   * 0
   */
  containerFsReadsBytesAvg?: number;
  /**
   * @remarks
   * The write IO.
   * 
   * @example
   * 0
   */
  containerFsWritesBytesAvg?: number;
  /**
   * @remarks
   * The memory usage.
   * 
   * @example
   * 0.1
   */
  containerMemoryRss?: number;
  /**
   * @remarks
   * The memory usage as a percentage of the limit.
   * 
   * @example
   * 1
   */
  containerMemoryRssQuotaRate?: number;
  /**
   * @remarks
   * The pod ready rate.
   * 
   * @example
   * 100
   */
  podReadyRate?: number;
  /**
   * @remarks
   * The time of the data point. The format is yyyy-MM-ddTHH:mm:ssZ in UTC.
   * 
   * @example
   * 2024-01-18T15:04:05Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      containerCpuUsageSecondsQuotaRate: 'ContainerCpuUsageSecondsQuotaRate',
      containerCpuUsageSecondsTotal: 'ContainerCpuUsageSecondsTotal',
      containerFsReadsBytesAvg: 'ContainerFsReadsBytesAvg',
      containerFsWritesBytesAvg: 'ContainerFsWritesBytesAvg',
      containerMemoryRss: 'ContainerMemoryRss',
      containerMemoryRssQuotaRate: 'ContainerMemoryRssQuotaRate',
      podReadyRate: 'PodReadyRate',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerCpuUsageSecondsQuotaRate: 'number',
      containerCpuUsageSecondsTotal: 'number',
      containerFsReadsBytesAvg: 'number',
      containerFsWritesBytesAvg: 'number',
      containerMemoryRss: 'number',
      containerMemoryRssQuotaRate: 'number',
      podReadyRate: 'number',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeContainerAppStatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The average CPU usage as a percentage of the limit.
   * 
   * @example
   * 0.1
   */
  cpuUsageSecondsQuotaRateAvg?: number;
  /**
   * @remarks
   * Average CPU core usage, in seconds.
   * 
   * @example
   * 2
   */
  cpuUsageSecondsTotalAvg?: number;
  /**
   * @remarks
   * The average read IO.
   * 
   * @example
   * 0
   */
  fsReadsBytesAvgAvg?: number;
  /**
   * @remarks
   * The average write IO.
   * 
   * @example
   * 0
   */
  fsWritesBytesAvgAvg?: number;
  /**
   * @remarks
   * The average memory usage.
   * 
   * @example
   * 0.1
   */
  memoryRssAvg?: number;
  /**
   * @remarks
   * The average memory usage as a percentage of the limit.
   * 
   * @example
   * 1
   */
  memoryRssQuotaRateAvg?: number;
  /**
   * @remarks
   * The average pod ready rate.
   * 
   * @example
   * 100
   */
  podReadyRateAvg?: number;
  /**
   * @remarks
   * The time and value of each data point for the chart.
   */
  points?: DescribeEdgeContainerAppStatsResponseBodyPoints[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35C66C7B-671H-4297-9187-2C4477247A78
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuUsageSecondsQuotaRateAvg: 'CpuUsageSecondsQuotaRateAvg',
      cpuUsageSecondsTotalAvg: 'CpuUsageSecondsTotalAvg',
      fsReadsBytesAvgAvg: 'FsReadsBytesAvgAvg',
      fsWritesBytesAvgAvg: 'FsWritesBytesAvgAvg',
      memoryRssAvg: 'MemoryRssAvg',
      memoryRssQuotaRateAvg: 'MemoryRssQuotaRateAvg',
      podReadyRateAvg: 'PodReadyRateAvg',
      points: 'Points',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuUsageSecondsQuotaRateAvg: 'number',
      cpuUsageSecondsTotalAvg: 'number',
      fsReadsBytesAvgAvg: 'number',
      fsWritesBytesAvgAvg: 'number',
      memoryRssAvg: 'number',
      memoryRssQuotaRateAvg: 'number',
      podReadyRateAvg: 'number',
      points: { 'type': 'array', 'itemType': DescribeEdgeContainerAppStatsResponseBodyPoints },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

