// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserProduceOperateLogsResponseBodyData extends $dara.Model {
  /**
   * @example
   * P20210928095324000002
   */
  bizId?: string;
  /**
   * @example
   * 10
   */
  bizStatus?: number;
  /**
   * @example
   * esp.wangwen
   */
  bizType?: string;
  note?: string;
  operateName?: string;
  /**
   * @example
   * 1695324000002
   */
  operateTime?: number;
  /**
   * @example
   * user
   */
  operateUserType?: string;
  /**
   * @example
   * 35
   */
  toBizStatus?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizStatus: 'BizStatus',
      bizType: 'BizType',
      note: 'Note',
      operateName: 'OperateName',
      operateTime: 'OperateTime',
      operateUserType: 'OperateUserType',
      toBizStatus: 'ToBizStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizStatus: 'number',
      bizType: 'string',
      note: 'string',
      operateName: 'string',
      operateTime: 'number',
      operateUserType: 'string',
      toBizStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

