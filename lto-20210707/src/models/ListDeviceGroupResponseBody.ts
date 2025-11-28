// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceGroupResponseBodyDataPageData extends $dara.Model {
  authorizedCount?: number;
  currentUser?: boolean;
  deviceCount?: number;
  deviceGroupId?: string;
  memberName?: string;
  name?: string;
  productKey?: string;
  remark?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedCount: 'AuthorizedCount',
      currentUser: 'CurrentUser',
      deviceCount: 'DeviceCount',
      deviceGroupId: 'DeviceGroupId',
      memberName: 'MemberName',
      name: 'Name',
      productKey: 'ProductKey',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedCount: 'number',
      currentUser: 'boolean',
      deviceCount: 'number',
      deviceGroupId: 'string',
      memberName: 'string',
      name: 'string',
      productKey: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupResponseBodyData extends $dara.Model {
  num?: number;
  pageData?: ListDeviceGroupResponseBodyDataPageData[];
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
      pageData: { 'type': 'array', 'itemType': ListDeviceGroupResponseBodyDataPageData },
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

export class ListDeviceGroupResponseBody extends $dara.Model {
  code?: string;
  data?: ListDeviceGroupResponseBodyData;
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
      data: ListDeviceGroupResponseBodyData,
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

