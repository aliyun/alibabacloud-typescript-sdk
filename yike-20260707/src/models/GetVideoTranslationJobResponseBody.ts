// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoTranslationJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The input video duration, in seconds.
   * 
   * @example
   * 60.5
   */
  duration?: number;
  /**
   * @remarks
   * The editing project ID for a single-target-language job. For multi-target-language results, retrieve the ID from Output.AiResult.ResultMap.
   * 
   * @example
   * editing-project-001
   */
  editingProjectId?: string;
  /**
   * @remarks
   * The business error code returned when the job fails. This field is typically not returned for non-failed states.
   * 
   * @example
   * InvalidInput
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error message returned when the job fails. This field is typically not returned for non-failed states.
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
   * {"VideoMediaId":"media-video-001"}
   */
  input?: string;
  /**
   * @remarks
   * The video translation job ID.
   * 
   * @example
   * vtj_0123456789abcdef0123456789abcdef
   */
  jobId?: string;
  /**
   * @remarks
   * The normalized job parameters JSON string, including default values supplemented by the service.
   * 
   * @example
   * {"SourceLanguage":"zh","TargetLanguage":"en","SubtitleFrom":"default","NeedDetext":false,"NeedVisualTranslate":false}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The normalized job type.
   * 
   * @example
   * VoiceTranslate
   */
  jobType?: string;
  /**
   * @remarks
   * The job output JSON string. When the job succeeds, AiResult.ResultMap organizes the final video, subtitle, and audio outputs by target language.
   * 
   * @example
   * {"AiResult":{"ResultMap":{"en":{"EditingProjectId":"editing-project-001","MediaURL":"https://example.com/video-translation/en/result.mp4","MediaId":"media-output-001"}}}}
   */
  output?: string;
  /**
   * @remarks
   * The job status. Valid values: Created, Queuing, Executing, Finished, or Failed.
   * 
   * @example
   * Finished
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
   * The video translation job.
   */
  job?: GetVideoTranslationJobResponseBodyJob;
  /**
   * @remarks
   * The request ID, used for Tracing Analysis and troubleshooting.
   * 
   * @example
   * req-vt-get-20260820-001
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

