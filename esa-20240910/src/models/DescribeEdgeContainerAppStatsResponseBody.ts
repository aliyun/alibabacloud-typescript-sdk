// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEdgeContainerAppStatsResponseBodyPoints } from "./DescribeEdgeContainerAppStatsResponseBodyPoints";


export class DescribeEdgeContainerAppStatsResponseBody extends $dara.Model {
  cpuUsageSecondsQuotaRateAvg?: number;
  cpuUsageSecondsTotalAvg?: number;
  fsReadsBytesAvgAvg?: number;
  fsWritesBytesAvgAvg?: number;
  memoryRssAvg?: number;
  memoryRssQuotaRateAvg?: number;
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

