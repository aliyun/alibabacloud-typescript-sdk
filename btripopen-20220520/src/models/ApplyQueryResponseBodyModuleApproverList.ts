// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyQueryResponseBodyModuleApproverList extends $dara.Model {
  note?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  operateTime?: string;
  /**
   * @example
   * 1
   */
  order?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  statusDesc?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'note',
      operateTime: 'operate_time',
      order: 'order',
      status: 'status',
      statusDesc: 'status_desc',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      operateTime: 'string',
      order: 'number',
      status: 'number',
      statusDesc: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

