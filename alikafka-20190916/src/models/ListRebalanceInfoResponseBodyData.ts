// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRebalanceInfoResponseBodyDataRebalanceInfoList } from "./ListRebalanceInfoResponseBodyDataRebalanceInfoList";


export class ListRebalanceInfoResponseBodyData extends $dara.Model {
  rebalanceInfoList?: ListRebalanceInfoResponseBodyDataRebalanceInfoList[];
  static names(): { [key: string]: string } {
    return {
      rebalanceInfoList: 'RebalanceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rebalanceInfoList: { 'type': 'array', 'itemType': ListRebalanceInfoResponseBodyDataRebalanceInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.rebalanceInfoList)) {
      $dara.Model.validateArray(this.rebalanceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

