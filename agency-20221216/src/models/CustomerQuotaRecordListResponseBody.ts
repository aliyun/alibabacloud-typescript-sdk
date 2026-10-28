// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerQuotaRecordListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The method used to submit the operation, such as API or ACPN.
   * 
   * @example
   * ACPN
   */
  operationSubmitType?: string;
  /**
   * @remarks
   * The time when the operation was performed. Format: YYYY-MM-DD HH:mm:ss UTC+8.
   * 
   * @example
   * 2023-12-15 10:34:36 UTC+8
   */
  operationTime?: string;
  /**
   * @remarks
   * The code of the change type. Valid values: all: All, quota_create: Create, quota_amount_adjust: Quota adjustment.
   * 
   * @example
   * quota_amount_adjust
   */
  operationTypeCode?: string;
  /**
   * @remarks
   * The description of the change type.
   * 
   * @example
   * Quota Adjustment
   */
  operationTypeDesc?: string;
  /**
   * @remarks
   * The UID of the operator.
   * 
   * @example
   * 5113766248601929
   */
  operationUid?: string;
  /**
   * @remarks
   * The amount after the update.
   * 
   * @example
   * 121.00
   */
  updateAfterAmount?: string;
  /**
   * @remarks
   * The changed amount.
   * 
   * @example
   * -100.00
   */
  updateAmount?: string;
  /**
   * @remarks
   * The amount before the update.
   * 
   * @example
   * 221.00
   */
  updateBeforeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      operationSubmitType: 'OperationSubmitType',
      operationTime: 'OperationTime',
      operationTypeCode: 'OperationTypeCode',
      operationTypeDesc: 'OperationTypeDesc',
      operationUid: 'OperationUid',
      updateAfterAmount: 'UpdateAfterAmount',
      updateAmount: 'UpdateAmount',
      updateBeforeAmount: 'UpdateBeforeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationSubmitType: 'string',
      operationTime: 'string',
      operationTypeCode: 'string',
      operationTypeDesc: 'string',
      operationUid: 'string',
      updateAfterAmount: 'string',
      updateAmount: 'string',
      updateBeforeAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomerQuotaRecordListResponseBody extends $dara.Model {
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
   * The list of returned results.
   */
  data?: CustomerQuotaRecordListResponseBodyData[];
  /**
   * @remarks
   * The description of the returned result.
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2103a0ae16849855284594613d874e
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': CustomerQuotaRecordListResponseBodyData },
      msg: 'string',
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

