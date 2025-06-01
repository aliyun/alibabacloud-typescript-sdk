// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIdpConfigsResponseBodyDataDataList } from "./ListIdpConfigsResponseBodyDataDataList";


export class ListIdpConfigsResponseBodyData extends $dara.Model {
  dataList?: ListIdpConfigsResponseBodyDataDataList[];
  /**
   * @example
   * 1
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
      dataList: { 'type': 'array', 'itemType': ListIdpConfigsResponseBodyDataDataList },
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

