// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumComputeMetricsByRecordResponseBodyDataDailyComputeRecords extends $dara.Model {
  /**
   * @example
   * 20260411
   */
  dateTime?: string;
  /**
   * @example
   * 50
   */
  percentage?: number;
  /**
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
  dailyComputeRecords?: SumComputeMetricsByRecordResponseBodyDataDailyComputeRecords[];
  /**
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
  data?: SumComputeMetricsByRecordResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
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

