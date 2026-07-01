// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationRecordRunCodeResponseBodyOperationLogCodeResponse extends $dara.Model {
  /**
   * @remarks
   * The code content.
   * 
   * @example
   * SELECT * FROM test_table WHERE id = 1;
   */
  code?: string;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * 123
   */
  operatorId?: number;
  /**
   * @remarks
   * The operator name.
   * 
   * @example
   * SQL查询节点
   */
  operatorName?: string;
  /**
   * @remarks
   * The number of SQL statements.
   * 
   * @example
   * 1
   */
  sqlNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      operatorId: 'OperatorId',
      operatorName: 'OperatorName',
      sqlNum: 'SqlNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      operatorId: 'number',
      operatorName: 'string',
      sqlNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationRecordRunCodeResponseBody extends $dara.Model {
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
   * The operation log code response.
   */
  operationLogCodeResponse?: GetOperationRecordRunCodeResponseBodyOperationLogCodeResponse;
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
      operationLogCodeResponse: 'OperationLogCodeResponse',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      operationLogCodeResponse: GetOperationRecordRunCodeResponseBodyOperationLogCodeResponse,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.operationLogCodeResponse && typeof (this.operationLogCodeResponse as any).validate === 'function') {
      (this.operationLogCodeResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

