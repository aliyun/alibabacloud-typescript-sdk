// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGroupLiveInfoResponseBody extends $dara.Model {
  coverUrl?: string;
  duration?: number;
  endTime?: number;
  introduction?: string;
  liveId?: string;
  livePlayUrl?: string;
  liveStatus?: number;
  playbackDuration?: number;
  replayUrl?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  staffId?: string;
  startTime?: number;
  subscribeCount?: number;
  title?: string;
  uv?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
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
      replayUrl: 'replayUrl',
      requestId: 'requestId',
      staffId: 'staffId',
      startTime: 'startTime',
      subscribeCount: 'subscribeCount',
      title: 'title',
      uv: 'uv',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
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
      replayUrl: 'string',
      requestId: 'string',
      staffId: 'string',
      startTime: 'number',
      subscribeCount: 'number',
      title: 'string',
      uv: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

