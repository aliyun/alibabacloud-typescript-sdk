// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AllBaseCityInfoQueryResponseBodyModuleAllCityBaseInfoList } from "./AllBaseCityInfoQueryResponseBodyModuleAllCityBaseInfoList";


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

