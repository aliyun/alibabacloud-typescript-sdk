// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalNodeOperationLogResponseBodyOperationLogList extends $dara.Model {
  /**
   * @example
   * xx
   */
  context?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  operationTime?: string;
  /**
   * @example
   * PAUSE_TASK
   */
  operationType?: string;
  /**
   * @example
   * 132222
   */
  operator?: string;
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      operationTime: 'OperationTime',
      operationType: 'OperationType',
      operator: 'Operator',
      operatorName: 'OperatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      operationTime: 'string',
      operationType: 'string',
      operator: 'string',
      operatorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeOperationLogResponseBody extends $dara.Model {
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
   * successful
   */
  message?: string;
  operationLogList?: GetPhysicalNodeOperationLogResponseBodyOperationLogList[];
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      operationLogList: 'OperationLogList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      operationLogList: { 'type': 'array', 'itemType': GetPhysicalNodeOperationLogResponseBodyOperationLogList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.operationLogList)) {
      $dara.Model.validateArray(this.operationLogList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

