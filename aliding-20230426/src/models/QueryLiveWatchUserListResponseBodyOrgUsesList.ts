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

