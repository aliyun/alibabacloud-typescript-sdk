// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatSessionListResponseBodyDataSessionList extends $dara.Model {
  /**
   * @remarks
   * Report creation timestamp, in milliseconds.
   * 
   * @example
   * 2025-01-01T14:45:17Z
   */
  createTime?: number;
  /**
   * @remarks
   * Folder ID, used to specify the scope of documents to be queried.
   * 
   * @example
   * 3493370b-4884-47dd-95ed-49038769af53
   */
  folderId?: string;
  /**
   * @remarks
   * Session name
   * 
   * @example
   * student_app_spelling
   */
  name?: string;
  /**
   * @remarks
   * Q&A session ID, used to record multiple Q&As of the same user.
   * 
   * @example
   * 5c748ef9-3f23-4b5a-916f-966c0d2c6dcd
   */
  sessionId?: string;
  /**
   * @remarks
   * Modification time, in milliseconds.
   * 
   * @example
   * 2024-12-30T02:05:03Z
   */
  updateTime?: number;
  /**
   * @remarks
   * User ID of the current session.
   * 
   * @example
   * 12222
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      folderId: 'folderId',
      name: 'name',
      sessionId: 'sessionId',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      folderId: 'string',
      name: 'string',
      sessionId: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatSessionListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * 分页大小。
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Session list.
   */
  sessionList?: GetChatSessionListResponseBodyDataSessionList[];
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 21
   */
  total?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      sessionList: 'sessionList',
      total: 'total',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      sessionList: { 'type': 'array', 'itemType': GetChatSessionListResponseBodyDataSessionList },
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sessionList)) {
      $dara.Model.validateArray(this.sessionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatSessionListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data
   */
  data?: GetChatSessionListResponseBodyData;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetChatSessionListResponseBodyData,
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

