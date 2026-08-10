// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoRenderJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The online editing project ID, which can be used for secondary editing of the output video.
   * 
   * @example
   * 8239345231244512***
   */
  editingProjectId?: string;
  /**
   * @remarks
   * The error code. This parameter is returned when the task is in the Failed state.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is returned when the task is in the Failed state.
   * 
   * @example
   * The specified product does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 68ca759e798b40b4903b255*******
   */
  jobId?: string;
  /**
   * @remarks
   * The narration language of the output video.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The download URL of the rendered and composed video.
   * 
   * @example
   * https://xxxx.mp4
   */
  result?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - Created: The task is created.
   * - Executing: The task is being executed.
   * - Finished: The task is completed.
   * - Failed: The task has failed.
   * - Deleted: The task is deleted.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The custom user data in JSON format.
   * 
   * @example
   * {"NotifyAddress": "http://xxx.callback.url"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      editingProjectId: 'EditingProjectId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      language: 'Language',
      result: 'Result',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingProjectId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      language: 'string',
      result: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoRenderJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The video rendering and composition task object.
   */
  job?: GetVideoRenderJobResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
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
      job: GetVideoRenderJobResponseBodyJob,
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

