// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumStorageMetricsByDateResponseBodyDataItemStorageMetrics extends $dara.Model {
  /**
   * @example
   * prj
   */
  itemName?: string;
  /**
   * @example
   * 91.22
   */
  percentage?: number;
  /**
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
   * @example
   * 20250719
   */
  dateTime?: string;
  itemStorageMetrics?: SumStorageMetricsByDateResponseBodyDataItemStorageMetrics[];
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
  data?: SumStorageMetricsByDateResponseBodyData[];
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * this quota is not exist.
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
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

