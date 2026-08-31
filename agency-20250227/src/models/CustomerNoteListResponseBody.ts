// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CustomerNoteListResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * 张三
   */
  contactName?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 1757916424103619
   */
  creator?: number;
  /**
   * @remarks
   * The logon name of the creator.
   * 
   * @example
   * 张三
   */
  creatorName?: string;
  /**
   * @remarks
   * The creation time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-07-17 12:18:23
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The content of the note.
   * 
   * @example
   * 讨论技术方案
   */
  noteContent?: string;
  /**
   * @remarks
   * The ID of the note.
   * 
   * @example
   * 2932252
   */
  noteId?: number;
  /**
   * @remarks
   * The type of the note (CUSTOMER).
   * 
   * @example
   * CUSTOMER
   */
  noteType?: string;
  /**
   * @remarks
   * The label of the note type.
   * 
   * @example
   * 客户
   */
  noteTypeLabel?: string;
  /**
   * @remarks
   * The touch date (timestamp).
   * 
   * @example
   * 1784266662000
   */
  touchDate?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      creator: 'Creator',
      creatorName: 'CreatorName',
      gmtCreate: 'GmtCreate',
      noteContent: 'NoteContent',
      noteId: 'NoteId',
      noteType: 'NoteType',
      noteTypeLabel: 'NoteTypeLabel',
      touchDate: 'TouchDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      creator: 'number',
      creatorName: 'string',
      gmtCreate: 'string',
      noteContent: 'string',
      noteId: 'number',
      noteType: 'string',
      noteTypeLabel: 'string',
      touchDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomerNoteListResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
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

export class CustomerNoteListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the access denied error returned by the POP API when the caller does not have the required RAM permissions.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The result code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CustomerNoteListResponseBodyDataData[];
  /**
   * @remarks
   * The HTTP status code returned by the POP API.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The prompt message, same as message.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The pagination information compatible with the legacy interface (deprecated).
   */
  pageInfo?: CustomerNoteListResponseBodyDataPageInfo;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 16
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      msg: 'Msg',
      pageInfo: 'PageInfo',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': CustomerNoteListResponseBodyDataData },
      httpStatusCode: 'number',
      message: 'string',
      msg: 'string',
      pageInfo: CustomerNoteListResponseBodyDataPageInfo,
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomerNoteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denied error returned by the POP API when the caller does not have the required RAM permissions.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The result code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CustomerNoteListResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned by the POP API.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The prompt message, same as message.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CustomerNoteListResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      msg: 'string',
      requestId: 'string',
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

