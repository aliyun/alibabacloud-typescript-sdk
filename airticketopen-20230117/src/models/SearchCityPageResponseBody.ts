// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCityPageResponseBodyDataCities extends $dara.Model {
  /**
   * @example
   * 北京市
   */
  cnName?: string;
  /**
   * @example
   * 110100
   */
  code?: number;
  /**
   * @example
   * 156
   */
  country?: number;
  /**
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @example
   * Beijing
   */
  enName?: string;
  /**
   * @example
   * 3
   */
  level?: number;
  /**
   * @example
   * 110000
   */
  parentCode?: number;
  /**
   * @example
   * 1
   */
  region?: number;
  /**
   * @example
   * 1
   */
  type?: number;
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
      type: 'Type',
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
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCityPageResponseBodyData extends $dara.Model {
  /**
   * @example
   * []
   */
  cities?: SearchCityPageResponseBodyDataCities[];
  /**
   * @example
   * true
   */
  hasNext?: boolean;
  /**
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
      cities: { 'type': 'array', 'itemType': SearchCityPageResponseBodyDataCities },
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

export class SearchCityPageResponseBody extends $dara.Model {
  data?: SearchCityPageResponseBodyData;
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
      data: SearchCityPageResponseBodyData,
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

