// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeliveryAddressResponseBodyAddressesArea extends $dara.Model {
  /**
   * @remarks
   * The area ID.
   * 
   * @example
   * 33****
   */
  areaId?: number;
  /**
   * @remarks
   * The area name.
   * 
   * @example
   * 西湖区
   */
  areaName?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      areaName: 'AreaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'number',
      areaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddressesCity extends $dara.Model {
  /**
   * @remarks
   * The city ID.
   * 
   * @example
   * 33****
   */
  cityId?: number;
  /**
   * @remarks
   * The city name.
   * 
   * @example
   * 杭州市
   */
  cityName?: string;
  static names(): { [key: string]: string } {
    return {
      cityId: 'CityId',
      cityName: 'CityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityId: 'number',
      cityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddressesProvince extends $dara.Model {
  /**
   * @remarks
   * The province ID. For more information, see [China regions, countries and territories codes](https://help.aliyun.com/document_detail/167926.html).
   * 
   * For example, **110000** represents Beijing and **120000** represents Tianjin.
   * 
   * @example
   * 330000
   */
  provinceId?: number;
  /**
   * @remarks
   * The province name.
   * 
   * @example
   * 浙江省
   */
  provinceName?: string;
  static names(): { [key: string]: string } {
    return {
      provinceId: 'ProvinceId',
      provinceName: 'ProvinceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provinceId: 'number',
      provinceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddressesTown extends $dara.Model {
  /**
   * @remarks
   * The town ID.
   * 
   * @example
   * 3001****
   */
  townId?: number;
  /**
   * @remarks
   * The town name.
   * 
   * @example
   * 三墩镇
   */
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      townId: 'TownId',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      townId: 'number',
      townName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddresses extends $dara.Model {
  /**
   * @remarks
   * The area.
   */
  area?: DescribeDeliveryAddressResponseBodyAddressesArea;
  /**
   * @remarks
   * The city.
   */
  city?: DescribeDeliveryAddressResponseBodyAddressesCity;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * Alice
   */
  contacts?: string;
  /**
   * @remarks
   * Indicates whether this is the default address.
   * 
   * @example
   * true
   */
  defaultAddress?: boolean;
  /**
   * @remarks
   * The detailed address, which should include the street name and house number.
   * 
   * @example
   * 灯彩街1008号云园区2号楼测试中心
   */
  detail?: string;
  /**
   * @remarks
   * The mobile number.
   * 
   * @example
   * 1381111****
   */
  mobile?: string;
  /**
   * @remarks
   * The postal code.
   * 
   * @example
   * 03****
   */
  postalCode?: string;
  /**
   * @remarks
   * The province.
   */
  province?: DescribeDeliveryAddressResponseBodyAddressesProvince;
  /**
   * @remarks
   * The town.
   */
  town?: DescribeDeliveryAddressResponseBodyAddressesTown;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      city: 'City',
      contacts: 'Contacts',
      defaultAddress: 'DefaultAddress',
      detail: 'Detail',
      mobile: 'Mobile',
      postalCode: 'PostalCode',
      province: 'Province',
      town: 'Town',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: DescribeDeliveryAddressResponseBodyAddressesArea,
      city: DescribeDeliveryAddressResponseBodyAddressesCity,
      contacts: 'string',
      defaultAddress: 'boolean',
      detail: 'string',
      mobile: 'string',
      postalCode: 'string',
      province: DescribeDeliveryAddressResponseBodyAddressesProvince,
      town: DescribeDeliveryAddressResponseBodyAddressesTown,
    };
  }

  validate() {
    if(this.area && typeof (this.area as any).validate === 'function') {
      (this.area as any).validate();
    }
    if(this.city && typeof (this.city as any).validate === 'function') {
      (this.city as any).validate();
    }
    if(this.province && typeof (this.province as any).validate === 'function') {
      (this.province as any).validate();
    }
    if(this.town && typeof (this.town as any).validate === 'function') {
      (this.town as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The address list.
   */
  addresses?: DescribeDeliveryAddressResponseBodyAddresses[];
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates this unique identifier for each request.
   * 
   * @example
   * 72481C12-69AB-5CE1-8A35-A8EFA921****
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of addresses.
   * 
   * > Up to 20 addresses are supported.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': DescribeDeliveryAddressResponseBodyAddresses },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

