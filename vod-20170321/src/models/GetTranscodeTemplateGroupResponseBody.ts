// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList extends $dara.Model {
  /**
   * @remarks
   * The transcoding configurations of the audio stream. The value is a JSON string.
   * 
   * @example
   * {\\"Codec\\":\\"AAC\\",\\"Remove\\":\\"false\\",\\"Bitrate\\":\\"44\\",\\"Samplerate\\":\\"32000\\",\\"Channels\\":\\"2\\",\\"Profile\\":\\"aac_low\\"}
   */
  audio?: string;
  /**
   * @remarks
   * The clipping configurations of the video. The value is a JSON string. For example, this parameter is returned if you extract 5 seconds of content from a video to generate a new video.
   * 
   * @example
   * {\\"TimeSpan\\":{\\"Seek\\":\\"1\\",\\"Duration\\":\\"5\\"}
   */
  clip?: string;
  /**
   * @remarks
   * The format of the container used to encapsulate audio and video streams. The value is a JSON string.
   * 
   * @example
   * "Format":"m3u8"
   */
  container?: string;
  /**
   * @remarks
   * The content of the copyright watermark.
   * 
   * @example
   * {
   * 	"Content": "test"
   * }
   */
  copyrightMark?: string;
  /**
   * @remarks
   * Valid values for the definition of a common transcoding template:
   * 
   * *   **LD**: low definition.
   * *   **SD**: standard definition.
   * *   **HD**: high definition.
   * *   **FHD**: ultra high definition.
   * *   **OD**: original quality.
   * *   **2K**
   * *   **4K**
   * *   **SQ**: standard sound quality.
   * *   **HQ**: high sound quality.
   * 
   * Valid values for the definition of a Narrowband HD™ 1.0 transcoding template:
   * 
   * *   **LD-NBV1**: low definition.
   * *   **SD-NBV1**: standard definition.
   * *   **HD-NBV1**: high definition.
   * *   **FHD-NBV1**: ultra high definition.
   * *   **2K-NBV1**
   * *   **4K-NBV1**
   * 
   * > *   You cannot change the definition of a transcoding template.
   * >*   You cannot modify the system parameters, such as the video resolution, audio resolution, and bitrate, of Narrowband HD™ 1.0 transcoding templates.
   * >*   You can create only Narrowband HD™ 1.0 transcoding templates that support the FLV, M3U8 (HLS), and MP4 output formats.
   * 
   * @example
   * SD
   */
  definition?: string;
  /**
   * @remarks
   * The encryption configuration for transcoding.
   * 
   * @example
   * "EncryptType":"Private"
   */
  encryptSetting?: string;
  /**
   * @remarks
   * The transcoding segment configurations. This parameter must be returned if HTTP-Live-Streaming (HLS) encryption is used. The value is a JSON string.
   * 
   * @example
   * "Segment": { "Duration":"6" }
   */
  muxConfig?: string;
  /**
   * @remarks
   * The packaging configuration. Only HLS packaging and DASH packaging are supported. The value is a JSON string.
   * 
   * @example
   * "PackageType":"HLSPackage","PackageConfig":{   "BandWidth":"900000"  }
   */
  packageSetting?: string;
  /**
   * @remarks
   * The video rotation identifier. It is used to control the image rotation angle. For example, if you set this parameter to 180, the video image is turned upside down. Valid values: `[0,360]`.
   * 
   * @example
   * 90
   */
  rotate?: string;
  /**
   * @remarks
   * The subtitle configurations. The value is a JSON string.
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
   * The content of the tracing watermark.
   * 
   * @example
   * {
   * 	"Enable": true
   * }
   */
  traceMark?: string;
  /**
   * @remarks
   * The conditional transcoding configurations. This parameter can be used if you want to determine the basic logic based on the bitrate and resolution of the source file before the video is transcoded. The value is a JSON-formatted string.
   * 
   * @example
   * {"IsCheckReso":"true","IsCheckResoFail":"false","IsCheckVideoBitrate":"false","IsCheckVideoBitrateFail":"false","IsCheckAudioBitrate":"false","IsCheckAudioBitrateFail":"false"}
   */
  transConfig?: string;
  /**
   * @remarks
   * The custom path used to store the output files.
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
   * The type of the transcoding template. Valid values:
   * 
   * *   **Normal** (default): a common transcoding template. The PackageSetting parameter cannot be set for this type of template.
   * *   **VideoPackage**: a video stream package template. If this type of template is used, ApsaraVideo VOD transcodes a video into video streams in different bitrates and packages these video streams with a file. The PackageSetting parameter must be set for this type of template.
   * *   **SubtitlePackage**: a subtitle package template. If this type of template is used, ApsaraVideo VOD adds the subtitle information to the output file generated by packaging the multi-bitrate video streams of the corresponding video without transcoding. You must set the PackageSetting parameter for a subtitle package template and associate the subtitle package template with a video stream package template. A template group can contain only one subtitle package template.
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The transcoding configurations of the video stream. The value is a JSON string.
   * 
   * @example
   * {"Codec":"H.264","Bitrate":"900","Width":"960","Remove":"false","Fps":"30"}
   */
  video?: string;
  /**
   * @remarks
   * The IDs of the associated watermarks.
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
   * The time when the transcoding template group was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-12T10:20:51Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the template group is the default one. Valid values:
   * 
   * *   **Default**
   * *   **NotDefault**
   * 
   * @example
   * NotDefault
   */
  isDefault?: string;
  /**
   * @remarks
   * Indicates whether the transcoding template group is locked. Valid values:
   * 
   * *   **Disabled**: The template group is not locked.
   * *   **Enabled**: The template group is locked.
   * 
   * @example
   * Enabled
   */
  locked?: string;
  /**
   * @remarks
   * The time when the transcoding template group was last modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-12T11:20:51Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the transcoding template group.
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
   * The information about the transcoding templates.
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
   * The information about the transcoding template group.
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

