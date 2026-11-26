// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConvertTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList extends $dara.Model {
  /**
   * @remarks
   * The transcoding parameters for the audio stream. The value is a JSON string that includes Codec, Bitrate, Samplerate, and Channels. The default value of Codec is AAC.
   * 
   * @example
   * {"Codec":"AAC","Bitrate":"128","Samplerate":"44100"}
   */
  audio?: string;
  /**
   * @remarks
   * The container format configuration. The value is a JSON string that includes Format. Valid values for Format: mp4, m3u8, and mpd.
   * 
   * @example
   * {"Format":"m3u8"}
   */
  container?: string;
  /**
   * @remarks
   * The definition identifier.
   * 
   * @example
   * HD
   */
  definition?: string;
  /**
   * @remarks
   * The encryption configuration. The value is a JSON string that includes EncryptType and EncryptConfig.
   * 
   * @example
   * {"EncryptType":"Private"}
   */
  encryptSetting?: string;
  /**
   * @remarks
   * The muxing parameters. The value is a JSON string. When you generate an m3u8 file, you can set Segment.Duration to specify the segment duration.
   * 
   * @example
   * {"Segment":{"Duration":"10"}}
   */
  muxConfig?: string;
  /**
   * @remarks
   * The packaging configuration. The value is a JSON string that includes PackageType. This parameter is used for video and subtitle packaging templates.
   * 
   * @example
   * {"PackageType":"HLSPackage"}
   */
  packageSetting?: string;
  /**
   * @remarks
   * The list of subtitle configurations. The value is a JSON string array.
   * 
   * @example
   * [{"Language":"eng"}]
   */
  subtitleList?: string;
  /**
   * @remarks
   * The name of the transcoding template.
   * 
   * @example
   * hd-720p
   */
  templateName?: string;
  /**
   * @remarks
   * The general transcoding configuration. The value is a JSON string that includes TransMode and other parameters.
   * 
   * @example
   * {"TransMode":"ONE"}
   */
  transConfig?: string;
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * @example
   * 4c71a339fe52b4fa6f4527****
   */
  transcodeTemplateId?: string;
  /**
   * @remarks
   * The templatetype. Valid values: **Normal**: normal transcoding template. **VideoPackage**: video packaging template. **SubtitlePackage**: subtitle packaging template.
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The transcoding parameters for the video stream. The value is a JSON string that includes Codec, Bitrate, Width, Height, and Fps. The default value of Codec is H.264.
   * 
   * @example
   * {"Codec":"H.264","Bitrate":"2000","Width":"1280","Height":"720"}
   */
  video?: string;
  /**
   * @remarks
   * The list of watermark template IDs.
   */
  watermarkIds?: string[];
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      definition: 'Definition',
      encryptSetting: 'EncryptSetting',
      muxConfig: 'MuxConfig',
      packageSetting: 'PackageSetting',
      subtitleList: 'SubtitleList',
      templateName: 'TemplateName',
      transConfig: 'TransConfig',
      transcodeTemplateId: 'TranscodeTemplateId',
      type: 'Type',
      video: 'Video',
      watermarkIds: 'WatermarkIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'string',
      container: 'string',
      definition: 'string',
      encryptSetting: 'string',
      muxConfig: 'string',
      packageSetting: 'string',
      subtitleList: 'string',
      templateName: 'string',
      transConfig: 'string',
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

export class GetMediaConvertTemplateGroupResponseBodyTranscodeTemplateGroup extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. For more information, see [Multiple applications](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2026-04-10T08:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The group-level configuration.
   * 
   * @example
   * {"AutoStreamName":"{RunId}_master"}
   */
  groupConfig?: string;
  /**
   * @remarks
   * The modification time. The time is displayed in UTC in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2026-04-10T08:00:00Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the transcoding template group.
   * 
   * @example
   * mcTemplateGroup
   */
  name?: string;
  /**
   * @remarks
   * The type of the template group, which is determined by the purpose of the first template in the group. Valid values: **Normal**: normal transcoding template group. **VideoPackage**: video packaging template group.
   * 
   * @example
   * Normal
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * @example
   * 4c71a339fe52b4fa6f4527****
   */
  transcodeTemplateGroupId?: string;
  /**
   * @remarks
   * The list of transcoding template configurations.
   */
  transcodeTemplateList?: GetMediaConvertTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      groupConfig: 'GroupConfig',
      modifyTime: 'ModifyTime',
      name: 'Name',
      templateType: 'TemplateType',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateList: 'TranscodeTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      groupConfig: 'string',
      modifyTime: 'string',
      name: 'string',
      templateType: 'string',
      transcodeTemplateGroupId: 'string',
      transcodeTemplateList: { 'type': 'array', 'itemType': GetMediaConvertTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList },
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

export class GetMediaConvertTemplateGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The transcoding template group information.
   */
  transcodeTemplateGroup?: GetMediaConvertTemplateGroupResponseBodyTranscodeTemplateGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeTemplateGroup: 'TranscodeTemplateGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeTemplateGroup: GetMediaConvertTemplateGroupResponseBodyTranscodeTemplateGroup,
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

