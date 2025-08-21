// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvalidateThirdPartyAppLoginStateRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * com.*.*.*
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
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

export class InvalidateThirdPartyAppLoginStateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: InvalidateThirdPartyAppLoginStateRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * com.*.*.*
   */
  thirdPartyAppId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      thirdPartyAppId: 'ThirdPartyAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: InvalidateThirdPartyAppLoginStateRequestDeviceInfo,
      thirdPartyAppId: 'string',
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

