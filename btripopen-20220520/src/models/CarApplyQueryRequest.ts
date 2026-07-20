// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarApplyQueryRequest extends $dara.Model {
  /**
   * @example
   * 2021-03-18 20:26:56
   */
  createdEndAt?: string;
  /**
   * @example
   * 2021-03-18 20:26:56
   */
  createdStartAt?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * apply1
   */
  thirdPartApplyId?: string;
  /**
   * @example
   * userid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdEndAt: 'created_end_at',
      createdStartAt: 'created_start_at',
      pageNumber: 'page_number',
      pageSize: 'page_size',
      thirdPartApplyId: 'third_part_apply_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdEndAt: 'string',
      createdStartAt: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

