// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDynamicImageJobResponseBodyDynamicImageJobInputOssFile extends $dara.Model {
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
   * sample-input.mp4
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

export class GetDynamicImageJobResponseBodyDynamicImageJobInput extends $dara.Model {
  /**
   * @remarks
   * The input file. If Type is set to OSS, the URL of an OSS object is returned. If Type is set to Media, the ID of a media asset is returned. The URL of an OSS object can be in one of the following formats:
   * 
   * 1.  OSS://bucket/object
   * 2.  http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * 
   * In the URL, bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object URL in OSS.
   * 
   * @example
   * oss://test-bucket/sample-input.mp4
   */
  media?: string;
  /**
   * @remarks
   * The three key elements of OSS.
   */
  ossFile?: GetDynamicImageJobResponseBodyDynamicImageJobInputOssFile;
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
      ossFile: GetDynamicImageJobResponseBodyDynamicImageJobInputOssFile,
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

export class GetDynamicImageJobResponseBodyDynamicImageJobOutputOssFile extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * sample-bucket
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
   * path/to/object
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

export class GetDynamicImageJobResponseBodyDynamicImageJobOutput extends $dara.Model {
  /**
   * @remarks
   * The input file. If Type is set to OSS, the URL of an OSS object is returned. If Type is set to Media, the ID of a media asset is returned. The URL of an OSS object can be in one of the following formats:
   * 
   * 1.  OSS://bucket/object
   * 2.  http(s)://bucket.oss-[RegionId].aliyuncs.com/object In the URL, bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object URL in OSS.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  media?: string;
  /**
   * @remarks
   * The three key elements of OSS.
   */
  ossFile?: GetDynamicImageJobResponseBodyDynamicImageJobOutputOssFile;
  /**
   * @remarks
   * The type of the input file. Valid values: OSS: an OSS object. Media: a media asset.
   * 
   * @example
   * Media
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
      ossFile: GetDynamicImageJobResponseBodyDynamicImageJobOutputOssFile,
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

export class GetDynamicImageJobResponseBodyDynamicImageJob extends $dara.Model {
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
  input?: GetDynamicImageJobResponseBodyDynamicImageJobInput;
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
   * The specified resource for "CustomTemplate" could not be found.
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
   * 
   * @example
   * SampleJob
   */
  name?: string;
  /**
   * @remarks
   * The output of the job.
   */
  output?: GetDynamicImageJobResponseBodyDynamicImageJobOutput;
  /**
   * @remarks
   * The URL of the output animated image.
   * 
   * @example
   * http://test-bucket.oss-cn-shanghai.aliyuncs.com/output.gif
   */
  outputUrl?: string;
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
   * The animation template configuration.
   * 
   * @example
   * {"Format":"gif","Fps":5,"Height":1080,"Width":1920}
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
   * The user-defined data.
   * 
   * @example
   * {"sampleParam": "sampleValue"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      outputUrl: 'OutputUrl',
      pipelineId: 'PipelineId',
      status: 'Status',
      submitTime: 'SubmitTime',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      finishTime: 'string',
      input: GetDynamicImageJobResponseBodyDynamicImageJobInput,
      jobId: 'string',
      message: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: GetDynamicImageJobResponseBodyDynamicImageJobOutput,
      outputUrl: 'string',
      pipelineId: 'string',
      status: 'string',
      submitTime: 'string',
      templateConfig: 'string',
      templateId: 'string',
      triggerSource: 'string',
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

export class GetDynamicImageJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the snapshot job.
   */
  dynamicImageJob?: GetDynamicImageJobResponseBodyDynamicImageJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******36-3C1E-4417-BDB2-1E034F******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicImageJob: 'DynamicImageJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicImageJob: GetDynamicImageJobResponseBodyDynamicImageJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dynamicImageJob && typeof (this.dynamicImageJob as any).validate === 'function') {
      (this.dynamicImageJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

