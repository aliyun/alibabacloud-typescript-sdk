// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaComprehensionJobResponseBodyMediaComprehensionJob extends $dara.Model {
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
   * ******afaa6f37457******
   */
  jobId?: string;
  /**
   * @example
   * ******307e9971f1******
   */
  mediaId?: string;
  /**
   * @example
   * "{\\"source_video_url\\":\\"http://xxx.mp4\\",\\"narrative_overview\\":{******}}"
   */
  result?: string;
  /**
   * @example
   * Executing
   */
  state?: string;
  /**
   * @example
   * {"NotifyAddress": "http://xxx.callback.url"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      mediaId: 'MediaId',
      result: 'Result',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      mediaId: 'string',
      result: 'string',
      state: 'string',
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

export class GetMediaComprehensionJobResponseBody extends $dara.Model {
  mediaComprehensionJob?: GetMediaComprehensionJobResponseBodyMediaComprehensionJob;
  /**
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaComprehensionJob: 'MediaComprehensionJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaComprehensionJob: GetMediaComprehensionJobResponseBodyMediaComprehensionJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaComprehensionJob && typeof (this.mediaComprehensionJob as any).validate === 'function') {
      (this.mediaComprehensionJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

