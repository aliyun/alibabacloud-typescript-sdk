// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLiveInfoResponseBody extends $dara.Model {
  coverUrl?: string;
  duration?: number;
  endTime?: number;
  introduction?: string;
  liveId?: string;
  livePlayUrl?: string;
  liveStatus?: number;
  playbackDuration?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  startTime?: number;
  subscribeCount?: number;
  title?: string;
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

