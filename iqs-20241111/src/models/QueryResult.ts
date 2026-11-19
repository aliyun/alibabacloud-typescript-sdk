// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResultDataImages extends $dara.Model {
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Lobby
   */
  title?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * http://store.example.com/showpic/e76beb3bedca3fe0375cef12742ea23e
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResultDataMetadata extends $dara.Model {
  /**
   * @remarks
   * The average spend in CNY.
   * 
   * @example
   * 500
   */
  averageSpend?: string;
  /**
   * @remarks
   * The business area.
   * 
   * @example
   * Central Area of West Lake Tourist Zone
   */
  businessArea?: string;
  /**
   * @remarks
   * The business hours for today.
   * 
   * @example
   * 09:00-18:00
   */
  dailyOpeningHours?: string;
  /**
   * @remarks
   * The main tag.
   * 
   * @example
   * Luxury
   */
  mainTag?: string;
  /**
   * @remarks
   * The contact phone numbers. Multiple numbers are separated by vertical bars.
   * 
   * @example
   * 0571-8732****
   */
  phone?: string;
  /**
   * @remarks
   * The rating.
   * 
   * @example
   * 4.7
   */
  score?: string;
  /**
   * @remarks
   * The weekly opening days.
   * 
   * @example
   * Monday to Sunday
   */
  weeklyOpeningDays?: string;
  static names(): { [key: string]: string } {
    return {
      averageSpend: 'averageSpend',
      businessArea: 'businessArea',
      dailyOpeningHours: 'dailyOpeningHours',
      mainTag: 'mainTag',
      phone: 'phone',
      score: 'score',
      weeklyOpeningDays: 'weeklyOpeningDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageSpend: 'string',
      businessArea: 'string',
      dailyOpeningHours: 'string',
      mainTag: 'string',
      phone: 'string',
      score: 'string',
      weeklyOpeningDays: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResultData extends $dara.Model {
  /**
   * @remarks
   * The detailed address.
   * 
   * @example
   * No. 22 Fayun Lane, West Lake Scenic Area
   */
  address?: string;
  /**
   * @remarks
   * The city code.
   * 
   * @example
   * 0571
   */
  cityCode?: string;
  /**
   * @remarks
   * The city name.
   * 
   * @example
   * Hangzhou
   */
  cityName?: string;
  /**
   * @remarks
   * The distance from the center point in meters.
   * 
   * @example
   * 815
   */
  distanceMeter?: string;
  /**
   * @remarks
   * The district code.
   * 
   * @example
   * 330106
   */
  districtCode?: string;
  /**
   * @remarks
   * The district name.
   * 
   * @example
   * Xihu District
   */
  districtName?: string;
  /**
   * @remarks
   * The internal identifier of the location.
   * 
   * @example
   * B023B0BI3J
   */
  id?: string;
  /**
   * @remarks
   * The list of images.
   */
  images?: QueryResultDataImages[];
  /**
   * @remarks
   * The latitude of the location.
   * 
   * @example
   * 30.234403
   */
  latitude?: string;
  /**
   * @remarks
   * The longitude of the location.
   * 
   * @example
   * 120.097327
   */
  longitude?: string;
  /**
   * @remarks
   * The related business information.
   */
  metadata?: QueryResultDataMetadata;
  /**
   * @remarks
   * The location name.
   * 
   * @example
   * Amanfayun Hangzhou
   */
  name?: string;
  /**
   * @remarks
   * The province code.
   * 
   * @example
   * 330000
   */
  provinceCode?: string;
  /**
   * @remarks
   * The province name.
   * 
   * @example
   * Zhejiang Province
   */
  provinceName?: string;
  /**
   * @remarks
   * The location type code.
   * 
   * @example
   * 100102
   */
  typeCode?: string;
  /**
   * @remarks
   * The location types. Multiple types are separated by vertical bars.
   * 
   * @example
   * Accommodation|Hotel|Five-star hotel
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityCode: 'cityCode',
      cityName: 'cityName',
      distanceMeter: 'distanceMeter',
      districtCode: 'districtCode',
      districtName: 'districtName',
      id: 'id',
      images: 'images',
      latitude: 'latitude',
      longitude: 'longitude',
      metadata: 'metadata',
      name: 'name',
      provinceCode: 'provinceCode',
      provinceName: 'provinceName',
      typeCode: 'typeCode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityCode: 'string',
      cityName: 'string',
      distanceMeter: 'string',
      districtCode: 'string',
      districtName: 'string',
      id: 'string',
      images: { 'type': 'array', 'itemType': QueryResultDataImages },
      latitude: 'string',
      longitude: 'string',
      metadata: QueryResultDataMetadata,
      name: 'string',
      provinceCode: 'string',
      provinceName: 'string',
      typeCode: 'string',
      types: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResult extends $dara.Model {
  /**
   * @remarks
   * The list of returned locations.
   */
  data?: QueryResultData[];
  /**
   * @remarks
   * The unique request ID for troubleshooting.
   * 
   * @example
   * 15A85F99-408F-5BFA-B617-0C7D3E732ABD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryResultData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

