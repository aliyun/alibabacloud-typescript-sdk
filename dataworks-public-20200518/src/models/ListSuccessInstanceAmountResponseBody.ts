// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrendAvgTrend extends $dara.Model {
  /**
   * @remarks
   * The number of instances that are successfully run.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The point in time. The value is an exact hour that ranges from 00:00 to 23:00, such as 00:00, 01:00, or 02:00.
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

export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrendTodayTrend extends $dara.Model {
  /**
   * @remarks
   * The number of instances that are successfully run.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The point in time. The value is an exact hour that ranges from 00:00 to 23:00, such as 00:00, 01:00, or 02:00.
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

export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrendYesterdayTrend extends $dara.Model {
  /**
   * @remarks
   * The number of instances that are successfully run.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The point in time. The value is an exact hour that ranges from 00:00 to 23:00, such as 00:00, 01:00, or 02:00.
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

export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrend extends $dara.Model {
  /**
   * @remarks
   * The average trend.
   */
  avgTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrendAvgTrend[];
  /**
   * @remarks
   * The trend of the number of auto triggered node instances that are successfully run on the current day.
   */
  todayTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrendTodayTrend[];
  /**
   * @remarks
   * The trend of the number of auto triggered node instances that are successfully run one day earlier than the current day.
   */
  yesterdayTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrendYesterdayTrend[];
  static names(): { [key: string]: string } {
    return {
      avgTrend: 'AvgTrend',
      todayTrend: 'TodayTrend',
      yesterdayTrend: 'YesterdayTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgTrend: { 'type': 'array', 'itemType': ListSuccessInstanceAmountResponseBodyInstanceStatusTrendAvgTrend },
      todayTrend: { 'type': 'array', 'itemType': ListSuccessInstanceAmountResponseBodyInstanceStatusTrendTodayTrend },
      yesterdayTrend: { 'type': 'array', 'itemType': ListSuccessInstanceAmountResponseBodyInstanceStatusTrendYesterdayTrend },
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

export class ListSuccessInstanceAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the trend of the number of auto triggered node instances that are successfully run every hour on the hour of the current day.
   */
  instanceStatusTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrend;
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
      instanceStatusTrend: ListSuccessInstanceAmountResponseBodyInstanceStatusTrend,
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

