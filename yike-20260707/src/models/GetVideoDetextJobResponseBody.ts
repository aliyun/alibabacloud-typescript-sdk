// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoDetextJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The business error code returned when the task fails. This field is typically not returned for non-failure states.
   * 
   * @example
   * InvalidInput
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error message returned when the task fails. This field is typically not returned for non-failure states.
   * 
   * @example
   * Input video is invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The normalized input configuration JSON string saved at submission time.
   * 
   * @example
   * {"VideoUrl":"https://example.com/input.mp4"}
   */
  input?: string;
  /**
   * @remarks
   * The video text erasure task ID.
   * 
   * @example
   * vdt_0123456789abcdef0123456789abcdef
   */
  jobId?: string;
  /**
   * @remarks
   * The normalized text erasure parameter JSON string.
   * 
   * @example
   * {"EraseAllText":false,"TextTargets":[{"Box":[0.1,0.8,0.8,0.15],"TimeRanges":[[0,30]]}]}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The task type. The value is fixed to VIDEO_DETEXT.
   * 
   * @example
   * VIDEO_DETEXT
   */
  jobType?: string;
  /**
   * @remarks
   * The task result JSON string. When Status is Finished, deserialize this field and read AiResult.DetextVideoURL to obtain the URL of the video after text erasure. The video URL is not guaranteed to be included when the task has not completed successfully. If Output.OssUri is specified at submission time, the result is stored in the specified OSS location. Otherwise, a signed URL is returned.
   * 
   * @example
   * {"AiResult":{"DetextVideoURL":"https://example.com/detext/detext.mp4"}}
   */
  output?: string;
  /**
   * @remarks
   * The task status. Valid values: Created, Queuing, Executing, Finished, and Failed.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      input: 'Input',
      jobId: 'JobId',
      jobParameters: 'JobParameters',
      jobType: 'JobType',
      output: 'Output',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      input: 'string',
      jobId: 'string',
      jobParameters: 'string',
      jobType: 'string',
      output: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoDetextJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The video text erasure task.
   */
  job?: GetVideoDetextJobResponseBodyJob;
  /**
   * @remarks
   * The request ID, which is used for Tracing Analysis and troubleshooting.
   * 
   * @example
   * req-detext-get-20260820-001
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
      job: GetVideoDetextJobResponseBodyJob,
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

