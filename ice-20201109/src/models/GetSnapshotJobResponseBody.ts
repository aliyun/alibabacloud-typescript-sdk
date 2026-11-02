// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSnapshotJobResponseBodySnapshotJobInputOssFile extends $dara.Model {
  /**
   * @remarks
   * OSS Bucket
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * OSS Location
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * OSS Object
   * 
   * @example
   * object.mp4
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotJobResponseBodySnapshotJobInput extends $dara.Model {
  /**
   * @remarks
   * The input media. If Type is set to OSS, enter the OSS object URL. If Type is set to Media, enter the media asset ID.
   * The OSS object URL must be in one of the following formats:
   * - oss://bucket/object
   * - http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * In the URLs, bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * @example
   * oss://test-bucket/object.mp4
   */
  media?: string;
  /**
   * @remarks
   * The OSS triplet.
   */
  ossFile?: GetSnapshotJobResponseBodySnapshotJobInputOssFile;
  /**
   * @remarks
   * The input type. Valid values:
   * - OSS: the URL of an OSS object.
   * - Media: the media asset ID.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      ossFile: 'OssFile',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      ossFile: GetSnapshotJobResponseBodySnapshotJobInputOssFile,
      type: 'string',
    };
  }

  validate() {
    if(this.ossFile && typeof (this.ossFile as any).validate === 'function') {
      (this.ossFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotJobResponseBodySnapshotJobOutputOssFile extends $dara.Model {
  /**
   * @remarks
   * OSS Bucket
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * OSS Location
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * OSS Object
   * 
   * @example
   * output-{Count}.jpg
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotJobResponseBodySnapshotJobOutput extends $dara.Model {
  /**
   * @remarks
   * The output media. If Type is set to OSS, enter the OSS object URL. If Type is set to Media, enter the media asset ID.
   * The OSS object URL must be in one of the following formats:
   * - oss://bucket/object
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
   * The OSS triplet.
   */
  ossFile?: GetSnapshotJobResponseBodySnapshotJobOutputOssFile;
  /**
   * @remarks
   * The output type. Valid values:
   * - OSS: the URL of an OSS object.
   * - Media: the media asset ID.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      ossFile: 'OssFile',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      ossFile: GetSnapshotJobResponseBodySnapshotJobOutputOssFile,
      type: 'string',
    };
  }

  validate() {
    if(this.ossFile && typeof (this.ossFile as any).validate === 'function') {
      (this.ossFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotJobResponseBodySnapshotJob extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to capture snapshots asynchronously. Default value: true.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The number of snapshots.
   * 
   * @example
   * 8
   */
  count?: number;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was completed. The time follows the ISO 8601 standard in UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:30:54Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The job input.
   */
  input?: GetSnapshotJobResponseBodySnapshotJobInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  jobId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource for "Pipeline" could not be found.
   */
  message?: string;
  /**
   * @remarks
   * The last modification time. The time follows the ISO 8601 standard in UTC (ending with Z).
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
   * Test job
   */
  name?: string;
  /**
   * @remarks
   * The job output.
   */
  output?: GetSnapshotJobResponseBodySnapshotJobOutput;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was submitted. The time follows the ISO 8601 standard in UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The snapshot template configuration.
   * 
   * @example
   * {"Type":"Normal","FrameType":"normal","Time":0,"Count":10}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****d80e4e4044975745c14b****
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
   * The snapshot type.
   * 
   * @example
   * Sprite
   */
  type?: string;
  /**
   * @remarks
   * The custom user data.
   * 
   * @example
   * {"test parameter": "test value"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      code: 'Code',
      count: 'Count',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      pipelineId: 'PipelineId',
      status: 'Status',
      submitTime: 'SubmitTime',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      triggerSource: 'TriggerSource',
      type: 'Type',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      code: 'string',
      count: 'number',
      createTime: 'string',
      finishTime: 'string',
      input: GetSnapshotJobResponseBodySnapshotJobInput,
      jobId: 'string',
      message: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: GetSnapshotJobResponseBodySnapshotJobOutput,
      pipelineId: 'string',
      status: 'string',
      submitTime: 'string',
      templateConfig: 'string',
      templateId: 'string',
      triggerSource: 'string',
      type: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshot job information.
   */
  snapshotJob?: GetSnapshotJobResponseBodySnapshotJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotJob: 'SnapshotJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotJob: GetSnapshotJobResponseBodySnapshotJob,
    };
  }

  validate() {
    if(this.snapshotJob && typeof (this.snapshotJob as any).validate === 'function') {
      (this.snapshotJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

