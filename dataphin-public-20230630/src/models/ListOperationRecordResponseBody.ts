// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationRecordResponseBodyOperationLogListResponseResultData extends $dara.Model {
  /**
   * @remarks
   * The start time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-01-15 10:30:00
   */
  beginTime?: string;
  /**
   * @remarks
   * The code type.
   * 
   * @example
   * 0
   */
  codeType?: number;
  /**
   * @remarks
   * The execution duration in milliseconds.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Test task
   */
  name?: string;
  /**
   * @remarks
   * The object type.
   * 
   * @example
   * onedata-ide
   */
  objectType?: string;
  /**
   * @remarks
   * The operation record ID.
   * 
   * @example
   * 987654321
   */
  operationId?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  /**
   * @remarks
   * The list of associated tables.
   */
  relationTables?: string[];
  /**
   * @remarks
   * The executor ID.
   * 
   * @example
   * 30231123
   */
  runner?: string;
  /**
   * @remarks
   * The runner name.
   * 
   * @example
   * John Doe
   */
  runnerName?: string;
  /**
   * @remarks
   * The node status.
   * 
   * @example
   * 5
   */
  status?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10001
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      codeType: 'CodeType',
      duration: 'Duration',
      id: 'Id',
      name: 'Name',
      objectType: 'ObjectType',
      operationId: 'OperationId',
      projectId: 'ProjectId',
      relationTables: 'RelationTables',
      runner: 'Runner',
      runnerName: 'RunnerName',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      codeType: 'number',
      duration: 'number',
      id: 'number',
      name: 'string',
      objectType: 'string',
      operationId: 'number',
      projectId: 'number',
      relationTables: { 'type': 'array', 'itemType': 'string' },
      runner: 'string',
      runnerName: 'string',
      status: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.relationTables)) {
      $dara.Model.validateArray(this.relationTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationRecordResponseBodyOperationLogListResponse extends $dara.Model {
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The operation log list.
   */
  resultData?: ListOperationRecordResponseBodyOperationLogListResponseResultData[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      resultData: 'ResultData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      resultData: { 'type': 'array', 'itemType': ListOperationRecordResponseBodyOperationLogListResponseResultData },
    };
  }

  validate() {
    if(Array.isArray(this.resultData)) {
      $dara.Model.validateArray(this.resultData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationRecordResponseBody extends $dara.Model {
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
   * The operation log list response.
   */
  operationLogListResponse?: ListOperationRecordResponseBodyOperationLogListResponse;
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
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      operationLogListResponse: 'OperationLogListResponse',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      operationLogListResponse: ListOperationRecordResponseBodyOperationLogListResponse,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.operationLogListResponse && typeof (this.operationLogListResponse as any).validate === 'function') {
      (this.operationLogListResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

