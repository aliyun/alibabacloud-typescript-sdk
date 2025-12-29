// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExtSwitchList extends $dara.Model {
  aliasList?: string[];
  category?: string;
  deviceIndex?: number;
  deviceName?: string;
  deviceStatus?: string;
  elementCode?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      elementCode: 'ElementCode',
      location: 'Location',
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
    };
  }

  validate() {
    if(Array.isArray(this.aliasList)) {
      $dara.Model.validateArray(this.aliasList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExt extends $dara.Model {
  switchList?: QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExtSwitchList[];
  static names(): { [key: string]: string } {
    return {
      switchList: 'SwitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchList: { 'type': 'array', 'itemType': QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExtSwitchList },
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

export class QueryRoomControlDevicesResponseBodyResultDevices extends $dara.Model {
  aliasList?: string[];
  connectType?: string;
  DN?: string;
  deviceName?: string;
  deviceStatus?: string;
  multiKeySwitchExt?: QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExt;
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
  PK?: string;
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      connectType: 'ConnectType',
      DN: 'DN',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      multiKeySwitchExt: 'MultiKeySwitchExt',
      name: 'Name',
      number: 'Number',
      PK: 'PK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      connectType: 'string',
      DN: 'string',
      deviceName: 'string',
      deviceStatus: 'string',
      multiKeySwitchExt: QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExt,
      name: 'string',
      number: 'string',
      PK: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliasList)) {
      $dara.Model.validateArray(this.aliasList);
    }
    if(this.multiKeySwitchExt && typeof (this.multiKeySwitchExt as any).validate === 'function') {
      (this.multiKeySwitchExt as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponseBodyResult extends $dara.Model {
  devices?: QueryRoomControlDevicesResponseBodyResultDevices[];
  /**
   * @example
   * room
   */
  location?: string;
  locationName?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      location: 'Location',
      locationName: 'LocationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': QueryRoomControlDevicesResponseBodyResultDevices },
      location: 'string',
      locationName: 'string',
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

export class QueryRoomControlDevicesResponseBody extends $dara.Model {
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
   * fdsgfdscvre
   */
  requestId?: string;
  result?: QueryRoomControlDevicesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryRoomControlDevicesResponseBodyResult },
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

