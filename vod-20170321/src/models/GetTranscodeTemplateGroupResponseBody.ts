// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList extends $dara.Model {
  /**
   * @remarks
   * The transcoding configuration parameters for the audio stream. The value is a JSON string.
   * 
   * @example
   * {"Codec":"AAC","Remove":"false","Bitrate":"44","Samplerate":"32000","Channels":"2","Profile":"aac_low"}
   */
  audio?: string;
  /**
   * @remarks
   * The video clipping configuration. The value is a JSON string. For example, if you need to extract 5 seconds of content from a video to generate a new video, you can set this parameter.
   * 
   * @example
   * {"TimeSpan":{"Seek":"1","Duration":"5"}
   */
  clip?: string;
  /**
   * @remarks
   * The container format that encapsulates the audio and video streams. The value is a JSON string.
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
   * 	"Content": "Test copyright watermark text"
   * }
   */
  copyrightMark?: string;
  /**
   * @remarks
   * The definition tags for standard transcoding templates:
   * 
   * - **LD** (Smooth)
   * - **SD** (Standard definition)
   * - **HD** (High definition)
   * - **FHD** (Full high definition)
   * - **OD** (Original definition, which means container format conversion)
   * - **2K**
   * - **4K**
   * - **SQ** (Standard sound quality)
   * - **HQ** (High sound quality)
   * 
   * The definition tags for built-in Narrowband HD™ 1.0 transcoding templates:
   * 
   * - **LD-NBV1** (Smooth)
   * - **SD-NBV1** (Standard definition)
   * - **HD-NBV1** (High definition)
   * - **FHD-NBV1** (Full high definition)
   * - **2K-NBV1**
   * - **4K-NBV1**
   * 
   * > - You cannot modify the definition tags of transcoding templates.
   * > - The audio and video resolutions, bitrates, and other parameters of Narrowband HD™ 1.0 transcoding templates are built-in and cannot be modified.
   * > - Narrowband HD™ 1.0 transcoding templates support only the FLV, M3U8 (HLS), and MP4 formats.
   * 
   * @example
   * SD
   */
  definition?: string;
  /**
   * @remarks
   * The encryption configuration information for transcoding.
   * 
   * @example
   * "EncryptType":"Private"
   */
  encryptSetting?: string;
  /**
   * @remarks
   * The segment settings for transcoding. This parameter is required for HLS. The value is a JSON string.
   * 
   * @example
   * "Segment": { "Duration":"6" }
   */
  muxConfig?: string;
  /**
   * @remarks
   * The packaging configuration. Only HLS adaptive bitrate streaming packaging and DASH packaging are supported. The value is a JSON string.
   * 
   * @example
   * "PackageType":"HLSPackage","PackageConfig":{   "BandWidth":"900000"  }
   */
  packageSetting?: string;
  /**
   * @remarks
   * The video rotation parameter. This parameter controls the rotation angle of the video image. For example, if you set this parameter to 180, the video image is upside down. Valid values: `[0,360]`.
   * 
   * @example
   * 90
   */
  rotate?: string;
  /**
   * @remarks
   * The subtitle configuration. The value is a JSON string.
   * 
   * @example
   * [{"SubtitleUrl":"http://outin-test.oss-cn-shanghai.aliyuncs.com/subtitles/c737fece-14f1-4364-b107-d5f7f8edde0e.ass","CharEncode":"utf-8"}]
   */
  subtitleList?: string;
  /**
   * @remarks
   * The name of the transcoding template.
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
   * The conditional transcoding parameters. If you need to make basic logical judgments based on the bitrate and resolution of the source video before outputting the transcoded video, you can set this parameter. The value is a JSON string.
   * 
   * @example
   * {"IsCheckReso":"true","IsCheckResoFail":"false","IsCheckVideoBitrate":"false","IsCheckVideoBitrateFail":"false","IsCheckAudioBitrate":"false","IsCheckAudioBitrateFail":"false"}
   */
  transConfig?: string;
  /**
   * @remarks
   * The custom output path for transcoding.
   * 
   * @example
   * {MediaId}/transcoce_1
   */
  transcodeFileRegular?: string;
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * @example
   * 696d29a11erc057*****a3acc398d02f4
   */
  transcodeTemplateId?: string;
  /**
   * @remarks
   * The templatetype. Valid values:
   * 
   * - **Normal** (default): A standard transcoding template. You cannot configure the Settings for the PackageSetting parameter for this type of template.
   * - **VideoPackage**: A video stream packaging template. This type of template transcodes the video stream first and then builds an adaptive bitrate stream. You must configure the Settings for the PackageSetting parameter.
   * - **SubtitlePackage**: A subtitle packaging template. This type of template does not transcode the video stream. It only builds the corresponding subtitle information into the adaptive bitrate output file. You must configure the Settings for the PackageSetting parameter. This type of template cannot exist independently in a template group and must be configured together with a VideoPackage template. You can configure only one SubtitlePackage template in a template group.
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The transcoding configuration parameters for the video stream. The value is a JSON string.
   * 
   * @example
   * {"Codec":"H.264","Bitrate":"900","Width":"960","Remove":"false","Fps":"30"}
   */
  video?: string;
  /**
   * @remarks
   * The IDs of the associated image and text watermark templates.
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
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the template group was created. The time follows the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-12T10:20:51Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Specifies whether the template group is the default template group. Valid values:
   * 
   * - **Default**: The default template group.
   * - **NotDefault**: A non-default template group.
   * 
   * @example
   * NotDefault
   */
  isDefault?: string;
  /**
   * @remarks
   * Specifies whether the template group is locked. Valid values:
   * - **Disabled**: Not locked.
   * - **Enabled**: Locked.
   * 
   * @example
   * Enabled
   */
  locked?: string;
  /**
   * @remarks
   * The time when the template group was modified. The time follows the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
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
   * The ID of the transcoding template group.
   * 
   * @example
   * a59b11f697c716*****6ae1502142d0
   */
  transcodeTemplateGroupId?: string;
  /**
   * @remarks
   * The list of transcoding template configuration information.
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
   * The ID of the request.
   * 
   * @example
   * 6730AC93-7B12-4B*****7F-49EE1FE8BC49
   */
  requestId?: string;
  /**
   * @remarks
   * The data of the transcoding template group.
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

