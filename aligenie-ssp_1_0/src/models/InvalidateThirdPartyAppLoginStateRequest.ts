// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvalidateThirdPartyAppLoginStateRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. When the encoding type is SKILL_ID, the value is the Skill ID of the application. When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * com.*.*.*
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the Tmall Genie device ID, and each method corresponds to a different encoding type: PACKAGE_NAME refers to the APK package name, used in the Android application customer flow; SKILL_ID refers to the skill ID, used in the cloud-based flow.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID (deviceOpenId or deviceUnionId)
   * 
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * The type of Device ID. OPEN_ID: the default device identity. UNION_ID: the device identity at the organization dimension, which is available only after an organization has been requested on the Maojing Skills Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required if IdType is UNION_ID.
   * 
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
   * Device identification information
   * 
   * This parameter is required.
   */
  deviceInfo?: InvalidateThirdPartyAppLoginStateRequestDeviceInfo;
  /**
   * @remarks
   * Third-party application identity
   * 
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

