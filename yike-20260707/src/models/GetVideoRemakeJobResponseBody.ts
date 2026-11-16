// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoRemakeJobResponseBodyJobJobResult extends $dara.Model {
  /**
   * @remarks
   * The download URL of the JSON file for the content understanding result.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/comprehension-result.json
   */
  aiResult?: string;
  /**
   * @remarks
   * The download URL of the JSON file for the creative script. Use the file content as the Script parameter for SubmitVideoRenderJob.
   * 
   * @example
   * https://example.com/creative-script.json
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      aiResult: 'AiResult',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiResult: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoRemakeJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The error code for the failed asynchronous task. This parameter has a value only when the task status is Failed.
   * 
   * @example
   * NOT_ENOUGH_ALLOCATE_CREDIT_QUOTA
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message for the failed asynchronous task. This parameter has a value only when the task status is Failed.
   * 
   * @example
   * lockCredit business failed: NOT_ENOUGH_ALLOCATE_CREDIT_QUOTA
   */
  errorMessage?: string;
  /**
   * @remarks
   * The unified remake task ID.
   * 
   * @example
   * 0123456789abcdef0123456789abcdef
   */
  jobId?: string;
  /**
   * @remarks
   * The content understanding and script outputs returned when the status is Finished. This is not the rendered video.
   */
  jobResult?: GetVideoRemakeJobResponseBodyJobJobResult;
  /**
   * @remarks
   * The list of input media asset IDs.
   * 
   * @example
   * ["1234567890abcdef1234567890abcdef"]
   */
  mediaIds?: string[];
  /**
   * @remarks
   * The task status. Valid values: Created, Executing, Finished, and Failed. Finished indicates that content understanding and script generation are completed. If the status is Failed, check ErrorCode and ErrorMessage. If the task has been deleted, the query returns RecordNotFound.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The UserData JSON string submitted with the task, returned as is.
   * 
   * @example
   * {"NotifyAddress":"https://example.com/callback"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      jobResult: 'JobResult',
      mediaIds: 'MediaIds',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      jobResult: GetVideoRemakeJobResponseBodyJobJobResult,
      mediaIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.jobResult && typeof (this.jobResult as any).validate === 'function') {
      (this.jobResult as any).validate();
    }
    if(Array.isArray(this.mediaIds)) {
      $dara.Model.validateArray(this.mediaIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoRemakeJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unified remake task details.
   */
  job?: GetVideoRemakeJobResponseBodyJob;
  /**
   * @remarks
   * The request tracking identifier.
   * 
   * @example
   * 12345678-1234-4321-ABCD-123456789012
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetVideoRemakeJobResponseBodyJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

