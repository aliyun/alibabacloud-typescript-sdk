// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExceedApplySyncRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 823744
   */
  applyId?: number;
  /**
   * @example
   * 3
   */
  bizCategory?: number;
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 123421
   */
  thirdpartyFlowId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * open5145141
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      bizCategory: 'biz_category',
      remark: 'remark',
      status: 'status',
      thirdpartyFlowId: 'thirdparty_flow_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      bizCategory: 'number',
      remark: 'string',
      status: 'number',
      thirdpartyFlowId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

