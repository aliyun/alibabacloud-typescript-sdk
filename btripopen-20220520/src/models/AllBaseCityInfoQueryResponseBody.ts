// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllBaseCityInfoQueryResponseBodyModuleAllCityBaseInfoList extends $dara.Model {
  /**
   * @example
   * 330122
   */
  adcode?: string;
  /**
   * @example
   * 0571
   */
  cityCode?: string;
  /**
   * @example
   * 3
   */
  cityLevel?: string;
  /**
   * @example
   * 桐庐
   */
  cityName?: string;
  /**
   * @example
   * 中国，浙江省，杭州市，桐庐
   */
  cnNameTree?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  otherNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      adcode: 'adcode',
      cityCode: 'city_code',
      cityLevel: 'city_level',
      cityName: 'city_name',
      cnNameTree: 'cn_name_tree',
      id: 'id',
      otherNameList: 'other_name_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adcode: 'string',
      cityCode: 'string',
      cityLevel: 'string',
      cityName: 'string',
      cnNameTree: 'string',
      id: 'number',
      otherNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.otherNameList)) {
      $dara.Model.validateArray(this.otherNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllBaseCityInfoQueryResponseBodyModule extends $dara.Model {
  allCityBaseInfoList?: AllBaseCityInfoQueryResponseBodyModuleAllCityBaseInfoList[];
  static names(): { [key: string]: string } {
    return {
      allCityBaseInfoList: 'all_city_base_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCityBaseInfoList: { 'type': 'array', 'itemType': AllBaseCityInfoQueryResponseBodyModuleAllCityBaseInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.allCityBaseInfoList)) {
      $dara.Model.validateArray(this.allCityBaseInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllBaseCityInfoQueryResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * demo
   */
  message?: string;
  module?: AllBaseCityInfoQueryResponseBodyModule;
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210f079e16603757182131635d866a
   */
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
      module: AllBaseCityInfoQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

