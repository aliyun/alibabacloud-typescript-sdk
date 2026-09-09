// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumComputeMetricsByUsageResponseBodyDataDailyComputeMetrics extends $dara.Model {
  /**
   * @remarks
   * The date of the usage, in `yyyyMMdd` format.
   * 
   * @example
   * 20260413
   */
  dateTime?: string;
  /**
   * @remarks
   * The unit of compute usage.
   * 
   * @example
   * GBCplx
   */
  unit?: string;
  /**
   * @remarks
   * The total usage for the day.
   * 
   * @example
   * 1.149683987
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      dateTime: 'dateTime',
      unit: 'unit',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateTime: 'string',
      unit: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SumComputeMetricsByUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The daily usage statistics.
   */
  dailyComputeMetrics?: SumComputeMetricsByUsageResponseBodyDataDailyComputeMetrics[];
  /**
   * @remarks
   * The metering type.
   * 
   * `ComputationSql`: Metering data for SQL jobs on internal tables.
   * 
   * `ComputationSqlOTS`: Metering data for SQL jobs on OTS external tables.
   * 
   * `ComputationSqlOSS`: Metering data for SQL jobs on OSS external tables.
   * 
   * `MapReduce`: Metering data for MapReduce jobs.
   * 
   * `spark`: Metering data for Spark jobs.
   * 
   * `mars`: Metering data for Mars jobs.
   * 
   * @example
   * ComputationSql
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dailyComputeMetrics: 'dailyComputeMetrics',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyComputeMetrics: { 'type': 'array', 'itemType': SumComputeMetricsByUsageResponseBodyDataDailyComputeMetrics },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dailyComputeMetrics)) {
      $dara.Model.validateArray(this.dailyComputeMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SumComputeMetricsByUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The usage data for each metering type.
   */
  data?: SumComputeMetricsByUsageResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - `1xx`: Informational response. The request is received and is being processed.
   * 
   * - `2xx`: Success. The request was successfully received, understood, and accepted.
   * 
   * - `3xx`: Redirection. Further action is required to complete the request.
   * 
   * - `4xx`: Client error. The request has invalid syntax or cannot be fulfilled.
   * 
   * - `5xx`: Server error. The server failed to fulfill an otherwise valid request.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc0598d17544456742466519e6611
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SumComputeMetricsByUsageResponseBodyData },
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

