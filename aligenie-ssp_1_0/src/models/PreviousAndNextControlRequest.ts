// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviousAndNextControlRequestDeviceInfo extends $dara.Model {
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
   * `PACKAGE_NAME`: APK package name, used for Android application customer journeys. `SKILL_ID`: Skill ID, used for cloud-based journeys.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID, set to deviceOpenId or deviceUnionId.
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
   * `OPEN_ID`: The default device identity. `UNION_ID`: The organization-dimension device identity, which is available only after an organization has been requested on the Tmall Genie Skill Application Open Platform.
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

export class PreviousAndNextControlRequestOpenControlPlayingListRequest extends $dara.Model {
  /**
   * @remarks
   * Next track: NEXT; Previous track: PREVIOUS
   * 
   * This parameter is required.
   * 
   * @example
   * NEXT
   */
  cmd?: string;
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * Whether initiated by the device. Default is false.
   * 
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
   * Encoding type. There are multiple ways to obtain the user identity from Tmall Genie, and each method corresponds to a different encoding type.
   * 
   * `PACKAGE_NAME`: APK package name, used for Android application client-side flows. `SKILL_ID`: Skill ID, used for cloud-side flows.
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
   * `OPEN_ID`: The default user identity. `UNION_ID`: The organization-dimension user identity, which is available only after an organization has been requested on the Tmall Genie Skill Application Open Platform.
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

export class PreviousAndNextControlRequest extends $dara.Model {
  /**
   * @remarks
   * Device ID information
   * 
   * This parameter is required.
   */
  deviceInfo?: PreviousAndNextControlRequestDeviceInfo;
  /**
   * @remarks
   * Business parameters
   * 
   * This parameter is required.
   */
  openControlPlayingListRequest?: PreviousAndNextControlRequestOpenControlPlayingListRequest;
  /**
   * @remarks
   * User identity information
   * 
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

