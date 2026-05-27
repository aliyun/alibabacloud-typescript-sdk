// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumStorageMetricsByTypeResponseBodyDataDailyStorageMetrics extends $dara.Model {
  /**
   * @example
   * 20260410
   */
  dateTime?: string;
  /**
   * @example
   * 50
   */
  percentage?: number;
  /**
   * @example
   * Storage
   */
  storageType?: string;
  /**
   * @example
   * GB
   */
  unit?: string;
  /**
   * @example
   * 30
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      dateTime: 'dateTime',
      percentage: 'percentage',
      storageType: 'storageType',
      unit: 'unit',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateTime: 'string',
      percentage: 'number',
      storageType: 'string',
      unit: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SumStorageMetricsByTypeResponseBodyData extends $dara.Model {
  dailyStorageMetrics?: SumStorageMetricsByTypeResponseBodyDataDailyStorageMetrics[];
  /**
   * @example
   * Storage
   */
  storageType?: string;
  /**
   * @example
   * GB
   */
  unit?: string;
  /**
   * @example
   * 329.503338
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      dailyStorageMetrics: 'dailyStorageMetrics',
      storageType: 'storageType',
      unit: 'unit',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyStorageMetrics: { 'type': 'array', 'itemType': SumStorageMetricsByTypeResponseBodyDataDailyStorageMetrics },
      storageType: 'string',
      unit: 'string',
      usage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dailyStorageMetrics)) {
      $dara.Model.validateArray(this.dailyStorageMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SumStorageMetricsByTypeResponseBody extends $dara.Model {
  data?: SumStorageMetricsByTypeResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * 0a06dc0917476202205161986edbbc
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
      data: { 'type': 'array', 'itemType': SumStorageMetricsByTypeResponseBodyData },
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

