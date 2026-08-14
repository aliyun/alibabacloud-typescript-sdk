// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterOperateLogsResponseBodyDataPoints extends $dara.Model {
  /**
   * @remarks
   * The additional remarks.
   * 
   * @example
   * null
   */
  content?: string;
  /**
   * @remarks
   * The primary key of the log record table.
   * 
   * @example
   * 237827
   */
  id?: string;
  /**
   * @remarks
   * The timestamp. Unit: milliseconds.
   * 
   * @example
   * 1642077211574
   */
  logDatetime?: number;
  /**
   * @remarks
   * The new parameter value when the operation type is update.
   * 
   * @example
   * 105
   */
  newValue?: string;
  /**
   * @remarks
   * The old parameter value when the operation type is update.
   * 
   * @example
   * 100
   */
  oldValue?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * modify-oversold-ratio
   */
  operationName?: string;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * null
   */
  operationUser?: string;
  /**
   * @remarks
   * The call result. Indicates whether the call was successful. A value of **1** indicates success.
   * 
   * @example
   * 1
   */
  success?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      logDatetime: 'LogDatetime',
      newValue: 'NewValue',
      oldValue: 'OldValue',
      operationName: 'OperationName',
      operationUser: 'OperationUser',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
      logDatetime: 'number',
      newValue: 'string',
      oldValue: 'string',
      operationName: 'string',
      operationUser: 'string',
      success: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterOperateLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend error code, which is incrementally numeric.
   * 
   * @example
   * 500
   */
  code?: string;
  /**
   * @remarks
   * The monitoring statistics information.
   */
  dataPoints?: DescribeClusterOperateLogsResponseBodyDataPoints[];
  /**
   * @remarks
   * The dynamic error message, which is used to replace the %s placeholder in the ErrMessage response parameter.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code corresponding to the exception.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries displayed on the current page.
   * 
   * @example
   * 20
   */
  pageRecordCount?: number;
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
   * The call result.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataPoints: 'DataPoints',
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
      code: 'string',
      dataPoints: { 'type': 'array', 'itemType': DescribeClusterOperateLogsResponseBodyDataPoints },
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
    if(Array.isArray(this.dataPoints)) {
      $dara.Model.validateArray(this.dataPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

