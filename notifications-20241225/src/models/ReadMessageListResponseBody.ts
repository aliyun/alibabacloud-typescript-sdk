// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageListResponseBodyDataRows extends $dara.Model {
  /**
   * @remarks
   * The category code.
   * 
   * @example
   * test
   */
  categoryCode?: string;
  /**
   * @remarks
   * The message category name.
   * 
   * @example
   * 活动消息
   */
  categoryName?: string;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * /
   */
  class?: string;
  /**
   * @remarks
   * The message class ID.
   * 
   * @example
   * 1
   */
  classId?: number;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * "消息内容示例“
   */
  content?: string;
  /**
   * @remarks
   * The deletion flag.
   * 
   * @example
   * 0
   */
  deleted?: number;
  /**
   * @remarks
   * The time when the message was created.
   * 
   * @example
   * 1723772244000
   */
  gmtCreated?: number;
  /**
   * @remarks
   * The time when the message was updated.
   * 
   * @example
   * 1723772244000
   */
  gmtUpdate?: number;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * /
   */
  massId?: number;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * /
   */
  memo?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 3727683838
   */
  msgId?: number;
  /**
   * @remarks
   * The read status. A value of 0 indicates unread. A value of 1 indicates read.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The message title.
   * 
   * @example
   * "标题示例“
   */
  title?: string;
  /**
   * @remarks
   * The highlighted title.
   * 
   * @example
   * title
   */
  titleh?: string;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'CategoryCode',
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
      categoryCode: 'string',
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
   * The number of messages.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * /
   */
  maxResults?: number;
  /**
   * @remarks
   * A reserved field.
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned data.
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
   * The error code returned when the call fails. For more information, see error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The execution result.
   */
  data?: ReadMessageListResponseBodyData;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5F62766-1C2F-1F56-A39D-63E3D30F0633
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values: true: The call was successful. false: The call failed.
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

