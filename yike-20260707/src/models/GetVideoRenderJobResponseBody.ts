// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoRenderJobResponseBodyJob extends $dara.Model {
  /**
   * @example
   * 8239345231244512***
   */
  editingProjectId?: string;
  /**
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @example
   * The specified product does not exist.
   */
  errorMessage?: string;
  /**
   * @example
   * 68ca759e798b40b4903b255*******
   */
  jobId?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * https://xxxx.mp4
   */
  result?: string;
  /**
   * @example
   * Executing
   */
  status?: string;
  /**
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
  job?: GetVideoRenderJobResponseBodyJob;
  /**
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

