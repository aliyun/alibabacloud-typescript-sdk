// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1585818240
   */
  addTime?: number;
  /**
   * @example
   * 252448085032933023
   */
  creatorId?: string;
  /**
   * @example
   * CAB327A
   */
  id?: string;
  /**
   * @example
   * assigned
   */
  ticketStatus?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      creatorId: 'CreatorId',
      id: 'Id',
      ticketStatus: 'TicketStatus',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'number',
      creatorId: 'string',
      id: 'string',
      ticketStatus: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  list?: ListTicketsResponseBodyDataList[];
  /**
   * @example
   * 15
   */
  pageSize?: number;
  /**
   * @example
   * 99
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': ListTicketsResponseBodyDataList },
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListTicketsResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * CA6204AC-6AA9-4CFA-9310-7DFD20C19EBC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      data: ListTicketsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

