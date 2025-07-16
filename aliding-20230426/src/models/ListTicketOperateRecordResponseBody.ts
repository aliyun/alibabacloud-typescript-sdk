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

export class ListTicketOperateRecordResponseBodyRecordsTicketMemoAttachments extends $dara.Model {
  /**
   * @example
   * wahaha.txt
   */
  fileName?: string;
  /**
   * @example
   * ticket/image/447xxxx9/43003/e2xxxec4243e940a1367_1625xxxx99.txt
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketOperateRecordResponseBodyRecordsTicketMemo extends $dara.Model {
  attachments?: ListTicketOperateRecordResponseBodyRecordsTicketMemoAttachments[];
  /**
   * @example
   * 贤文结束工单
   */
  memo?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
      memo: 'Memo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': ListTicketOperateRecordResponseBodyRecordsTicketMemoAttachments },
      memo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketOperateRecordResponseBodyRecords extends $dara.Model {
  /**
   * @example
   * a8iSxxxxgtgiE
   */
  openTicketId?: string;
  /**
   * @example
   * {"originTakers":[{"nickName":"贤文","unionId":"Dq9hxxxxwiEiE"},{"nickName":"王鸿程","unionId":"4kITooxxxx5wiEiE"}]}
   */
  operateData?: string;
  /**
   * @example
   * 2021-07-09 19:26:09
   */
  operateTime?: string;
  /**
   * @example
   * FINISH
   */
  operation?: string;
  /**
   * @example
   * 结单
   */
  operationDisplayName?: string;
  operator?: ListTicketOperateRecordResponseBodyRecordsOperator;
  ticketMemo?: ListTicketOperateRecordResponseBodyRecordsTicketMemo;
  static names(): { [key: string]: string } {
    return {
      openTicketId: 'OpenTicketId',
      operateData: 'OperateData',
      operateTime: 'OperateTime',
      operation: 'Operation',
      operationDisplayName: 'OperationDisplayName',
      operator: 'Operator',
      ticketMemo: 'TicketMemo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openTicketId: 'string',
      operateData: 'string',
      operateTime: 'string',
      operation: 'string',
      operationDisplayName: 'string',
      operator: ListTicketOperateRecordResponseBodyRecordsOperator,
      ticketMemo: ListTicketOperateRecordResponseBodyRecordsTicketMemo,
    };
  }

  validate() {
    if(this.operator && typeof (this.operator as any).validate === 'function') {
      (this.operator as any).validate();
    }
    if(this.ticketMemo && typeof (this.ticketMemo as any).validate === 'function') {
      (this.ticketMemo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketOperateRecordResponseBody extends $dara.Model {
  records?: ListTicketOperateRecordResponseBodyRecords[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'records',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ListTicketOperateRecordResponseBodyRecords },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

