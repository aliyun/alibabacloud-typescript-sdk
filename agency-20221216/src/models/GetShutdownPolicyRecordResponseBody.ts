// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetShutdownPolicyRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current policy. Valid values:
   * - immediatelyStop: immediate shutdown upon overdue payment.
   * - delayStop: deferred shutdown quota applied.
   * - noStop: no shutdown upon overdue payment.
   * [_single.resp.200.props.Data.items.CurrentPolicy.enum.immediatelyStop ]Immediate shutdown upon overdue payment.
   * [_single.resp.200.props.Data.items.CurrentPolicy.enum.noStop ]No shutdown upon overdue payment.
   * [_single.resp.200.props.Data.items.CurrentPolicy.enum.delayStop ]Deferred shutdown quota applied.
   * 
   * @example
   * noStop
   */
  currentPolicy?: string;
  /**
   * @remarks
   * The method by which the operation was initiated. Valid values:
   * - API: API.
   * - ACPN: ACPN.
   * - ALIYUN_BIZ: Alibaba Cloud internal.
   * 
   * @example
   * ACPN
   */
  operationPath?: string;
  /**
   * @remarks
   * The operation time (UTC+8).
   * 
   * @example
   * 2023-12-15 10:34:36
   */
  operationTime?: string;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * 11111111111
   */
  operator?: string;
  /**
   * @remarks
   * The policy before the change. Valid values:
   * - immediatelyStop: immediate shutdown upon overdue payment.
   * - delayStop: deferred shutdown quota applied.
   * - noStop: no shutdown upon overdue payment.
   * [_single.resp.200.props.Data.items.PreviousPolicy.enum.immediatelyStop ]Immediate shutdown upon overdue payment.
   * [_single.resp.200.props.Data.items.PreviousPolicy.enum.noStop ]No shutdown upon overdue payment.
   * [_single.resp.200.props.Data.items.PreviousPolicy.enum.delayStop ]Deferred shutdown quota applied.
   * 
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
   * @remarks
   * The result code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the customer was created. If the value is true, the Message contains the CID.
   */
  data?: GetShutdownPolicyRecordResponseBodyData[];
  /**
   * @remarks
   * The page number.
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
   * 210e876f16704666020714468dab35
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
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

