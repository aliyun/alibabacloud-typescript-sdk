// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationRecordByIdResponseBodyOperationLogDTO extends $dara.Model {
  /**
   * @example
   * 2025-01-15 10:30:00
   */
  beginTime?: string;
  /**
   * @example
   * 0
   */
  codeType?: number;
  /**
   * @example
   * 120
   */
  duration?: number;
  /**
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * 测试任务
   */
  name?: string;
  /**
   * @example
   * onedata-ide
   */
  objectType?: string;
  /**
   * @example
   * 987654321
   */
  operationId?: number;
  /**
   * @example
   * 131211211
   */
  projectId?: number;
  relationTables?: string[];
  /**
   * @example
   * 30231123
   */
  runner?: string;
  /**
   * @example
   * 张三
   */
  runnerName?: string;
  /**
   * @example
   * 5
   */
  status?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  operationLogDTO?: GetOperationRecordByIdResponseBodyOperationLogDTO;
  /**
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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

