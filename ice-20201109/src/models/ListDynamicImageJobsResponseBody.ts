// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicImageJobsResponseBodyJobsInput extends $dara.Model {
  /**
   * @remarks
   * The input file. The file can be an OSS object or a media asset. The URL of an OSS object can be in one of the following formats:
   * 
   * 1.  OSS://bucket/object
   * 2.  http(s)://bucket.oss-[regionId].aliyuncs.com/object In the URL, bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object URL in OSS.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The type of the input file. Valid values:
   * 
   * 1.  OSS: an Object Storage Service (OSS) object.
   * 2.  Media: a media asset.
   * 
   * *
   * *
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
   * The input file. If Type is set to OSS, the URL of an OSS object is returned. If Type is set to Media, the ID of a media asset is returned. The URL of an OSS object can be in one of the following formats:
   * 
   * 1.  OSS://bucket/object
   * 2.  http(s)://bucket.oss-[RegionId].aliyuncs.com/object In the URL, bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object URL in OSS.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  media?: string;
  /**
   * @remarks
   * The type of the output file. Valid values:
   * 
   * 1.  OSS: an OSS object.
   * 2.  Media: a media asset.
   * 
   * *
   * *
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
   * The time when the job was created.
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 2022-07-12T16:30:54Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input of the job.
   */
  input?: ListDynamicImageJobsResponseBodyJobsInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 2022-07-12T16:30:54Z
   */
  modifiedTime?: string;
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
   */
  output?: ListDynamicImageJobsResponseBodyJobsOutput;
  /**
   * @remarks
   * The ID of the MPS queue to which the job was submitted.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The state of the job.
   * 
   * *   **Success**: The job is successful.
   * *   **Fail**: The job failed.
   * *   **Init**: The job is submitted.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was submitted.
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
   * Valid values:
   * 
   * *   Console
   * *   Workflow
   * *   API
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
   * The list of jobs.
   */
  jobs?: ListDynamicImageJobsResponseBodyJobs[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
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

