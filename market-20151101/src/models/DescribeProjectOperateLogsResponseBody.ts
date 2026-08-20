// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectOperateLogsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The description of the operation.
   * 
   * @example
   * 进入分配服务商操作人
   */
  description?: string;
  /**
   * @remarks
   * The operation time (UNIX timestamp).
   * 
   * @example
   * 1587624497000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The Alibaba Cloud UID of the operator.
   * 
   * @example
   * 0
   */
  operator?: number;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * 系统
   */
  operatorName?: string;
  /**
   * @remarks
   * The role of the operator. Valid values:
   * - System: system.
   * - Custom: customer.
   * - Provider: service provider.
   * 
   * @example
   * System
   */
  operatorRole?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      operator: 'Operator',
      operatorName: 'OperatorName',
      operatorRole: 'OperatorRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      operator: 'number',
      operatorName: 'string',
      operatorRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectOperateLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * e6037e86-657f-4194-bb6a-7b26973aec8d
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DescribeProjectOperateLogsResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeProjectOperateLogsResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

