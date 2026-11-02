// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotJobsResponseBodyJobsInput extends $dara.Model {
  /**
   * @remarks
   * The input media. If Type is set to OSS, enter the OSS URL. If Type is set to Media, enter the media asset ID.
   * The OSS URL must follow these rules:
   * 
   * - OSS://bucket/object
   * 
   * - http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * 
   * In the URLs, bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * @example
   * oss://bucket/object.mp4
   */
  media?: string;
  /**
   * @remarks
   * The input type. Valid values:
   * 1. OSS: URL of an OSS object
   * 2. Media: media asset ID
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

export class ListSnapshotJobsResponseBodyJobsOutput extends $dara.Model {
  /**
   * @remarks
   * The output media. If Type is set to OSS, enter the OSS URL. If Type is set to Media, enter the media asset ID.
   * The OSS URL must follow these rules:
   * 
   * - OSS://bucket/object
   * 
   * - http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * 
   * In the URLs, bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * - When capturing multiple static snapshots, the object must contain the "{Count}" placeholder.
   * 
   * - When capturing sprite snapshots, the object must contain the "{TileCount}" placeholder.
   * 
   * - For WebVTT snapshots, the object extension must be ".vtt".
   * 
   * @example
   * http://test-bucket.oss-cn-shanghai.aliyuncs.com/output-{Count}.jpg
   */
  media?: string;
  /**
   * @remarks
   * The output type. Valid values:
   * 1. OSS: URL of an OSS object
   * 2. Media: media asset ID
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

export class ListSnapshotJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to capture snapshots asynchronously.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The number of snapshots.
   * 
   * @example
   * 10
   */
  count?: number;
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
   * The time when the job was completed. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:30:54Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The job input.
   */
  input?: ListSnapshotJobsResponseBodyJobsInput;
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
   * The last modification time. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:30:54Z
   */
  modifiedTime?: string;
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
   */
  output?: ListSnapshotJobsResponseBodyJobsOutput;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The job status.
   * 
   * - **Success**: Success.
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
   * The time when the job was submitted. The time is in ISO 8601 format and uses UTC (ending with Z).
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
   * ****20b48fb04483915d4f2cd8ac****
   */
  templateId?: string;
  /**
   * @remarks
   * The trigger source of the request.
   * 
   * @example
   * API
   */
  triggerSource?: string;
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * Sprite
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      count: 'Count',
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
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      count: 'number',
      createTime: 'string',
      finishTime: 'string',
      input: ListSnapshotJobsResponseBodyJobsInput,
      jobId: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: ListSnapshotJobsResponseBodyJobsOutput,
      pipelineId: 'string',
      status: 'string',
      submitTime: 'string',
      templateId: 'string',
      triggerSource: 'string',
      type: 'string',
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

export class ListSnapshotJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of jobs.
   */
  jobs?: ListSnapshotJobsResponseBodyJobs[];
  /**
   * @remarks
   * The pagination token for querying the next page.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
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
      jobs: { 'type': 'array', 'itemType': ListSnapshotJobsResponseBodyJobs },
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

