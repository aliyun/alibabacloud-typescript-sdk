// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIdpDepartmentsResponseBodyDataDataList } from "./ListIdpDepartmentsResponseBodyDataDataList";


export class ListIdpDepartmentsResponseBodyData extends $dara.Model {
  dataList?: ListIdpDepartmentsResponseBodyDataDataList[];
  /**
   * @example
   * 2
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListIdpDepartmentsResponseBodyDataDataList },
      totalNum: 'number',
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

