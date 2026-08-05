// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveTranscodeTemplateRequestTemplateConfigAudioParams extends $dara.Model {
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
   * 
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
   * The audio encoding preset. When Codec is set to AAC, valid values:
   * - aac_low
   * - aac_he
   * - aac_he_v2
   * - aac_ld
   * 
   * @example
   * aaclow
   */
  profile?: string;
  /**
   * @remarks
   * The audio sample rate. Valid values: 22050 to 96000.
   * 
   * >Notice: If AudioProfile is set to aac_ld, the sample rate must not exceed 44100.
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

export class CreateLiveTranscodeTemplateRequestTemplateConfigVideoParams extends $dara.Model {
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
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The video GOP (Group of Pictures). Unit: frames. Valid values: 1 to 3000.
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
   * 
   * - max(Height, Width) ≤ 2560
   * 
   * - min(Height, Width) ≤ 1440
   * 
   * >Notice: For H.265 narrowband HD templates, the resolution must not exceed 1280 × 720.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The encoding profile. A set of specific encoding features supported by the video. A higher value generally produces better image quality but consumes more encoding and decoding resources. Valid values:
   * 
   * - 1: baseline (suitable for mobile devices).
   * 
   * - 2: main (suitable for standard resolution devices).
   * 
   * - 3: high (suitable for high resolution devices).
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
   * 
   * - max(Height, Width) ≤ 2560
   * 
   * - min(Height, Width) ≤ 1440
   * 
   * >Notice: For H.265 narrowband HD templates, the resolution must not exceed 1280 × 720.
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

export class CreateLiveTranscodeTemplateRequestTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The audio parameters.
   */
  audioParams?: CreateLiveTranscodeTemplateRequestTemplateConfigAudioParams;
  /**
   * @remarks
   * The video parameters.
   */
  videoParams?: CreateLiveTranscodeTemplateRequestTemplateConfigVideoParams;
  static names(): { [key: string]: string } {
    return {
      audioParams: 'AudioParams',
      videoParams: 'VideoParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioParams: CreateLiveTranscodeTemplateRequestTemplateConfigAudioParams,
      videoParams: CreateLiveTranscodeTemplateRequestTemplateConfigVideoParams,
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

export class CreateLiveTranscodeTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * my template
   */
  name?: string;
  /**
   * @remarks
   * The template configuration.
   * > The pass parameter requirements vary based on the templatetype (Type). When Type is set to normal, at least one of the width and height parameters must be specified, and the frame rate and bitrate parameters are required. For other template types, specify the parameters based on your requirements.
   */
  templateConfig?: CreateLiveTranscodeTemplateRequestTemplateConfig;
  /**
   * @remarks
   * The template type. Valid values:
   * 
   * - normal: standard.
   * - narrow-band: narrowband HD.
   * - audio-only: audio only.
   * - origin: original quality.
   * 
   * This parameter is required.
   * 
   * @example
   * normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateConfig: 'TemplateConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfig: CreateLiveTranscodeTemplateRequestTemplateConfig,
      type: 'string',
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

