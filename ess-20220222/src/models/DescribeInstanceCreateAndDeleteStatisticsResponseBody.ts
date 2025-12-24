// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceCreateAndDeleteStatisticsResponseBodyInstanceCreateAndDeleteStatisticsStatistic extends $dara.Model {
  /**
   * @example
   * 12
   */
  createdVmCount?: number;
  /**
   * @example
   * 34
   */
  destroyedVmCount?: number;
  /**
   * @example
   * 5
   */
  startedVmCount?: number;
  /**
   * @example
   * 10
   */
  stoppedVmCount?: number;
  /**
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
  instanceCreateAndDeleteStatistics?: DescribeInstanceCreateAndDeleteStatisticsResponseBodyInstanceCreateAndDeleteStatistics;
  /**
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

