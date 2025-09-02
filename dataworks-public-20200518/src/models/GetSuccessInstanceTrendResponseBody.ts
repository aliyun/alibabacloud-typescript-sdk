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
   * The point in time. Valid values: 00:00 to 23:00.
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
   * The point in time. Valid values: 00:00 to 23:00.
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
   * The point in time. Valid values: 00:00 to 23:00.
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
   * The average trend.
   */
  avgTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrendAvgTrend[];
  /**
   * @remarks
   * The trend on the current day.
   */
  todayTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrendTodayTrend[];
  /**
   * @remarks
   * The trend on the previous day.
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
   * The trend of statistics on the instance status in different time periods.
   */
  instanceStatusTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrend;
  /**
   * @remarks
   * The request ID.
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

