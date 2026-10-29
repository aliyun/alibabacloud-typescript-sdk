// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyntheticProbeListResponseBodyIspCityList extends $dara.Model {
  /**
   * @remarks
   * The Chinese name of the region.
   * 
   * @example
   * North China
   */
  areaCn?: string;
  /**
   * @remarks
   * The English name of the region.
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
   * The Chinese name of the city.
   * 
   * @example
   * Beijing
   */
  cityCn?: string;
  /**
   * @remarks
   * The English name of the city.
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
   * The Chinese name of the country.
   * 
   * @example
   * China
   */
  countryCn?: string;
  /**
   * @remarks
   * The English name of the country or region.
   * 
   * @example
   * China
   */
  countryEn?: string;
  /**
   * @remarks
   * The number of IPv4 nodes in the IDC.
   * 
   * @example
   * 1
   */
  idcV4ProbeCount?: number;
  /**
   * @remarks
   * The number of IPv6 nodes in the IDC.
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
   * The Chinese name of the carrier.
   * 
   * @example
   * China Unicom
   */
  ispCn?: string;
  /**
   * @remarks
   * The English name of the carrier.
   * 
   * @example
   * China-Unicom
   */
  ispEn?: string;
  /**
   * @remarks
   * The number of Lastmile detection points.
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
   * The Chinese name of the province.
   * 
   * @example
   * Jiangxi
   */
  regionCn?: string;
  /**
   * @remarks
   * The English name of the province.
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
   * Indicates whether the operation is successful. Valid values:
   * 
   * - true: The operation is successful.
   * - false: The operation fails.
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

