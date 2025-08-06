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

export class ListUserProduceOperateLogsResponseBody extends $dara.Model {
  data?: ListUserProduceOperateLogsResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 0DCBE2FF-2DFC-56DC-9A15-BDF27B7FFB1B
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 6
   */
  totalItemNum?: number;
  /**
   * @example
   * 23
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUserProduceOperateLogsResponseBodyData },
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

