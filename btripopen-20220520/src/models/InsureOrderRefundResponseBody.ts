// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderRefundResponseBodyModuleInsRefundList extends $dara.Model {
  policyRefundNo?: string;
  refundStatus?: string;
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
  applyId?: string;
  insOrderId?: string;
  insRefundList?: InsureOrderRefundResponseBodyModuleInsRefundList[];
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
  code?: string;
  message?: string;
  module?: InsureOrderRefundResponseBodyModule;
  requestId?: string;
  success?: boolean;
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

