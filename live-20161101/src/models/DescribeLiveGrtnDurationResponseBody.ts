// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveGrtnDurationResponseBodyStreamDetailDataStreamData extends $dara.Model {
  appId?: string;
  duration?: number;
  mediaProfile?: string;
  mediaType?: string;
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

