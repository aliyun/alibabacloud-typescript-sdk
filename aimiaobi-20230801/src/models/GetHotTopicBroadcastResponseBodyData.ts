// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHotTopicBroadcastResponseBodyDataData } from "./GetHotTopicBroadcastResponseBodyDataData";
import { GetHotTopicBroadcastResponseBodyDataTotalTokenInfo } from "./GetHotTopicBroadcastResponseBodyDataTotalTokenInfo";


export class GetHotTopicBroadcastResponseBodyData extends $dara.Model {
  data?: GetHotTopicBroadcastResponseBodyDataData[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  totalTokenInfo?: GetHotTopicBroadcastResponseBodyDataTotalTokenInfo;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
      totalTokenInfo: 'TotalTokenInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetHotTopicBroadcastResponseBodyDataData },
      totalCount: 'number',
      totalTokenInfo: GetHotTopicBroadcastResponseBodyDataTotalTokenInfo,
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.totalTokenInfo && typeof (this.totalTokenInfo as any).validate === 'function') {
      (this.totalTokenInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

