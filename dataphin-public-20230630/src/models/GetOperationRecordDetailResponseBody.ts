// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationRecordDetailResponseBodyOperationRecordDetailResponseResults extends $dara.Model {
  /**
   * @remarks
   * The result index.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The result content.
   * 
   * @example
   * {"count":100,"data":[{"id":1}]}
   */
  result?: string;
  /**
   * @remarks
   * The result SQL statement.
   * 
   * @example
   * SELECT * FROM test_table
   */
  sql?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task_123456
   */
  taskId?: string;
  /**
   * @remarks
   * The result title.
   * 
   * @example
   * 查询结果
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      result: 'Result',
      sql: 'Sql',
      taskId: 'TaskId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      result: 'string',
      sql: 'string',
      taskId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationRecordDetailResponseBodyOperationRecordDetailResponse extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * Task started...
   * Executing SQL...
   * Task finished successfully.
   */
  logContent?: string;
  /**
   * @remarks
   * The operation record ID.
   * 
   * @example
   * 987654321
   */
  operationId?: string;
  /**
   * @remarks
   * The list of execution results.
   */
  results?: GetOperationRecordDetailResponseBodyOperationRecordDetailResponseResults[];
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      logContent: 'LogContent',
      operationId: 'OperationId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      logContent: 'string',
      operationId: 'string',
      results: { 'type': 'array', 'itemType': GetOperationRecordDetailResponseBodyOperationRecordDetailResponseResults },
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

export class GetOperationRecordDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The execution record detail response.
   */
  operationRecordDetailResponse?: GetOperationRecordDetailResponseBodyOperationRecordDetailResponse;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      operationRecordDetailResponse: 'OperationRecordDetailResponse',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      operationRecordDetailResponse: GetOperationRecordDetailResponseBodyOperationRecordDetailResponse,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.operationRecordDetailResponse && typeof (this.operationRecordDetailResponse as any).validate === 'function') {
      (this.operationRecordDetailResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

