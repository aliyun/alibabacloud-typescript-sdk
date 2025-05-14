// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGroupLiveListResponseBodyResultGroupLiveList } from "./GetGroupLiveListResponseBodyResultGroupLiveList";


export class GetGroupLiveListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 直播列表
   */
  groupLiveList?: GetGroupLiveListResponseBodyResultGroupLiveList[];
  static names(): { [key: string]: string } {
    return {
      groupLiveList: 'GroupLiveList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupLiveList: { 'type': 'array', 'itemType': GetGroupLiveListResponseBodyResultGroupLiveList },
    };
  }

  validate() {
    if(Array.isArray(this.groupLiveList)) {
      $dara.Model.validateArray(this.groupLiveList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

