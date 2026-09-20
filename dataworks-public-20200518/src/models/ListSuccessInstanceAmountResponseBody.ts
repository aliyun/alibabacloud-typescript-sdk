// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrendAvgTrend extends $dara.Model {
  /**
   * @remarks
   * The number of successfully completed instances.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The time point. Valid values: hours on the hour from 00:00 to 23:00, such as 00:00, 01:00, and 02:00.
   * 
   * Format: `HH:mm`. Example: `01:00`.
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
   * The number of successfully completed instances.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The time point. Valid values: hours on the hour from 00:00 to 23:00, such as 00:00, 01:00, and 02:00.
   * 
   * Format: `HH:mm`. Example: `01:00`.
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
   * The number of successfully completed instances.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The time point. Valid values: hours on the hour from 00:00 to 23:00, such as 00:00, 01:00, and 02:00.
   * 
   * Format: `HH:mm`. Example: `01:00`.
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
   * The historical average trend.
   */
  avgTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrendAvgTrend[];
  /**
   * @remarks
   * The trend for the current business date.
   */
  todayTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrendTodayTrend[];
  /**
   * @remarks
   * The trend for the day before the business date.
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
   * The trend data of successfully completed instance counts at different hours on the business date.
   */
  instanceStatusTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrend;
  /**
   * @remarks
   * The request ID. You can use this ID to troubleshoot issues.
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

