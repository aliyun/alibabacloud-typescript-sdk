// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRtcRecordUsageDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The audio-only duration. Unit: seconds.
   * 
   * @example
   * 20
   */
  audioDuration?: number;
  /**
   * @remarks
   * The timestamp of the data point. Format: yyyy-MM-ddTHH:mm:ssZ (UTC time).
   * 
   * @example
   * 2022-10-10T20:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The total duration. Unit: seconds.
   * 
   * @example
   * 150
   */
  totalDuration?: number;
  /**
   * @remarks
   * The duration of video above 720p. Unit: seconds.
   * 
   * @example
   * 10
   */
  v1080Duration?: number;
  /**
   * @remarks
   * The duration of video at 480p or lower. Unit: seconds.
   * 
   * @example
   * 30
   */
  v480Duration?: number;
  /**
   * @remarks
   * The duration of video at 720p or lower. Unit: seconds.
   * 
   * @example
   * 40
   */
  v720Duration?: number;
  static names(): { [key: string]: string } {
    return {
      audioDuration: 'AudioDuration',
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

export class DescribeLiveRtcRecordUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraVideo Real-time Communication application that was queried.
   * 
   * @example
   * 7fd341b3-c6fa-43e1-96b8-7295a1dd****
   */
  appId?: string;
  /**
   * @remarks
   * The audio-only summary duration. Unit: seconds.
   * 
   * @example
   * 20
   */
  audioSummaryDuration?: number;
  /**
   * @remarks
   * The usage statistics information.
   */
  data?: DescribeLiveRtcRecordUsageDataResponseBodyData[];
  /**
   * @remarks
   * The recording mode. Valid values:
   * 
   * - 0: single-stream recording mode.
   * 
   * - 1: stream mixing recording mode.
   * 
   * @example
   * 0
   */
  recordMode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F2*************B92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The total summary duration. Unit: seconds.
   * 
   * @example
   * 150
   */
  totalSummaryDuration?: number;
  /**
   * @remarks
   * The summary duration of video above 720p (including 1080p). Unit: seconds.
   * 
   * @example
   * 10
   */
  v1080SummaryDuration?: number;
  /**
   * @remarks
   * The summary duration of video at 480p or lower. Unit: seconds.
   * 
   * @example
   * 30
   */
  v480SummaryDuration?: number;
  /**
   * @remarks
   * The summary duration of video at 720p or lower. Unit: seconds.
   * 
   * @example
   * 40
   */
  v720SummaryDuration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      audioSummaryDuration: 'AudioSummaryDuration',
      data: 'Data',
      recordMode: 'RecordMode',
      requestId: 'RequestId',
      totalSummaryDuration: 'TotalSummaryDuration',
      v1080SummaryDuration: 'V1080SummaryDuration',
      v480SummaryDuration: 'V480SummaryDuration',
      v720SummaryDuration: 'V720SummaryDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      audioSummaryDuration: 'number',
      data: { 'type': 'array', 'itemType': DescribeLiveRtcRecordUsageDataResponseBodyData },
      recordMode: 'string',
      requestId: 'string',
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

