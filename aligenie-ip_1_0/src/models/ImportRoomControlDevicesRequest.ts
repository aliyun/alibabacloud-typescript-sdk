// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExtSwitchList extends $dara.Model {
  aliasList?: string[];
  category?: string;
  deviceIndex?: number;
  deviceName?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceName: 'DeviceName',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deviceIndex: 'number',
      deviceName: 'string',
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

export class ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExt extends $dara.Model {
  switchList?: ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExtSwitchList[];
  static names(): { [key: string]: string } {
    return {
      switchList: 'SwitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchList: { 'type': 'array', 'itemType': ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExtSwitchList },
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

export class ImportRoomControlDevicesRequestLocationDevicesDevices extends $dara.Model {
  aliasList?: string[];
  brand?: string;
  city?: string;
  connectType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceName?: string;
  dn?: string;
  infraredId?: string;
  infraredIndex?: string;
  infraredVersion?: string;
  multiKeySwitchExt?: ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExt;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * light
   */
  name?: string;
  /**
   * @example
   * night_light
   */
  number?: string;
  pk?: string;
  province?: string;
  serviceProvider?: string;
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      brand: 'Brand',
      city: 'City',
      connectType: 'ConnectType',
      deviceName: 'DeviceName',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      brand: 'string',
      city: 'string',
      connectType: 'string',
      deviceName: 'string',
      dn: 'string',
      infraredId: 'string',
      infraredIndex: 'string',
      infraredVersion: 'string',
      multiKeySwitchExt: ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExt,
      name: 'string',
      number: 'string',
      pk: 'string',
      province: 'string',
      serviceProvider: 'string',
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

export class ImportRoomControlDevicesRequestLocationDevices extends $dara.Model {
  devices?: ImportRoomControlDevicesRequestLocationDevicesDevices[];
  /**
   * @remarks
   * This parameter is required.
   * 
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
      devices: { 'type': 'array', 'itemType': ImportRoomControlDevicesRequestLocationDevicesDevices },
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

export class ImportRoomControlDevicesRequest extends $dara.Model {
  enableInfraredDeviceImport?: string;
  enableMeshDeviceImport?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vdgrefds
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  locationDevices?: ImportRoomControlDevicesRequestLocationDevices[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      enableInfraredDeviceImport: 'EnableInfraredDeviceImport',
      enableMeshDeviceImport: 'EnableMeshDeviceImport',
      hotelId: 'HotelId',
      locationDevices: 'LocationDevices',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInfraredDeviceImport: 'string',
      enableMeshDeviceImport: 'string',
      hotelId: 'string',
      locationDevices: { 'type': 'array', 'itemType': ImportRoomControlDevicesRequestLocationDevices },
      roomNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.locationDevices)) {
      $dara.Model.validateArray(this.locationDevices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

