// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageSizeSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The date of statistics.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The timestamp of the last data update.
   * 
   * @example
   * 1749090705919
   */
  timestamp?: number;
  /**
   * @remarks
   * The unit of the storage metric usage. It includes:
   * 
   * - lowFreqStorage
   * 
   * - standardStorage
   * 
   * - longTermStorage
   * 
   * - totalStorage
   */
  unit?: { [key: string]: string };
  /**
   * @remarks
   * The storage metrics. It includes:
   * 
   * - lowFreqStorage
   * 
   * - standardStorage
   * 
   * - longTermStorage
   * 
   * - totalStorage
   */
  value?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      timestamp: 'timestamp',
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      timestamp: 'number',
      unit: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      value: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.unit) {
      $dara.Model.validateMap(this.unit);
    }
    if(this.value) {
      $dara.Model.validateMap(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageSizeSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetStorageSizeSummaryResponseBodyData;
  /**
   * @remarks
   * The business error code or an empty value.
   * 
   * - If success is false, a business error code is returned.
   * 
   * - If success is true, an empty value is returned.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The description of the error.
   * 
   * @example
   * this quota is not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the business is successful. If this parameter is not empty and the value is not 200, the business fails.
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
   * 0be3e0aa16667684362147582e038f
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
      data: GetStorageSizeSummaryResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

