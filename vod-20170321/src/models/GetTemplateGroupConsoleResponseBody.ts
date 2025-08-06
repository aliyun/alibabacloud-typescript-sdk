// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateAudio extends $dara.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  remove?: string;
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      remove: 'Remove',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      remove: 'string',
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

export class GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateContainer extends $dara.Model {
  format?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateEncryptionConfig extends $dara.Model {
  decryptKeyUri?: string;
  encryptType?: string;
  keyEncryptMethod?: string;
  static names(): { [key: string]: string } {
    return {
      decryptKeyUri: 'DecryptKeyUri',
      encryptType: 'EncryptType',
      keyEncryptMethod: 'KeyEncryptMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decryptKeyUri: 'string',
      encryptType: 'string',
      keyEncryptMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateMuxConfigSegment extends $dara.Model {
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateMuxConfig extends $dara.Model {
  segment?: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateMuxConfigSegment,
    };
  }

  validate() {
    if(this.segment && typeof (this.segment as any).validate === 'function') {
      (this.segment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateTransConfig extends $dara.Model {
  isCheckAudioBitrate?: string;
  isCheckAudioBitrateFail?: string;
  isCheckReso?: string;
  isCheckResoFail?: string;
  isCheckVideoBitrate?: string;
  isCheckVideoBitrateFail?: string;
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isCheckAudioBitrate: 'string',
      isCheckAudioBitrateFail: 'string',
      isCheckReso: 'string',
      isCheckResoFail: 'string',
      isCheckVideoBitrate: 'string',
      isCheckVideoBitrateFail: 'string',
      transMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateVideo extends $dara.Model {
  bitrate?: string;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  fps?: string;
  gop?: string;
  height?: string;
  longShortMode?: string;
  maxrate?: string;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  remove?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      remove: 'Remove',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      longShortMode: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      remove: 'string',
      scanMode: 'string',
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

export class GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplate extends $dara.Model {
  audio?: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateAudio;
  condition?: string;
  container?: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateContainer;
  definition?: string;
  encrypt?: string;
  encryptionConfig?: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateEncryptionConfig;
  isLocked?: string;
  mediaDefinition?: string;
  muxConfig?: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateMuxConfig;
  name?: string;
  narrowBand?: string;
  status?: string;
  templateId?: string;
  transConfig?: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateTransConfig;
  useWaterMark?: string;
  userWaterMark?: string;
  video?: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      condition: 'Condition',
      container: 'Container',
      definition: 'Definition',
      encrypt: 'Encrypt',
      encryptionConfig: 'EncryptionConfig',
      isLocked: 'IsLocked',
      mediaDefinition: 'MediaDefinition',
      muxConfig: 'MuxConfig',
      name: 'Name',
      narrowBand: 'NarrowBand',
      status: 'Status',
      templateId: 'TemplateId',
      transConfig: 'TransConfig',
      useWaterMark: 'UseWaterMark',
      userWaterMark: 'UserWaterMark',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateAudio,
      condition: 'string',
      container: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateContainer,
      definition: 'string',
      encrypt: 'string',
      encryptionConfig: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateEncryptionConfig,
      isLocked: 'string',
      mediaDefinition: 'string',
      muxConfig: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateMuxConfig,
      name: 'string',
      narrowBand: 'string',
      status: 'string',
      templateId: 'string',
      transConfig: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateTransConfig,
      useWaterMark: 'string',
      userWaterMark: 'string',
      video: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplateVideo,
    };
  }

  validate() {
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    if(this.encryptionConfig && typeof (this.encryptionConfig as any).validate === 'function') {
      (this.encryptionConfig as any).validate();
    }
    if(this.muxConfig && typeof (this.muxConfig as any).validate === 'function') {
      (this.muxConfig as any).validate();
    }
    if(this.transConfig && typeof (this.transConfig as any).validate === 'function') {
      (this.transConfig as any).validate();
    }
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateGroupConsoleResponseBodyTemplateGroupTemplates extends $dara.Model {
  template?: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': GetTemplateGroupConsoleResponseBodyTemplateGroupTemplatesTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.template)) {
      $dara.Model.validateArray(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateGroupConsoleResponseBodyTemplateGroup extends $dara.Model {
  defaultGroup?: string;
  groupId?: string;
  groupSymbol?: string;
  groupType?: string;
  isLocked?: string;
  name?: string;
  status?: string;
  templates?: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplates;
  transcodeMode?: string;
  static names(): { [key: string]: string } {
    return {
      defaultGroup: 'DefaultGroup',
      groupId: 'GroupId',
      groupSymbol: 'GroupSymbol',
      groupType: 'GroupType',
      isLocked: 'IsLocked',
      name: 'Name',
      status: 'Status',
      templates: 'Templates',
      transcodeMode: 'TranscodeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultGroup: 'string',
      groupId: 'string',
      groupSymbol: 'string',
      groupType: 'string',
      isLocked: 'string',
      name: 'string',
      status: 'string',
      templates: GetTemplateGroupConsoleResponseBodyTemplateGroupTemplates,
      transcodeMode: 'string',
    };
  }

  validate() {
    if(this.templates && typeof (this.templates as any).validate === 'function') {
      (this.templates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateGroupConsoleResponseBody extends $dara.Model {
  requestId?: string;
  templateGroup?: GetTemplateGroupConsoleResponseBodyTemplateGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateGroup: 'TemplateGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateGroup: GetTemplateGroupConsoleResponseBodyTemplateGroup,
    };
  }

  validate() {
    if(this.templateGroup && typeof (this.templateGroup as any).validate === 'function') {
      (this.templateGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

