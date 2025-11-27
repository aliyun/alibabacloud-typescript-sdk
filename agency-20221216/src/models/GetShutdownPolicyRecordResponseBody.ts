// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetShutdownPolicyRecordResponseBodyData extends $dara.Model {
  /**
   * @example
   * noStop
   */
  currentPolicy?: string;
  /**
   * @example
   * ACPN
   */
  operationPath?: string;
  /**
   * @example
   * 2023-12-15 10:34:36
   */
  operationTime?: string;
  /**
   * @example
   * 11111111111
   */
  operator?: string;
  /**
   * @example
   * immediatelyStop
   */
  previousPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      currentPolicy: 'CurrentPolicy',
      operationPath: 'OperationPath',
      operationTime: 'OperationTime',
      operator: 'Operator',
      previousPolicy: 'PreviousPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPolicy: 'string',
      operationPath: 'string',
      operationTime: 'string',
      operator: 'string',
      previousPolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShutdownPolicyRecordResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetShutdownPolicyRecordResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 210e876f16704666020714468dab35
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetShutdownPolicyRecordResponseBodyData },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

