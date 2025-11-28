// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemberAccessRecordResponseBodyDataPageData extends $dara.Model {
  accessDate?: number;
  accessStatus?: string;
  adminName?: string;
  authorizedCount?: number;
  authorizedDeviceCount?: number;
  contactor?: string;
  memberId?: string;
  memberResponseDate?: number;
  name?: string;
  remark?: string;
  status?: string;
  telephony?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      accessDate: 'AccessDate',
      accessStatus: 'AccessStatus',
      adminName: 'AdminName',
      authorizedCount: 'AuthorizedCount',
      authorizedDeviceCount: 'AuthorizedDeviceCount',
      contactor: 'Contactor',
      memberId: 'MemberId',
      memberResponseDate: 'MemberResponseDate',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      telephony: 'Telephony',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDate: 'number',
      accessStatus: 'string',
      adminName: 'string',
      authorizedCount: 'number',
      authorizedDeviceCount: 'number',
      contactor: 'string',
      memberId: 'string',
      memberResponseDate: 'number',
      name: 'string',
      remark: 'string',
      status: 'string',
      telephony: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemberAccessRecordResponseBodyData extends $dara.Model {
  num?: number;
  pageData?: ListMemberAccessRecordResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListMemberAccessRecordResponseBodyDataPageData },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemberAccessRecordResponseBody extends $dara.Model {
  code?: string;
  data?: ListMemberAccessRecordResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListMemberAccessRecordResponseBodyData,
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

