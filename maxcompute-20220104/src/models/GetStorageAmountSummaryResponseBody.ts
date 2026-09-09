// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageAmountSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The date of the statistics.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The timestamp. This API does not return this parameter.
   * 
   * @example
   * -
   */
  timestamp?: number;
  /**
   * @remarks
   * The unit of the storage metrics. This API does not return this parameter.
   */
  unit?: { [key: string]: string };
  /**
   * @remarks
   * The storage metrics. The metrics include the following:
   * 
   * - projectAmount
   * - schemaAmount
   * - tableAmount
   * - partitionAmount
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

export class GetStorageAmountSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetStorageAmountSummaryResponseBodyData;
  /**
   * @remarks
   * The business error code or an empty value.
   * 
   * - If success is false, a business error code is returned.
   * - If success is true, an empty value is returned.
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
   * Indicates whether the business is successful. If this parameter is not empty and the value is not 200, the business processing failed.
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
   * 688003E1-D1B4-5468-957E-2FFB3AC8D79B
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
      data: GetStorageAmountSummaryResponseBodyData,
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

