// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetTicketResponseBodyList extends $dara.Model {
  attachList?: string[];
  content?: string;
  fromOfficial?: boolean;
  gmtCreated?: string;
  noteId?: string;
  special?: boolean;
  static names(): { [key: string]: string } {
    return {
      attachList: 'AttachList',
      content: 'Content',
      fromOfficial: 'FromOfficial',
      gmtCreated: 'GmtCreated',
      noteId: 'NoteId',
      special: 'Special',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachList: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      fromOfficial: 'boolean',
      gmtCreated: 'string',
      noteId: 'string',
      special: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.attachList)) {
      $dara.Model.validateArray(this.attachList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  code?: number;
  createTime?: string;
  email?: string;
  list?: GetTicketResponseBodyList[];
  message?: string;
  notifyTimeRange?: string;
  phone?: string;
  productCode?: string;
  requestId?: string;
  success?: boolean;
  ticketId?: string;
  ticketStatus?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      createTime: 'CreateTime',
      email: 'Email',
      list: 'List',
      message: 'Message',
      notifyTimeRange: 'NotifyTimeRange',
      phone: 'Phone',
      productCode: 'ProductCode',
      requestId: 'RequestId',
      success: 'Success',
      ticketId: 'TicketId',
      ticketStatus: 'TicketStatus',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      createTime: 'string',
      email: 'string',
      list: { 'type': 'array', 'itemType': GetTicketResponseBodyList },
      message: 'string',
      notifyTimeRange: 'string',
      phone: 'string',
      productCode: 'string',
      requestId: 'string',
      success: 'boolean',
      ticketId: 'string',
      ticketStatus: 'string',
      title: 'string',
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

