// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayListResponseBodyPlayList extends $dara.Model {
  /**
   * @remarks
   * Time to first frame.
   * 
   * @example
   * 200
   */
  firstFrameDuration?: string;
  /**
   * @remarks
   * The playback duration.
   * 
   * @example
   * 1000
   */
  playDuration?: string;
  /**
   * @remarks
   * The timestamp when the playback started.
   * 
   * @example
   * 1675922209572
   */
  playTs?: string;
  /**
   * @remarks
   * The playback type.
   * 
   * @example
   * vod
   */
  playType?: string;
  /**
   * @remarks
   * The ID of the player session.
   * 
   * @example
   * 91488be2-8381-40c9-8494-e8afe22c4a2d
   */
  sessionId?: string;
  /**
   * @remarks
   * The playback status.
   * 
   * @example
   * complete
   */
  status?: string;
  /**
   * @remarks
   * The stuttering duration.
   * 
   * @example
   * 20
   */
  stuckDuration?: string;
  /**
   * @remarks
   * The TraceId of the player.
   * 
   * @example
   * 0b736abf16724820210842673d9543
   */
  traceId?: string;
  /**
   * @remarks
   * The duration of the video.
   * 
   * @example
   * 2000
   */
  videoDuration?: string;
  /**
   * @remarks
   * The ID of the video.
   * 
   * @example
   * 250314203f0171eebff17035d0b20102
   */
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
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The playback records.
   */
  playList?: DescribePlayListResponseBodyPlayList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B960580D-26FA-5547-8AFC-3CDC812DBF27
   */
  requestId?: string;
  /**
   * @remarks
   * The total playback count.
   * 
   * @example
   * 49
   */
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

