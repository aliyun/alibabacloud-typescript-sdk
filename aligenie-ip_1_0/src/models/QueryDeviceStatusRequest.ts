// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeviceStatusRequestPayloadLocationDevices extends $dara.Model {
  /**
   * @example
   * night_light
   */
  deviceNumber?: string;
  /**
   * @example
   * light
   */
  deviceType?: string;
  /**
   * @example
   * room
   */
  location?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNumber: 'DeviceNumber',
      deviceType: 'DeviceType',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNumber: 'string',
      deviceType: 'string',
      location: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequestPayload extends $dara.Model {
  locationDevices?: QueryDeviceStatusRequestPayloadLocationDevices[];
  properties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      locationDevices: 'LocationDevices',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationDevices: { 'type': 'array', 'itemType': QueryDeviceStatusRequestPayloadLocationDevices },
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.locationDevices)) {
      $dara.Model.validateArray(this.locationDevices);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequestUserInfo extends $dara.Model {
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
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
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
   * 123
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

export class QueryDeviceStatusRequest extends $dara.Model {
  payload?: QueryDeviceStatusRequestPayload;
  userInfo?: QueryDeviceStatusRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: QueryDeviceStatusRequestPayload,
      userInfo: QueryDeviceStatusRequestUserInfo,
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

