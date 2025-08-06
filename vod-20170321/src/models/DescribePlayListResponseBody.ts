// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayListResponseBodyPlayList extends $dara.Model {
  firstFrameDuration?: string;
  playDuration?: string;
  playTs?: string;
  playType?: string;
  sessionId?: string;
  status?: string;
  stuckDuration?: string;
  traceId?: string;
  videoDuration?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      firstFrameDuration: 'FirstFrameDuration',
      playDuration: 'PlayDuration',
      playTs: 'PlayTs',
      playType: 'PlayType',
      sessionId: 'SessionId',
      status: 'Status',
      stuckDuration: 'StuckDuration',
      traceId: 'TraceId',
      videoDuration: 'VideoDuration',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstFrameDuration: 'string',
      playDuration: 'string',
      playTs: 'string',
      playType: 'string',
      sessionId: 'string',
      status: 'string',
      stuckDuration: 'string',
      traceId: 'string',
      videoDuration: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayListResponseBody extends $dara.Model {
  pageNum?: number;
  pageSize?: number;
  playList?: DescribePlayListResponseBodyPlayList[];
  requestId?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      playList: 'PlayList',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      playList: { 'type': 'array', 'itemType': DescribePlayListResponseBodyPlayList },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.playList)) {
      $dara.Model.validateArray(this.playList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

