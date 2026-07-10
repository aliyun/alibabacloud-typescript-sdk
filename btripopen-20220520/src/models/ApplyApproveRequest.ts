// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyApproveRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applyId?: string;
  note?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operateTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  status?: number;
  subCorpId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      note: 'note',
      operateTime: 'operate_time',
      status: 'status',
      subCorpId: 'sub_corp_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      note: 'string',
      operateTime: 'string',
      status: 'number',
      subCorpId: 'string',
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

