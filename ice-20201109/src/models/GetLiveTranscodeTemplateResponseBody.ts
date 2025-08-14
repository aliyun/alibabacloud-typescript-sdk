// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigAudioParams extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output audio.
   * 
   * @example
   * 1000
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec.
   * 
   * @example
   * AAC
   */
  codec?: string;
  /**
   * @remarks
   * The audio codec profile.
   * 
   * @example
   * 1
   */
  profile?: string;
  /**
   * @remarks
   * The audio sampling rate.
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

export class GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigVideoParams extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output video.
   * 
   * @example
   * 2500
   */
  bitrate?: string;
  /**
   * @remarks
   * The encoding type.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The frame rate of the output video.
   * 
   * @example
   * 30
   */
  fps?: string;
  /**
   * @remarks
   * The group of pictures (GOP) of the output video.
   * 
   * @example
   * 1000
   */
  gop?: string;
  /**
   * @remarks
   * The height of the output video.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The encoding profile.
   * 
   * @example
   * 2
   */
  profile?: string;
  /**
   * @remarks
   * The width of the output video.
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

export class GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The audio parameters.
   */
  audioParams?: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigAudioParams;
  /**
   * @remarks
   * The video parameters.
   */
  videoParams?: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigVideoParams;
  static names(): { [key: string]: string } {
    return {
      audioParams: 'AudioParams',
      videoParams: 'VideoParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioParams: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigAudioParams,
      videoParams: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigVideoParams,
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

export class GetLiveTranscodeTemplateResponseBodyTemplateContent extends $dara.Model {
  /**
   * @remarks
   * The category of the template. Valid values:
   * 
   * *   system
   * *   customized
   * 
   * @example
   * customized
   */
  category?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2022-07-25T06:15:14Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * my-template
   */
  name?: string;
  /**
   * @remarks
   * The configuration of the template.
   */
  templateConfig?: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfig;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * bcfa57950bc649b2abfb476ecd36ea4f
   */
  templateId?: string;
  /**
   * @remarks
   * The type of the template.
   * 
   * @example
   * normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      name: 'string',
      templateConfig: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfig,
      templateId: 'string',
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

export class GetLiveTranscodeTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The content of the template.
   */
  templateContent?: GetLiveTranscodeTemplateResponseBodyTemplateContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateContent: GetLiveTranscodeTemplateResponseBodyTemplateContent,
    };
  }

  validate() {
    if(this.templateContent && typeof (this.templateContent as any).validate === 'function') {
      (this.templateContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

