// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainStreamTranscodeDataResponseBodyTranscodeDataListTranscodeData extends $dara.Model {
  domain?: string;
  duration?: number;
  fps?: string;
  region?: string;
  resolution?: string;
  tanscodeType?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      duration: 'Duration',
      fps: 'Fps',
      region: 'Region',
      resolution: 'Resolution',
      tanscodeType: 'TanscodeType',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      duration: 'number',
      fps: 'string',
      region: 'string',
      resolution: 'string',
      tanscodeType: 'string',
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

export class DescribeLiveDomainStreamTranscodeDataResponseBodyTranscodeDataList extends $dara.Model {
  transcodeData?: DescribeLiveDomainStreamTranscodeDataResponseBodyTranscodeDataListTranscodeData[];
  static names(): { [key: string]: string } {
    return {
      transcodeData: 'TranscodeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeData: { 'type': 'array', 'itemType': DescribeLiveDomainStreamTranscodeDataResponseBodyTranscodeDataListTranscodeData },
    };
  }

  validate() {
    if(Array.isArray(this.transcodeData)) {
      $dara.Model.validateArray(this.transcodeData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainStreamTranscodeDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  transcodeDataList?: DescribeLiveDomainStreamTranscodeDataResponseBodyTranscodeDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeDataList: 'TranscodeDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeDataList: DescribeLiveDomainStreamTranscodeDataResponseBodyTranscodeDataList,
    };
  }

  validate() {
    if(this.transcodeDataList && typeof (this.transcodeDataList as any).validate === 'function') {
      (this.transcodeDataList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

