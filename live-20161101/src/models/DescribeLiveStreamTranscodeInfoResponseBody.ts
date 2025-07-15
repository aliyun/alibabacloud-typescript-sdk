// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoCustomTranscodeParameters extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output audio. Unit: Kbit/s. Valid values: **1 to 1000**.
   * 
   * @example
   * 64
   */
  audioBitrate?: number;
  /**
   * @remarks
   * The number of sound channels. Valid values:
   * 
   * *   **1**: mono
   * *   **2**: binaural
   * 
   * @example
   * 2
   */
  audioChannelNum?: number;
  /**
   * @remarks
   * The audio encoding format.
   * 
   * @example
   * ACC
   */
  audioCodec?: string;
  /**
   * @remarks
   * The audio encoding profile. Valid values:
   * 
   * *   **aac_low**
   * *   **aac_he**
   * *   **aac_he_v2**
   * *   **aac_ld**
   * 
   * @example
   * aac_low
   */
  audioProfile?: string;
  /**
   * @remarks
   * The audio sampling rate. Valid values: **22050 to 96000**.
   * 
   * >  If the value of AudioProfile is **aac_ld**, the audio sampling rate cannot exceed 44100.
   * 
   * @example
   * 44100
   */
  audioRate?: number;
  /**
   * @remarks
   * Indicates whether B-frame removal is enabled. Fixed value: **0**.
   * 
   * @example
   * 0
   */
  bframes?: string;
  /**
   * @remarks
   * The source-based bitrate settings.
   * 
   * @example
   * {\\"UpLimit\\":2500,\\"LowerLimit\\":800,\\"Factor\\":1}
   */
  bitrateWithSource?: { [key: string]: any };
  /**
   * @remarks
   * Other source-based settings.
   * 
   * @example
   * {\\"KeyFrameOpen\\":\\"yes\\",\\"Copyts\\":\\"yes\\",\\"SeiMode\\":1}
   */
  extWithSource?: { [key: string]: any };
  /**
   * @remarks
   * The frame rate of the output video. Unit: frames per second (FPS).
   * 
   * @example
   * 15
   */
  FPS?: number;
  /**
   * @remarks
   * The source-based frame rate settings.
   * 
   * @example
   * {\\"UpLimit\\":60,\\"LowerLimit\\":1}
   */
  fpsWithSource?: { [key: string]: any };
  /**
   * @remarks
   * The group of pictures (GOP) size of the output video. Unit: frames. Valid values: **1 to 3000**.
   * 
   * @example
   * 10
   */
  gop?: string;
  /**
   * @remarks
   * The height of the output video.
   * 
   * @example
   * 1200
   */
  height?: number;
  /**
   * @remarks
   * The source-based resolution settings.
   * 
   * @example
   * {\\"Type\\":\\"short\\",\\"Value\\":\\"1080\\"}
   */
  resWithSource?: { [key: string]: any };
  /**
   * @remarks
   * The Real-Time Transcoding (RTS) flag. Fixed value: **true**.
   * 
   * >  This parameter is returned only if RTS is used for transcoding.
   * 
   * @example
   * true
   */
  rtsFlag?: string;
  /**
   * @remarks
   * The type of the custom transcoding template. Valid values:
   * 
   * *   **h264**: custom H.264 standard transcoding
   * *   **h264-nbhd**: custom H.264 Narrowband HD™ transcoding
   * *   **h265**: custom H.265 standard transcoding
   * *   **h265-nbhd**: custom H.265 Narrowband HD™ transcoding
   * *   **audio**: audio-only transcoding
   * 
   * @example
   * h264
   */
  templateType?: string;
  /**
   * @remarks
   * The bitrate of the output video. Unit: Kbit/s.
   * 
   * @example
   * 3000
   */
  videoBitrate?: number;
  /**
   * @remarks
   * The video encoding profile. Valid values:
   * 
   * *   **baseline**: suitable for mobile devices.
   * *   **main**: suitable for standard-definition devices.
   * *   **high**: suitable for high-definition devices.
   * 
   * @example
   * high
   */
  videoProfile?: string;
  /**
   * @remarks
   * The width of the output video.
   * 
   * @example
   * 1000
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      audioBitrate: 'AudioBitrate',
      audioChannelNum: 'AudioChannelNum',
      audioCodec: 'AudioCodec',
      audioProfile: 'AudioProfile',
      audioRate: 'AudioRate',
      bframes: 'Bframes',
      bitrateWithSource: 'BitrateWithSource',
      extWithSource: 'ExtWithSource',
      FPS: 'FPS',
      fpsWithSource: 'FpsWithSource',
      gop: 'Gop',
      height: 'Height',
      resWithSource: 'ResWithSource',
      rtsFlag: 'RtsFlag',
      templateType: 'TemplateType',
      videoBitrate: 'VideoBitrate',
      videoProfile: 'VideoProfile',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioBitrate: 'number',
      audioChannelNum: 'number',
      audioCodec: 'string',
      audioProfile: 'string',
      audioRate: 'number',
      bframes: 'string',
      bitrateWithSource: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extWithSource: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      FPS: 'number',
      fpsWithSource: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gop: 'string',
      height: 'number',
      resWithSource: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rtsFlag: 'string',
      templateType: 'string',
      videoBitrate: 'number',
      videoProfile: 'string',
      width: 'number',
    };
  }

  validate() {
    if(this.bitrateWithSource) {
      $dara.Model.validateMap(this.bitrateWithSource);
    }
    if(this.extWithSource) {
      $dara.Model.validateMap(this.extWithSource);
    }
    if(this.fpsWithSource) {
      $dara.Model.validateMap(this.fpsWithSource);
    }
    if(this.resWithSource) {
      $dara.Model.validateMap(this.resWithSource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoEncryptParameters extends $dara.Model {
  /**
   * @remarks
   * The type of encryption. Fixed value: **aliyun**.
   * 
   * @example
   * aliyun
   */
  encryptType?: string;
  /**
   * @remarks
   * The rotation period of the CMK. Valid values: **60 to 3600**. Unit: seconds.
   * 
   * @example
   * 3600
   */
  kmsKeyExpireInterval?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK) in Key Management Service (KMS).
   * 
   * @example
   * afce5722-81d2-43c3-9930-7601da11****
   */
  kmsKeyID?: string;
  static names(): { [key: string]: string } {
    return {
      encryptType: 'EncryptType',
      kmsKeyExpireInterval: 'KmsKeyExpireInterval',
      kmsKeyID: 'KmsKeyID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptType: 'string',
      kmsKeyExpireInterval: 'string',
      kmsKeyID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfo extends $dara.Model {
  /**
   * @remarks
   * The custom transcoding configuration.
   */
  customTranscodeParameters?: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoCustomTranscodeParameters;
  /**
   * @remarks
   * The encryption settings.
   */
  encryptParameters?: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoEncryptParameters;
  /**
   * @remarks
   * Indicates whether forcible transcoding is used. Valid values:
   * 
   * *   **true**: Delayed transcoding is used.
   * *   **false**: Forcible transcoding is used.
   * 
   * @example
   * true
   */
  isLazy?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * liveApp****
   */
  transcodeApp?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  transcodeName?: string;
  /**
   * @remarks
   * The transcoding template ID. Valid values:
   * 
   * *   **Standard transcoding**:
   * 
   *     *   **lld**: low definition
   *     *   **lsd**: standard definition
   *     *   **lhd**: high definition
   *     *   **lud**: ultra-high definition
   * 
   * *   **Narrowband HD™ transcoding**:
   * 
   *     *   **ld**: low definition
   *     *   **sd**: standard definition
   *     *   **hd**: high definition
   *     *   **ud**: ultra-high definition
   * 
   * @example
   * lld
   */
  transcodeTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      customTranscodeParameters: 'CustomTranscodeParameters',
      encryptParameters: 'EncryptParameters',
      isLazy: 'IsLazy',
      transcodeApp: 'TranscodeApp',
      transcodeName: 'TranscodeName',
      transcodeTemplate: 'TranscodeTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTranscodeParameters: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoCustomTranscodeParameters,
      encryptParameters: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoEncryptParameters,
      isLazy: 'boolean',
      transcodeApp: 'string',
      transcodeName: 'string',
      transcodeTemplate: 'string',
    };
  }

  validate() {
    if(this.customTranscodeParameters && typeof (this.customTranscodeParameters as any).validate === 'function') {
      (this.customTranscodeParameters as any).validate();
    }
    if(this.encryptParameters && typeof (this.encryptParameters as any).validate === 'function') {
      (this.encryptParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeList extends $dara.Model {
  domainTranscodeInfo?: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfo[];
  static names(): { [key: string]: string } {
    return {
      domainTranscodeInfo: 'DomainTranscodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTranscodeInfo: { 'type': 'array', 'itemType': DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.domainTranscodeInfo)) {
      $dara.Model.validateArray(this.domainTranscodeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The transcoding configurations.
   */
  domainTranscodeList?: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 62136AE6-7793-45ED-B14A-60D19A9486D3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainTranscodeList: 'DomainTranscodeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTranscodeList: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainTranscodeList && typeof (this.domainTranscodeList as any).validate === 'function') {
      (this.domainTranscodeList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

