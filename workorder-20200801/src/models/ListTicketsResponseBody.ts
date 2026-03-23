// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketsResponseBodyList extends $dara.Model {
  addTime?: string;
  id?: string;
  ticketStatus?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      id: 'Id',
      ticketStatus: 'TicketStatus',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
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

export class ListTicketsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  code?: number;
  currentPage?: number;
  list?: ListTicketsResponseBodyList[];
  message?: string;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      currentPage: 'CurrentPage',
      list: 'List',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': ListTicketsResponseBodyList },
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
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

