// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoTranslationJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The duration of the input video, in seconds.
   * 
   * @example
   * 10.0
   */
  duration?: number;
  /**
   * @remarks
   * The editing project ID.
   * 
   * @example
   * ba50304145fd411c827239c398820267
   */
  editingProjectId?: string;
  /**
   * @remarks
   * Optional. The error code returned when the task ultimately fails.
   * 
   * @example
   * InvalidInput
   */
  errorCode?: string;
  /**
   * @remarks
   * Optional. The error message returned when the task ultimately fails.
   * 
   * @example
   * Input is invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The normalized Input JSON.
   * 
   * @example
   * {"Video":"https://example.com/input.mp4"}
   */
  input?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * vtj_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The normalized JobParameters JSON, including default values.
   * 
   * @example
   * {"NeedDetext":true,"SubtitleFrom":"default","SourceLanguage":"zh","TargetLanguage":"en","NeedVisualTranslate":true}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The normalized task type.
   * 
   * @example
   * VoiceTranslate
   */
  jobType?: string;
  /**
   * @remarks
   * The JSON string of the final task result.
   * 
   * @example
   * {"AiResult":{"ResultMap":{"ja":{"EditingProjectId":"editing-project-xxx","MediaURL":"https://example.com/bucket/prefix/ja/result.mp4"}}}}
   */
  output?: string;
  /**
   * @remarks
   * The task status. Valid values: Created, Queuing, Executing, Finished, and Failed.
   * 
   * @example
   * Executing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      editingProjectId: 'EditingProjectId',
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
      duration: 'number',
      editingProjectId: 'string',
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

export class GetVideoTranslationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The video translation task.
   */
  job?: GetVideoTranslationJobResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-id
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
      job: GetVideoTranslationJobResponseBodyJob,
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

