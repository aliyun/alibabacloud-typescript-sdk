// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertJobConfigInputsInputFile extends $dara.Model {
  /**
   * @remarks
   * The URL or ID of the media file.
   * 
   * *   If Type is OSS, this is the file URL (OSS or HTTP). Do not use a signed URL, as it may cause authentication failure.
   * *   If Type is Media, this is the media asset ID. The source stream is used by default.
   * 
   * @example
   * http://bucket.loction.aliyuncs.com/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the media file. Valid values:
   * 
   * *   OSS: an OSS object.
   * *   Media: a media asset.
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
   * The name of the input file. InputRef can reference it in the output configuration.
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
   * Excludes streams based on their Language field. It must conform to RFC 5646.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Excludes streams based on their Name field.
   * 
   * @example
   * audio-1
   */
  name?: string;
  /**
   * @remarks
   * Excludes streams based on their Type field.
   * 
   * Valid values:
   * 
   * *   Audio
   * *   Subtitle
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
   * Specifies streams to exclude from the referenced manifest. Multiple conditions within a single exclusion object are combined using AND logic. Multiple exclusion objects in the array are combined using OR logic.
   */
  excludes?: MediaConvertJobConfigOutputGroupsGroupConfigManifestExtendExcludes[];
  /**
   * @remarks
   * References the Name of an input that contains the manifest to be extended.
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
   * The media asset location.
   * 
   * *   If Type is OSS, this is the destination URL (OSS or HTTP).
   * *   If Type is Media, this is the destination media asset ID.
   * 
   * @example
   * oss://bucket/path/to/dir
   */
  media?: string;
  /**
   * @remarks
   * The type of the output file. Valid values:
   * 
   * *   OSS: an OSS object.
   * *   Media: a media asset.
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
   * Configures an extension to an existing manifest file. This allows you to reference an existing manifest and combine it with the results of the current output group to generate a new manifest.
   */
  manifestExtend?: MediaConvertJobConfigOutputGroupsGroupConfigManifestExtend;
  /**
   * @remarks
   * The name of the manifest file. This parameter is only applicable when Type is set to Hls or Dash.
   * 
   * @example
   * manifest
   */
  manifestName?: string;
  /**
   * @remarks
   * The base output directory. All files generated by this OutputGroup are placed in this directory.
   */
  outputFileBase?: MediaConvertJobConfigOutputGroupsGroupConfigOutputFileBase;
  /**
   * @remarks
   * The type of the output group. Valid values:
   * 
   * *   File: An individual file.
   * *   Hls: HLS files for adaptive bitrate streaming.
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
   * The audio group this video stream references. Effective when Type is video.
   * 
   * Default value: audio.
   * 
   * @example
   * audio
   */
  audioGroup?: string;
  /**
   * @remarks
   * Whether this stream should be automatically selected by the player. Effective when Type is audio or subtitle.
   * 
   * @example
   * true
   */
  autoSelect?: string;
  /**
   * @remarks
   * Whether this stream must be played. Effective when Type is audio or subtitle.
   * 
   * @example
   * true
   */
  forced?: string;
  /**
   * @remarks
   * The GROUP-ID attribute for this stream in the HLS manifest. Effective when Type is audio or subtitle.
   * 
   * Default value: Same as the Type value.
   * 
   * @example
   * audio
   */
  group?: string;
  /**
   * @remarks
   * Whether this is the default stream within its group. Effective when Type is audio or subtitle. Only one stream per group can be the default.
   * 
   * @example
   * false
   */
  isDefault?: string;
  /**
   * @remarks
   * The LANGUAGE attribute for this stream in the HLS manifest (must conform to RFC 5646). Effective when Type is audio or subtitle.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The NAME attribute for this stream in the HLS manifest. **Required** when Type is audio or subtitle.
   * 
   * @example
   * audio
   */
  name?: string;
  /**
   * @remarks
   * The subtitle group this video or hybrid stream references. Effective when Type is video or hybrid.
   * 
   * Default value: subtitle.
   * 
   * @example
   * subtitle
   */
  subtitleGroup?: string;
  /**
   * @remarks
   * Specifies the stream type.
   * 
   * Valid values:
   * 
   * *   video: Video stream.
   * *   audio: Audio stream.
   * *   subtitle: Subtitle stream.
   * *   hybrid: A stream containing both audio and video.
   * 
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
   * Additional feature parameters. See [MediaConvertJobFeature](https://help.aliyun.com/document_detail/2979993.html) for details.
   * 
   * @example
   * {}
   */
  features?: string;
  /**
   * @remarks
   * HLS-specific settings for this stream\\"s behavior in the manifest. Effective only when the group Type is Hls.
   */
  hlsGroupConfig?: MediaConvertJobConfigOutputGroupsOutputsHlsGroupConfig;
  /**
   * @remarks
   * A name to label this output. This is for identification purposes only and does not affect the filename.
   * 
   * @example
   * group-output
   */
  name?: string;
  /**
   * @remarks
   * The filename for this output. It is used in conjunction with OutputFileBase from the GroupConfig.
   * 
   * @example
   * 720p.mp4
   */
  outputFileName?: string;
  /**
   * @remarks
   * A JSON string of parameters to override the settings in the specified template.
   * 
   * @example
   * {}
   */
  overrideParams?: string;
  /**
   * @remarks
   * The priority of the task, from 1 to 10. A higher value indicates a higher priority. Default: 6.
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
   * The configuration for this output group.
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
   * A list of individual output stream configurations. Each object in this array defines a specific rendition.
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
   * Inputs.
   */
  inputs?: MediaConvertJobConfigInputs[];
  /**
   * @remarks
   * The task name.
   * 
   * *   Maximum length: 64 bytes.
   * 
   * @example
   * Name
   */
  jobName?: string;
  /**
   * @remarks
   * An array of output group configurations.
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

