// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryLiveWatchUserListResponseBodyOrgUsesList } from "./QueryLiveWatchUserListResponseBodyOrgUsesList";
import { QueryLiveWatchUserListResponseBodyOutOrgUserList } from "./QueryLiveWatchUserListResponseBodyOutOrgUserList";


export class QueryLiveWatchUserListResponseBody extends $dara.Model {
  orgUsesList?: QueryLiveWatchUserListResponseBodyOrgUsesList[];
  outOrgUserList?: QueryLiveWatchUserListResponseBodyOutOrgUserList[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orgUsesList: 'orgUsesList',
      outOrgUserList: 'outOrgUserList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgUsesList: { 'type': 'array', 'itemType': QueryLiveWatchUserListResponseBodyOrgUsesList },
      outOrgUserList: { 'type': 'array', 'itemType': QueryLiveWatchUserListResponseBodyOutOrgUserList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orgUsesList)) {
      $dara.Model.validateArray(this.orgUsesList);
    }
    if(Array.isArray(this.outOrgUserList)) {
      $dara.Model.validateArray(this.outOrgUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

