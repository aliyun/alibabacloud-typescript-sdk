// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CustomerNoteListResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * 张三
   */
  contactName?: string;
  /**
   * @example
   * 1757916424103619
   */
  creator?: number;
  /**
   * @example
   * 张三
   */
  creatorName?: string;
  /**
   * @example
   * 2026-07-17 12:18:23
   */
  gmtCreate?: string;
  /**
   * @example
   * 讨论技术方案
   */
  noteContent?: string;
  /**
   * @example
   * 2932252
   */
  noteId?: number;
  /**
   * @example
   * CUSTOMER
   */
  noteType?: string;
  /**
   * @example
   * 客户
   */
  noteTypeLabel?: string;
  /**
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
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CustomerNoteListResponseBodyDataData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * success
   */
  msg?: string;
  pageInfo?: CustomerNoteListResponseBodyDataPageInfo;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CustomerNoteListResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * success
   */
  msg?: string;
  /**
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

