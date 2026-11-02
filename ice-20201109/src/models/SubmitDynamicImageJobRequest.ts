// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDynamicImageJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The input media.
   * 
   * - If Type is set to OSS, specify an OSS URL.
   * 
   * - If Type is set to Media, specify a media asset ID.
   * 
   * OSS URL format:
   * 
   * 1. oss://bucket/object
   * 
   * 1. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * 
   * In the URL, bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * > Before you use the OSS bucket in the URL, add it to IMS [storage management](https://help.aliyun.com/document_detail/609918.html).
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object.mp4
   */
  media?: string;
  /**
   * @remarks
   * The input type. Valid values:
   * 
   * - OSS: an OSS file URL.
   * 
   * - Media: a media asset ID.
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
   * The output media. Both OSS URLs and media asset IDs are supported.
   * OSS URL format:
   * 
   * - oss://bucket/object
   * - http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * 
   * In the URL, bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * > Before you use the OSS bucket in the URL, add it to IMS [storage management](https://help.aliyun.com/document_detail/609918.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  media?: string;
  /**
   * @remarks
   * The output type. Valid values:
   * 
   * - OSS: an OSS file URL.
   * 
   * - Media: a media asset ID.
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
   * The priority. Valid values: 1 to 10. Default value: 6. A larger value indicates a higher priority.
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
   * The duration.
   * - Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * - Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * 
   * @example
   * 01:59:59.999 or 32000.23
   */
  duration?: string;
  /**
   * @remarks
   * The tail trimming duration, which specifies the length of time to trim from the end. When this parameter is set, the Duration parameter becomes invalid.
   * - Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * - Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * 
   * @example
   * 01:59:59.999 or 32000.23
   */
  end?: string;
  /**
   * @remarks
   * The start time.  
   * 
   * - Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * - Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
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
   * - gif
   * - webp
   * 
   * @example
   * gif
   */
  format?: string;
  /**
   * @remarks
   * The frame rate. Valid values: 1 to 60.
   * 
   * @example
   * 15
   */
  fps?: number;
  /**
   * @remarks
   * The height of the output animated image. Valid values: 128 to 4096.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * Specifies whether to enable auto-rotation (long-short side mode). Valid values:
   * 
   * - **true**: Enables auto-rotation.
   * - **false**: Disables auto-rotation.
   * 
   * Default value: **true**.
   * > The width of the transcoding output corresponds to the long side of the input source (the height for portrait videos), and the height corresponds to the short side of the input source (the width for portrait videos).
   * 
   * @example
   * false
   */
  longShortMode?: boolean;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * - **interlaced**: interlaced scan.
   * 
   * - **progressive**: progressive scan. This is the default value.
   * 
   * @example
   * progressive
   */
  scanMode?: string;
  /**
   * @remarks
   * The timeline parameters.
   */
  timeSpan?: SubmitDynamicImageJobRequestTemplateConfigOverwriteParamsTimeSpan;
  /**
   * @remarks
   * The width of the output animated image. Valid values: 128 to 4096.
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
   * The override parameters.
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
   * The task input.
   * 
   * This parameter is required.
   */
  input?: SubmitDynamicImageJobRequestInput;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * SampleJob
   */
  name?: string;
  /**
   * @remarks
   * The task output.
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
   * The custom user data.
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

