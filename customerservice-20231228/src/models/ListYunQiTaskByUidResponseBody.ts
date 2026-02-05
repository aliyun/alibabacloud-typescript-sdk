// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListYunQiTaskByUidResponseBodyDataList extends $dara.Model {
  chatId?: string;
  createTime?: number;
  creatorName?: string;
  endTime?: number;
  evaluationStar?: number;
  important?: string;
  mainDingDepartmentId?: string;
  mainDingGroupId?: string;
  mainDingGroupName?: string;
  productName?: string;
  recordId?: string;
  status?: string;
  subDingDepartmentId?: string;
  subDingGroupId?: string;
  subDingGroupName?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
      createTime: 'createTime',
      creatorName: 'creatorName',
      endTime: 'endTime',
      evaluationStar: 'evaluationStar',
      important: 'important',
      mainDingDepartmentId: 'mainDingDepartmentId',
      mainDingGroupId: 'mainDingGroupId',
      mainDingGroupName: 'mainDingGroupName',
      productName: 'productName',
      recordId: 'recordId',
      status: 'status',
      subDingDepartmentId: 'subDingDepartmentId',
      subDingGroupId: 'subDingGroupId',
      subDingGroupName: 'subDingGroupName',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      createTime: 'number',
      creatorName: 'string',
      endTime: 'number',
      evaluationStar: 'number',
      important: 'string',
      mainDingDepartmentId: 'string',
      mainDingGroupId: 'string',
      mainDingGroupName: 'string',
      productName: 'string',
      recordId: 'string',
      status: 'string',
      subDingDepartmentId: 'string',
      subDingGroupId: 'string',
      subDingGroupName: 'string',
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

export class ListYunQiTaskByUidResponseBodyData extends $dara.Model {
  extend?: any;
  list?: ListYunQiTaskByUidResponseBodyDataList[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extend: 'extend',
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extend: 'any',
      list: { 'type': 'array', 'itemType': ListYunQiTaskByUidResponseBodyDataList },
      pageNum: 'number',
      pageSize: 'number',
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

export class ListYunQiTaskByUidResponseBody extends $dara.Model {
  code?: string;
  data?: ListYunQiTaskByUidResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListYunQiTaskByUidResponseBodyData,
      httpStatusCode: 'number',
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

