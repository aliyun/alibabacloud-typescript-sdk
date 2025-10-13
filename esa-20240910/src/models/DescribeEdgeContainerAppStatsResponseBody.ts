// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeContainerAppStatsResponseBodyPoints extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  containerCpuUsageSecondsQuotaRate?: number;
  /**
   * @example
   * 2
   */
  containerCpuUsageSecondsTotal?: number;
  /**
   * @example
   * 0
   */
  containerFsReadsBytesAvg?: number;
  /**
   * @example
   * 0
   */
  containerFsWritesBytesAvg?: number;
  /**
   * @example
   * 0.1
   */
  containerMemoryRss?: number;
  /**
   * @example
   * 1
   */
  containerMemoryRssQuotaRate?: number;
  /**
   * @example
   * 100
   */
  podReadyRate?: number;
  /**
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
   * Average CPU limit ratio
   * 
   * @example
   * 0.1
   */
  cpuUsageSecondsQuotaRateAvg?: number;
  /**
   * @remarks
   * Average number of CPU cores
   * 
   * @example
   * 2
   */
  cpuUsageSecondsTotalAvg?: number;
  /**
   * @remarks
   * Average read IO
   * 
   * @example
   * 0
   */
  fsReadsBytesAvgAvg?: number;
  /**
   * @remarks
   * Average write IO
   * 
   * @example
   * 0
   */
  fsWritesBytesAvgAvg?: number;
  /**
   * @remarks
   * Average memory usage
   * 
   * @example
   * 0.1
   */
  memoryRssAvg?: number;
  /**
   * @remarks
   * Average memory limit proportion
   * 
   * @example
   * 1
   */
  memoryRssQuotaRateAvg?: number;
  /**
   * @remarks
   * Average PodReady rate
   * 
   * @example
   * 100
   */
  podReadyRateAvg?: number;
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

