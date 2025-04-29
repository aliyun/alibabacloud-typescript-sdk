// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommonApplyQueryRequest extends $dara.Model {
  /**
   * @example
   * 1003366164
   */
  applyId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  bizCategory?: number;
  businessInstanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      bizCategory: 'biz_category',
      businessInstanceId: 'business_instance_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      bizCategory: 'number',
      businessInstanceId: 'string',
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

