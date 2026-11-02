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
   * - 1: Mono.
   * 
   * - 2: Stereo.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec. Valid values:
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
   * The audio encoding profile. If the Codec parameter is set to AAC, valid values:
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
   * The audio sampling rate. Valid values: 22050 to 96000.
   * 
   * >Notice: If the AudioProfile parameter is set to aac_ld, the sampling rate cannot exceed 44100.
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
   * The video codec. Valid values:
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
   * The group of pictures (GOP) size of the video. Unit: frames. Valid values: 1 to 3000.
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
   * >Notice: The resolution of an H.265 Narrowband HD template cannot exceed 1280×720.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The encoding profile. A set of specific encoding features supported by the video. Generally, a larger value indicates better video quality but higher resource consumption for encoding and decoding. Valid values:
   * 
   * - 1: Baseline profile, suitable for mobile devices.
   * 
   * - 2: Main profile, suitable for standard-resolution devices.
   * 
   * - 3: High profile, suitable for high-resolution devices.
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
   * >Notice: The resolution of an H.265 Narrowband HD template cannot exceed 1280×720.
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
   * > The parameter requirements vary based on the template type (Type). If the Type parameter is set to normal, you must specify at least one of the width and height parameters, and the frame rate and bitrate parameters are required. For other template types, specify parameters as needed.
   */
  templateConfig?: CreateLiveTranscodeTemplateRequestTemplateConfig;
  /**
   * @remarks
   * The template type. Valid values:
   * - normal: Normal template.
   * - narrow-band: Narrowband HD template.
   * - audio-only: Audio-only template.
   * - origin: Original quality template.
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

