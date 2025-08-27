// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderApplyResponseBodyModuleInsOrderPolicyList extends $dara.Model {
  /**
   * @example
   * 1022196500378006
   */
  outSubInsOrderId?: string;
  /**
   * @example
   * po10002300201
   */
  policyNo?: string;
  /**
   * @example
   * INIT
   */
  status?: string;
  /**
   * @example
   * 1022196500378003
   */
  subInsOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      outSubInsOrderId: 'out_sub_ins_order_id',
      policyNo: 'policy_no',
      status: 'status',
      subInsOrderId: 'sub_ins_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outSubInsOrderId: 'string',
      policyNo: 'string',
      status: 'string',
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

export class InsureOrderApplyResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1021000196500370003
   */
  insOrderId?: string;
  insOrderPolicyList?: InsureOrderApplyResponseBodyModuleInsOrderPolicyList[];
  static names(): { [key: string]: string } {
    return {
      insOrderId: 'ins_order_id',
      insOrderPolicyList: 'ins_order_policy_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insOrderId: 'string',
      insOrderPolicyList: { 'type': 'array', 'itemType': InsureOrderApplyResponseBodyModuleInsOrderPolicyList },
    };
  }

  validate() {
    if(Array.isArray(this.insOrderPolicyList)) {
      $dara.Model.validateArray(this.insOrderPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsureOrderApplyResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: InsureOrderApplyResponseBodyModule;
  /**
   * @example
   * B72B39C8-32DE-558D-AD1C-D53F11F6ADFE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 210e800316781571635951548d1e9d
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
      module: InsureOrderApplyResponseBodyModule,
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

