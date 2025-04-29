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

