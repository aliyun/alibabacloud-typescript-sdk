// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReversedDeductionHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The offset amount.
   * 
   * @example
   * 1.00
   */
  offsetAmount?: string;
  /**
   * @remarks
   * The method used to initiate the operation, such as API or ACPN.
   * 
   * @example
   * ACPN
   */
  operationSubmitType?: string;
  /**
   * @remarks
   * The operation time. Format: YYYY-MM-DD HH:mm:ss UTC+8.
   * 
   * @example
   * 2024-11-01 10:22:11 UTC+8
   */
  operationTime?: string;
  /**
   * @remarks
   * The UID of the operator.
   * 
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
   * @remarks
   * The status code of the returned result. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list data.
   */
  data?: QueryReversedDeductionHistoryResponseBodyData[];
  /**
   * @remarks
   * The description of the returned result.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * asda1231as
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

