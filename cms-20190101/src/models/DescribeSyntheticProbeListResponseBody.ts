// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyntheticProbeListResponseBodyIspCityList extends $dara.Model {
  areaCn?: string;
  /**
   * @example
   * Huabei
   */
  areaEn?: string;
  /**
   * @example
   * 738
   */
  city?: string;
  cityCn?: string;
  /**
   * @example
   * Beijing
   */
  cityEn?: string;
  /**
   * @example
   * 629
   */
  country?: string;
  countryCn?: string;
  /**
   * @example
   * China
   */
  countryEn?: string;
  /**
   * @example
   * 1
   */
  idcV4ProbeCount?: number;
  /**
   * @remarks
   * The number of IPv6 nodes in data centers.
   * 
   * @example
   * 1
   */
  idcV6ProbeCount?: number;
  /**
   * @remarks
   * The IP addresses of the monitored nodes.
   */
  ipPool?: string[];
  /**
   * @example
   * 232
   */
  isp?: string;
  ispCn?: string;
  /**
   * @example
   * China-Unicom
   */
  ispEn?: string;
  /**
   * @example
   * 1
   */
  lmProbeCount?: number;
  /**
   * @example
   * 1
   */
  mbProbeCount?: number;
  /**
   * @example
   * 264
   */
  region?: string;
  regionCn?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The queried detection points.
   */
  ispCityList?: DescribeSyntheticProbeListResponseBodyIspCityList[];
  /**
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @example
   * 87170bc7-e28a-4c93-b9bf-90a1dbe84736
   */
  requestId?: string;
  /**
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

