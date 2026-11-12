// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AppUseTimeReportRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type.
   * 
   * - When the encoding type is SKILL_ID, the value is the application\\"s Skill ID.
   * - When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client application.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device identity for Tmall Genie, and each method corresponds to a different encoding type.  
   * - PACKAGE_NAME: APK package name, used for Android application customer-side integration.  
   * - SKILL_ID: Skill ID, used for cloud-side integration.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID, set to deviceOpenId or deviceUnionId.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of device ID  
   * - OPEN_ID: Default device ID.  
   * - UNION_ID: Organization-dimension device ID, available only after an organization has been requested in the Tmall Genie Skill Application Open Platform.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID, required if IdType is UNION_ID.
   * 
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

export class AppUseTimeReportRequestPayload extends $dara.Model {
  /**
   * @remarks
   * Action item
   * 
   * - start indicates Start
   * - end indicates End
   * 
   * This parameter is required.
   * 
   * @example
   * start
   */
  action?: string;
  /**
   * @remarks
   * Indicates whether the benefit is exclusive to members:
   * 
   * - 1 indicates Yes  
   * - 0 indicates No
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  isPrivilege?: number;
  /**
   * @remarks
   * Resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource type:
   * 
   * - 0 indicates game
   * - 1 indicates audio
   * - 2 indicates video
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * Step code. The start and end actions must be uniquely matched.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  stepCode?: string;
  /**
   * @remarks
   * Membership type:
   * 
   * - 0 indicates Cat Spirit Membership
   * - 1 indicates third-party proprietary membership
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  vipType?: number;
  /**
   * @remarks
   * Plaintext UUID
   * 
   * @example
   * 731D5F********DC3B
   */
  originUuid?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      isPrivilege: 'IsPrivilege',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      stepCode: 'StepCode',
      vipType: 'VipType',
      originUuid: 'originUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      isPrivilege: 'number',
      resourceId: 'string',
      resourceType: 'number',
      stepCode: 'string',
      vipType: 'number',
      originUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppUseTimeReportRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type  
   * 
   * - When the encoding type is SKILL_ID, the value is the application\\"s Skill ID.  
   * - When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client application.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the user identifier from Tmall Genie, and each method corresponds to a different encoding type.  
   * - PACKAGE_NAME: APK package name, used for the Android application customer flow.  
   * - SKILL_ID: Skill ID, used for the cloud-based flow.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * User identifier, set to either userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * Type of User ID  
   * - OPEN_ID: Default User ID identifier.  
   * - UNION_ID: Organization-dimension User ID identifier. This value is available only after an organization has been requested on the Tmall Genie Skill Application Open Platform.
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

export class AppUseTimeReportRequest extends $dara.Model {
  /**
   * @remarks
   * Device identity information
   */
  deviceInfo?: AppUseTimeReportRequestDeviceInfo;
  /**
   * @remarks
   * Business parameters
   */
  payload?: AppUseTimeReportRequestPayload;
  /**
   * @remarks
   * User identifier information
   * 
   * This parameter is required.
   */
  userInfo?: AppUseTimeReportRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: AppUseTimeReportRequestDeviceInfo,
      payload: AppUseTimeReportRequestPayload,
      userInfo: AppUseTimeReportRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
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

