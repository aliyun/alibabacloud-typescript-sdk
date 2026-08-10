// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelSearchHotelListResponseBodyDataHotels extends $dara.Model {
  /**
   * @remarks
   * The city name.
   * 
   * @example
   * Beijing
   */
  cityName?: string;
  /**
   * @remarks
   * The country name.
   * 
   * @example
   * China
   */
  countryName?: string;
  /**
   * @remarks
   * The hotel name.
   * 
   * @example
   * Beijing Hotel
   */
  hotelName?: string;
  /**
   * @remarks
   * The platform standard hotel ID.
   * 
   * @example
   * H001
   */
  standardHotelId?: string;
  /**
   * @remarks
   * The hotel status (ONLINE/OFFLINE).
   * 
   * @example
   * ONLINE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cityName: 'CityName',
      countryName: 'CountryName',
      hotelName: 'HotelName',
      standardHotelId: 'StandardHotelId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityName: 'string',
      countryName: 'string',
      hotelName: 'string',
      standardHotelId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelSearchHotelListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of hotels.
   */
  hotels?: GlobalHotelSearchHotelListResponseBodyDataHotels[];
  /**
   * @remarks
   * The total number of hotels.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hotels: 'Hotels',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotels: { 'type': 'array', 'itemType': GlobalHotelSearchHotelListResponseBodyDataHotels },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hotels)) {
      $dara.Model.validateArray(this.hotels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelSearchHotelListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GlobalHotelSearchHotelListResponseBodyData;
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
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
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
      data: GlobalHotelSearchHotelListResponseBodyData,
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

