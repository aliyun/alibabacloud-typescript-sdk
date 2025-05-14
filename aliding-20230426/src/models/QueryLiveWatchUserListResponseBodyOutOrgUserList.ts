// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

