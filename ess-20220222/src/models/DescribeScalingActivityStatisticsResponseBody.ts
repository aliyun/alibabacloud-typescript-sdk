// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingActivityStatisticsResponseBodyScalingActivityErrorCodeStatisticsErrorStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of failed scaling activities.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * Scaling Activity Error Codes
   * 
   * @example
   * QuotaExceeded.PrivateIpAddress
   */
  errorCode?: string;
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
      count: 'Count',
      errorCode: 'ErrorCode',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      errorCode: 'string',
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

export class DescribeScalingActivityStatisticsResponseBodyScalingActivityErrorCodeStatistics extends $dara.Model {
  errorStatistic?: DescribeScalingActivityStatisticsResponseBodyScalingActivityErrorCodeStatisticsErrorStatistic[];
  static names(): { [key: string]: string } {
    return {
      errorStatistic: 'ErrorStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorStatistic: { 'type': 'array', 'itemType': DescribeScalingActivityStatisticsResponseBodyScalingActivityErrorCodeStatisticsErrorStatistic },
    };
  }

  validate() {
    if(Array.isArray(this.errorStatistic)) {
      $dara.Model.validateArray(this.errorStatistic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivityStatisticsResponseBodyScalingActivityStatusStatisticsStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of failed scaling activities.
   * 
   * @example
   * 1
   */
  failedActivityCount?: number;
  /**
   * @remarks
   * The number of successful scaling activities.
   * 
   * @example
   * 10
   */
  successActivityCount?: number;
  /**
   * @remarks
   * The time when the statistics are generated. The time is in UTC. Format: yyyyMMddHH.
   * 
   * @example
   * 2025121623
   */
  time?: string;
  /**
   * @remarks
   * The number of partially executed scaling activities.
   * 
   * @example
   * 2
   */
  warningActivityCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedActivityCount: 'FailedActivityCount',
      successActivityCount: 'SuccessActivityCount',
      time: 'Time',
      warningActivityCount: 'WarningActivityCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedActivityCount: 'number',
      successActivityCount: 'number',
      time: 'string',
      warningActivityCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivityStatisticsResponseBodyScalingActivityStatusStatistics extends $dara.Model {
  statistic?: DescribeScalingActivityStatisticsResponseBodyScalingActivityStatusStatisticsStatistic[];
  static names(): { [key: string]: string } {
    return {
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistic: { 'type': 'array', 'itemType': DescribeScalingActivityStatisticsResponseBodyScalingActivityStatusStatisticsStatistic },
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

export class DescribeScalingActivityStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A8F44B4D-BAB4-5176-8705-5984xxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The error message statistics of the scaling activity.
   */
  scalingActivityErrorCodeStatistics?: DescribeScalingActivityStatisticsResponseBodyScalingActivityErrorCodeStatistics;
  /**
   * @remarks
   * The statistical metrics of the scaling activity status.
   */
  scalingActivityStatusStatistics?: DescribeScalingActivityStatisticsResponseBodyScalingActivityStatusStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityErrorCodeStatistics: 'ScalingActivityErrorCodeStatistics',
      scalingActivityStatusStatistics: 'ScalingActivityStatusStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityErrorCodeStatistics: DescribeScalingActivityStatisticsResponseBodyScalingActivityErrorCodeStatistics,
      scalingActivityStatusStatistics: DescribeScalingActivityStatisticsResponseBodyScalingActivityStatusStatistics,
    };
  }

  validate() {
    if(this.scalingActivityErrorCodeStatistics && typeof (this.scalingActivityErrorCodeStatistics as any).validate === 'function') {
      (this.scalingActivityErrorCodeStatistics as any).validate();
    }
    if(this.scalingActivityStatusStatistics && typeof (this.scalingActivityStatusStatistics as any).validate === 'function') {
      (this.scalingActivityStatusStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

