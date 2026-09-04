// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageContentResponseBodyDataDatasItem extends $dara.Model {
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
   * 1729758903000
   */
  gmtCreated?: number;
  /**
   * @remarks
   * The time when the message was updated.
   * 
   * @example
   * 1729758903000
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
   * 385ad715-4139-41f9-ba59-246a00bb46e0.jpg
   */
  memo?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * AC14C11F1FF801EE00054518C220EF2C
   */
  msgId?: number;
  /**
   * @remarks
   * The read status. Valid values:
   * - 0: unread
   * - 1: read.
   * 
   * @example
   * not_installed
   */
  status?: number;
  /**
   * @remarks
   * The message title.
   * 
   * @example
   * Endless
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageContentResponseBodyDataDatasLastItem extends $dara.Model {
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
   * 1729758903000
   */
  gmtCreated?: number;
  /**
   * @remarks
   * The time when the message was updated.
   * 
   * @example
   * 1729758903000
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
   * The read status. Valid values:
   * - 0: unread
   * - 1: read.
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
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageContentResponseBodyDataDatasNextItem extends $dara.Model {
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
   * ”消息内容示例“
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
   * 1663809374000
   */
  gmtCreated?: number;
  /**
   * @remarks
   * The time when the message was updated.
   * 
   * @example
   * 1663809374000
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
   * The read status. Valid values:
   * - 0: unread
   * - 1: read.
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
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageContentResponseBodyDataDatas extends $dara.Model {
  /**
   * @remarks
   * The data item.
   */
  item?: ReadMessageContentResponseBodyDataDatasItem[];
  /**
   * @remarks
   * /
   */
  lastItem?: ReadMessageContentResponseBodyDataDatasLastItem[];
  /**
   * @remarks
   * /
   */
  nextItem?: ReadMessageContentResponseBodyDataDatasNextItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      lastItem: 'LastItem',
      nextItem: 'NextItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ReadMessageContentResponseBodyDataDatasItem },
      lastItem: { 'type': 'array', 'itemType': ReadMessageContentResponseBodyDataDatasLastItem },
      nextItem: { 'type': 'array', 'itemType': ReadMessageContentResponseBodyDataDatasNextItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    if(Array.isArray(this.lastItem)) {
      $dara.Model.validateArray(this.lastItem);
    }
    if(Array.isArray(this.nextItem)) {
      $dara.Model.validateArray(this.nextItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageContentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of degradation rules.
   */
  datas?: ReadMessageContentResponseBodyDataDatas;
  static names(): { [key: string]: string } {
    return {
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datas: ReadMessageContentResponseBodyDataDatas,
    };
  }

  validate() {
    if(this.datas && typeof (this.datas as any).validate === 'function') {
      (this.datas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the call fails. For more information, refer to error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The execution result.
   */
  data?: ReadMessageContentResponseBodyData;
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
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
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
      data: ReadMessageContentResponseBodyData,
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

