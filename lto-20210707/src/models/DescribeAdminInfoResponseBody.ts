// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdminInfoResponseBodyData extends $dara.Model {
  accessDate?: number;
  accessStatus?: string;
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
      accessDate: 'AccessDate',
      accessStatus: 'AccessStatus',
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
      accessDate: 'number',
      accessStatus: 'string',
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

export class DescribeAdminInfoResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeAdminInfoResponseBodyData;
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
      data: DescribeAdminInfoResponseBodyData,
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

