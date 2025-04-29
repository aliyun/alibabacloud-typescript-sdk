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

