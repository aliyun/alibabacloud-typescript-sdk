// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReimbursementOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RT204396
   */
  reimbOrderNo?: string;
  /**
   * @example
   * ding123
   */
  subCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      reimbOrderNo: 'reimb_order_no',
      subCorpId: 'sub_corp_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reimbOrderNo: 'string',
      subCorpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

