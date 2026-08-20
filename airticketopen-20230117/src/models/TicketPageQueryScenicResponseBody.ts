// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketPageQueryScenicResponseBodyDataScenics extends $dara.Model {
  /**
   * @example
   * 杭州市西湖区龙井路1号
   */
  address?: string;
  /**
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @example
   * 中国
   */
  country?: string;
  /**
   * @example
   * 国家5A级旅游景区
   */
  description?: string;
  /**
   * @example
   * ["https://example.com/img1.jpg"]
   */
  images?: string[];
  /**
   * @example
   * 31.138026
   */
  latitude?: number;
  /**
   * @example
   * AAAAA
   */
  level?: string;
  /**
   * @example
   * 121.658793
   */
  longitude?: number;
  /**
   * @example
   * 西湖风景区
   */
  name?: string;
  /**
   * @example
   * 08:00-17:30
   */
  openingTime?: string;
  /**
   * @example
   * 0571-12345678
   */
  phone?: string;
  /**
   * @example
   * [{"type":"儿童","typeDesc":"3周岁(含)至11周岁(含)享受优惠票"},{"type":"老年人","typeDesc":"65周岁(含)以上享受优惠票"}]
   */
  preferentialPolicy?: string;
  /**
   * @example
   * 浙江省
   */
  province?: string;
  /**
   * @example
   * 1天
   */
  residenceTime?: string;
  /**
   * @example
   * 123456
   */
  scenicId?: number;
  /**
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      description: 'Description',
      images: 'Images',
      latitude: 'Latitude',
      level: 'Level',
      longitude: 'Longitude',
      name: 'Name',
      openingTime: 'OpeningTime',
      phone: 'Phone',
      preferentialPolicy: 'PreferentialPolicy',
      province: 'Province',
      residenceTime: 'ResidenceTime',
      scenicId: 'ScenicId',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      description: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
      latitude: 'number',
      level: 'string',
      longitude: 'number',
      name: 'string',
      openingTime: 'string',
      phone: 'string',
      preferentialPolicy: 'string',
      province: 'string',
      residenceTime: 'string',
      scenicId: 'number',
      timezone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryScenicResponseBodyData extends $dara.Model {
  scenics?: TicketPageQueryScenicResponseBodyDataScenics[];
  /**
   * @example
   * 100
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      scenics: 'Scenics',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenics: { 'type': 'array', 'itemType': TicketPageQueryScenicResponseBodyDataScenics },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scenics)) {
      $dara.Model.validateArray(this.scenics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryScenicResponseBody extends $dara.Model {
  data?: TicketPageQueryScenicResponseBodyData;
  /**
   * @example
   * ScenicIdInvalid
   */
  errorCode?: string;
  /**
   * @example
   * ScenicId不合法
   */
  errorMsg?: string;
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TicketPageQueryScenicResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
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

