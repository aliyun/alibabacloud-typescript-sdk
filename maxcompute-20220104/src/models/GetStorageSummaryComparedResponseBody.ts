// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageSummaryComparedResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20250601
   */
  beginDate?: string;
  /**
   * @example
   * 20250604
   */
  endDate?: string;
  rate?: { [key: string]: number };
  unit?: { [key: string]: string };
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
  data?: GetStorageSummaryComparedResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * plan \\"***\\" does not exist
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
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

