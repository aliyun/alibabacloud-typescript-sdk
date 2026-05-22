// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeContainerAppStatsResponseBodyPoints extends $dara.Model {
  containerCpuUsageSecondsQuotaRate?: number;
  containerCpuUsageSecondsTotal?: number;
  containerFsReadsBytesAvg?: number;
  containerFsWritesBytesAvg?: number;
  containerMemoryRss?: number;
  containerMemoryRssQuotaRate?: number;
  podReadyRate?: number;
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
  cpuUsageSecondsQuotaRateAvg?: number;
  cpuUsageSecondsTotalAvg?: number;
  fsReadsBytesAvgAvg?: number;
  fsWritesBytesAvgAvg?: number;
  memoryRssAvg?: number;
  memoryRssQuotaRateAvg?: number;
  podReadyRateAvg?: number;
  points?: DescribeEdgeContainerAppStatsResponseBodyPoints[];
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

