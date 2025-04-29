// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealApplyApproveRequest extends $dara.Model {
  /**
   * @example
   * 2022-07-12 16:12:53
   */
  operateTime?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  thirdPartApplyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 62141
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      operateTime: 'operate_time',
      remark: 'remark',
      status: 'status',
      thirdPartApplyId: 'third_part_apply_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateTime: 'string',
      remark: 'string',
      status: 'number',
      thirdPartApplyId: 'string',
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

