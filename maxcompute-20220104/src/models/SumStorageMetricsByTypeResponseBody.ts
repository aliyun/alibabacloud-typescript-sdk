// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumStorageMetricsByTypeResponseBodyDataDailyStorageMetrics extends $dara.Model {
  /**
   * @remarks
   * The statistics date. Format: yyyyMMdd.
   * 
   * @example
   * 20260410
   */
  dateTime?: string;
  /**
   * @remarks
   * The storage usage percentage.
   * 
   * @example
   * 50
   */
  percentage?: number;
  /**
   * @remarks
   * The storage type. Valid values:
   * - Storage: standard storage.
   * - LowFreqStorage: infrequent access storage.
   * - ColdStorage: long-term storage.
   * - $sum: total storage.
   * - RecycleBinStorage: backup storage.
   * - DRStorage: multi-AZ storage.
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
   * The storage usage.
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
   * The list of daily storage usage statistics.
   */
  dailyStorageMetrics?: SumStorageMetricsByTypeResponseBodyDataDailyStorageMetrics[];
  /**
   * @remarks
   * The storage type. Valid values:
   * - Storage: standard storage.
   * - LowFreqStorage: infrequent access storage.
   * - ColdStorage: long-term storage.
   * - $sum: total storage.
   * - RecycleBinStorage: backup storage.
   * - DRStorage: multi-AZ storage.
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
   * The response data.
   */
  data?: SumStorageMetricsByTypeResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * - 1xx: Informational response. The request has been received and is being processed.
   * - 2xx: Success. The request has been successfully received, understood, and accepted by the server.
   * - 3xx: Redirection. The request is redirected. Further action is required to complete the request.
   * - 4xx: Client error. The request contains invalid parameters, bad syntax, or specific request conditions cannot be fulfilled.
   * - 5xx: Server error. The server cannot fulfill the request due to other reasons.
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

