// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumComputeMetricsByUsageResponseBodyDataDailyComputeMetrics extends $dara.Model {
  /**
   * @example
   * 20260413
   */
  dateTime?: string;
  /**
   * @example
   * GBCplx
   */
  unit?: string;
  /**
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
  dailyComputeMetrics?: SumComputeMetricsByUsageResponseBodyDataDailyComputeMetrics[];
  /**
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
  data?: SumComputeMetricsByUsageResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
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

