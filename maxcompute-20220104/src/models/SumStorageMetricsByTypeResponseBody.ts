// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumStorageMetricsByTypeResponseBodyDataDailyStorageMetrics extends $dara.Model {
  /**
   * @remarks
   * The date of the metric, in `yyyyMMdd` format.
   * 
   * @example
   * 20260410
   */
  dateTime?: string;
  /**
   * @remarks
   * The percentage of total daily storage that this storage type accounts for.
   * 
   * @example
   * 50
   */
  percentage?: number;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * - `Storage`: standard storage.
   * 
   * - `LowFreqStorage`: infrequent access storage.
   * 
   * - `ColdStorage`: archive storage.
   * 
   * - `$sum`: total storage.
   * 
   * - `RecycleBinStorage`: recycle bin storage.
   * 
   * - `DRStorage`: multi-AZ storage.
   * 
   * @example
   * Storage
   */
  storageType?: string;
  /**
   * @remarks
   * The unit of the storage metric.
   * 
   * @example
   * GB
   */
  unit?: string;
  /**
   * @remarks
   * The storage usage for this day.
   * 
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
  /**
   * @remarks
   * A list of daily storage usage metrics.
   */
  dailyStorageMetrics?: SumStorageMetricsByTypeResponseBodyDataDailyStorageMetrics[];
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * - `Storage`: standard storage.
   * 
   * - `LowFreqStorage`: infrequent access storage.
   * 
   * - `ColdStorage`: archive storage.
   * 
   * - `$sum`: total storage.
   * 
   * - `RecycleBinStorage`: recycle bin storage.
   * 
   * - `DRStorage`: multi-AZ storage.
   * 
   * @example
   * Storage
   */
  storageType?: string;
  /**
   * @remarks
   * The unit of the storage metric.
   * 
   * @example
   * GB
   */
  unit?: string;
  /**
   * @remarks
   * The total storage usage.
   * 
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
  /**
   * @remarks
   * The returned data.
   */
  data?: SumStorageMetricsByTypeResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - `1xx`: Informational response - The request has been received and is being processed.
   * 
   * - `2xx`: Success - The request was successfully received, understood, and accepted.
   * 
   * - `3xx`: Redirection - Further action is needed to complete the request.
   * 
   * - `4xx`: Client error - The request contains invalid syntax or cannot be fulfilled.
   * 
   * - `5xx`: Server error - The server failed to fulfill a valid request.
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

