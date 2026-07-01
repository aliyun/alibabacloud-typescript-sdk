// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIProductionJobResponseBodyInput extends $dara.Model {
  /**
   * @remarks
   * The source file for the job. Set this to an OSS file URL if `Type` is `OSS`, or a media asset ID if `Type` is `Media`.
   * Valid OSS URL formats:
   * 
   * 1. oss\\://bucket/object
   * 
   * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   *    In these formats, `bucket` is the name of the OSS bucket in the same region as the current project, and `object` is the file path.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The input type. Valid values:
   * 
   * 1. OSS: An OSS file URL.
   * 
   * 2. Media: A media asset ID.
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

export class QueryIProductionJobResponseBodyOutput extends $dara.Model {
  /**
   * @remarks
   * The service that the media asset belongs to.
   * 
   * @example
   * IMS
   */
  biz?: string;
  /**
   * @remarks
   * The destination for the output. If the output `Type` is `OSS`, this parameter returns an OSS file URL. If the output `Type` is `Media`, it returns the specified or a newly generated media asset ID.
   * 
   * Valid OSS URL formats:
   * 
   * 1. oss\\://bucket/object
   * 
   * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   *    In these formats, `bucket` is the name of the OSS bucket in the same region as the current project, and `object` is the file path.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The OSS URL of the output file. This value is returned only when `Type` is `Media`.
   * 
   * @example
   * http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   */
  outputUrl?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * 
   * - OSS: An OSS file URL.
   * 
   * - Media: A media asset ID.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      media: 'Media',
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      media: 'string',
      outputUrl: 'string',
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

export class QueryIProductionJobResponseBodyScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * a54fdc9c9aab413caef0d1150f565e86
   */
  pipelineId?: string;
  /**
   * @remarks
   * The job\\"s priority within the pipeline.
   * 
   * - A larger value indicates a higher priority. The highest priority is 10.
   * 
   * - Default: **6**.
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

export class QueryIProductionJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created, in UTC.
   * 
   * @example
   * 2022-07-07T07:16:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was completed, in UTC.
   * 
   * @example
   * 2021-11-26T14:50:25Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The name of the algorithm to use. Valid values:
   * 
   * - **Cover**: smart cover
   * 
   * - **VideoClip**: video summary
   * 
   * - **VideoDelogo**: video logo removal
   * 
   * - **VideoDetext**: video text removal
   * 
   * - **CaptionExtraction**: caption extraction
   * 
   * - **VideoGreenScreenMatting**: green screen matting
   * 
   * - **FaceBeauty**: video beautification
   * 
   * - **VideoH2V**: horizontal-to-vertical video conversion
   * 
   * - **MusicSegmentDetect**: chorus detection
   * 
   * - **AudioBeatDetection**: beat detection
   * 
   * - **AudioQualityAssessment**: audio quality assessment
   * 
   * - **SpeechDenoise**: speech denoising
   * 
   * - **AudioMixing**: audio mixing
   * 
   * - **MusicDemix**: music source separation
   * 
   * @example
   * Cover
   */
  functionName?: string;
  /**
   * @remarks
   * The input media.
   */
  input?: QueryIProductionJobResponseBodyInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * A JSON object that contains the parameters for the algorithm job. The specific parameters vary depending on the selected algorithm.
   * 
   * @example
   * {"Model":"gif"}
   */
  jobParams?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * Test task
   */
  name?: string;
  /**
   * @remarks
   * The output media.
   */
  output?: QueryIProductionJobResponseBodyOutput;
  /**
   * @remarks
   * An array of output file paths.
   */
  outputFiles?: string[];
  /**
   * @remarks
   * The output media asset IDs.
   */
  outputMediaIds?: string[];
  /**
   * @remarks
   * An array of output file URLs.
   */
  outputUrls?: string[];
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * The algorithm output, returned as a JSON string. The structure of the output varies based on the `FunctionName`. For more information, see the additional notes below.
   * 
   * @example
   * {}
   */
  result?: string;
  /**
   * @remarks
   * The job configuration.
   */
  scheduleConfig?: QueryIProductionJobResponseBodyScheduleConfig;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - Queuing: The job is awaiting processing.
   * 
   * - Analyzing: The job is being processed.
   * 
   * - Fail: The job failed to complete.
   * 
   * - Success: The job completed successfully.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The user data. The system returns this value unchanged.
   * 
   * @example
   * {"test":1}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      functionName: 'FunctionName',
      input: 'Input',
      jobId: 'JobId',
      jobParams: 'JobParams',
      name: 'Name',
      output: 'Output',
      outputFiles: 'OutputFiles',
      outputMediaIds: 'OutputMediaIds',
      outputUrls: 'OutputUrls',
      requestId: 'RequestId',
      result: 'Result',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      templateId: 'TemplateId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      functionName: 'string',
      input: QueryIProductionJobResponseBodyInput,
      jobId: 'string',
      jobParams: 'string',
      name: 'string',
      output: QueryIProductionJobResponseBodyOutput,
      outputFiles: { 'type': 'array', 'itemType': 'string' },
      outputMediaIds: { 'type': 'array', 'itemType': 'string' },
      outputUrls: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      result: 'string',
      scheduleConfig: QueryIProductionJobResponseBodyScheduleConfig,
      status: 'string',
      templateId: 'string',
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
    if(Array.isArray(this.outputFiles)) {
      $dara.Model.validateArray(this.outputFiles);
    }
    if(Array.isArray(this.outputMediaIds)) {
      $dara.Model.validateArray(this.outputMediaIds);
    }
    if(Array.isArray(this.outputUrls)) {
      $dara.Model.validateArray(this.outputUrls);
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

