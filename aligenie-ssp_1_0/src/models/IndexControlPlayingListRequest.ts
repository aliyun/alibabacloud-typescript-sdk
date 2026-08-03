// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IndexControlPlayingListRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type
   * 
   * When the encoding type is `SKILL_ID`, the value is the application\\"s Skill ID. When the encoding type is `PACKAGE_NAME`, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device ID for Tmall Genie, and each method corresponds to a different encoding type.
   * 
   * `PACKAGE_NAME`: APK package name, used for the Android application customer link. `SKILL_ID`: Skill ID, used for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID, set to either deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ouRjKOX95tn1a0kwb2+Ao6Q1CAxASJUZDWtlk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * Type of device ID
   * 
   * `OPEN_ID`: The default device ID identity. `UNION_ID`: Device ID identity at the organization dimension. This value is available only after an organization has been requested on the Tmall Genie Skill Application Open Platform.
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

export class IndexControlPlayingListRequestOpenIndexControlRequest extends $dara.Model {
  /**
   * @remarks
   * Extension information
   */
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * The index to be played back
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * Whether content playback should continue. Default is false.
   * 
   * @example
   * false
   */
  needContentContinued?: boolean;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'ExtendInfo',
      index: 'Index',
      needContentContinued: 'NeedContentContinued',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      index: 'number',
      needContentContinued: 'boolean',
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

export class IndexControlPlayingListRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type.
   * 
   * When the encoding type is `SKILL_ID`, the value is the Skill ID of the application. When the encoding type is `PACKAGE_NAME`, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the User Identifier for Tmall Genie, and each method corresponds to a different encoding type.
   * 
   * `PACKAGE_NAME`: APK package name, used for the Android application customer link. `SKILL_ID`: Skill ID, used for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier, set to userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ouRjKOX95tn1a0kwb2+Ao6Q1CAxASJUZDWtlk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * Type of User ID
   * 
   * `OPEN_ID`: The default User ID identity. `UNION_ID`: The organization-dimension User ID identity, which is available only after an organization has been requested on the Tmall Genie Skills Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required when IdType is UNION_ID.
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

export class IndexControlPlayingListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: IndexControlPlayingListRequestDeviceInfo;
  /**
   * @remarks
   * Business parameters
   * 
   * This parameter is required.
   */
  openIndexControlRequest?: IndexControlPlayingListRequestOpenIndexControlRequest;
  /**
   * @remarks
   * User Identifier information
   * 
   * This parameter is required.
   */
  userInfo?: IndexControlPlayingListRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openIndexControlRequest: 'OpenIndexControlRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: IndexControlPlayingListRequestDeviceInfo,
      openIndexControlRequest: IndexControlPlayingListRequestOpenIndexControlRequest,
      userInfo: IndexControlPlayingListRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.openIndexControlRequest && typeof (this.openIndexControlRequest as any).validate === 'function') {
      (this.openIndexControlRequest as any).validate();
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

