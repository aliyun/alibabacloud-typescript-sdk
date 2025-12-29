// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExtSwitchList extends $dara.Model {
  aliasList?: string[];
  /**
   * @example
   * light
   */
  category?: string;
  /**
   * @example
   * 1
   */
  deviceIndex?: number;
  deviceName?: string;
  /**
   * @example
   * {
   *       "powerstate": "0"
   * }
   */
  deviceStatus?: string;
  /**
   * @example
   * e2
   */
  elementCode?: string;
  /**
   * @example
   * room
   */
  location?: string;
  status?: { [key: string]: string };
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      elementCode: 'ElementCode',
      location: 'Location',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deviceIndex: 'number',
      deviceName: 'string',
      deviceStatus: 'string',
      elementCode: 'string',
      location: 'string',
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.aliasList)) {
      $dara.Model.validateArray(this.aliasList);
    }
    if(this.status) {
      $dara.Model.validateMap(this.status);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExt extends $dara.Model {
  switchList?: QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExtSwitchList[];
  static names(): { [key: string]: string } {
    return {
      switchList: 'SwitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchList: { 'type': 'array', 'itemType': QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExtSwitchList },
    };
  }

  validate() {
    if(Array.isArray(this.switchList)) {
      $dara.Model.validateArray(this.switchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBodyResultDevices extends $dara.Model {
  aliasList?: string[];
  brand?: string;
  city?: string;
  /**
   * @example
   * rcu
   */
  connectType?: string;
  deviceName?: string;
  /**
   * @example
   * {"powerstate": "1"}
   */
  deviceStatus?: string;
  /**
   * @example
   * 3c5d***9ec
   */
  dn?: string;
  /**
   * @example
   * 9**7
   */
  infraredId?: string;
  /**
   * @example
   * 2
   */
  infraredIndex?: string;
  /**
   * @example
   * 3.0
   */
  infraredVersion?: string;
  multiKeySwitchExt?: QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExt;
  /**
   * @example
   * light
   */
  name?: string;
  /**
   * @example
   * night_light
   */
  number?: string;
  /**
   * @example
   * 50255129
   */
  pk?: string;
  province?: string;
  serviceProvider?: string;
  status?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      brand: 'Brand',
      city: 'City',
      connectType: 'ConnectType',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      dn: 'Dn',
      infraredId: 'InfraredId',
      infraredIndex: 'InfraredIndex',
      infraredVersion: 'InfraredVersion',
      multiKeySwitchExt: 'MultiKeySwitchExt',
      name: 'Name',
      number: 'Number',
      pk: 'Pk',
      province: 'Province',
      serviceProvider: 'ServiceProvider',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      brand: 'string',
      city: 'string',
      connectType: 'string',
      deviceName: 'string',
      deviceStatus: 'string',
      dn: 'string',
      infraredId: 'string',
      infraredIndex: 'string',
      infraredVersion: 'string',
      multiKeySwitchExt: QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExt,
      name: 'string',
      number: 'string',
      pk: 'string',
      province: 'string',
      serviceProvider: 'string',
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.aliasList)) {
      $dara.Model.validateArray(this.aliasList);
    }
    if(this.multiKeySwitchExt && typeof (this.multiKeySwitchExt as any).validate === 'function') {
      (this.multiKeySwitchExt as any).validate();
    }
    if(this.status) {
      $dara.Model.validateMap(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBodyResult extends $dara.Model {
  devices?: QueryRoomControlDevicesAndStatusResponseBodyResultDevices[];
  /**
   * @example
   * room
   */
  location?: string;
  locationName?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      location: 'Location',
      locationName: 'LocationName',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': QueryRoomControlDevicesAndStatusResponseBodyResultDevices },
      location: 'string',
      locationName: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67***6FA
   */
  requestId?: string;
  result?: QueryRoomControlDevicesAndStatusResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryRoomControlDevicesAndStatusResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

