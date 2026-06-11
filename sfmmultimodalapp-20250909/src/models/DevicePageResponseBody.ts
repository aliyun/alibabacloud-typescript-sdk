// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DevicePageResponseBodyDeviceList extends $dara.Model {
  activeTime?: string;
  aliyunUid?: string;
  appId?: string;
  dailyCount?: number;
  deviceName?: string;
  orderType?: number;
  status?: number;
  subAliyunUid?: string;
  totalCount?: number;
  userActiveTime?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      aliyunUid: 'AliyunUid',
      appId: 'AppId',
      dailyCount: 'DailyCount',
      deviceName: 'DeviceName',
      orderType: 'OrderType',
      status: 'Status',
      subAliyunUid: 'SubAliyunUid',
      totalCount: 'TotalCount',
      userActiveTime: 'UserActiveTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      aliyunUid: 'string',
      appId: 'string',
      dailyCount: 'number',
      deviceName: 'string',
      orderType: 'number',
      status: 'number',
      subAliyunUid: 'string',
      totalCount: 'number',
      userActiveTime: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DevicePageResponseBody extends $dara.Model {
  deviceList?: DevicePageResponseBodyDeviceList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deviceList: 'DeviceList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceList: { 'type': 'array', 'itemType': DevicePageResponseBodyDeviceList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deviceList)) {
      $dara.Model.validateArray(this.deviceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

