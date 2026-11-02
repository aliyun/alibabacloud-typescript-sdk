// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDynamicImageJobResponseBodyDynamicImageJobInputOssFile extends $dara.Model {
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
   * The input media. If Type is set to OSS, enter the URL of the OSS object. If Type is set to Media, enter the ID of the media asset.
   * The URL of the OSS object must be in one of the following formats:
   * - oss://bucket/object
   * - http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * 
   * In the formats, bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * @example
   * oss://test-bucket/sample-input.mp4
   */
  media?: string;
  /**
   * @remarks
   * The OSS triplet.
   */
  ossFile?: GetDynamicImageJobResponseBodyDynamicImageJobInputOssFile;
  /**
   * @remarks
   * The input type. Valid values:
   * - OSS: the URL of an OSS object.
   * - Media: the ID of a media asset.
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
   * OSS Bucket
   * 
   * @example
   * sample-bucket
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
   * The output media. If Type is set to OSS, enter the URL of the OSS object. If Type is set to Media, enter the ID of the media asset.
   * The URL of the OSS object must be in one of the following formats:
   * - oss://bucket/object
   * - http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * 
   * In the formats, bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  media?: string;
  /**
   * @remarks
   * The OSS triplet.
   */
  ossFile?: GetDynamicImageJobResponseBodyDynamicImageJobOutputOssFile;
  /**
   * @remarks
   * The output type. Valid values:
   * - OSS: the URL of an OSS object.
   * - Media: the ID of a media asset.
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
   * The error code.
   * 
   * @example
   * ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The creation time. The time is in the ISO 8601 format and UTC, ending with Z.
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the task was completed. The time is in the ISO 8601 format and UTC, ending with Z.
   * 
   * @example
   * 2022-07-12T16:30:54Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input of the task.
   */
  input?: GetDynamicImageJobResponseBodyDynamicImageJobInput;
  /**
   * @remarks
   * The ID of the task.
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
   * The specified resource for "CustomTemplate" could not be found.
   */
  message?: string;
  /**
   * @remarks
   * The last modification time. The time is in the ISO 8601 format and UTC, ending with Z.
   * 
   * @example
   * 2022-07-12T16:30:54Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * SampleJob
   */
  name?: string;
  /**
   * @remarks
   * The output of the task.
   */
  output?: GetDynamicImageJobResponseBodyDynamicImageJobOutput;
  /**
   * @remarks
   * The URL of the output dynamic image.
   * 
   * @example
   * http://test-bucket.oss-cn-shanghai.aliyuncs.com/output.gif
   */
  outputUrl?: string;
  /**
   * @remarks
   * The ID of the pipeline.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The time when the task was submitted. The time is in the ISO 8601 format and UTC, ending with Z.
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The dynamic image template configuration.
   * 
   * @example
   * {"Format":"gif","Fps":5,"Height":1080,"Width":1920}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The ID of the template.
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
   * The custom user data.
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
   * The dynamic image task information.
   */
  dynamicImageJob?: GetDynamicImageJobResponseBodyDynamicImageJob;
  /**
   * @remarks
   * The ID of the request.
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

