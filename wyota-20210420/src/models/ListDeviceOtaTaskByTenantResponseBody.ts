// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceOtaTaskByTenantResponseBodyDataTenantDeviceOtaTasks extends $dara.Model {
  model?: string;
  operationStatus?: number;
  publishTime?: string;
  status?: number;
  taskId?: number;
  upgradeCount?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      operationStatus: 'OperationStatus',
      publishTime: 'PublishTime',
      status: 'Status',
      taskId: 'TaskId',
      upgradeCount: 'UpgradeCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      operationStatus: 'number',
      publishTime: 'string',
      status: 'number',
      taskId: 'number',
      upgradeCount: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceOtaTaskByTenantResponseBodyData extends $dara.Model {
  tenantDeviceOtaTasks?: ListDeviceOtaTaskByTenantResponseBodyDataTenantDeviceOtaTasks[];
  static names(): { [key: string]: string } {
    return {
      tenantDeviceOtaTasks: 'TenantDeviceOtaTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantDeviceOtaTasks: { 'type': 'array', 'itemType': ListDeviceOtaTaskByTenantResponseBodyDataTenantDeviceOtaTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tenantDeviceOtaTasks)) {
      $dara.Model.validateArray(this.tenantDeviceOtaTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceOtaTaskByTenantResponseBody extends $dara.Model {
  code?: string;
  data?: ListDeviceOtaTaskByTenantResponseBodyData;
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
      data: ListDeviceOtaTaskByTenantResponseBodyData,
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

