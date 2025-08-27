// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderCreateResponseBodyModuleInsureOrderDetailList extends $dara.Model {
  /**
   * @example
   * 1992939412431231
   */
  outSubInsOrderId?: string;
  /**
   * @example
   * 121234444
   */
  policyNo?: string;
  /**
   * @example
   * INIT
   */
  status?: string;
  /**
   * @example
   * 1022196500378001
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

export class InsureOrderCreateResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1
   */
  copies?: number;
  insureOrderDetailList?: InsureOrderCreateResponseBodyModuleInsureOrderDetailList[];
  /**
   * @example
   * 1021000196500370001
   */
  insureOrderId?: string;
  /**
   * @example
   * 3000
   */
  premium?: number;
  static names(): { [key: string]: string } {
    return {
      copies: 'copies',
      insureOrderDetailList: 'insure_order_detail_list',
      insureOrderId: 'insure_order_id',
      premium: 'premium',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copies: 'number',
      insureOrderDetailList: { 'type': 'array', 'itemType': InsureOrderCreateResponseBodyModuleInsureOrderDetailList },
      insureOrderId: 'string',
      premium: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.insureOrderDetailList)) {
      $dara.Model.validateArray(this.insureOrderDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsureOrderCreateResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: InsureOrderCreateResponseBodyModule;
  /**
   * @example
   * C6055EA5-C566-511D-9FC4-5E4D45182711
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 210f079916782711059363565d6be1
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
      module: InsureOrderCreateResponseBodyModule,
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

