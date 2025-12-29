// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketsResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyResultDialogs extends $dara.Model {
  answer?: string;
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      question: 'Question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * false
   */
  action?: boolean;
  /**
   * @example
   * ***
   */
  assignedHandler?: string;
  /**
   * @example
   * ***
   */
  chargesRemark?: string;
  /**
   * @example
   * ***
   */
  completeRemark?: string;
  dialogs?: ListTicketsResponseBodyResultDialogs[];
  /**
   * @example
   * 2023-01-09 00:00:00
   */
  gmtCalled?: string;
  /**
   * @example
   * 2023-01-09 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-01-09 00:00:00
   */
  gmtDelayed?: string;
  /**
   * @example
   * 2023-01-09 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 2023***93975
   */
  groupKey?: string;
  /**
   * @example
   * 45
   */
  id?: number;
  /**
   * @example
   * false
   */
  isAcceptedCharges?: boolean;
  /**
   * @example
   * true
   */
  isDelayed?: boolean;
  /**
   * @example
   * false
   */
  isNeedCallback?: boolean;
  /**
   * @example
   * false
   */
  isNeedCharges?: boolean;
  operations?: { [key: string]: any }[];
  /**
   * @example
   * ***
   */
  remark?: string;
  /**
   * @example
   * 101
   */
  roomNo?: string;
  /**
   * @example
   * waiting
   */
  status?: string;
  /**
   * @example
   * ""
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      assignedHandler: 'AssignedHandler',
      chargesRemark: 'ChargesRemark',
      completeRemark: 'CompleteRemark',
      dialogs: 'Dialogs',
      gmtCalled: 'GmtCalled',
      gmtCreate: 'GmtCreate',
      gmtDelayed: 'GmtDelayed',
      gmtModified: 'GmtModified',
      groupKey: 'GroupKey',
      id: 'Id',
      isAcceptedCharges: 'IsAcceptedCharges',
      isDelayed: 'IsDelayed',
      isNeedCallback: 'IsNeedCallback',
      isNeedCharges: 'IsNeedCharges',
      operations: 'Operations',
      remark: 'Remark',
      roomNo: 'RoomNo',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'boolean',
      assignedHandler: 'string',
      chargesRemark: 'string',
      completeRemark: 'string',
      dialogs: { 'type': 'array', 'itemType': ListTicketsResponseBodyResultDialogs },
      gmtCalled: 'string',
      gmtCreate: 'string',
      gmtDelayed: 'string',
      gmtModified: 'string',
      groupKey: 'string',
      id: 'number',
      isAcceptedCharges: 'boolean',
      isDelayed: 'boolean',
      isNeedCallback: 'boolean',
      isNeedCharges: 'boolean',
      operations: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      remark: 'string',
      roomNo: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogs)) {
      $dara.Model.validateArray(this.dialogs);
    }
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListTicketsResponseBodyPage;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: ListTicketsResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      page: ListTicketsResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListTicketsResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

