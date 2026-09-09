// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumComputeMetricsByRecordResponseBodyDataDailyComputeRecords extends $dara.Model {
  /**
   * @remarks
   * The statistics date. The format is yyyyMMdd.
   * 
   * @example
   * 20260411
   */
  dateTime?: string;
  /**
   * @remarks
   * This day\\"s usage as a percentage of the total usage for the specified period. The value does not include a percent sign (%).
   * 
   * @example
   * 50
   */
  percentage?: number;
  /**
   * @remarks
   * The record count.
   * 
   * @example
   * 1200
   */
  record?: string;
  static names(): { [key: string]: string } {
    return {
      dateTime: 'dateTime',
      percentage: 'percentage',
      record: 'record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateTime: 'string',
      percentage: 'number',
      record: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SumComputeMetricsByRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of daily usage records.
   */
  dailyComputeRecords?: SumComputeMetricsByRecordResponseBodyDataDailyComputeRecords[];
  /**
   * @remarks
   * The usage type. For example: ComputationSql
   * 
   * @example
   * ComputationSql
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dailyComputeRecords: 'dailyComputeRecords',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyComputeRecords: { 'type': 'array', 'itemType': SumComputeMetricsByRecordResponseBodyDataDailyComputeRecords },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dailyComputeRecords)) {
      $dara.Model.validateArray(this.dailyComputeRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SumComputeMetricsByRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: SumComputeMetricsByRecordResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: Informational. The server has received the request and is processing it.
   * 
   * - 2xx: Success. The server successfully received, understood, and accepted the request.
   * 
   * - 3xx: Redirection. The client must take further action to complete the request.
   * 
   * - 4xx: Client-side error. The request contains invalid syntax or parameters and cannot be fulfilled.
   * 
   * - 5xx: Server-side error. The server failed to fulfill a valid request.
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
   * 0a06dfe517540143853845404e83af
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
      data: { 'type': 'array', 'itemType': SumComputeMetricsByRecordResponseBodyData },
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

