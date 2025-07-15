// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveGrtnDurationResponseBodyStreamDetailDataStreamData extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 4346289a-a790-4869-9e23-22766d5e****
   */
  appId?: string;
  /**
   * @remarks
   * The co-streaming duration. Unit: minutes.
   * 
   * @example
   * 30
   */
  duration?: number;
  /**
   * @remarks
   * The media specification. Valid values:
   * 
   * *   0: audio-only. This is a basic specification.
   * *   480P: standard definition (SD). The video resolution is 640 × 480 or lower.
   * *   720P: high definition (HD). The video resolution is 1280 × 720 or lower.
   * *   1080P: full HD. The video resolution is 1920 × 1080 or lower.
   * 
   * @example
   * 480P
   */
  mediaProfile?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * 
   * *   audio
   * *   video
   * 
   * @example
   * audio
   */
  mediaType?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2022-12-10T20:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      duration: 'Duration',
      mediaProfile: 'MediaProfile',
      mediaType: 'MediaType',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      duration: 'number',
      mediaProfile: 'string',
      mediaType: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveGrtnDurationResponseBodyStreamDetailData extends $dara.Model {
  streamData?: DescribeLiveGrtnDurationResponseBodyStreamDetailDataStreamData[];
  static names(): { [key: string]: string } {
    return {
      streamData: 'StreamData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamData: { 'type': 'array', 'itemType': DescribeLiveGrtnDurationResponseBodyStreamDetailDataStreamData },
    };
  }

  validate() {
    if(Array.isArray(this.streamData)) {
      $dara.Model.validateArray(this.streamData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveGrtnDurationResponseBody extends $dara.Model {
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
   * The details of the co-streaming usage data.
   */
  streamDetailData?: DescribeLiveGrtnDurationResponseBodyStreamDetailData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streamDetailData: 'StreamDetailData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streamDetailData: DescribeLiveGrtnDurationResponseBodyStreamDetailData,
    };
  }

  validate() {
    if(this.streamDetailData && typeof (this.streamDetailData as any).validate === 'function') {
      (this.streamDetailData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

