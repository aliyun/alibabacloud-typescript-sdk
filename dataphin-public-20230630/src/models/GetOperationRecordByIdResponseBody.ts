// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationRecordByIdResponseBodyOperationLogDTO extends $dara.Model {
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2025-01-15 10:30:00
   */
  beginTime?: string;
  /**
   * @remarks
   * The code type. Valid values: SQL0, shell1, Python2, MR3, and Spark4.
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
   * The associated tables.
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
   * The executor name.
   * 
   * @example
   * Zhang San
   */
  runnerName?: string;
  /**
   * @remarks
   * The task status. Valid values: 4 (Running), 5 (Successful), and 6 (Failed).
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

export class GetOperationRecordByIdResponseBody extends $dara.Model {
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
   * The execution record details.
   */
  operationLogDTO?: GetOperationRecordByIdResponseBodyOperationLogDTO;
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
      operationLogDTO: 'OperationLogDTO',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      operationLogDTO: GetOperationRecordByIdResponseBodyOperationLogDTO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.operationLogDTO && typeof (this.operationLogDTO as any).validate === 'function') {
      (this.operationLogDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

