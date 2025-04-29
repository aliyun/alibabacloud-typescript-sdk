// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TravelStandardListQueryResponseBodyModuleItemsReserveRuleDescDataList } from "./TravelStandardListQueryResponseBodyModuleItemsReserveRuleDescDataList";


export class TravelStandardListQueryResponseBodyModuleItemsReserveRuleDesc extends $dara.Model {
  dataList?: TravelStandardListQueryResponseBodyModuleItemsReserveRuleDescDataList[];
  title?: string;
  /**
   * @example
   * flight
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'data_list',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': TravelStandardListQueryResponseBodyModuleItemsReserveRuleDescDataList },
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

