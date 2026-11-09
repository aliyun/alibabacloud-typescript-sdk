// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaComprehensionJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned when the job status is Failed.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is of the String type and is returned when the job status is Failed.
   * 
   * @example
   * The specified product does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The list of media asset IDs. If the input is a URL, the registered media asset IDs are returned.
   */
  mediaIds?: string[];
  /**
   * @remarks
   * The URL of the analysis result file. The file content is in JSON format.
   * 
   * @example
   * http://xxxx.json
   */
  result?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - **Created**: The job is created.
   * - **Executing**: The job is being executed.
   * - **Finished**: The job is completed.
   * - **Failed**: The job failed.
   * - **Deleted**: The job is deleted.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The user-defined parameter. The value is a JSON string.
   * 
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
   * @remarks
   * The error code. This parameter is returned when the status is `Failed`.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is of the String type and is returned when the job status is Failed.
   * 
   * @example
   * The specified product does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ******afaa6f37457******
   */
  jobId?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * ******307e9971f1******
   */
  mediaId?: string;
  /**
   * @remarks
   * The analysis result. The value is a JSON string.
   * 
   * @example
   * "{\\"source_video_url\\":\\"http://xxx.mp4\\",\\"narrative_overview\\":{******}}"
   */
  result?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - **Created**: The job is created.
   * - **Executing**: The job is being executed.
   * - **Finished**: The job is completed.
   * - **Failed**: The job failed.
   * - **Deleted**: The job is deleted.
   * 
   * @example
   * Executing
   */
  state?: string;
  /**
   * @remarks
   * The user-defined parameter. The value is a JSON string.
   * 
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
  /**
   * @remarks
   * The media content understanding result object.
   */
  job?: GetMediaComprehensionJobResponseBodyJob;
  /**
   * @remarks
   * **[Deprecated]** The media content understanding object.
   */
  mediaComprehensionJob?: GetMediaComprehensionJobResponseBodyMediaComprehensionJob;
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

