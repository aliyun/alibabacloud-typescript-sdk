// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoDetextJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The business error code returned when the job fails. This field is typically not returned when the job is not in a failed state.
   * 
   * @example
   * InvalidInput
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error message returned when the job fails. This field is typically not returned when the job is not in a failed state.
   * 
   * @example
   * Input video is invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The normalized JSON string of the input configuration saved during submission.
   * 
   * @example
   * {"VideoUrl":"https://example.com/input.mp4"}
   */
  input?: string;
  /**
   * @remarks
   * The ID of the video text removal job.
   * 
   * @example
   * vdt_0123456789abcdef0123456789abcdef
   */
  jobId?: string;
  /**
   * @remarks
   * The normalized JSON string of the text removal parameters.
   * 
   * @example
   * {"EraseAllText":false,"TextTargets":[{"Box":[0.1,0.8,0.8,0.15],"TimeRanges":[[0,30]]}]}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The job type. The value is fixed as VIDEO_DETEXT.
   * 
   * @example
   * VIDEO_DETEXT
   */
  jobType?: string;
  /**
   * @remarks
   * The JSON character string of the task result. When Status is Finished, deserialize the sequence of this field and read AiResult.DetextVideoURL to obtain the URL of the video with text removed. If the node is not successfully completed, the video URL is not guaranteed to be included. If Output.OssUri is specified during commit, the result is stored in the specified OSS bucket. Otherwise, a signed URL is returned.
   * 
   * @example
   * {"AiResult":{"DetextVideoURL":"https://example.com/detext/detext.mp4"}}
   */
  output?: string;
  /**
   * @remarks
   * The job status. Valid values: Created, Queuing, Executing, Finished, and Failed.
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
   * The video text removal job.
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

