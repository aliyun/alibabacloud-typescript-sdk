// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveTranscodeTemplateRequestTemplateConfigAudioParams extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the transcoded audio. Unit: kbps. Valid values: 1 to 1000.
   * 
   * @example
   * 100
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of audio channels. Valid values:
   * 
   * - 1: mono.
   * - 2: stereo.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio encoding format. Valid values:
   * 
   * - AAC
   * - MP3
   * 
   * @example
   * AAC
   */
  codec?: string;
  /**
   * @remarks
   * The audio encoding profile. Valid values when Codec is set to AAC:
   * 
   * - aac_low
   * - aac_he
   * - aac_he_v2
   * - aac_ld
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * The audio sampling rate. Valid values: 22050 to 96000.
   * 
   * Note: If AudioProfile is set to aac_ld, the sampling rate must not exceed 44100.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      samplerate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeTemplateRequestTemplateConfigVideoParams extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the transcoded video. Unit: kbps. Valid values: 1 to 6000.
   * 
   * @example
   * 2500
   */
  bitrate?: string;
  /**
   * @remarks
   * The encoding type. Valid values:
   * 
   * - H.264
   * - H.265
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The frame rate of the transcoded video. Unit: FPS. Valid values: 1 to 60.
   * 
   * @example
   * 30
   */
  fps?: string;
  /**
   * @remarks
   * The group of pictures (GOP) of the video. Unit: frames. Valid values: 1 to 3000.
   * 
   * @example
   * 1000
   */
  gop?: string;
  /**
   * @remarks
   * The height of the transcoded video. Valid values:
   * 
   * - Height ≥ 128
   * - max(Height, Width) ≤ 2560
   * - min(Height, Width) ≤ 1440
   * 
   * > The resolution of an H.265 Narrowband HD template must not exceed 1280×720.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The encoding profile. A specific set of encoding features supported by the video. Generally, a larger value indicates better video quality but higher resource consumption for encoding and decoding. Valid values:
   * - 1: baseline. Suitable for mobile devices.
   * - 2: main. Suitable for standard resolution devices.
   * - 3: high. Suitable for high resolution devices.
   * 
   * @example
   * 2
   */
  profile?: string;
  /**
   * @remarks
   * The width of the transcoded video. Valid values:
   * 
   * - Width ≥ 128
   * - max(Height, Width) ≤ 2560
   * - min(Height, Width) ≤ 1440
   * 
   * > The resolution of an H.265 Narrowband HD template must not exceed 1280×720.
   * 
   * @example
   * 1280
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      codec: 'Codec',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      profile: 'Profile',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      codec: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      profile: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeTemplateRequestTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The audio parameters.
   */
  audioParams?: UpdateLiveTranscodeTemplateRequestTemplateConfigAudioParams;
  /**
   * @remarks
   * The video parameters.
   */
  videoParams?: UpdateLiveTranscodeTemplateRequestTemplateConfigVideoParams;
  static names(): { [key: string]: string } {
    return {
      audioParams: 'AudioParams',
      videoParams: 'VideoParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioParams: UpdateLiveTranscodeTemplateRequestTemplateConfigAudioParams,
      videoParams: UpdateLiveTranscodeTemplateRequestTemplateConfigVideoParams,
    };
  }

  validate() {
    if(this.audioParams && typeof (this.audioParams as any).validate === 'function') {
      (this.audioParams as any).validate();
    }
    if(this.videoParams && typeof (this.videoParams as any).validate === 'function') {
      (this.videoParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * The template 1130-2
   */
  name?: string;
  /**
   * @remarks
   * The template configuration.
   */
  templateConfig?: UpdateLiveTranscodeTemplateRequestTemplateConfig;
  /**
   * @remarks
   * The template ID. You can obtain the ID from the [Intelligent Media Services console](https://ims.console.aliyun.com/summary) by choosing Templates > Real-time Transcoding Templates, or from the response parameters of the [Create a real-time transcoding template](https://help.aliyun.com/document_detail/449217.html) API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfig: UpdateLiveTranscodeTemplateRequestTemplateConfig,
      templateId: 'string',
    };
  }

  validate() {
    if(this.templateConfig && typeof (this.templateConfig as any).validate === 'function') {
      (this.templateConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

