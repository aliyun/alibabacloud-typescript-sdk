// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsJobsResponseBodyAPSJobs extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * aps-******
   */
  apsJobId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * data-sync-******
   */
  apsJobName?: string;
  /**
   * @remarks
   * The creation time in the yyyy-MM-dd HH:mm:ss format.
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
   * The destination instance ID.
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
   * 30: 30% progress
   */
  projress?: string;
  /**
   * @remarks
   * The source instance ID.
   * 
   * @example
   * pc-******
   */
  sourceInstanceID?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * -
   */
  status?: string;
  /**
   * @remarks
   * The status of the subtask.
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
   * The list of APS tasks.
   * 
   * @example
   * -
   */
  APSJobs?: DescribeApsJobsResponseBodyAPSJobs[];
  /**
   * @remarks
   * The backend error code.
   * 
   * @example
   * ok
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned for the request. A value of 200 indicates that the request was successful.
   * 
   * @example
   * ok
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information about the call result. Valid values:
   * - If the request is successful, **Success** is returned. 
   * - If the request fails, a specific error code is returned.
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
   * Indicates whether the call was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
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

