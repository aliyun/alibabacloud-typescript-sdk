// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumStorageMetricsByDateResponseBodyDataItemStorageMetrics extends $dara.Model {
  /**
   * @remarks
   * If the specified type is PROJECT, this parameter indicates the project name. If the specified type is STORAGE_TYPE, this parameter indicates the storage class.
   * 
   * @example
   * prj
   */
  itemName?: string;
  /**
   * @remarks
   * The percentage of the storage usage.
   * 
   * @example
   * 91.22
   */
  percentage?: number;
  /**
   * @remarks
   * The storage usage.
   * 
   * @example
   * 300.560392
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      itemName: 'itemName',
      percentage: 'percentage',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemName: 'string',
      percentage: 'number',
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

export class SumStorageMetricsByDateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The date of the statistics. The format is yyyyMMdd.
   * 
   * @example
   * 20250719
   */
  dateTime?: string;
  /**
   * @remarks
   * A list of storage usage for the specified type.
   */
  itemStorageMetrics?: SumStorageMetricsByDateResponseBodyDataItemStorageMetrics[];
  /**
   * @remarks
   * The storage class. Valid values:
   * 
   * - Storage. Standard storage.
   * - LowFreqStorage. IA storage class.
   * - ColdStorage. Archive storage.
   * 
   * @example
   * Storage
   */
  storageType?: string;
  /**
   * @remarks
   * The unit of the total storage usage.
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
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      dateTime: 'dateTime',
      itemStorageMetrics: 'itemStorageMetrics',
      storageType: 'storageType',
      unit: 'unit',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateTime: 'string',
      itemStorageMetrics: { 'type': 'array', 'itemType': SumStorageMetricsByDateResponseBodyDataItemStorageMetrics },
      storageType: 'string',
      unit: 'string',
      usage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemStorageMetrics)) {
      $dara.Model.validateArray(this.itemStorageMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SumStorageMetricsByDateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: SumStorageMetricsByDateResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * this quota is not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: Informational response. The request has been received and is being processed.
   * - 2xx: Success. The action was successfully received, understood, and accepted by the server.
   * - 3xx: Redirection. The request was redirected, and further action is required to complete the request.
   * - 4xx: Client error. The request contains invalid request parameters or syntax, or specific request conditions cannot be met.
   * - 5xx: Server error. The server failed to fulfill the request for other reasons.
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
   * 0abb781a17411408145995819e0dae
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SumStorageMetricsByDateResponseBodyData },
      errorCode: 'string',
      errorMsg: 'string',
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

