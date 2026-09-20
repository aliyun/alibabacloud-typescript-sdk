// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSuccessInstanceTrendResponseBodyInstanceStatusTrendAvgTrend extends $dara.Model {
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The time point, ranging from 00:00 to 23:00.
   * 
   * The format is `HH:mm`, for example, `01:00`.
   * 
   * @example
   * 01:00
   */
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBodyInstanceStatusTrendTodayTrend extends $dara.Model {
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The time point, ranging from 00:00 to 23:00.
   * 
   * The format is `HH:mm`, for example, `01:00`.
   * 
   * @example
   * 01:00
   */
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBodyInstanceStatusTrendYesterdayTrend extends $dara.Model {
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The time point, ranging from 00:00 to 23:00.
   * 
   * The format is `HH:mm`, for example, `01:00`.
   * 
   * @example
   * 01:00
   */
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBodyInstanceStatusTrend extends $dara.Model {
  /**
   * @remarks
   * The historical average trends.
   */
  avgTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrendAvgTrend[];
  /**
   * @remarks
   * The trends for today.
   */
  todayTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrendTodayTrend[];
  /**
   * @remarks
   * The trends for yesterday.
   */
  yesterdayTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrendYesterdayTrend[];
  static names(): { [key: string]: string } {
    return {
      avgTrend: 'AvgTrend',
      todayTrend: 'TodayTrend',
      yesterdayTrend: 'YesterdayTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgTrend: { 'type': 'array', 'itemType': GetSuccessInstanceTrendResponseBodyInstanceStatusTrendAvgTrend },
      todayTrend: { 'type': 'array', 'itemType': GetSuccessInstanceTrendResponseBodyInstanceStatusTrendTodayTrend },
      yesterdayTrend: { 'type': 'array', 'itemType': GetSuccessInstanceTrendResponseBodyInstanceStatusTrendYesterdayTrend },
    };
  }

  validate() {
    if(Array.isArray(this.avgTrend)) {
      $dara.Model.validateArray(this.avgTrend);
    }
    if(Array.isArray(this.todayTrend)) {
      $dara.Model.validateArray(this.todayTrend);
    }
    if(Array.isArray(this.yesterdayTrend)) {
      $dara.Model.validateArray(this.yesterdayTrend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistical trends of instance status by time period.
   */
  instanceStatusTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrend;
  /**
   * @remarks
   * The unique ID generated for each request.
   * 
   * @example
   * 952795279527ab****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatusTrend: 'InstanceStatusTrend',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatusTrend: GetSuccessInstanceTrendResponseBodyInstanceStatusTrend,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceStatusTrend && typeof (this.instanceStatusTrend as any).validate === 'function') {
      (this.instanceStatusTrend as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

