// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNotifyResponseBodyDataNotifyItemList extends $dara.Model {
  aliUid?: number;
  confirmFlag?: boolean;
  confirmor?: number;
  gmtCreated?: string;
  gmtModified?: string;
  id?: number;
  idempotentCount?: string;
  idempotentId?: string;
  level?: string;
  notifyElement?: string;
  templateName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      confirmFlag: 'ConfirmFlag',
      confirmor: 'Confirmor',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      idempotentCount: 'IdempotentCount',
      idempotentId: 'IdempotentId',
      level: 'Level',
      notifyElement: 'NotifyElement',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      confirmFlag: 'boolean',
      confirmor: 'number',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      idempotentCount: 'string',
      idempotentId: 'string',
      level: 'string',
      notifyElement: 'string',
      templateName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNotifyResponseBodyData extends $dara.Model {
  notifyItemList?: QueryNotifyResponseBodyDataNotifyItemList[];
  pageNumber?: number;
  pageSize?: number;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      notifyItemList: 'NotifyItemList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyItemList: { 'type': 'array', 'itemType': QueryNotifyResponseBodyDataNotifyItemList },
      pageNumber: 'number',
      pageSize: 'number',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.notifyItemList)) {
      $dara.Model.validateArray(this.notifyItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNotifyResponseBody extends $dara.Model {
  data?: QueryNotifyResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryNotifyResponseBodyData,
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

