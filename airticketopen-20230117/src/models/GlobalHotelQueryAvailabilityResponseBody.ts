// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataHotelsValue } from "./DataHotelsValue";


export class GlobalHotelQueryAvailabilityResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The room type offers grouped by standard hotel ID.
   */
  hotels?: { [key: string]: DataHotelsValue[] };
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
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

export class GlobalHotelQueryAvailabilityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GlobalHotelQueryAvailabilityResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * CityCodeRequired
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * City code cannot be empty
   */
  errorMsg?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 260E4F99-983D-1919-834C-5C42E98E5B2B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
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
      data: GlobalHotelQueryAvailabilityResponseBodyData,
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

