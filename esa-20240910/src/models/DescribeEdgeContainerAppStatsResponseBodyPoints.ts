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

