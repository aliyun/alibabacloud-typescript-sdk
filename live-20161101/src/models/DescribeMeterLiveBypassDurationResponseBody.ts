// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterLiveBypassDurationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The audio-only duration. Audio-only is a basic specification. Unit: minutes.
   * 
   * @example
   * 20
   */
  audioDuration?: number;
  /**
   * @remarks
   * The single-stream relay duration for audio. Unit: minutes.
   * 
   * @example
   * 20
   */
  singleAudio?: number;
  /**
   * @remarks
   * The single-stream relay duration for video. Unit: minutes.
   * 
   * @example
   * 30
   */
  singleVideo?: number;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2022-10-10T20:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The duration. Unit: minutes.
   * 
   * @example
   * 150
   */
  totalDuration?: number;
  /**
   * @remarks
   * The Full HD duration. The video resolution is 1920 × 1080 or lower. Unit: minutes.
   * 
   * @example
   * 10
   */
  v1080Duration?: number;
  /**
   * @remarks
   * The SD duration. The video resolution is 640 × 480 or lower. Unit: minutes.
   * 
   * @example
   * 30
   */
  v480Duration?: number;
  /**
   * @remarks
   * The HD duration. The video resolution is 1280 × 720 or lower. Unit: minutes.
   * 
   * @example
   * 40
   */
  v720Duration?: number;
  static names(): { [key: string]: string } {
    return {
      audioDuration: 'AudioDuration',
      singleAudio: 'Single_Audio',
      singleVideo: 'Single_Video',
      timestamp: 'Timestamp',
      totalDuration: 'TotalDuration',
      v1080Duration: 'V1080Duration',
      v480Duration: 'V480Duration',
      v720Duration: 'V720Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDuration: 'number',
      singleAudio: 'number',
      singleVideo: 'number',
      timestamp: 'string',
      totalDuration: 'number',
      v1080Duration: 'number',
      v480Duration: 'number',
      v720Duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterLiveBypassDurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total audio-only duration. Audio-only is a basic specification. Unit: minutes.
   * 
   * @example
   * 20
   */
  audioSummaryDuration?: number;
  /**
   * @remarks
   * The usage statistics for each time granularity.
   */
  data?: DescribeMeterLiveBypassDurationResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B460F8B-993C-4F48-B98A-910811DEBFEB
   */
  requestId?: string;
  /**
   * @remarks
   * The total single-stream relay duration for audio. Unit: minutes.
   * 
   * @example
   * 20
   */
  singleAudioSummaryDuration?: number;
  /**
   * @remarks
   * The total single-stream relay duration for video. Unit: minutes.
   * 
   * @example
   * 30
   */
  singleVideoSummaryDuration?: number;
  /**
   * @remarks
   * The total duration. Unit: minutes.
   * 
   * @example
   * 150
   */
  totalSummaryDuration?: number;
  /**
   * @remarks
   * The total Full HD duration. The video resolution is 1920 × 1080 or lower. Unit: minutes.
   * 
   * @example
   * 10
   */
  v1080SummaryDuration?: number;
  /**
   * @remarks
   * The total standard definition (SD) duration. The video resolution is 640 × 480 or lower. Unit: minutes.
   * 
   * @example
   * 30
   */
  v480SummaryDuration?: number;
  /**
   * @remarks
   * The total high definition (HD) duration. The video resolution is 1280 × 720 or lower. Unit: minutes.
   * 
   * @example
   * 40
   */
  v720SummaryDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioSummaryDuration: 'AudioSummaryDuration',
      data: 'Data',
      requestId: 'RequestId',
      singleAudioSummaryDuration: 'SingleAudioSummaryDuration',
      singleVideoSummaryDuration: 'SingleVideoSummaryDuration',
      totalSummaryDuration: 'TotalSummaryDuration',
      v1080SummaryDuration: 'V1080SummaryDuration',
      v480SummaryDuration: 'V480SummaryDuration',
      v720SummaryDuration: 'V720SummaryDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSummaryDuration: 'number',
      data: { 'type': 'array', 'itemType': DescribeMeterLiveBypassDurationResponseBodyData },
      requestId: 'string',
      singleAudioSummaryDuration: 'number',
      singleVideoSummaryDuration: 'number',
      totalSummaryDuration: 'number',
      v1080SummaryDuration: 'number',
      v480SummaryDuration: 'number',
      v720SummaryDuration: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

