// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertJobConfigInputsInputFile extends $dara.Model {
  /**
   * @remarks
   * The URL or ID of the media asset file.
   * - When Type is set to OSS, the value is a URL that supports the OSS or HTTP protocol. Do not include signature parameters. Otherwise, permission verification may fail. 
   * - When Type is set to Media, the value is a media asset ID. By default, the source stream is used as the input.
   * 
   * @example
   * http://bucket.loction.aliyuncs.com/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The media file type. Valid values:
   * - OSS: OSS file.
   * - Media: Media asset file.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigInputs extends $dara.Model {
  /**
   * @remarks
   * The input file.
   */
  inputFile?: MediaConvertJobConfigInputsInputFile;
  /**
   * @remarks
   * The name of the input file. This name can be referenced when InputRef is used in Output.
   * 
   * @example
   * InputVideo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: MediaConvertJobConfigInputsInputFile,
      name: 'string',
    };
  }

  validate() {
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigOutputGroupsGroupConfigManifestExtendExcludes extends $dara.Model {
  /**
   * @remarks
   * Filters items based on the Language field of the stream. This field follows the RFC 5646 standard.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Filters items based on the Name field of the stream.
   * 
   * @example
   * audio-1
   */
  name?: string;
  /**
   * @remarks
   * Filters items based on the Type field of the stream. Valid values:
   * - Audio.
   * - Subtitle.
   * 
   * @example
   * Audio
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigOutputGroupsGroupConfigManifestExtend extends $dara.Model {
  /**
   * @remarks
   * The conditions used to exclude streams from the referenced manifest file. The AND logic is used within a condition, and the OR logic is used between conditions for filtering.
   */
  excludes?: MediaConvertJobConfigOutputGroupsGroupConfigManifestExtendExcludes[];
  /**
   * @remarks
   * The referenced manifest file. The value is the Name of the Input.
   * 
   * @example
   * Input-Manifest
   */
  inputRef?: string;
  static names(): { [key: string]: string } {
    return {
      excludes: 'Excludes',
      inputRef: 'InputRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludes: { 'type': 'array', 'itemType': MediaConvertJobConfigOutputGroupsGroupConfigManifestExtendExcludes },
      inputRef: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludes)) {
      $dara.Model.validateArray(this.excludes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigOutputGroupsGroupConfigOutputFileBase extends $dara.Model {
  /**
   * @remarks
   * The media asset of the file.
   * - When Type is set to OSS, the value is a URL that supports the OSS and HTTP protocols.
   * - When Type is set to Media, the value is a media asset ID. By default, the source stream is used as the input.
   * 
   * @example
   * oss://bucket/path/to/dir
   */
  media?: string;
  /**
   * @remarks
   * The media object type. Valid values:
   * - OSS: Alibaba Cloud OSS file.
   * - Media: Media asset.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigOutputGroupsGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The extended configuration of the manifest file. This feature allows you to reference an existing manifest file and generate a new manifest file by combining it with the current output group results.
   */
  manifestExtend?: MediaConvertJobConfigOutputGroupsGroupConfigManifestExtend;
  /**
   * @remarks
   * The name of the manifest file. When Type is set to Hls or Dash, this parameter specifies the file name of the generated manifest file.
   * 
   * @example
   * manifest
   */
  manifestName?: string;
  /**
   * @remarks
   * The output directory of the group. All files generated by this OutputGroup are stored in this directory.
   */
  outputFileBase?: MediaConvertJobConfigOutputGroupsGroupConfigOutputFileBase;
  /**
   * @remarks
   * The output group type. Valid values:
   * - File: Independent file.
   * - Hls: HTTP Live Streaming (HLS) protocol file that generates an adaptive streaming playlist.
   * 
   * @example
   * Hls
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      manifestExtend: 'ManifestExtend',
      manifestName: 'ManifestName',
      outputFileBase: 'OutputFileBase',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manifestExtend: MediaConvertJobConfigOutputGroupsGroupConfigManifestExtend,
      manifestName: 'string',
      outputFileBase: MediaConvertJobConfigOutputGroupsGroupConfigOutputFileBase,
      type: 'string',
    };
  }

  validate() {
    if(this.manifestExtend && typeof (this.manifestExtend as any).validate === 'function') {
      (this.manifestExtend as any).validate();
    }
    if(this.outputFileBase && typeof (this.outputFileBase as any).validate === 'function') {
      (this.outputFileBase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigOutputGroupsOutputsHlsGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The audio group referenced by this video stream. This parameter takes effect when Type is set to video.
   * Default value: audio.
   * 
   * @example
   * audio
   */
  audioGroup?: string;
  /**
   * @remarks
   * Specifies whether to automatically select the stream. This parameter takes effect when Type is set to audio or subtitle.
   * 
   * @example
   * true
   */
  autoSelect?: string;
  /**
   * @remarks
   * Specifies whether to force the display of the stream. This parameter takes effect when Type is set to audio or subtitle.
   * 
   * @example
   * true
   */
  forced?: string;
  /**
   * @remarks
   * The GROUP_ID attribute of this output stream in the HLS manifest. This attribute takes effect when Type is set to audio or subtitle.
   * Default value: the same as the value of Type.
   * 
   * @example
   * audio
   */
  group?: string;
  /**
   * @remarks
   * Specifies whether to set the stream as the default stream. This parameter takes effect when Type is set to audio or subtitle. Only one default stream is allowed in the same group.
   * 
   * @example
   * false
   */
  isDefault?: string;
  /**
   * @remarks
   * The LANGUAGE attribute of this output stream in the HLS manifest. This attribute takes effect when Type is set to audio or subtitle and must follow the RFC 5646 standard.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The NAME attribute of this output stream in the HLS manifest. This parameter is **required** when Type is set to audio or subtitle.
   * 
   * @example
   * audio
   */
  name?: string;
  /**
   * @remarks
   * The subtitle group referenced by this video stream. This parameter takes effect when Type is set to video or hybrid.
   * Default value: subtitle.
   * 
   * @example
   * subtitle
   */
  subtitleGroup?: string;
  /**
   * @remarks
   * Specifies the output stream type. Valid values:
   * - video: Video stream. Only video-related settings are retained during processing.
   * - audio: Audio stream. Only audio-related settings are retained during processing.
   * - subtitle: Subtitle stream. Only subtitle-related settings are retained during processing.
   * - hybrid: Hybrid stream. Both audio- and video-related settings are retained during processing.
   * Default value: hybrid.
   * 
   * @example
   * hybrid
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      audioGroup: 'AudioGroup',
      autoSelect: 'AutoSelect',
      forced: 'Forced',
      group: 'Group',
      isDefault: 'IsDefault',
      language: 'Language',
      name: 'Name',
      subtitleGroup: 'SubtitleGroup',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioGroup: 'string',
      autoSelect: 'string',
      forced: 'string',
      group: 'string',
      isDefault: 'string',
      language: 'string',
      name: 'string',
      subtitleGroup: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigOutputGroupsOutputs extends $dara.Model {
  /**
   * @remarks
   * The feature parameters. For more information, see [MediaConvertJobFeature](https://help.aliyun.com/document_detail/2979993.html).
   * 
   * @example
   * {}
   */
  features?: string;
  /**
   * @remarks
   * The HLS group configuration. This parameter configures the behavior of the current stream in the manifest. This parameter takes effect only when the group type is Hls.
   */
  hlsGroupConfig?: MediaConvertJobConfigOutputGroupsOutputsHlsGroupConfig;
  /**
   * @remarks
   * The name of the transcoding output. This name is used only to label the output.
   * 
   * @example
   * group-output
   */
  name?: string;
  /**
   * @remarks
   * The file name of the transcoding output. This parameter is used together with OutputFileBase in GroupConfig.
   * 
   * @example
   * 720p.mp4
   */
  outputFileName?: string;
  /**
   * @remarks
   * The override parameters in JSON string format. This parameter allows you to override the parameters associated with the transcoding template.
   * 
   * @example
   * {}
   */
  overrideParams?: string;
  /**
   * @remarks
   * The priority. A larger value indicates a higher priority. Valid values: 1 to 10. Default value: 6.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      hlsGroupConfig: 'HlsGroupConfig',
      name: 'Name',
      outputFileName: 'OutputFileName',
      overrideParams: 'OverrideParams',
      priority: 'Priority',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: 'string',
      hlsGroupConfig: MediaConvertJobConfigOutputGroupsOutputsHlsGroupConfig,
      name: 'string',
      outputFileName: 'string',
      overrideParams: 'string',
      priority: 'number',
      templateId: 'string',
    };
  }

  validate() {
    if(this.hlsGroupConfig && typeof (this.hlsGroupConfig as any).validate === 'function') {
      (this.hlsGroupConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigOutputGroups extends $dara.Model {
  /**
   * @remarks
   * The group information configuration.
   */
  groupConfig?: MediaConvertJobConfigOutputGroupsGroupConfig;
  /**
   * @remarks
   * The name of the output group.
   * 
   * @example
   * hls-group
   */
  name?: string;
  /**
   * @remarks
   * The list of single-output transcoding configurations. Each configuration in the array represents an output stream file.
   */
  outputs?: MediaConvertJobConfigOutputGroupsOutputs[];
  static names(): { [key: string]: string } {
    return {
      groupConfig: 'GroupConfig',
      name: 'Name',
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupConfig: MediaConvertJobConfigOutputGroupsGroupConfig,
      name: 'string',
      outputs: { 'type': 'array', 'itemType': MediaConvertJobConfigOutputGroupsOutputs },
    };
  }

  validate() {
    if(this.groupConfig && typeof (this.groupConfig as any).validate === 'function') {
      (this.groupConfig as any).validate();
    }
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfig extends $dara.Model {
  /**
   * @remarks
   * The list of inputs for the transcoding job.
   */
  inputs?: MediaConvertJobConfigInputs[];
  /**
   * @remarks
   * The job name.
   * - The maximum length is 64 bytes.
   * 
   * @example
   * Name
   */
  jobName?: string;
  /**
   * @remarks
   * The list of output group configurations for the transcoding job.
   */
  outputGroups?: MediaConvertJobConfigOutputGroups[];
  static names(): { [key: string]: string } {
    return {
      inputs: 'Inputs',
      jobName: 'JobName',
      outputGroups: 'OutputGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputs: { 'type': 'array', 'itemType': MediaConvertJobConfigInputs },
      jobName: 'string',
      outputGroups: { 'type': 'array', 'itemType': MediaConvertJobConfigOutputGroups },
    };
  }

  validate() {
    if(Array.isArray(this.inputs)) {
      $dara.Model.validateArray(this.inputs);
    }
    if(Array.isArray(this.outputGroups)) {
      $dara.Model.validateArray(this.outputGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

