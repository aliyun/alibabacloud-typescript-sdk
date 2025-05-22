// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCheckJobsResponseBodyCheckJobs } from "./DescribeCheckJobsResponseBodyCheckJobs";


export class DescribeCheckJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Item information check.
   */
  checkJobs?: DescribeCheckJobsResponseBodyCheckJobs[];
  /**
   * @remarks
   * Dynamic error code, this parameter will be deprecated soon.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message, used to replace the **%s** in the **errmessage** return parameter. If **errmessage** returns **thevalueofinputparameter%sisnotvalid**, and **dynamicmessage** returns *[1,2,3]*, it indicates that the request parameter **dtsjobid** is invalid.
   * 
   * @example
   * present environment is not support,so skip.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * Error message returned when the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of records that can be displayed on the current page.
   * 
   * @example
   * 20
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * FC1D920B-AB89-52A9-AA5F-AA724C4205E8
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkJobs: 'CheckJobs',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkJobs: { 'type': 'array', 'itemType': DescribeCheckJobsResponseBodyCheckJobs },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'boolean',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.checkJobs)) {
      $dara.Model.validateArray(this.checkJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

