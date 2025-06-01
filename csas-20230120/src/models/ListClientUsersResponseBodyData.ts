// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClientUsersResponseBodyDataDataList } from "./ListClientUsersResponseBodyDataDataList";


export class ListClientUsersResponseBodyData extends $dara.Model {
  dataList?: ListClientUsersResponseBodyDataDataList[];
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
      dataList: { 'type': 'array', 'itemType': ListClientUsersResponseBodyDataDataList },
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

