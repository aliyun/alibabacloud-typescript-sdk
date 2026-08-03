// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelSearchHotelListResponseBodyDataHotels extends $dara.Model {
  /**
   * @example
   * 北京市
   */
  cityName?: string;
  /**
   * @example
   * 中国
   */
  countryName?: string;
  /**
   * @example
   * 北京饭店
   */
  hotelName?: string;
  /**
   * @example
   * H001
   */
  standardHotelId?: string;
  /**
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
  hotels?: GlobalHotelSearchHotelListResponseBodyDataHotels[];
  /**
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
  data?: GlobalHotelSearchHotelListResponseBodyData;
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

