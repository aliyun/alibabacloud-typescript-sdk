// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataCheckTableDetailsResponseBodyTableDetails } from "./DescribeDataCheckTableDetailsResponseBodyTableDetails";


export class DescribeDataCheckTableDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of tables that contain inconsistent data.
   * 
   * @example
   * 1
   */
  diffTableCount?: number;
  /**
   * @remarks
   * The dynamic error code. This parameter will be discontinued in the future.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the \\*\\*%s\\*\\* variable in the **ErrMessage** parameter.
   * 
   * > For example, if the returned value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the return value of the **DynamicMessage** parameter is **Type**, the specified **Type** parameter is invalid.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The total number of data rows that were failed.
   * 
   * @example
   * 1
   */
  failedTableCount?: number;
  /**
   * @remarks
   * The total number of data rows that were verified.
   * 
   * @example
   * 7
   */
  finishedCount?: number;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The details of data verification results.
   */
  tableDetails?: DescribeDataCheckTableDetailsResponseBodyTableDetails[];
  /**
   * @remarks
   * The total number of tables on which data verification was performed.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diffTableCount: 'DiffTableCount',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      failedTableCount: 'FailedTableCount',
      finishedCount: 'FinishedCount',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      success: 'Success',
      tableDetails: 'TableDetails',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diffTableCount: 'number',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      failedTableCount: 'number',
      finishedCount: 'number',
      httpStatusCode: 'number',
      pageNumber: 'number',
      requestId: 'string',
      success: 'boolean',
      tableDetails: { 'type': 'array', 'itemType': DescribeDataCheckTableDetailsResponseBodyTableDetails },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tableDetails)) {
      $dara.Model.validateArray(this.tableDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

