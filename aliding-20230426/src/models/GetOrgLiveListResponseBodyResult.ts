// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOrgLiveListResponseBodyResultNewLive } from "./GetOrgLiveListResponseBodyResultNewLive";
import { GetOrgLiveListResponseBodyResultUpdateLive } from "./GetOrgLiveListResponseBodyResultUpdateLive";


export class GetOrgLiveListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 新建的直播列表
   */
  newLive?: GetOrgLiveListResponseBodyResultNewLive;
  /**
   * @example
   * 修改的直播列表
   */
  updateLive?: GetOrgLiveListResponseBodyResultUpdateLive;
  static names(): { [key: string]: string } {
    return {
      newLive: 'NewLive',
      updateLive: 'UpdateLive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newLive: GetOrgLiveListResponseBodyResultNewLive,
      updateLive: GetOrgLiveListResponseBodyResultUpdateLive,
    };
  }

  validate() {
    if(this.newLive && typeof (this.newLive as any).validate === 'function') {
      (this.newLive as any).validate();
    }
    if(this.updateLive && typeof (this.updateLive as any).validate === 'function') {
      (this.updateLive as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

