// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApsJobsResponseBodyAPSJobs } from "./DescribeApsJobsResponseBodyApsjobs";


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

