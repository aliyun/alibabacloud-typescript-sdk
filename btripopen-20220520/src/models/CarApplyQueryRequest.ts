// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarApplyQueryRequest extends $dara.Model {
  createdEndAt?: string;
  createdStartAt?: string;
  pageNumber?: number;
  pageSize?: number;
  thirdPartApplyId?: string;
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

