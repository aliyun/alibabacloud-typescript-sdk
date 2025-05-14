// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTicketOperateRecordResponseBodyRecordsOperator } from "./ListTicketOperateRecordResponseBodyRecordsOperator";
import { ListTicketOperateRecordResponseBodyRecordsTicketMemo } from "./ListTicketOperateRecordResponseBodyRecordsTicketMemo";


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

