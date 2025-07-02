// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDevicesRequest extends $dara.Model {
  alias?: string;
  buildId?: string;
  clientType?: number;
  deviceGroupId?: string;
  deviceIpV4?: string;
  deviceName?: string;
  deviceOS?: string;
  devicePlatform?: string;
  endUserId?: string;
  labelContent?: string;
  labelId?: string;
  lastLoginUser?: string;
  locationInfo?: string;
  model?: string;
  pageNumber?: number;
  pageSize?: number;
  serialNo?: string;
  userType?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      buildId: 'BuildId',
      clientType: 'ClientType',
      deviceGroupId: 'DeviceGroupId',
      deviceIpV4: 'DeviceIpV4',
      deviceName: 'DeviceName',
      deviceOS: 'DeviceOS',
      devicePlatform: 'DevicePlatform',
      endUserId: 'EndUserId',
      labelContent: 'LabelContent',
      labelId: 'LabelId',
      lastLoginUser: 'LastLoginUser',
      locationInfo: 'LocationInfo',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serialNo: 'SerialNo',
      userType: 'UserType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      buildId: 'string',
      clientType: 'number',
      deviceGroupId: 'string',
      deviceIpV4: 'string',
      deviceName: 'string',
      deviceOS: 'string',
      devicePlatform: 'string',
      endUserId: 'string',
      labelContent: 'string',
      labelId: 'string',
      lastLoginUser: 'string',
      locationInfo: 'string',
      model: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serialNo: 'string',
      userType: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

