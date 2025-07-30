// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterOperateLogsResponseBodyDataPoints extends $dara.Model {
  /**
   * @remarks
   * Other description of the operation.
   * 
   * @example
   * null
   */
  content?: string;
  /**
   * @remarks
   * The primary key of the log table.
   * 
   * @example
   * 237827
   */
  id?: string;
  /**
   * @remarks
   * The time when the operation is recorded. The value is in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1642077211574
   */
  logDatetime?: number;
  /**
   * @remarks
   * The value of the parameter after the operation if the operation is an UPDATE operation.
   * 
   * @example
   * 105
   */
  newValue?: string;
  /**
   * @remarks
   * The value of the parameter before the operation if the operation is an UPDATE operation.
   * 
   * @example
   * 100
   */
  oldValue?: string;
  /**
   * @remarks
   * The type of the operation.
   * 
   * @example
   * modify-oversold-ratio
   */
  operationName?: string;
  /**
   * @remarks
   * The user who performed the operation.
   * 
   * @example
   * null
   */
  operationUser?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of **1** indicates that the request was successful.
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
   * The error code returned by the backend service. The number is incremented.
   * 
   * @example
   * 500
   */
  code?: string;
  /**
   * @remarks
   * The information about the operation logs.
   */
  dataPoints?: DescribeClusterOperateLogsResponseBodyDataPoints[];
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace %s in the ErrMessage parameter.
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
   * The error message returned.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned for an exception.
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
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
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

