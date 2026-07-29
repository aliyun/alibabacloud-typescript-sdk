// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaComprehensionJobResponseBodyJob extends $dara.Model {
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
  mediaIds?: string[];
  /**
   * @example
   * "{\\"source_video_url\\":\\"http://xxx.mp4\\",\\"narrative_overview\\":{******}}"
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
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      mediaIds: 'MediaIds',
      result: 'Result',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      mediaIds: { 'type': 'array', 'itemType': 'string' },
      result: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mediaIds)) {
      $dara.Model.validateArray(this.mediaIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  job?: GetMediaComprehensionJobResponseBodyJob;
  mediaComprehensionJob?: GetMediaComprehensionJobResponseBodyMediaComprehensionJob;
  /**
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      mediaComprehensionJob: 'MediaComprehensionJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetMediaComprehensionJobResponseBodyJob,
      mediaComprehensionJob: GetMediaComprehensionJobResponseBodyMediaComprehensionJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    if(this.mediaComprehensionJob && typeof (this.mediaComprehensionJob as any).validate === 'function') {
      (this.mediaComprehensionJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

