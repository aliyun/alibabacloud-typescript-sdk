// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoListRebalanceInfoList } from "./GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoListRebalanceInfoList";


export class GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoList extends $dara.Model {
  rebalanceInfoList?: GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoListRebalanceInfoList[];
  static names(): { [key: string]: string } {
    return {
      rebalanceInfoList: 'RebalanceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rebalanceInfoList: { 'type': 'array', 'itemType': GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoListRebalanceInfoList },
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

