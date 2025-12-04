// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRtcRecordUsageDataResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20
   */
  audioDuration?: number;
  /**
   * @example
   * 2022-10-10T20:00:00Z
   */
  timestamp?: string;
  /**
   * @example
   * 150
   */
  totalDuration?: number;
  /**
   * @example
   * 10
   */
  v1080Duration?: number;
  /**
   * @example
   * 30
   */
  v480Duration?: number;
  /**
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
   * @example
   * 7fd341b3-c6fa-43e1-96b8-7295a1dd****
   */
  appId?: string;
  /**
   * @example
   * 20
   */
  audioSummaryDuration?: number;
  data?: DescribeLiveRtcRecordUsageDataResponseBodyData[];
  /**
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
   * @example
   * 150
   */
  totalSummaryDuration?: number;
  /**
   * @example
   * 10
   */
  v1080SummaryDuration?: number;
  /**
   * @example
   * 30
   */
  v480SummaryDuration?: number;
  /**
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

