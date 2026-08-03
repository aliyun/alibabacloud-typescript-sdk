// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProgressControlRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type.
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
   * Encoding type. There are multiple ways to obtain the device ID for Tmall Genie, and each method corresponds to a different encoding type.
   * 
   * `PACKAGE_NAME`: APK package name, used for the Android application customer flow. `SKILL_ID`: Skill ID, used for the cloud-based flow.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID. Set to either deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ouRjKOX95tn1a0kwb2+Ao6Q1CAxASJUZDWtlk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * The type of Device ID.
   * 
   * `OPEN_ID`: The default device identity. `UNION_ID`: The organization-dimension device identity, which is available only after an organization has been requested on the Tmall Genie Skills Application Open Platform.
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

export class ProgressControlRequestOpenProgressControlRequest extends $dara.Model {
  /**
   * @remarks
   * Extension information
   */
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * Song progress, in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'ExtendInfo',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      progress: 'number',
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

export class ProgressControlRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type.
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
   * Encoding type. There are multiple ways to obtain the Tmall Genie user identity, and each way corresponds to a different encoding type.
   * 
   * `PACKAGE_NAME`: APK package name, used for the Android application client path. `SKILL_ID`: Skill ID, used for the cloud-based path.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * User identifier, set to userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ouRjKOX95tn1a0kwb2+Ao6Q1CAxASJUZDWtlk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * The type of User ID.
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
   * Organization ID. Required if IdType is `UNION_ID`.
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

export class ProgressControlRequest extends $dara.Model {
  /**
   * @remarks
   * Device identity information
   * 
   * This parameter is required.
   */
  deviceInfo?: ProgressControlRequestDeviceInfo;
  /**
   * @remarks
   * Business parameters
   * 
   * This parameter is required.
   */
  openProgressControlRequest?: ProgressControlRequestOpenProgressControlRequest;
  /**
   * @remarks
   * User identity information
   * 
   * This parameter is required.
   */
  userInfo?: ProgressControlRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openProgressControlRequest: 'OpenProgressControlRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ProgressControlRequestDeviceInfo,
      openProgressControlRequest: ProgressControlRequestOpenProgressControlRequest,
      userInfo: ProgressControlRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.openProgressControlRequest && typeof (this.openProgressControlRequest as any).validate === 'function') {
      (this.openProgressControlRequest as any).validate();
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

