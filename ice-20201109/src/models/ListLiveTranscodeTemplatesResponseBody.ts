// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigAudioParams extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate.
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
   * The encoding profile.
   * 
   * @example
   * aac_low
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

export class ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigVideoParams extends $dara.Model {
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 2500
   */
  bitrate?: string;
  /**
   * @remarks
   * The encoding format.
   * 
   * @example
   * 264
   */
  codec?: string;
  /**
   * @remarks
   * The video frame rate.
   * 
   * @example
   * 30
   */
  fps?: string;
  /**
   * @remarks
   * The group of pictures (GOP) of the output video. Unit: frame.
   * 
   * @example
   * 1000
   */
  gop?: string;
  /**
   * @remarks
   * The vertical resolution of the video.
   * 
   * @example
   * 1280
   */
  height?: string;
  /**
   * @remarks
   * The encoding profile.
   * 
   * @example
   * 3
   */
  profile?: string;
  /**
   * @remarks
   * The horizontal resolution of the video.
   * 
   * @example
   * 720
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

export class ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The audio parameters.
   */
  audioParams?: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigAudioParams;
  /**
   * @remarks
   * The video parameters.
   */
  videoParams?: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigVideoParams;
  static names(): { [key: string]: string } {
    return {
      audioParams: 'AudioParams',
      videoParams: 'VideoParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioParams: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigAudioParams,
      videoParams: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigVideoParams,
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

export class ListLiveTranscodeTemplatesResponseBodyTemplateContentList extends $dara.Model {
  /**
   * @remarks
   * The category of the template. Valid values:
   * 
   * @example
   * system
   */
  category?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2022-07-20T03:26:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * my_template
   */
  name?: string;
  /**
   * @remarks
   * The configuration of the template.
   */
  templateConfig?: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfig;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 9b1571b513cb44f7a1ba6ae561ff46f7
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
      templateConfig: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfig,
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

export class ListLiveTranscodeTemplatesResponseBody extends $dara.Model {
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
   * The list of transcoding templates.
   */
  templateContentList?: ListLiveTranscodeTemplatesResponseBodyTemplateContentList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateContentList: 'TemplateContentList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateContentList: { 'type': 'array', 'itemType': ListLiveTranscodeTemplatesResponseBodyTemplateContentList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templateContentList)) {
      $dara.Model.validateArray(this.templateContentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

