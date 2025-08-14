// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIProductionJobResponseBodyInput extends $dara.Model {
  /**
   * @remarks
   * The input file. If Type is set to OSS, set this parameter to the path of an OSS object. If Type is set to Media, set this parameter to the ID of a media asset. You can specify the path of an OSS object in one of the following formats:
   * 
   * 1.  oss://bucket/object
   * 2.  http(s)://bucket.oss-[RegionId].aliyuncs.com/object bucket in the path specifies an OSS bucket that resides in the same region as the intelligent production job. object in the path specifies the object path in OSS.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * 
   * 1.  OSS: Object Storage Service (OSS) object
   * 2.  Media: media asset
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
  biz?: string;
  /**
   * @remarks
   * The output file. If Type is set to OSS, set this parameter to the path of an OSS object. If Type is set to Media, set this parameter to the ID of a media asset. You can specify the path of an OSS object in one of the following formats:
   * 
   * 1.  oss://bucket/object
   * 2.  http(s)://bucket.oss-[RegionId].aliyuncs.com/object bucket in the path specifies an OSS bucket that resides in the same region as the intelligent production job. object in the path specifies the object path in OSS.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  outputUrl?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * 
   * *   OSS: OSS object
   * *   Media: media asset
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
   * The ID of the ApsaraVideo Media Processing (MPS) queue.
   * 
   * @example
   * a54fdc9c9aab413caef0d1150f565e86
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job in the MPS queue to which the job is added.
   * 
   * *   A value of 10 indicates the highest priority.
   * *   Default value: **6**.
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
   * The time when the job was created.
   * 
   * @example
   * 2022-07-07T07:16:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 2021-11-26T14:50:25Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The name of the algorithm that you want to use for the job. Valid values:
   * 
   * *   **Cover**: This algorithm intelligently generates a thumbnail image for a video.
   * *   **VideoClip**: This algorithm intelligently generates a summary for a video.
   * *   **VideoDelogo**: This algorithm removes logos from a video.
   * *   **VideoDetext**: This algorithm removes captions from a video.
   * 
   * @example
   * Cover
   */
  functionName?: string;
  /**
   * @remarks
   * The input file.
   */
  input?: QueryIProductionJobResponseBodyInput;
  /**
   * @remarks
   * The ID of the intelligent production job.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The algorithm-specific parameters. The parameters are specified as JSON objects and vary based on the algorithm.
   * 
   * @example
   * {"Model":"gif"}
   */
  jobParams?: string;
  /**
   * @remarks
   * The name of the intelligent production job.
   */
  name?: string;
  /**
   * @remarks
   * The output file.
   */
  output?: QueryIProductionJobResponseBodyOutput;
  /**
   * @remarks
   * The output files.
   */
  outputFiles?: string[];
  outputMediaIds?: string[];
  /**
   * @remarks
   * The URLs of the output files.
   */
  outputUrls?: string[];
  /**
   * @remarks
   * The ID of the request.
   */
  requestId?: string;
  /**
   * @remarks
   * The output of the algorithm. The output is in JSON format and varies based on the algorithm. For more information, see the "Parameters of Result" section of this topic.
   * 
   * @example
   * {}
   */
  result?: string;
  /**
   * @remarks
   * The scheduling configuration.
   */
  scheduleConfig?: QueryIProductionJobResponseBodyScheduleConfig;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   Queuing: The job is waiting in the queue.
   * *   Analysing: The job is in progress.
   * *   Fail: The job failed.
   * *   Success: The job was successful.
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
   * The user-defined data that is returned in the response.
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

