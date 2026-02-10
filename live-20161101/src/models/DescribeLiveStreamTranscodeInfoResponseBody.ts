// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoCustomTranscodeParameters extends $dara.Model {
  audioBitrate?: number;
  audioChannelNum?: number;
  audioCodec?: string;
  audioProfile?: string;
  audioRate?: number;
  bframes?: string;
  bitrateWithSource?: { [key: string]: any };
  deInterlaced?: boolean;
  extWithSource?: { [key: string]: any };
  FPS?: number;
  fpsWithSource?: { [key: string]: any };
  gop?: string;
  height?: number;
  resWithSource?: { [key: string]: any };
  rtsFlag?: string;
  templateType?: string;
  videoBitrate?: number;
  videoProfile?: string;
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
      deInterlaced: 'DeInterlaced',
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
      deInterlaced: 'boolean',
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
  encryptType?: string;
  kmsKeyExpireInterval?: string;
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
  customTranscodeParameters?: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoCustomTranscodeParameters;
  encryptParameters?: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoEncryptParameters;
  isLazy?: boolean;
  transcodeApp?: string;
  transcodeName?: string;
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

