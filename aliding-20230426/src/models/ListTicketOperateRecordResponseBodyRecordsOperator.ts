// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketOperateRecordResponseBodyRecordsOperator extends $dara.Model {
  /**
   * @example
   * 贤文
   */
  nickName?: string;
  /**
   * @example
   * 012345
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      unionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

