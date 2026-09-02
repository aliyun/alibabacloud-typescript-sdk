// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelSearchCityPageResponseBodyDataCities extends $dara.Model {
  /**
   * @remarks
   * The Chinese name of the city.
   * 
   * @example
   * 北京市
   */
  cnName?: string;
  /**
   * @remarks
   * The city code.
   * 
   * @example
   * 110100
   */
  code?: number;
  /**
   * @remarks
   * The country code.
   * 
   * @example
   * 156
   */
  country?: number;
  /**
   * @remarks
   * The country code in ISO 3166-1 alpha-2 format.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The English name of the city.
   * 
   * @example
   * Beijing
   */
  enName?: string;
  /**
   * @remarks
   * The administrative level.
   * 
   * @example
   * 3
   */
  level?: number;
  /**
   * @remarks
   * The parent city code.
   * 
   * @example
   * 110000
   */
  parentCode?: number;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * 1
   */
  region?: number;
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      code: 'Code',
      country: 'Country',
      countryCode: 'CountryCode',
      enName: 'EnName',
      level: 'Level',
      parentCode: 'ParentCode',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      code: 'number',
      country: 'number',
      countryCode: 'string',
      enName: 'string',
      level: 'number',
      parentCode: 'number',
      region: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelSearchCityPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of cities.
   * 
   * @example
   * []
   */
  cities?: GlobalHotelSearchCityPageResponseBodyDataCities[];
  /**
   * @remarks
   * Indicates whether there is a next page.
   * 
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      cities: 'Cities',
      hasNext: 'HasNext',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cities: { 'type': 'array', 'itemType': GlobalHotelSearchCityPageResponseBodyDataCities },
      hasNext: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cities)) {
      $dara.Model.validateArray(this.cities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelSearchCityPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GlobalHotelSearchCityPageResponseBodyData;
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
      data: GlobalHotelSearchCityPageResponseBodyData,
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

