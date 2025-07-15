// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveCenterStreamRateDataResponseBodyRateDatas extends $dara.Model {
  /**
   * @remarks
   * The audio frame rate.
   * 
   * @example
   * 47
   */
  audioFps?: string;
  /**
   * @remarks
   * The audio bitrate.
   * 
   * @example
   * 600
   */
  audioRate?: string;
  /**
   * @remarks
   * The time when the data was collected. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-03-05T18:00:53Z
   */
  time?: string;
  /**
   * @remarks
   * The video frame rate.
   * 
   * @example
   * 30
   */
  videoFps?: string;
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 1953584
   */
  videoRate?: string;
  static names(): { [key: string]: string } {
    return {
      audioFps: 'AudioFps',
      audioRate: 'AudioRate',
      time: 'Time',
      videoFps: 'VideoFps',
      videoRate: 'VideoRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFps: 'string',
      audioRate: 'string',
      time: 'string',
      videoFps: 'string',
      videoRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCenterStreamRateDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of frame rates and bitrates.
   */
  rateDatas?: DescribeLiveCenterStreamRateDataResponseBodyRateDatas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6E125BE-E9B8-1103-8684-A3585CB632F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      rateDatas: 'RateDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rateDatas: { 'type': 'array', 'itemType': DescribeLiveCenterStreamRateDataResponseBodyRateDatas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rateDatas)) {
      $dara.Model.validateArray(this.rateDatas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

