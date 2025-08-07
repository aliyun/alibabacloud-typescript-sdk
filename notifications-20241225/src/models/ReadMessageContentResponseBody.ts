// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageContentResponseBodyDataDatasItem extends $dara.Model {
  categoryName?: string;
  classId?: number;
  content?: string;
  deleted?: number;
  gmtCreated?: number;
  gmtUpdate?: number;
  massId?: number;
  memo?: string;
  msgId?: number;
  status?: number;
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
  categoryName?: string;
  classId?: number;
  content?: string;
  deleted?: number;
  gmtCreated?: number;
  gmtUpdate?: number;
  massId?: number;
  memo?: string;
  msgId?: number;
  status?: number;
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
  categoryName?: string;
  classId?: number;
  content?: string;
  deleted?: number;
  gmtCreated?: number;
  gmtUpdate?: number;
  massId?: number;
  memo?: string;
  msgId?: number;
  status?: number;
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
  item?: ReadMessageContentResponseBodyDataDatasItem[];
  lastItem?: ReadMessageContentResponseBodyDataDatasLastItem[];
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
  code?: string;
  data?: ReadMessageContentResponseBodyData;
  message?: string;
  requestId?: string;
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

