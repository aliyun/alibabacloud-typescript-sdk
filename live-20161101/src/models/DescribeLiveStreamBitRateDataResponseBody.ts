// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo extends $dara.Model {
  audioFrameRate?: number;
  bitRate?: number;
  streamUrl?: string;
  time?: string;
  videoFrameRate?: number;
  static names(): { [key: string]: string } {
    return {
      audioFrameRate: 'AudioFrameRate',
      bitRate: 'BitRate',
      streamUrl: 'StreamUrl',
      time: 'Time',
      videoFrameRate: 'VideoFrameRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFrameRate: 'number',
      bitRate: 'number',
      streamUrl: 'string',
      time: 'string',
      videoFrameRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfos extends $dara.Model {
  frameRateAndBitRateInfo?: DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo[];
  static names(): { [key: string]: string } {
    return {
      frameRateAndBitRateInfo: 'FrameRateAndBitRateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRateAndBitRateInfo: { 'type': 'array', 'itemType': DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo },
    };
  }

  validate() {
    if(Array.isArray(this.frameRateAndBitRateInfo)) {
      $dara.Model.validateArray(this.frameRateAndBitRateInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamBitRateDataResponseBody extends $dara.Model {
  frameRateAndBitRateInfos?: DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfos;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      frameRateAndBitRateInfos: 'FrameRateAndBitRateInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRateAndBitRateInfos: DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.frameRateAndBitRateInfos && typeof (this.frameRateAndBitRateInfos as any).validate === 'function') {
      (this.frameRateAndBitRateInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

