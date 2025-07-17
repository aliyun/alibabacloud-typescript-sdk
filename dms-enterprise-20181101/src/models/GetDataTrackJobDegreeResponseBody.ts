// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataTrackJobDegreeResponseBodyJobDegree extends $dara.Model {
  /**
   * @remarks
   * The progress of binary log download. Valid values: 0 to 1. A value of 1 indicates that binary log download is complete.
   * 
   * @example
   * 1
   */
  downloadCompletionDegree?: number;
  /**
   * @remarks
   * The progress of binary log parsing. Valid values: 0 to 1. A value of 1 indicates that binary log parsing is complete.
   * 
   * @example
   * 1
   */
  filterCompletionDegree?: number;
  /**
   * @remarks
   * The status of the data tracking task. Valid values:
   * 
   * *   **INIT**: The task is being initialized.
   * *   **LISTING**: The binary logs are being obtained.
   * *   **LIST_SUCCESS**: The binary logs are successfully obtained.
   * *   **DOWNLOADING**: The binary logs are being downloaded.
   * *   **DOWNLOAD_FAIL**: The binary logs failed to be downloaded.
   * *   **DOWNLOAD_SUCCESS**: The binary logs are successfully downloaded.
   * *   **FILTERING**: The binary logs are being parsed.
   * *   **FILTER_FAIL**: The binary logs failed to be parsed.
   * *   **FILTER_SUCCESS**: The binary logs are successfully parsed.
   * 
   * @example
   * FILTER_SUCCESS
   */
  jobStatus?: string;
  /**
   * @remarks
   * The progress of binary log obtaining. Valid values: 0 to 1. A value of 1 indicates that binary log obtaining is complete.
   * 
   * @example
   * 1
   */
  listCompletionDegree?: number;
  /**
   * @remarks
   * The description of the task status.
   * 
   * @example
   * searching success
   */
  statusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      downloadCompletionDegree: 'DownloadCompletionDegree',
      filterCompletionDegree: 'FilterCompletionDegree',
      jobStatus: 'JobStatus',
      listCompletionDegree: 'ListCompletionDegree',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadCompletionDegree: 'number',
      filterCompletionDegree: 'number',
      jobStatus: 'string',
      listCompletionDegree: 'number',
      statusDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataTrackJobDegreeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress details of the data tracking task.
   */
  jobDegree?: GetDataTrackJobDegreeResponseBodyJobDegree;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C51420E3-144A-4A94-B473-8662FCF4AD10
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobDegree: 'JobDegree',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobDegree: GetDataTrackJobDegreeResponseBodyJobDegree,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.jobDegree && typeof (this.jobDegree as any).validate === 'function') {
      (this.jobDegree as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

