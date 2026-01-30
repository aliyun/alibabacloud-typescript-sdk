// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceCreateAndDeleteStatisticsResponseBodyInstanceCreateAndDeleteStatisticsStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of new instances.
   * 
   * @example
   * 12
   */
  createdVmCount?: number;
  /**
   * @remarks
   * The number of released instances.
   * 
   * @example
   * 34
   */
  destroyedVmCount?: number;
  /**
   * @remarks
   * The number of instances that are started from economical mode.
   * 
   * @example
   * 5
   */
  startedVmCount?: number;
  /**
   * @remarks
   * The number of instances that are stopped in economical mode.
   * 
   * @example
   * 10
   */
  stoppedVmCount?: number;
  /**
   * @remarks
   * The time when the statistics are generated. The time is in UTC. Format: yyyyMMddHH.
   * 
   * @example
   * 2025121623
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      createdVmCount: 'CreatedVmCount',
      destroyedVmCount: 'DestroyedVmCount',
      startedVmCount: 'StartedVmCount',
      stoppedVmCount: 'StoppedVmCount',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdVmCount: 'number',
      destroyedVmCount: 'number',
      startedVmCount: 'number',
      stoppedVmCount: 'number',
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

export class DescribeInstanceCreateAndDeleteStatisticsResponseBodyInstanceCreateAndDeleteStatistics extends $dara.Model {
  statistic?: DescribeInstanceCreateAndDeleteStatisticsResponseBodyInstanceCreateAndDeleteStatisticsStatistic[];
  static names(): { [key: string]: string } {
    return {
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistic: { 'type': 'array', 'itemType': DescribeInstanceCreateAndDeleteStatisticsResponseBodyInstanceCreateAndDeleteStatisticsStatistic },
    };
  }

  validate() {
    if(Array.isArray(this.statistic)) {
      $dara.Model.validateArray(this.statistic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceCreateAndDeleteStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Metrics for instance creation and deletion.
   */
  instanceCreateAndDeleteStatistics?: DescribeInstanceCreateAndDeleteStatisticsResponseBodyInstanceCreateAndDeleteStatistics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 086EFCD4-C76F-4DC6-9EE9-0D9B711E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCreateAndDeleteStatistics: 'InstanceCreateAndDeleteStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCreateAndDeleteStatistics: DescribeInstanceCreateAndDeleteStatisticsResponseBodyInstanceCreateAndDeleteStatistics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceCreateAndDeleteStatistics && typeof (this.instanceCreateAndDeleteStatistics as any).validate === 'function') {
      (this.instanceCreateAndDeleteStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

