// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorISPCityListResponseBodyIspCityListIspCityIPPool extends $dara.Model {
  IPPool?: string[];
  static names(): { [key: string]: string } {
    return {
      IPPool: 'IPPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPPool: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPPool)) {
      $dara.Model.validateArray(this.IPPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorISPCityListResponseBodyIspCityListIspCity extends $dara.Model {
  area_en?: string;
  area_zh_cN?: string;
  /**
   * @remarks
   * The city ID.
   * 
   * @example
   * 4
   */
  city?: string;
  cityName_en?: string;
  cityName_zh_cN?: string;
  /**
   * @remarks
   * The country name.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * 629
   */
  country?: string;
  country_en?: string;
  country_zh_cN?: string;
  /**
   * @remarks
   * The IP address pool.
   */
  IPPool?: DescribeSiteMonitorISPCityListResponseBodyIspCityListIspCityIPPool;
  /**
   * @remarks
   * The number of IPv4 probes.
   * 
   * @example
   * 4
   */
  IPV4ProbeCount?: string;
  /**
   * @remarks
   * The number of IPv6 probes.
   * 
   * @example
   * 3
   */
  IPV6ProbeCount?: string;
  /**
   * @remarks
   * The carrier ID.
   * 
   * @example
   * 232
   */
  isp?: string;
  ispName_en?: string;
  ispName_zh_cN?: string;
  /**
   * @remarks
   * The province name.
   * 
   * @example
   * 264
   */
  region?: string;
  region_en?: string;
  region_zh_cN?: string;
  static names(): { [key: string]: string } {
    return {
      area_en: 'Area.en',
      area_zh_cN: 'Area.zh_CN',
      city: 'City',
      cityName_en: 'CityName.en',
      cityName_zh_cN: 'CityName.zh_CN',
      country: 'Country',
      country_en: 'Country.en',
      country_zh_cN: 'Country.zh_CN',
      IPPool: 'IPPool',
      IPV4ProbeCount: 'IPV4ProbeCount',
      IPV6ProbeCount: 'IPV6ProbeCount',
      isp: 'Isp',
      ispName_en: 'IspName.en',
      ispName_zh_cN: 'IspName.zh_CN',
      region: 'Region',
      region_en: 'Region.en',
      region_zh_cN: 'Region.zh_CN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area_en: 'string',
      area_zh_cN: 'string',
      city: 'string',
      cityName_en: 'string',
      cityName_zh_cN: 'string',
      country: 'string',
      country_en: 'string',
      country_zh_cN: 'string',
      IPPool: DescribeSiteMonitorISPCityListResponseBodyIspCityListIspCityIPPool,
      IPV4ProbeCount: 'string',
      IPV6ProbeCount: 'string',
      isp: 'string',
      ispName_en: 'string',
      ispName_zh_cN: 'string',
      region: 'string',
      region_en: 'string',
      region_zh_cN: 'string',
    };
  }

  validate() {
    if(this.IPPool && typeof (this.IPPool as any).validate === 'function') {
      (this.IPPool as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorISPCityListResponseBodyIspCityList extends $dara.Model {
  ispCity?: DescribeSiteMonitorISPCityListResponseBodyIspCityListIspCity[];
  static names(): { [key: string]: string } {
    return {
      ispCity: 'IspCity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCity: { 'type': 'array', 'itemType': DescribeSiteMonitorISPCityListResponseBodyIspCityListIspCity },
    };
  }

  validate() {
    if(Array.isArray(this.ispCity)) {
      $dara.Model.validateArray(this.ispCity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorISPCityListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The queried detection points.
   */
  ispCityList?: DescribeSiteMonitorISPCityListResponseBodyIspCityList;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B35D7D84-547B-4E61-B909-48A1F8A0C756
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      ispCityList: DescribeSiteMonitorISPCityListResponseBodyIspCityList,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.ispCityList && typeof (this.ispCityList as any).validate === 'function') {
      (this.ispCityList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

