// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageSummaryComparedResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The start date.
   * 
   * @example
   * 20250601
   */
  beginDate?: string;
  /**
   * @remarks
   * The end date.
   * 
   * @example
   * 20250604
   */
  endDate?: string;
  /**
   * @remarks
   * The year-on-year (YoY) change rate of the storage usage from the start date to the end date. Valid values:
   * 
   * - lowFreqStorageRate
   * 
   * - totalStorageRate
   * 
   * - standardStorageRate
   * 
   * - longTermStorageRate
   */
  rate?: { [key: string]: number };
  /**
   * @remarks
   * The unit of the change in the storage usage from the start date to the end date. Valid values:
   * 
   * - lowFreqStorageUnit
   * 
   * - totalStorageUnit
   * 
   * - standardStorageUnit
   * 
   * - longTermStorageUnit
   */
  unit?: { [key: string]: string };
  /**
   * @remarks
   * The change in the storage usage from the start date to the end date. Valid values:
   * 
   * - lowFreqStorage
   * 
   * - totalStorage
   * 
   * - standardStorage
   * 
   * - longTermStorage
   */
  value?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      beginDate: 'beginDate',
      endDate: 'endDate',
      rate: 'rate',
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      rate: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      unit: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      value: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.rate) {
      $dara.Model.validateMap(this.rate);
    }
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

export class GetStorageSummaryComparedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetStorageSummaryComparedResponseBodyData;
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
   * plan \\"***\\" does not exist
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * 
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * 
   * - 3xx: redirection. The request is redirected. You must take further action to complete the request.
   * 
   * - 4xx: client error. The request contains invalid parameters or syntax, or fails to meet specific conditions.
   * 
   * - 5xx: server error. The server cannot fulfill the request for other reasons.
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
   * 0bc3b4b016674434996033675e71ee
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
      data: GetStorageSummaryComparedResponseBodyData,
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

