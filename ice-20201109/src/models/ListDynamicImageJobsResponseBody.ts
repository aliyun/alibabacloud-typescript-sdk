// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicImageJobsResponseBodyJobsInput extends $dara.Model {
  /**
   * @remarks
   * The input media. OSS URLs and media asset IDs are supported. OSS URL formats:
   * - OSS://bucket/object
   * - http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * In the URLs, bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The input type. Valid values:
   * - OSS: the OSS file URL.
   * - Media: the media asset ID.
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

export class ListDynamicImageJobsResponseBodyJobsOutput extends $dara.Model {
  /**
   * @remarks
   * The output media. If Type is set to OSS, enter an OSS URL. If Type is set to Media, enter a media asset ID. OSS URL formats:
   * - OSS://bucket/object
   * - http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * In the URLs, bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  media?: string;
  /**
   * @remarks
   * The output type. Valid values:
   * - OSS: the OSS file URL.
   * - Media: the media asset ID.
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

export class ListDynamicImageJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The task completion time. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:30:54Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The task input.
   */
  input?: ListDynamicImageJobsResponseBodyJobsInput;
  /**
   * @remarks
   * The animated image task ID.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The last modification time. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:30:54Z
   */
  modifiedTime?: string;
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
   */
  output?: ListDynamicImageJobsResponseBodyJobsOutput;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * - **Success**: Succeeded.
   * 
   * - **Fail**: Failed.
   * 
   * - **Init**: Submitted.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The task submission time. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  templateId?: string;
  /**
   * @remarks
   * The request trigger source.
   * 
   * @example
   * API
   */
  triggerSource?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      pipelineId: 'PipelineId',
      status: 'Status',
      submitTime: 'SubmitTime',
      templateId: 'TemplateId',
      triggerSource: 'TriggerSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      input: ListDynamicImageJobsResponseBodyJobsInput,
      jobId: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: ListDynamicImageJobsResponseBodyJobsOutput,
      pipelineId: 'string',
      status: 'string',
      submitTime: 'string',
      templateId: 'string',
      triggerSource: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of tasks.
   */
  jobs?: ListDynamicImageJobsResponseBodyJobs[];
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListDynamicImageJobsResponseBodyJobs },
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

