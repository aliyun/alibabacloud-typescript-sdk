// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartHandleJobResponseBodyJobResult extends $dara.Model {
  /**
   * @remarks
   * The AI analysis result.
   * 
   * @example
   * Intelligent segmentation or tagging information
   */
  aiResult?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  mediaUrl?: string;
  /**
   * @remarks
   * The token usage. This parameter is returned only for keyword-based text generation jobs.
   * 
   * @example
   * {"total_tokens":100}
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      aiResult: 'AiResult',
      mediaId: 'MediaId',
      mediaUrl: 'MediaUrl',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiResult: 'string',
      mediaId: 'string',
      mediaUrl: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobResponseBodySmartJobInfoInputConfig extends $dara.Model {
  /**
   * @remarks
   * The OSS URL or the ID of the material in the media asset library.
   * 
   * @example
   * oss://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4 或 ******11-DB8D-4A9A-875B-275798******
   */
  inputFile?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobResponseBodySmartJobInfoOutputConfig extends $dara.Model {
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
   * The OSS object.
   * 
   * @example
   * test-object
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
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

export class GetSmartHandleJobResponseBodySmartJobInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * 测试描述
   */
  description?: string;
  /**
   * @remarks
   * The input configurations.
   */
  inputConfig?: GetSmartHandleJobResponseBodySmartJobInfoInputConfig;
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * ASR
   */
  jobType?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The output configurations.
   */
  outputConfig?: GetSmartHandleJobResponseBodySmartJobInfoOutputConfig;
  /**
   * @remarks
   * The job title.
   * 
   * @example
   * 测试标题
   */
  title?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1974526429******
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      inputConfig: 'InputConfig',
      jobType: 'JobType',
      modifiedTime: 'ModifiedTime',
      outputConfig: 'OutputConfig',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      inputConfig: GetSmartHandleJobResponseBodySmartJobInfoInputConfig,
      jobType: 'string',
      modifiedTime: 'string',
      outputConfig: GetSmartHandleJobResponseBodySmartJobInfoOutputConfig,
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.inputConfig && typeof (this.inputConfig as any).validate === 'function') {
      (this.inputConfig as any).validate();
    }
    if(this.outputConfig && typeof (this.outputConfig as any).validate === 'function') {
      (this.outputConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobResponseBody extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
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
   * The job results.
   */
  jobResult?: GetSmartHandleJobResponseBodyJobResult;
  /**
   * @remarks
   * The job results.
   * 
   * @example
   * {}
   */
  output?: string;
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
   * The information about the intelligent job.
   */
  smartJobInfo?: GetSmartHandleJobResponseBodySmartJobInfo;
  /**
   * @remarks
   * The job state.
   * 
   * Valid values:
   * 
   * *   Finished
   * *   Failed
   * *   Executing
   * *   Created
   * 
   * @example
   * Finished
   */
  state?: string;
  /**
   * @remarks
   * The user-defined data in the JSON format.
   * 
   * @example
   * {"user":"data"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      jobResult: 'JobResult',
      output: 'Output',
      requestId: 'RequestId',
      smartJobInfo: 'SmartJobInfo',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      jobResult: GetSmartHandleJobResponseBodyJobResult,
      output: 'string',
      requestId: 'string',
      smartJobInfo: GetSmartHandleJobResponseBodySmartJobInfo,
      state: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.jobResult && typeof (this.jobResult as any).validate === 'function') {
      (this.jobResult as any).validate();
    }
    if(this.smartJobInfo && typeof (this.smartJobInfo as any).validate === 'function') {
      (this.smartJobInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

