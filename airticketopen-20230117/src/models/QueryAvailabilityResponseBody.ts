// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataHotelsValue } from "./DataHotelsValue";


export class QueryAvailabilityResponseBodyData extends $dara.Model {
  hotels?: { [key: string]: DataHotelsValue[] };
  /**
   * @example
   * traceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      hotels: 'Hotels',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotels: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataHotelsValue } },
      tracerId: 'string',
    };
  }

  validate() {
    if(this.hotels) {
      $dara.Model.validateMap(this.hotels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailabilityResponseBody extends $dara.Model {
  data?: QueryAvailabilityResponseBodyData;
  /**
   * @example
   * CityCodeRequired
   */
  errorCode?: string;
  /**
   * @example
   * 城市编码不能为空
   */
  errorMsg?: string;
  /**
   * @example
   * 260E4F99-983D-1919-834C-5C42E98E5B2B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * traceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryAvailabilityResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      tracerId: 'string',
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

