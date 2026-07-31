// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadSemanticResultsResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The temporary pre-signed download URL of the result file. Download the file by using an HTTP GET request as soon as possible. Do not log, share, or treat the full URL as a long-term address.
   * 
   * @example
   * https://example.com/temporary-download-url
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The node name to which the artifact belongs. This value is the same as the JobName value in the request.
   * 
   * @example
   * semantic-job-demo
   */
  jobName?: string;
  /**
   * @remarks
   * The run ID to which the artifact belongs. You can compare this value with the Data.JobRunId value from the RunSemanticJob response or the JobRunId value from ListSemanticJobRuns.
   * 
   * @example
   * 01H00000000000000000000000
   */
  jobRunId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      jobName: 'JobName',
      jobRunId: 'JobRunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      jobName: 'string',
      jobRunId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadSemanticResultsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of result files. Each item contains the associated node name, the associated run ID, and a short-lived download URL.
   */
  results?: DownloadSemanticResultsResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': DownloadSemanticResultsResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadSemanticResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of result files for the specified node run. Multiple items are returned if a single run generates multiple files.
   */
  data?: DownloadSemanticResultsResponseBodyData;
  /**
   * @remarks
   * The request ID. Used for locating logs and troubleshooting issues.
   * 
   * @example
   * 676271D6-53B4-57BE-89FA-72F7AE1418DF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DownloadSemanticResultsResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

