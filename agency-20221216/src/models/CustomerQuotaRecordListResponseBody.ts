// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerQuotaRecordListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The way to submit the quota adjustment operation. API/ACPN
   * 
   * @example
   * ACPN
   */
  operationSubmitType?: string;
  /**
   * @remarks
   * The time of submit the quota adjustment operation.
   * 
   * @example
   * 2023-12-15 10:34:36 UTC+8
   */
  operationTime?: string;
  /**
   * @remarks
   * Operation Type Enum</br>
   * all All types</br>
   * quota_create Create quota</br>
   * quota_amount_adjust Adjust the amount of quota</br>
   * 
   * @example
   * quota_amount_adjust
   */
  operationTypeCode?: string;
  /**
   * @remarks
   * The description of submitted quota adjustment operation.
   * 
   * @example
   * Quota Adjustment
   */
  operationTypeDesc?: string;
  /**
   * @remarks
   * The UID of operator(Partner\\"s UID).
   * 
   * @example
   * 5113766248601929
   */
  operationUid?: string;
  /**
   * @remarks
   * Updated quota amount
   * 
   * @example
   * 121.00
   */
  updateAfterAmount?: string;
  /**
   * @remarks
   * The difference amount between updated quota and original quota.
   * 
   * @example
   * -100.00
   */
  updateAmount?: string;
  /**
   * @remarks
   * Original quota amount
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
   * Status code of returning result, 200 means success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Listed data of returning result
   */
  data?: CustomerQuotaRecordListResponseBodyData[];
  /**
   * @remarks
   * Description of returning data
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Record number on each page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of request
   * 
   * @example
   * 2103a0ae16849855284594613d874e
   */
  requestId?: string;
  /**
   * @remarks
   * Total volume
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

