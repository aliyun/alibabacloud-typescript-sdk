// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderRefundResponseBodyModuleInsRefundList extends $dara.Model {
  /**
   * @example
   * po102000399221
   */
  policyRefundNo?: string;
  /**
   * @example
   * REFUND_SUCCESS
   */
  refundStatus?: string;
  /**
   * @example
   * 1230012499921
   */
  subInsOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      policyRefundNo: 'policy_refund_no',
      refundStatus: 'refund_status',
      subInsOrderId: 'sub_ins_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyRefundNo: 'string',
      refundStatus: 'string',
      subInsOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsureOrderRefundResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 118526587
   */
  applyId?: string;
  /**
   * @example
   * 1423041410342678003
   */
  insOrderId?: string;
  insRefundList?: InsureOrderRefundResponseBodyModuleInsRefundList[];
  /**
   * @example
   * 1423041410342678022
   */
  outApplyId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      insOrderId: 'ins_order_id',
      insRefundList: 'ins_refund_list',
      outApplyId: 'out_apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      insOrderId: 'string',
      insRefundList: { 'type': 'array', 'itemType': InsureOrderRefundResponseBodyModuleInsRefundList },
      outApplyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.insRefundList)) {
      $dara.Model.validateArray(this.insRefundList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsureOrderRefundResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: InsureOrderRefundResponseBodyModule;
  /**
   * @example
   * 2103ad3116824902540648188de7ac
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 210e846c16726306481681232d441f
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: InsureOrderRefundResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

