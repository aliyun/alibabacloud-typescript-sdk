// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumStorageMetricsByDateResponseBodyDataItemStorageMetrics extends $dara.Model {
  /**
   * @remarks
   * If the type is PROJECT, this parameter indicates the project name. If the type is STORAGE_TYPE, this parameter indicates the storage type.
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
   * The list of storage usage of a specified type.
   */
  itemStorageMetrics?: SumStorageMetricsByDateResponseBodyDataItemStorageMetrics[];
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * - Storage: Standard.
   * 
   * - LowFreqStorage: Infrequent Access (IA).
   * 
   * - ColdStorage: Archive.
   * 
   * @example
   * Storage
   */
  storageType?: string;
  /**
   * @remarks
   * The unit of the total storage.
   * 
   * @example
   * GB
   */
  unit?: string;
  /**
   * @remarks
   * The total storage.
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
   * The HTTP status code.
   * 
   * - 1xx: Informational. The request is received and the process is continuing.
   * 
   * - 2xx: Success. The request is successfully received, understood, and accepted.
   * 
   * - 3xx: Redirection. Further action needs to be taken to complete the request.
   * 
   * - 4xx: Client Error. The request contains bad syntax or cannot be fulfilled.
   * 
   * - 5xx: Server Error. The server fails to fulfill an apparently valid request.
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
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SumStorageMetricsByDateResponseBodyData },
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

