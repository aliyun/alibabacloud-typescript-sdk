// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PlayAndPauseControlRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type.
   * 
   * If the encoding type is `SKILL_ID`, the value is the application\\"s Skill ID. If the encoding type is `PACKAGE_NAME`, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device identity for Tmall Genie, and each method corresponds to a different encoding type.
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
   * Device ID, which can be set to deviceOpenId or deviceUnionId.
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
   * `OPEN_ID`: The default device ID identity. `UNION_ID`: The organization-dimension device ID identity. This value is available only after an organization has been requested on the Tmall Genie Skill Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. This parameter is required if IdType is UNION_ID.
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

export class PlayAndPauseControlRequestOpenPlayAndPauseControlParam extends $dara.Model {
  /**
   * @remarks
   * Playback: Play; Pause: Pause.
   * 
   * This parameter is required.
   * 
   * @example
   * Play
   */
  openPlayAndPauseCommand?: string;
  static names(): { [key: string]: string } {
    return {
      openPlayAndPauseCommand: 'OpenPlayAndPauseCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openPlayAndPauseCommand: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayAndPauseControlRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type.
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
   * Encoding type. There are multiple ways to obtain the user identifier from Tmall Genie, and each method corresponds to a different encoding type.
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
   * User identifier, set to either userOpenId or userUnionId.
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
   * `OPEN_ID`: The default user ID identity. `UNION_ID`: The organization-dimension user ID identity. This value is available only after an organization has been requested on the Tmall Genie Skill Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required when IdType is `UNION_ID`.
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

export class PlayAndPauseControlRequest extends $dara.Model {
  /**
   * @remarks
   * Device identity information
   * 
   * This parameter is required.
   */
  deviceInfo?: PlayAndPauseControlRequestDeviceInfo;
  /**
   * @remarks
   * Business parameters
   * 
   * This parameter is required.
   */
  openPlayAndPauseControlParam?: PlayAndPauseControlRequestOpenPlayAndPauseControlParam;
  /**
   * @remarks
   * User identity information
   * 
   * This parameter is required.
   */
  userInfo?: PlayAndPauseControlRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openPlayAndPauseControlParam: 'OpenPlayAndPauseControlParam',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: PlayAndPauseControlRequestDeviceInfo,
      openPlayAndPauseControlParam: PlayAndPauseControlRequestOpenPlayAndPauseControlParam,
      userInfo: PlayAndPauseControlRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.openPlayAndPauseControlParam && typeof (this.openPlayAndPauseControlParam as any).validate === 'function') {
      (this.openPlayAndPauseControlParam as any).validate();
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

