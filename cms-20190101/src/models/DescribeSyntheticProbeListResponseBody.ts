// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyntheticProbeListResponseBodyIspCityList extends $dara.Model {
  /**
   * @remarks
   * The name of the area in Chinese.
   * 
   * @example
   * 华北
   */
  areaCn?: string;
  /**
   * @remarks
   * The name of the area in English.
   * 
   * @example
   * Huabei
   */
  areaEn?: string;
  /**
   * @remarks
   * The city ID.
   * 
   * @example
   * 738
   */
  city?: string;
  /**
   * @remarks
   * The name of the city in Chinese.
   * 
   * @example
   * 北京
   */
  cityCn?: string;
  /**
   * @remarks
   * The name of the city in English.
   * 
   * @example
   * Beijing
   */
  cityEn?: string;
  /**
   * @remarks
   * The country code.
   * 
   * @example
   * 629
   */
  country?: string;
  /**
   * @remarks
   * The name of the country in Chinese.
   * 
   * @example
   * 中国
   */
  countryCn?: string;
  /**
   * @remarks
   * The name of the country or region in English.
   * 
   * @example
   * China
   */
  countryEn?: string;
  /**
   * @remarks
   * The number of IPv4 detection points in data centers.
   * 
   * @example
   * 1
   */
  idcV4ProbeCount?: number;
  /**
   * @remarks
   * The number of IDC IPv6 nodes.
   * 
   * @example
   * 1
   */
  idcV6ProbeCount?: number;
  /**
   * @remarks
   * The list of node IP addresses.
   */
  ipPool?: string[];
  /**
   * @remarks
   * The carrier ID.
   * 
   * @example
   * 232
   */
  isp?: string;
  /**
   * @remarks
   * The name of the carrier in Chinese.
   * 
   * @example
   * 联通
   */
  ispCn?: string;
  /**
   * @remarks
   * The name of the carrier in English.
   * 
   * @example
   * China-Unicom
   */
  ispEn?: string;
  /**
   * @remarks
   * The number of last-mile detection points.
   * 
   * @example
   * 1
   */
  lmProbeCount?: number;
  /**
   * @remarks
   * The number of mobile detection points.
   * 
   * @example
   * 1
   */
  mbProbeCount?: number;
  /**
   * @remarks
   * The province code.
   * 
   * @example
   * 264
   */
  region?: string;
  /**
   * @remarks
   * The name of the province in Chinese.
   * 
   * @example
   * 江西省
   */
  regionCn?: string;
  /**
   * @remarks
   * The name of the province in English.
   * 
   * @example
   * Jiangxi
   */
  regionEn?: string;
  static names(): { [key: string]: string } {
    return {
      areaCn: 'AreaCn',
      areaEn: 'AreaEn',
      city: 'City',
      cityCn: 'CityCn',
      cityEn: 'CityEn',
      country: 'Country',
      countryCn: 'CountryCn',
      countryEn: 'CountryEn',
      idcV4ProbeCount: 'IdcV4ProbeCount',
      idcV6ProbeCount: 'IdcV6ProbeCount',
      ipPool: 'IpPool',
      isp: 'Isp',
      ispCn: 'IspCn',
      ispEn: 'IspEn',
      lmProbeCount: 'LmProbeCount',
      mbProbeCount: 'MbProbeCount',
      region: 'Region',
      regionCn: 'RegionCn',
      regionEn: 'RegionEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaCn: 'string',
      areaEn: 'string',
      city: 'string',
      cityCn: 'string',
      cityEn: 'string',
      country: 'string',
      countryCn: 'string',
      countryEn: 'string',
      idcV4ProbeCount: 'number',
      idcV6ProbeCount: 'number',
      ipPool: { 'type': 'array', 'itemType': 'string' },
      isp: 'string',
      ispCn: 'string',
      ispEn: 'string',
      lmProbeCount: 'number',
      mbProbeCount: 'number',
      region: 'string',
      regionCn: 'string',
      regionEn: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipPool)) {
      $dara.Model.validateArray(this.ipPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyntheticProbeListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of detection points.
   */
  ispCityList?: DescribeSyntheticProbeListResponseBodyIspCityList[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 87170bc7-e28a-4c93-b9bf-90a1dbe84736
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values: true: The operation was successful. false: The operation failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ispCityList: 'IspCityList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      ispCityList: { 'type': 'array', 'itemType': DescribeSyntheticProbeListResponseBodyIspCityList },
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ispCityList)) {
      $dara.Model.validateArray(this.ispCityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

