// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeviceControlRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aircondition
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * open
   */
  cmd?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * air_condition
   */
  deviceNumber?: string;
  /**
   * @example
   * {}
   */
  extendInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * room
   */
  location?: string;
  properties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      cmd: 'Cmd',
      deviceNumber: 'DeviceNumber',
      extendInfo: 'ExtendInfo',
      location: 'Location',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cmd: 'string',
      deviceNumber: 'string',
      extendInfo: 'string',
      location: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 1**2
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequest extends $dara.Model {
  payload?: DeviceControlRequestPayload;
  userInfo?: DeviceControlRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: DeviceControlRequestPayload,
      userInfo: DeviceControlRequestUserInfo,
    };
  }

  validate() {
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

