// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReversedDeductionHistoryResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1.00
   */
  offsetAmount?: string;
  /**
   * @example
   * ACPN
   */
  operationSubmitType?: string;
  /**
   * @example
   * 2024-11-01 10:22:11 UTC+8
   */
  operationTime?: string;
  /**
   * @example
   * 132
   */
  operationUid?: string;
  static names(): { [key: string]: string } {
    return {
      offsetAmount: 'OffsetAmount',
      operationSubmitType: 'OperationSubmitType',
      operationTime: 'OperationTime',
      operationUid: 'OperationUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offsetAmount: 'string',
      operationSubmitType: 'string',
      operationTime: 'string',
      operationUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReversedDeductionHistoryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QueryReversedDeductionHistoryResponseBodyData[];
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * asda1231as
   */
  requestId?: string;
  /**
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryReversedDeductionHistoryResponseBodyData },
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
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

