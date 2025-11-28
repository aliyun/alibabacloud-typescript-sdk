// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemberResponseBodyDataPageData extends $dara.Model {
  adminName?: string;
  authorizedCount?: number;
  authorizedDeviceCount?: number;
  contactor?: string;
  memberId?: string;
  name?: string;
  remark?: string;
  status?: string;
  telephony?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      adminName: 'AdminName',
      authorizedCount: 'AuthorizedCount',
      authorizedDeviceCount: 'AuthorizedDeviceCount',
      contactor: 'Contactor',
      memberId: 'MemberId',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      telephony: 'Telephony',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminName: 'string',
      authorizedCount: 'number',
      authorizedDeviceCount: 'number',
      contactor: 'string',
      memberId: 'string',
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

export class ListMemberResponseBodyData extends $dara.Model {
  num?: number;
  pageData?: ListMemberResponseBodyDataPageData[];
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
      pageData: { 'type': 'array', 'itemType': ListMemberResponseBodyDataPageData },
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

export class ListMemberResponseBody extends $dara.Model {
  code?: string;
  data?: ListMemberResponseBodyData;
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
      data: ListMemberResponseBodyData,
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

