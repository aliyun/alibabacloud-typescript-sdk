// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeviceListResponseBodyDeviceListDeviceUnionIds extends $dara.Model {
  organizationId?: string;
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      unionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListResponseBodyDeviceList extends $dara.Model {
  /**
   * @example
   * https://XXXXXX
   */
  deviceIconUrl?: string;
  deviceName?: string;
  /**
   * @example
   * jMR2********ojVJXk=
   */
  deviceOpenId?: string;
  deviceUnionIds?: QueryDeviceListResponseBodyDeviceListDeviceUnionIds[];
  /**
   * @example
   * 1
   */
  online?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIconUrl: 'DeviceIconUrl',
      deviceName: 'DeviceName',
      deviceOpenId: 'DeviceOpenId',
      deviceUnionIds: 'DeviceUnionIds',
      online: 'Online',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIconUrl: 'string',
      deviceName: 'string',
      deviceOpenId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': QueryDeviceListResponseBodyDeviceListDeviceUnionIds },
      online: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceUnionIds)) {
      $dara.Model.validateArray(this.deviceUnionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListResponseBody extends $dara.Model {
  deviceList?: QueryDeviceListResponseBodyDeviceList[];
  /**
   * @example
   * 125****0946
   */
  encodeKey?: string;
  /**
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceList: 'DeviceList',
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceList: { 'type': 'array', 'itemType': QueryDeviceListResponseBodyDeviceList },
      encodeKey: 'string',
      encodeType: 'string',
      requestId: 'string',
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

