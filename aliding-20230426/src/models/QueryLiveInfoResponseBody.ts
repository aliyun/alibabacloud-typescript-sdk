// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLiveInfoResponseBody extends $dara.Model {
  /**
   * @example
   * http://xxx/kk.jpg
   */
  coverUrl?: string;
  /**
   * @example
   * 59886
   */
  duration?: number;
  /**
   * @example
   * 1662447951960
   */
  endTime?: number;
  introduction?: string;
  /**
   * @example
   * 1211-3442-122
   */
  liveId?: string;
  /**
   * @example
   * http://ssssss
   */
  livePlayUrl?: string;
  liveStatus?: number;
  /**
   * @example
   * 13414
   */
  playbackDuration?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 1627353123000
   */
  startTime?: number;
  /**
   * @example
   * 111
   */
  subscribeCount?: number;
  title?: string;
  /**
   * @example
   * 10
   */
  uv?: number;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'coverUrl',
      duration: 'duration',
      endTime: 'endTime',
      introduction: 'introduction',
      liveId: 'liveId',
      livePlayUrl: 'livePlayUrl',
      liveStatus: 'liveStatus',
      playbackDuration: 'playbackDuration',
      requestId: 'requestId',
      startTime: 'startTime',
      subscribeCount: 'subscribeCount',
      title: 'title',
      uv: 'uv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      duration: 'number',
      endTime: 'number',
      introduction: 'string',
      liveId: 'string',
      livePlayUrl: 'string',
      liveStatus: 'number',
      playbackDuration: 'number',
      requestId: 'string',
      startTime: 'number',
      subscribeCount: 'number',
      title: 'string',
      uv: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

