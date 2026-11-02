// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartHandleJobResponseBodyJobResult extends $dara.Model {
  /**
   * @remarks
   * The AI analysis result.
   * 
   * @example
   * ai result
   */
  aiResult?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the output video for the smart job.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  mediaUrl?: string;
  /**
   * @remarks
   * The token usage. This parameter is returned only for keyword expansion jobs.
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
   * The OSS URL or content library material ID.
   * 
   * @example
   * oss://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4 or ******11-DB8D-4A9A-875B-275798******
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
   * OSS Bucket
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * OSS Object
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
   * The creation time. The time is displayed in UTC and follows the ISO 8601 standard.
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
   * Test description
   */
  description?: string;
  /**
   * @remarks
   * The input parameters.
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
   * The modification time. The time is displayed in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The output configuration.
   */
  outputConfig?: GetSmartHandleJobResponseBodySmartJobInfoOutputConfig;
  /**
   * @remarks
   * The job title.
   * 
   * @example
   * Test title
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
  /**
   * @remarks
   * The error code returned when the job fails. This parameter is not returned if the job is executed successfully.
   * 
   * @example
   * SpeechTranslationNoValidVocal
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the job fails. This parameter is not returned if the job is executed successfully.
   * 
   * @example
   * The speech translation job failed due to lack of valid vocal voice data.
   */
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
   * The task result of the node.
   */
  jobResult?: GetSmartHandleJobResponseBodyJobResult;
  /**
   * @remarks
   * The task result of the node.
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
   * The smart job information.
   */
  smartJobInfo?: GetSmartHandleJobResponseBodySmartJobInfo;
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * Finished
   */
  state?: string;
  /**
   * @remarks
   * The user-defined information.
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

