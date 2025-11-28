// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceResponseBodyDataPageData extends $dara.Model {
  deviceId?: string;
  lastOnchainTime?: string;
  name?: string;
  status?: string;
  usedOnchainCount?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      lastOnchainTime: 'LastOnchainTime',
      name: 'Name',
      status: 'Status',
      usedOnchainCount: 'UsedOnchainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      lastOnchainTime: 'string',
      name: 'string',
      status: 'string',
      usedOnchainCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceResponseBodyData extends $dara.Model {
  num?: number;
  pageData?: ListDeviceResponseBodyDataPageData[];
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
      pageData: { 'type': 'array', 'itemType': ListDeviceResponseBodyDataPageData },
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

export class ListDeviceResponseBody extends $dara.Model {
  code?: string;
  data?: ListDeviceResponseBodyData;
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
      data: ListDeviceResponseBodyData,
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

