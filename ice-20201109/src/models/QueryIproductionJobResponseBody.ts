// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIProductionJobResponseBodyInput extends $dara.Model {
  /**
   * @remarks
   * The input media. If Type is set to OSS, enter the OSS URL. If Type is set to Media, enter the media asset ID.
   * The OSS URL must be in one of the following formats:
   * - oss://bucket/object
   * - http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * where bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The input type. Valid values:
   * - OSS: OSS file URL.
   * - Media: media asset ID.
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
   * The business to which the media asset belongs.
   * 
   * @example
   * IMS
   */
  biz?: string;
  /**
   * @remarks
   * The output media. If Type is set to OSS, the OSS URL is returned. If Type is set to Media, the specified media asset ID or a newly generated media asset ID is returned.
   * 
   * The OSS URL must be in one of the following formats:
   * - oss://bucket/object
   * - http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * where bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The OSS URL of the specified output file when Type is set to Media.
   * 
   * @example
   * http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   */
  outputUrl?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * - OSS: OSS path.
   * - Media: media asset ID.
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
   * The priority of the job in its corresponding pipeline.
   * 
   * - Highest priority: 10.
   * 
   * - Default value: **6**.
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
   * The creation time in GMT.
   * 
   * @example
   * 2022-07-07T07:16:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The completion time in GMT.
   * 
   * @example
   * 2021-11-26T14:50:25Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The name of the algorithm feature to use. Valid values:
   * 
   * - **Cover**: Intelligent cover
   * - **VideoClip**: Video synopsis
   * - **VideoDelogo**: Video icon removal
   * - **VideoDetext**: Video subtitle removal
   * - **CaptionExtraction**: Subtitle fetch
   * - **VideoGreenScreenMatting**: Image matting
   * - **FaceBeauty**: Video face beautification
   * - **VideoH2V**: Video landscape-to-portrait conversion
   * - **MusicSegmentDetect**: Chorus detection
   * - **AudioBeatDetection**: Beat detection
   * - **AudioQualityAssessment**: Audio quality assessment
   * - **SpeechDenoise**: Speech noise reduction
   * - **AudioMixing**: Audio mixing
   * - **MusicDemix**: Vocal and accompaniment separation
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
   * The algorithm job parameters. This is a JSON object. The parameters vary based on the algorithm.
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
   * The output file array.
   */
  outputFiles?: string[];
  /**
   * @remarks
   * The list of media asset IDs output by the job.
   */
  outputMediaIds?: string[];
  /**
   * @remarks
   * The output file URL array.
   */
  outputUrls?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01A0E5D1-4B3C-599D-8017-2DA186EA1053
   */
  requestId?: string;
  /**
   * @remarks
   * The result information output by the algorithm. The output varies based on FunctionName and is in JSON format. For more information, see the following sections.
   * 
   * @example
   * {}
   */
  result?: string;
  /**
   * @remarks
   * The job configuration information.
   */
  scheduleConfig?: QueryIProductionJobResponseBodyScheduleConfig;
  /**
   * @remarks
   * The job status. Valid values:
   * - Queuing: The job is queued.
   * - Analysing: The job is being analyzed.
   * - Fail: The job failed.
   * - Success: The job succeeded.
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
   * The user-defined data. This data is returned as-is when the result is retrieved.
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

