// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Job } from "./Job";


export class ListJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code. The default value is 0, indicating normal execution.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details.
   * 
   * @example
   * null
   */
  details?: string;
  /**
   * @remarks
   * Error code.
   * - When Success is false, returns a business error code.
   * - When Success is true, returns an empty value.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * List of jobs.
   */
  jobs?: Job[];
  /**
   * @remarks
   * Response message of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Page number of the returned list of queried annotation results.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of annotation results displayed per page in the response.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 90ABA848-AD74-1F6E-84BC-4182A7F1****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded. Valid values:
   * - true: Succeeded.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of annotation results.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      jobs: 'Jobs',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      jobs: { 'type': 'array', 'itemType': Job },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

