// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoTranslationJobResponseBodyJob extends $dara.Model {
  /**
   * @example
   * 10.0
   */
  duration?: number;
  /**
   * @example
   * ba50304145fd411c827239c398820267
   */
  editingProjectId?: string;
  /**
   * @example
   * InvalidInput
   */
  errorCode?: string;
  /**
   * @example
   * Input is invalid.
   */
  errorMessage?: string;
  /**
   * @example
   * {"Video":"https://example.com/input.mp4"}
   */
  input?: string;
  /**
   * @example
   * vtj_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  jobId?: string;
  /**
   * @example
   * {"NeedDetext":true,"SubtitleFrom":"default","SourceLanguage":"zh","TargetLanguage":"en","NeedVisualTranslate":true}
   */
  jobParameters?: string;
  /**
   * @example
   * VoiceTranslate
   */
  jobType?: string;
  /**
   * @example
   * {"AiResult":{"ResultMap":{"ja":{"EditingProjectId":"editing-project-xxx","MediaURL":"https://example.com/bucket/prefix/ja/result.mp4"}}}}
   */
  output?: string;
  /**
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
  job?: GetVideoTranslationJobResponseBodyJob;
  /**
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

