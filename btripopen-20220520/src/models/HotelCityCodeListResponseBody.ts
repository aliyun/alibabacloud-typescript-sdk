// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelCityCodeListResponseBodyModuleCitysDistricts extends $dara.Model {
  districtCode?: string;
  districtName?: string;
  static names(): { [key: string]: string } {
    return {
      districtCode: 'district_code',
      districtName: 'district_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtCode: 'string',
      districtName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelCityCodeListResponseBodyModuleCitys extends $dara.Model {
  cityCode?: string;
  cityName?: string;
  districts?: HotelCityCodeListResponseBodyModuleCitysDistricts[];
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      districts: 'districts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      districts: { 'type': 'array', 'itemType': HotelCityCodeListResponseBodyModuleCitysDistricts },
    };
  }

  validate() {
    if(Array.isArray(this.districts)) {
      $dara.Model.validateArray(this.districts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelCityCodeListResponseBodyModule extends $dara.Model {
  citys?: HotelCityCodeListResponseBodyModuleCitys[];
  proviceCode?: string;
  provinceName?: string;
  static names(): { [key: string]: string } {
    return {
      citys: 'citys',
      proviceCode: 'provice_code',
      provinceName: 'province_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      citys: { 'type': 'array', 'itemType': HotelCityCodeListResponseBodyModuleCitys },
      proviceCode: 'string',
      provinceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.citys)) {
      $dara.Model.validateArray(this.citys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelCityCodeListResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: HotelCityCodeListResponseBodyModule[];
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': HotelCityCodeListResponseBodyModule },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

