// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataHotelsValue } from "./DataHotelsValue";


export class GlobalHotelQueryCalendarAvailabilityResponseBodyDataFailedHotels extends $dara.Model {
  /**
   * @example
   * HOTEL_NOT_FOUND
   */
  errorCode?: string;
  /**
   * @example
   * 酒店不存在
   */
  errorMessage?: string;
  /**
   * @example
   * H001
   */
  standardHotelId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      standardHotelId: 'StandardHotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      standardHotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelQueryCalendarAvailabilityResponseBodyData extends $dara.Model {
  failedHotels?: GlobalHotelQueryCalendarAvailabilityResponseBodyDataFailedHotels[];
  hotels?: { [key: string]: DataHotelsValue[] };
  /**
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      failedHotels: 'FailedHotels',
      hotels: 'Hotels',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedHotels: { 'type': 'array', 'itemType': GlobalHotelQueryCalendarAvailabilityResponseBodyDataFailedHotels },
      hotels: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataHotelsValue } },
      tracerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failedHotels)) {
      $dara.Model.validateArray(this.failedHotels);
    }
    if(this.hotels) {
      $dara.Model.validateMap(this.hotels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelQueryCalendarAvailabilityResponseBody extends $dara.Model {
  data?: GlobalHotelQueryCalendarAvailabilityResponseBodyData;
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
      data: GlobalHotelQueryCalendarAvailabilityResponseBodyData,
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

