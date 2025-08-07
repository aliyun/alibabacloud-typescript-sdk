// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageListResponseBodyDataRows extends $dara.Model {
  /**
   * @remarks
   * CategoryName
   * 
   * @example
   * /
   */
  categoryName?: string;
  /**
   * @remarks
   * Class
   * 
   * @example
   * /
   */
  class?: string;
  /**
   * @remarks
   * ClassId
   * 
   * @example
   * 1
   */
  classId?: number;
  /**
   * @remarks
   * 内容
   * 
   * @example
   * /
   */
  content?: string;
  /**
   * @remarks
   * 删除
   * 
   * @example
   * 0
   */
  deleted?: number;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1723772244000
   */
  gmtCreated?: number;
  /**
   * @example
   * 1723772244000
   */
  gmtUpdate?: number;
  /**
   * @remarks
   * massId
   * 
   * @example
   * /
   */
  massId?: number;
  /**
   * @remarks
   * 描述
   * 
   * @example
   * /
   */
  memo?: string;
  /**
   * @remarks
   * 消息id
   * 
   * @example
   * 3727683838
   */
  msgId?: number;
  /**
   * @remarks
   * 状态
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * 标题
   * 
   * @example
   * /
   */
  title?: string;
  titleh?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      class: 'Class',
      classId: 'ClassId',
      content: 'Content',
      deleted: 'Deleted',
      gmtCreated: 'GmtCreated',
      gmtUpdate: 'GmtUpdate',
      massId: 'MassId',
      memo: 'Memo',
      msgId: 'MsgId',
      status: 'Status',
      title: 'Title',
      titleh: 'Titleh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      class: 'string',
      classId: 'number',
      content: 'string',
      deleted: 'number',
      gmtCreated: 'number',
      gmtUpdate: 'number',
      massId: 'number',
      memo: 'string',
      msgId: 'number',
      status: 'number',
      title: 'string',
      titleh: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * /
   */
  maxResults?: number;
  /**
   * @remarks
   * If excess return values exist, this parameter is returned.
   * 
   * @example
   * /
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 24
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
   * The number of rows updated or returned on PolarDB-X 2.0 compute nodes.
   */
  rows?: ReadMessageListResponseBodyDataRows[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      page: 'Page',
      pageSize: 'PageSize',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': ReadMessageListResponseBodyDataRows },
    };
  }

  validate() {
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value Success indicates that the request is successful. Other values indicate that the request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Data
   */
  data?: ReadMessageListResponseBodyData;
  /**
   * @remarks
   * message
   * 
   * @example
   * /
   */
  message?: string;
  /**
   * @remarks
   * 唯一请求id
   * 
   * @example
   * A5F62766-1C2F-1F56-A39D-63E3D30F0633
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   **true**: The call was successful.
   * *   **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ReadMessageListResponseBodyData,
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

