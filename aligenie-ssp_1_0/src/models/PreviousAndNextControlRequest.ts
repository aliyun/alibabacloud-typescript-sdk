// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviousAndNextControlRequestDeviceInfo extends $dara.Model {
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
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ouRjKOX95tn1a0kwb2+Ao6Q1CAxASJUZDWtlk1r43LWcVW6fvY1Rr4sEPFodpnA==
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

export class PreviousAndNextControlRequestOpenControlPlayingListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NEXT
   */
  cmd?: string;
  extendInfo?: { [key: string]: any };
  /**
   * @example
   * false
   */
  isFromDevice?: boolean;
  static names(): { [key: string]: string } {
    return {
      cmd: 'Cmd',
      extendInfo: 'ExtendInfo',
      isFromDevice: 'IsFromDevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      isFromDevice: 'boolean',
    };
  }

  validate() {
    if(this.extendInfo) {
      $dara.Model.validateMap(this.extendInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviousAndNextControlRequestUserInfo extends $dara.Model {
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
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ouRjKOX95tn1a0kwb2+Ao6Q1CAxASJUZDWtlk1r43LWcVW6fvY1Rr4sEPFodpnA==
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

export class PreviousAndNextControlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: PreviousAndNextControlRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  openControlPlayingListRequest?: PreviousAndNextControlRequestOpenControlPlayingListRequest;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: PreviousAndNextControlRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openControlPlayingListRequest: 'OpenControlPlayingListRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: PreviousAndNextControlRequestDeviceInfo,
      openControlPlayingListRequest: PreviousAndNextControlRequestOpenControlPlayingListRequest,
      userInfo: PreviousAndNextControlRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.openControlPlayingListRequest && typeof (this.openControlPlayingListRequest as any).validate === 'function') {
      (this.openControlPlayingListRequest as any).validate();
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

