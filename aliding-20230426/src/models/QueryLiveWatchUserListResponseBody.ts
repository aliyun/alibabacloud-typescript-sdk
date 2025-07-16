// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLiveWatchUserListResponseBodyOrgUsesList extends $dara.Model {
  deptName?: string;
  name?: string;
  /**
   * @example
   * 1234
   */
  userId?: string;
  /**
   * @example
   * 19999
   */
  watchLiveTime?: number;
  /**
   * @example
   * 131312312
   */
  watchPlaybackTime?: number;
  /**
   * @example
   * 1323132
   */
  watchProgressMs?: number;
  static names(): { [key: string]: string } {
    return {
      deptName: 'DeptName',
      name: 'Name',
      userId: 'UserId',
      watchLiveTime: 'WatchLiveTime',
      watchPlaybackTime: 'WatchPlaybackTime',
      watchProgressMs: 'WatchProgressMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      name: 'string',
      userId: 'string',
      watchLiveTime: 'number',
      watchPlaybackTime: 'number',
      watchProgressMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveWatchUserListResponseBodyOutOrgUserList extends $dara.Model {
  name?: string;
  /**
   * @example
   * 12312312
   */
  watchLiveTime?: number;
  /**
   * @example
   * 21313131
   */
  watchPlaybackTime?: number;
  /**
   * @example
   * 123131
   */
  watchProgressMs?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      watchLiveTime: 'WatchLiveTime',
      watchPlaybackTime: 'WatchPlaybackTime',
      watchProgressMs: 'WatchProgressMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      watchLiveTime: 'number',
      watchPlaybackTime: 'number',
      watchProgressMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

