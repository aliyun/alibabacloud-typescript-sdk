// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantDeviceOtaInfoResponseBodyDataTenantDeviceOtaInfos extends $dara.Model {
  currentVersion?: string;
  deviceId?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      currentVersion: 'CurrentVersion',
      deviceId: 'DeviceId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersion: 'string',
      deviceId: 'string',
      model: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantDeviceOtaInfoResponseBodyData extends $dara.Model {
  tenantDeviceOtaInfos?: ListTenantDeviceOtaInfoResponseBodyDataTenantDeviceOtaInfos[];
  static names(): { [key: string]: string } {
    return {
      tenantDeviceOtaInfos: 'TenantDeviceOtaInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantDeviceOtaInfos: { 'type': 'array', 'itemType': ListTenantDeviceOtaInfoResponseBodyDataTenantDeviceOtaInfos },
    };
  }

  validate() {
    if(Array.isArray(this.tenantDeviceOtaInfos)) {
      $dara.Model.validateArray(this.tenantDeviceOtaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantDeviceOtaInfoResponseBody extends $dara.Model {
  code?: string;
  data?: ListTenantDeviceOtaInfoResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTenantDeviceOtaInfoResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

