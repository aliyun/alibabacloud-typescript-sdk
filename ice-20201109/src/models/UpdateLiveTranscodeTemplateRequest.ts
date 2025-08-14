// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveTranscodeTemplateRequestTemplateConfigAudioParams extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output audio. Unit: Kbit/s. Valid values: 1 to 1000.
   * 
   * @example
   * 100
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels. Valid values: 1: mono 2: binaural
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec. Valid values: AAC MP3
   * 
   * @example
   * AAC
   */
  codec?: string;
  /**
   * @remarks
   * The audio codec profile. Valid values when the Codec parameter is set to AAC:
   * 
   * *   aac_low
   * *   aac_he
   * *   aac_he_v2
   * *   aac_ld
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * The audio sampling rate. Valid values: 22050 to 96000.
   * 
   * Note If you set AudioProfile to aac_ld, the audio sampling rate cannot exceed 44100.
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
   * The bitrate of the output video. Unit: Kbit/s. Valid values: 1 to 6000.
   * 
   * @example
   * 2500
   */
  bitrate?: string;
  /**
   * @remarks
   * The encoding type. Valid values:
   * 
   * *   H.264
   * *   H.265
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The frame rate of the output video. Unit: frames per second (FPS). Valid values: 1 to 60.
   * 
   * @example
   * 30
   */
  fps?: string;
  /**
   * @remarks
   * The group of pictures (GOP) of the output video. Unit: frame. Valid values: 1 to 3000.
   * 
   * @example
   * 1000
   */
  gop?: string;
  /**
   * @remarks
   * The height of the output video. Valid values:
   * 
   * *   Height ≥ 128
   * *   max (Height,Width) ≤ 2560
   * *   min（Height,Width）≤ 1440
   * 
   * >  The resolution of a video transcoded by using the H.265 Narrowband HD template cannot exceed 1,280 × 720 pixels.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The video encoding profile. The profile determines how a video is encoded. In most cases, a greater value indicates better image quality and higher resource consumption. Valid values:
   * 
   * *   1: baseline. This value is suitable for mobile devices.
   * *   2: main. This value is suitable for standard-definition devices.
   * *   3: high. This value is suitable for high-definition devices.
   * 
   * @example
   * 2
   */
  profile?: string;
  /**
   * @remarks
   * The width of the output video. Valid values:
   * 
   * *   Width ≥ 128
   * *   max (Height,Width) ≤ 2560
   * *   min（Height,Width）≤ 1440
   * 
   * >  The resolution of a video transcoded by using the H.265 Narrowband HD template cannot exceed 1,280 × 720 pixels.
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
   */
  name?: string;
  /**
   * @remarks
   * The configuration of the template.
   */
  templateConfig?: UpdateLiveTranscodeTemplateRequestTemplateConfig;
  /**
   * @remarks
   * The template ID. To obtain the template ID, log on to the [Intelligent Media Services (IMS) console](https://ims.console.aliyun.com/summary), choose Real-time Media Processing > Template Management, and then click the Transcoding tab. Alternatively, find the ID from the response parameters of the [CreateLiveTranscodeTemplate](https://help.aliyun.com/document_detail/449217.html) operation.
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

