// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeliveryAddressResponseBodyAddressesArea extends $dara.Model {
  /**
   * @example
   * 33****
   */
  areaId?: number;
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
   * @example
   * 33****
   */
  cityId?: number;
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
   * @example
   * 330000
   */
  provinceId?: number;
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
   * @example
   * 3001****
   */
  townId?: number;
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
  area?: DescribeDeliveryAddressResponseBodyAddressesArea;
  city?: DescribeDeliveryAddressResponseBodyAddressesCity;
  /**
   * @example
   * Alice
   */
  contacts?: string;
  /**
   * @example
   * true
   */
  defaultAddress?: boolean;
  detail?: string;
  /**
   * @example
   * 1381111****
   */
  mobile?: string;
  /**
   * @example
   * 03****
   */
  postalCode?: string;
  province?: DescribeDeliveryAddressResponseBodyAddressesProvince;
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
  addresses?: DescribeDeliveryAddressResponseBodyAddresses[];
  /**
   * @example
   * 72481C12-69AB-5CE1-8A35-A8EFA921****
   */
  requestId?: string;
  /**
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

