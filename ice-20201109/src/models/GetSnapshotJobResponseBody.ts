// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSnapshotJobResponseBodySnapshotJobInputOssFile extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS location.
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The OSS object.
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
   * The input file. If Type is set to OSS, the URL of an OSS object is returned. If Type is set to Media, the ID of a media asset is returned. The URL of an OSS object can be in one of the following formats:
   * 
   * 1.  oss://bucket/object
   * 2.  http(s)://bucket.oss-[RegionId].aliyuncs.com/object In the URL, bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object URL in OSS.
   * 
   * @example
   * oss://test-bucket/object.mp4
   */
  media?: string;
  /**
   * @remarks
   * The three key elements of OSS.
   */
  ossFile?: GetSnapshotJobResponseBodySnapshotJobInputOssFile;
  /**
   * @remarks
   * The type of the input file. Valid values:
   * 
   * 1.  OSS: an Object Storage Service (OSS) object.
   * 2.  Media: a media asset.
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
   * The OSS bucket.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS location.
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The OSS object.
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
   * The output file. If Type is set to OSS, the URL of an OSS object is returned. If Type is set to Media, the ID of a media asset is returned. The URL of an OSS object can be in one of the following formats:
   * 
   * 1.  oss://bucket/object
   * 2.  http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * 
   * In the URL, bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object URL in OSS. If multiple static snapshots were captured, the object must contain the "{Count}" placeholder. In the case of a sprite, the object must contain the "{TileCount}" placeholder. The suffix of the WebVTT snapshot objects must be ".vtt".
   * 
   * @example
   * http://test-bucket.oss-cn-shanghai.aliyuncs.com/output-{Count}.jpg
   */
  media?: string;
  /**
   * @remarks
   * The three key elements of OSS.
   */
  ossFile?: GetSnapshotJobResponseBodySnapshotJobOutputOssFile;
  /**
   * @remarks
   * The type of the output file. Valid values:
   * 
   * 1.  OSS: an OSS object.
   * 2.  Media: a media asset.
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
   * Indicates whether the snapshots were captured in asynchronous mode. Default value: true.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * Error codes
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
   * The error message that is returned.
   * 
   * @example
   * The specified resource for "Pipeline" could not be found.
   */
  message?: string;
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
   */
  name?: string;
  /**
   * @remarks
   * The output of the job.
   */
  output?: GetSnapshotJobResponseBodySnapshotJobOutput;
  /**
   * @remarks
   * The ID of the MPS queue to which the job was submitted.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The state of the job.
   * 
   * Valid values:
   * 
   * *   Init: The job is submitted.
   * *   Success: The job is successful.
   * *   Fail: The job failed.
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
  /**
   * @remarks
   * Snapshot types
   * 
   * Valid values:
   * 
   * *   WebVtt
   * *   Sprite
   * *   Normal
   * 
   * @example
   * Sprite
   */
  type?: string;
  /**
   * @remarks
   * The user-defined parameters.
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
   * The information about the snapshot job.
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

