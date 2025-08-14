// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDynamicImageJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The input file. If Type is set to OSS, set this parameter to the URL of an OSS object. If Type is set to Media, set this parameter to the ID of a media asset. The URL of an OSS object can be in one of the following formats:
   * 
   * 1.  oss://bucket/object
   * 2.  http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * 
   * In the URL, bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object URL in OSS.
   * 
   * >  Before you use the OSS bucket in the URL, you must add the bucket on the [Storage Management](https://help.aliyun.com/document_detail/609918.html) page of the Intelligent Media Services (IMS) console.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the input file. Valid values:
   * 
   * 1.  OSS: an Object Storage Service (OSS) object.
   * 2.  Media: a media asset.
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
   * The output file. The file can be an OSS object or a media asset. The URL of an OSS object can be in one of the following formats:
   * 
   * *   oss://bucket/object
   * *   http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * 
   * In the URL, bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object URL in OSS.
   * 
   * >  Before you use the OSS bucket in the URL, you must add the bucket on the [Storage Management](https://help.aliyun.com/document_detail/609918.html) page of the IMS console.
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  media?: string;
  /**
   * @remarks
   * The type of the output file. Valid values:
   * 
   * 1.  OSS: an OSS object.
   * 2.  Media: a media asset.
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
   * The ID of the MPS queue to which the job was submitted.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority. Valid values: 1 to 10. Default value: 6. A greater value specifies a higher priority.
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
   * The length of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * 
   * @example
   * 01:59:59.999 or 32000.23
   */
  duration?: string;
  /**
   * @remarks
   * The length of the ending part of the original clip to be cropped out. If you specify this parameter, the Duration parameter becomes invalid.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * 
   * @example
   * 01:59:59.999 or 32000.23
   */
  end?: string;
  /**
   * @remarks
   * The start point of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
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
   * The format of the animated image. Valid values:
   * 
   * *   **gif**
   * *   **webp**
   * 
   * @example
   * gif
   */
  format?: string;
  /**
   * @remarks
   * The frame rate. Valid values: [1,60].
   * 
   * @example
   * 15
   */
  fps?: number;
  /**
   * @remarks
   * The height of the animated image. Valid values: [128,4096].
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * Specifies whether to enable the auto-rotate screen feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **true**.
   * 
   * >  If this feature is enabled, the width of the output video corresponds to the long side of the input video, which is the height of the input video in portrait mode. The height of the output video corresponds to the short side of the input video, which is the width of the input video in portrait mode.
   * 
   * @example
   * false
   */
  longShortMode?: boolean;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * *   **interlaced**
   * *   **progressive** This is the default value.
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
   * The width of the animated image. Valid values: [128,4096].
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
   * The parameters that are used to overwrite the corresponding parameters.
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
   * The input of the job.
   * 
   * This parameter is required.
   */
  input?: SubmitDynamicImageJobRequestInput;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * SampleJob
   */
  name?: string;
  /**
   * @remarks
   * The output of the job.
   * 
   * This parameter is required.
   */
  output?: SubmitDynamicImageJobRequestOutput;
  /**
   * @remarks
   * The scheduling settings.
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

