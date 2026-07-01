// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDynamicImageJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The input media resource.
   * 
   * - If `Type` is set to `OSS`, specify the OSS URL of the input file.
   * 
   * - If `Type` is set to `Media`, specify the media asset ID.
   * 
   * An OSS URL must be in one of the following formats:
   * 
   * 1. `oss://bucket/object`
   * 
   * 2. `http(s)://bucket.oss-[RegionId].aliyuncs.com/object`
   * 
   * In these formats, `bucket` is the name of an OSS bucket in the same region as the current project, and `object` is the file path.
   * 
   * > The specified OSS bucket must be registered in IMS [storage management](https://help.aliyun.com/document_detail/609918.html).
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the job input. Valid values:
   * 
   * - `OSS`: An Object Storage Service (OSS) file URL.
   * 
   * - `Media`: A media asset ID.
   * 
   * This parameter is required.
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

export class SubmitDynamicImageJobRequestOutput extends $dara.Model {
  /**
   * @remarks
   * The destination OSS URL for the output file. This parameter is required when `Type` is set to `OSS`. The URL must be in one of the following formats:
   * 
   * - `oss://bucket/object`
   * 
   * - `http(s)://bucket.oss-[regionId].aliyuncs.com/object`
   * 
   * In these formats, `bucket` is the name of an OSS bucket in the same region as the current project, and `object` is the file path.
   * 
   * > The specified OSS bucket must be registered in IMS [storage management](https://help.aliyun.com/document_detail/609918.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  media?: string;
  /**
   * @remarks
   * The type of the job output. Valid values:
   * 
   * - `OSS`: The output is an OSS file.
   * 
   * - `Media`: The output is a new media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * Media
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

export class SubmitDynamicImageJobRequestScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job. Valid range: [1, 10]. A higher value indicates a higher priority. Default value: 6.
   * 
   * @example
   * 6
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequestTemplateConfigOverwriteParamsTimeSpan extends $dara.Model {
  /**
   * @remarks
   * The duration of the video segment to be processed.
   * 
   * - Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * 
   * - Valid range: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * 
   * @example
   * 01:59:59.999 or 32000.23
   */
  duration?: string;
  /**
   * @remarks
   * The end time of the video segment to be processed. If this parameter is set, the `Duration` parameter is ignored.
   * 
   * - Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * 
   * - Valid range: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * 
   * @example
   * 01:59:59.999 or 32000.23
   */
  end?: string;
  /**
   * @remarks
   * The start time of the video segment to be processed.
   * 
   * - Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * 
   * - Valid range: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * 
   * @example
   * 01:59:59.999 or 32000.23
   */
  seek?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      end: 'End',
      seek: 'Seek',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      end: 'string',
      seek: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequestTemplateConfigOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The animated image format. Valid values:
   * 
   * - `gif`
   * 
   * - `webp`
   * 
   * @example
   * gif
   */
  format?: string;
  /**
   * @remarks
   * The frame rate. Valid range: [1, 60].
   * 
   * @example
   * 15
   */
  fps?: number;
  /**
   * @remarks
   * The height of the output animated image. Valid range: [128, 4096].
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * Specifies whether to enable adaptive orientation based on the long and short edges of the video. Valid values:
   * 
   * - **true**: Enables adaptive orientation.
   * 
   * - **false**: Disables adaptive orientation.
   * 
   * Default value: **true**.
   * 
   * > When enabled, this mode sets the output width to the source video\\"s long edge and the output height to its short edge. For a portrait video, its height is treated as the long edge and its width as the short edge.
   * 
   * @example
   * false
   */
  longShortMode?: boolean;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * - **interlaced**: Interlaced scanning.
   * 
   * - **progressive**: Progressive scanning. This is the default value.
   * 
   * @example
   * progressive
   */
  scanMode?: string;
  /**
   * @remarks
   * Specifies the time range of the video to process for the animated image.
   */
  timeSpan?: SubmitDynamicImageJobRequestTemplateConfigOverwriteParamsTimeSpan;
  /**
   * @remarks
   * The width of the output animated image. Valid range: [128, 4096].
   * 
   * @example
   * 1024
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      longShortMode: 'LongShortMode',
      scanMode: 'ScanMode',
      timeSpan: 'TimeSpan',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      fps: 'number',
      height: 'number',
      longShortMode: 'boolean',
      scanMode: 'string',
      timeSpan: SubmitDynamicImageJobRequestTemplateConfigOverwriteParamsTimeSpan,
      width: 'number',
    };
  }

  validate() {
    if(this.timeSpan && typeof (this.timeSpan as any).validate === 'function') {
      (this.timeSpan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequestTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The overwrite parameters.
   */
  overwriteParams?: SubmitDynamicImageJobRequestTemplateConfigOverwriteParams;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitDynamicImageJobRequestTemplateConfigOverwriteParams,
      templateId: 'string',
    };
  }

  validate() {
    if(this.overwriteParams && typeof (this.overwriteParams as any).validate === 'function') {
      (this.overwriteParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job input.
   * 
   * This parameter is required.
   */
  input?: SubmitDynamicImageJobRequestInput;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * SampleJob
   */
  name?: string;
  /**
   * @remarks
   * The job output.
   * 
   * This parameter is required.
   */
  output?: SubmitDynamicImageJobRequestOutput;
  /**
   * @remarks
   * The scheduling configuration.
   */
  scheduleConfig?: SubmitDynamicImageJobRequestScheduleConfig;
  /**
   * @remarks
   * The snapshot template configuration.
   * 
   * This parameter is required.
   */
  templateConfig?: SubmitDynamicImageJobRequestTemplateConfig;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"SampleKey": "SampleValue"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      name: 'Name',
      output: 'Output',
      scheduleConfig: 'ScheduleConfig',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitDynamicImageJobRequestInput,
      name: 'string',
      output: SubmitDynamicImageJobRequestOutput,
      scheduleConfig: SubmitDynamicImageJobRequestScheduleConfig,
      templateConfig: SubmitDynamicImageJobRequestTemplateConfig,
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    if(this.templateConfig && typeof (this.templateConfig as any).validate === 'function') {
      (this.templateConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

