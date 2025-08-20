// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsJobsResponseBodyAPSJobs extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * aps-******
   */
  apsJobId?: string;
  /**
   * @remarks
   * The name of the APS job.
   * 
   * @example
   * data-sync-******
   */
  apsJobName?: string;
  /**
   * @remarks
   * The time when the APS job was created.
   * 
   * @example
   * 2022-06-28 15:00:04
   */
  createTime?: string;
  /**
   * @remarks
   * The synchronization latency.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The destination cluster ID.
   * 
   * @example
   * amv-*******
   */
  destinationInstanceID?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * OK
   */
  errMessage?: string;
  /**
   * @remarks
   * The progress.
   * 
   * @example
   * 30: The progress is 30%.
   */
  projress?: string;
  /**
   * @remarks
   * The ID of the source instance or cluster.
   * 
   * @example
   * pc-******
   */
  sourceInstanceID?: string;
  /**
   * @remarks
   * The status of the APS job.
   * 
   * @example
   * -
   */
  status?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * -
   */
  subStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apsJobId: 'ApsJobId',
      apsJobName: 'ApsJobName',
      createTime: 'CreateTime',
      delay: 'Delay',
      destinationInstanceID: 'DestinationInstanceID',
      errMessage: 'ErrMessage',
      projress: 'Projress',
      sourceInstanceID: 'SourceInstanceID',
      status: 'Status',
      subStatus: 'SubStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsJobId: 'string',
      apsJobName: 'string',
      createTime: 'string',
      delay: 'number',
      destinationInstanceID: 'string',
      errMessage: 'string',
      projress: 'string',
      sourceInstanceID: 'string',
      status: 'string',
      subStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried APS jobs.
   * 
   * @example
   * -
   */
  APSJobs?: DescribeApsJobsResponseBodyAPSJobs[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * ok
   */
  code?: string;
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * ok
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request was successful, a success message is returned.****
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-7F9D-5DBD-993E-******
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
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      APSJobs: 'APSJobs',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APSJobs: { 'type': 'array', 'itemType': DescribeApsJobsResponseBodyAPSJobs },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.APSJobs)) {
      $dara.Model.validateArray(this.APSJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

