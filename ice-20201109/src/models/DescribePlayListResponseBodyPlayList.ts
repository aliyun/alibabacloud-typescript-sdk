// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayListResponseBodyPlayList extends $dara.Model {
  /**
   * @example
   * 200
   */
  firstFrameDuration?: string;
  /**
   * @example
   * 1000
   */
  playDuration?: string;
  /**
   * @example
   * 1675922209572
   */
  playTs?: string;
  /**
   * @example
   * vod
   */
  playType?: string;
  /**
   * @example
   * 91488be2-8381-40c9-8494-e8afe22c4a2d
   */
  sessionId?: string;
  /**
   * @example
   * complete
   */
  status?: string;
  /**
   * @example
   * 20
   */
  stuckDuration?: string;
  /**
   * @example
   * 0b736abf16724820210842673d9543
   */
  traceId?: string;
  /**
   * @example
   * 2000
   */
  videoDuration?: string;
  /**
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

