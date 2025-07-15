// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainStreamTranscodeDataResponseBodyTranscodeDataListTranscodeData extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain. This parameter is returned only when you add the domain key to the value of the Split parameter.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The transcoding length. Unit: minutes.
   * 
   * @example
   * 2000
   */
  duration?: number;
  /**
   * @remarks
   * The frame rate of the transcoded stream. This parameter is returned only when you add the fps key to the value of the Split parameter.
   * 
   * @example
   * normal
   */
  fps?: string;
  /**
   * @remarks
   * The region in which the domain name resides. Valid values:
   * 
   * >  This parameter takes effect only when you set Split to region.
   * 
   * *   **cn-beijing**: China (Beijing)
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-qingdao**: China (Qingdao)
   * *   **cn-shenzhen**: China (Shenzhen)
   * *   **ap-northeast-1**: Japan (Tokyo)
   * *   **ap-southeast-1**: Singapore
   * *   **ap-southeast-5**: Indonesia (Jakarta)
   * *   **eu-central-1**: Germany (Frankfurt)
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The resolution of the transcoded stream. This parameter is returned only when you add the resolution key to the value of the Split parameter. Valid values:
   * 
   * *   **2K**
   * *   **4K**
   * *   **LD**: low definition
   * *   **SD**: standard definition
   * *   **HD**: high definition
   * *   **def**: audio
   * 
   * @example
   * HD
   */
  resolution?: string;
  /**
   * @remarks
   * The transcoding type. Valid values:
   * 
   * >  This parameter takes effect only if the request parameter Split is set to transcode_type.
   * 
   * *   **H264NBHD**: Narrowband HD™ transcoding based on H.264
   * *   **H265NBHD**: Narrowband HD™ transcoding based on H.265
   * *   **AUDIO**: audio transcoding
   * 
   * @example
   * H264STD
   */
  tanscodeType?: string;
  /**
   * @remarks
   * The timestamp of the data entry.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
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
  /**
   * @remarks
   * The transcoding usage data returned at each interval.
   */
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

