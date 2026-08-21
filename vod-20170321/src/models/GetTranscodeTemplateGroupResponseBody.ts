// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList extends $dara.Model {
  /**
   * @remarks
   * The audio stream transcoding configuration parameters (JSON string).
   * 
   * @example
   * {"Codec":"AAC","Remove":"false","Bitrate":"44","Samplerate":"32000","Channels":"2","Profile":"aac_low"}
   */
  audio?: string;
  /**
   * @remarks
   * The video clipping configuration (JSON string). For example, set this parameter if you want to extract 5 seconds of content from a video to generate a new video.
   * 
   * @example
   * {"TimeSpan":{"Seek":"1","Duration":"5"}
   */
  clip?: string;
  /**
   * @remarks
   * The container format for encapsulating audio and video streams (JSON string).
   * 
   * @example
   * "Format":"m3u8"
   */
  container?: string;
  /**
   * @remarks
   * The copyright watermark information.
   * 
   * @example
   * {
   * "Content": "Test copyright watermark text"
   * }
   */
  copyrightMark?: string;
  /**
   * @remarks
   * The definition mark for normal transcoding templates:
   * 
   * - **LD** (low definition)
   * - **SD** (standard definition)
   * - **HD** (high definition)
   * - **FHD** (full high definition)
   * - **OD** (original definition, container format conversion)
   * - **2K**
   * - **4K**
   * - **SQ** (standard audio quality)
   * - **HQ** (high audio quality)
   * 
   * The definition mark for Narrowband HD 1.0 built-in transcoding templates:
   * 
   * - **LD-NBV1** (low definition)
   * - **SD-NBV1** (standard definition)
   * - **HD-NBV1** (high definition)
   * - **FHD-NBV1** (full high definition)
   * - **2K-NBV1**
   * - **4K-NBV1**
   * 
   * > - The definition mark of transcoding templates cannot be modified.
   * > - The audio and video resolution, bitrate, and other parameters of Narrowband HD 1.0 transcoding templates are built into the system and cannot be modified.
   * > - Narrowband HD 1.0 transcoding templates can only be created in FLV, M3U8 (HLS), or MP4 format.
   * 
   * @example
   * SD
   */
  definition?: string;
  /**
   * @remarks
   * The transcoding encryption configuration.
   * 
   * @example
   * "EncryptType":"Private"
   */
  encryptSetting?: string;
  /**
   * @remarks
   * The segment setting parameters for transcoding. Required for HLS (JSON string).
   * 
   * @example
   * "Segment": { "Duration":"6" }
   */
  muxConfig?: string;
  /**
   * @remarks
   * The packaging configuration. Only HLS adaptive bitrate streaming packaging and DASH packaging are supported (JSON string).
   * 
   * @example
   * "PackageType":"HLSPackage","PackageConfig":{   "BandWidth":"900000"  }
   */
  packageSetting?: string;
  /**
   * @remarks
   * The video rotation parameter. Controls the rotation angle of the video. For example, if set to 180, the video is flipped upside down. Value range: `[0,360]`.
   * 
   * @example
   * 90
   */
  rotate?: string;
  /**
   * @remarks
   * The subtitle configuration (JSON string).
   * 
   * @example
   * [{"SubtitleUrl":"http://outin-test.oss-cn-shanghai.aliyuncs.com/subtitles/c737fece-14f1-4364-b107-d5f7f8edde0e.ass","CharEncode":"utf-8"}]
   */
  subtitleList?: string;
  /**
   * @remarks
   * The transcoding template name.
   * 
   * @example
   * test
   */
  templateName?: string;
  /**
   * @remarks
   * The tracing watermark information.
   * 
   * @example
   * {
   * 	"Enable": true
   * }
   */
  traceMark?: string;
  /**
   * @remarks
   * The conditional transcoding parameters. Set this parameter if you want to perform basic logic checks based on the bitrate or resolution of the source file before outputting the transcoded video (JSON string).
   * 
   * @example
   * {"IsCheckReso":"true","IsCheckResoFail":"false","IsCheckVideoBitrate":"false","IsCheckVideoBitrateFail":"false","IsCheckAudioBitrate":"false","IsCheckAudioBitrateFail":"false"}
   */
  transConfig?: string;
  /**
   * @remarks
   * The custom transcoding output path.
   * 
   * @example
   * {MediaId}/transcoce_1
   */
  transcodeFileRegular?: string;
  /**
   * @remarks
   * The transcoding template ID.
   * 
   * @example
   * 696d29a11erc057*****a3acc398d02f4
   */
  transcodeTemplateId?: string;
  /**
   * @remarks
   * The templatetype. Valid values:
   * 
   * - **Normal** (default): a normal transcoding template. The PackageSetting parameter cannot be configured in Settings for this type of template.
   * - **VideoPackage**: a video stream packaging template. This type of template first transcodes and then builds adaptive bitrate streaming. The PackageSetting parameter must be configured in Settings for this type of template.
   * - **SubtitlePackage**: a subtitle packaging template. This type of template does not transcode but only builds the corresponding subtitle information into the adaptive bitrate streaming output file. The PackageSetting parameter must be configured in Settings for this type of template. This type of template cannot exist alone in a template group and must be configured together with a VideoPackage type template. Only one SubtitlePackage template can be configured in a template group.
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The video stream transcoding configuration parameters (JSON string).
   * 
   * @example
   * {"Codec":"H.264","Bitrate":"900","Width":"960","Remove":"false","Fps":"30"}
   */
  video?: string;
  /**
   * @remarks
   * The IDs of associated image and text watermark templates.
   */
  watermarkIds?: string[];
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      clip: 'Clip',
      container: 'Container',
      copyrightMark: 'CopyrightMark',
      definition: 'Definition',
      encryptSetting: 'EncryptSetting',
      muxConfig: 'MuxConfig',
      packageSetting: 'PackageSetting',
      rotate: 'Rotate',
      subtitleList: 'SubtitleList',
      templateName: 'TemplateName',
      traceMark: 'TraceMark',
      transConfig: 'TransConfig',
      transcodeFileRegular: 'TranscodeFileRegular',
      transcodeTemplateId: 'TranscodeTemplateId',
      type: 'Type',
      video: 'Video',
      watermarkIds: 'WatermarkIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'string',
      clip: 'string',
      container: 'string',
      copyrightMark: 'string',
      definition: 'string',
      encryptSetting: 'string',
      muxConfig: 'string',
      packageSetting: 'string',
      rotate: 'string',
      subtitleList: 'string',
      templateName: 'string',
      traceMark: 'string',
      transConfig: 'string',
      transcodeFileRegular: 'string',
      transcodeTemplateId: 'string',
      type: 'string',
      video: 'string',
      watermarkIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.watermarkIds)) {
      $dara.Model.validateArray(this.watermarkIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroup extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the template group was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-12-12T10:20:51Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the template group is the default one. Valid values:
   * 
   * - **Default**: The template group is the default one.
   * - **NotDefault**: The template group is not the default one.
   * 
   * @example
   * NotDefault
   */
  isDefault?: string;
  /**
   * @remarks
   * Indicates whether the template group is locked. Valid values:
   * - **Disabled**: Not locked.
   * - **Enabled**: Locked.
   * 
   * @example
   * Enabled
   */
  locked?: string;
  /**
   * @remarks
   * The time when the template group was last modified. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-12-12T11:20:51Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the template group.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The transcoding template group ID.
   * 
   * @example
   * a59b11f697c716*****6ae1502142d0
   */
  transcodeTemplateGroupId?: string;
  /**
   * @remarks
   * The list of transcoding template configurations.
   */
  transcodeTemplateList?: GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      locked: 'Locked',
      modifyTime: 'ModifyTime',
      name: 'Name',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateList: 'TranscodeTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      isDefault: 'string',
      locked: 'string',
      modifyTime: 'string',
      name: 'string',
      transcodeTemplateGroupId: 'string',
      transcodeTemplateList: { 'type': 'array', 'itemType': GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList },
    };
  }

  validate() {
    if(Array.isArray(this.transcodeTemplateList)) {
      $dara.Model.validateArray(this.transcodeTemplateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTemplateGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6730AC93-7B12-4B*****7F-49EE1FE8BC49
   */
  requestId?: string;
  /**
   * @remarks
   * The transcoding template group data.
   */
  transcodeTemplateGroup?: GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeTemplateGroup: 'TranscodeTemplateGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeTemplateGroup: GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroup,
    };
  }

  validate() {
    if(this.transcodeTemplateGroup && typeof (this.transcodeTemplateGroup as any).validate === 'function') {
      (this.transcodeTemplateGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

