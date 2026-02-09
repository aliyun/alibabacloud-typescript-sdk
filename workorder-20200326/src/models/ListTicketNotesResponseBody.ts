// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketNotesResponseBodyDataList extends $dara.Model {
  content?: string;
  /**
   * @example
   * false
   */
  fromOfficial?: boolean;
  /**
   * @example
   * 1586920240
   */
  gmtCreated?: number;
  /**
   * @example
   * CT24GHXT
   */
  noteId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fromOfficial: 'FromOfficial',
      gmtCreated: 'GmtCreated',
      noteId: 'NoteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fromOfficial: 'boolean',
      gmtCreated: 'number',
      noteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBodyData extends $dara.Model {
  list?: ListTicketNotesResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListTicketNotesResponseBodyDataList },
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

export class ListTicketNotesResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListTicketNotesResponseBodyData;
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
      data: ListTicketNotesResponseBodyData,
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

