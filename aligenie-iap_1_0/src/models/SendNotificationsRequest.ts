// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendNotificationsRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. If the encoding type is SKILL_ID, the value is the application\\"s Skill ID. If the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device ID for Maojing, and each method corresponds to a different encoding type:  
   *  - PACKAGE_NAME: APK package name, used for the Android application customer link  
   *  - SKILL_ID: Skill ID, used for the cloud link
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
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of device ID:  
   *  - OPEN_ID: Default device ID  
   *  - UNION_ID: Organization-dimension device ID, available only after an organization has been requested on the Maojing Skill Application Open Platform
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

export class SendNotificationsRequestNotificationUnicastRequestSendTarget extends $dara.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNotificationsRequestNotificationUnicastRequest extends $dara.Model {
  /**
   * @remarks
   * Debug flag. When the skill application is in the debugging phase, setting this flag determines whether the retrieved skill application information is from the editing state or the online state.
   * 
   * @example
   * false
   */
  isDebug?: boolean;
  /**
   * @remarks
   * Message template ID obtained when requesting a message template in the Tmall Genie Application Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 2iU81*****G9elJ
   */
  messageTemplateId?: string;
  /**
   * @remarks
   * Placeholder information. For example, for the template ["Hello, {nick}!"], this can be: {"nick":"Xiao Tian Tian"}. Additionally, within the placeholder parameters, you can append parameters to the application launch link to support hyperlinking to a specific address, such as: `{"nick":"Xiao Tian Tian","_URL_SUFFIX_":"xxx"}`. The hyperlink address in the message pop-up will then be: application launch link + `${_URL_SUFFIX_}`. This feature is only effective for applications that have configured a launch link.
   * 
   * @example
   * {"nick":"张三"}
   */
  placeHolder?: { [key: string]: string };
  /**
   * @remarks
   * Target information for message push.
   * 
   * This parameter is required.
   */
  sendTarget?: SendNotificationsRequestNotificationUnicastRequestSendTarget;
  static names(): { [key: string]: string } {
    return {
      isDebug: 'IsDebug',
      messageTemplateId: 'MessageTemplateId',
      placeHolder: 'PlaceHolder',
      sendTarget: 'SendTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDebug: 'boolean',
      messageTemplateId: 'string',
      placeHolder: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sendTarget: SendNotificationsRequestNotificationUnicastRequestSendTarget,
    };
  }

  validate() {
    if(this.placeHolder) {
      $dara.Model.validateMap(this.placeHolder);
    }
    if(this.sendTarget && typeof (this.sendTarget as any).validate === 'function') {
      (this.sendTarget as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNotificationsRequestTenantInfo extends $dara.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNotificationsRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. If the encoding type is SKILL_ID, the value is the application\\"s Skill ID. If the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the Maojing User Identifier, and each method corresponds to a different encoding type:  
   * - PACKAGE_NAME: APK package name, used for the Android application customer link  
   * - SKILL_ID: Skill ID, used for the cloud-based link
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier (userOpenId or userUnionId)
   * 
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * Type of the User ID:  
   * - OPEN_ID: Default User ID identifier  
   * - UNION_ID: Organization-dimension User ID identifier, available only after an organization has been requested on the Maojing Skill Application Open Platform
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

export class SendNotificationsRequest extends $dara.Model {
  /**
   * @remarks
   * Device identity information
   * 
   * This parameter is required.
   */
  deviceInfo?: SendNotificationsRequestDeviceInfo;
  /**
   * @remarks
   * Input parameter object for message push.
   * 
   * This parameter is required.
   */
  notificationUnicastRequest?: SendNotificationsRequestNotificationUnicastRequest;
  /**
   * @remarks
   * Identity information.
   */
  tenantInfo?: SendNotificationsRequestTenantInfo;
  /**
   * @remarks
   * User Identifier information
   * 
   * This parameter is required.
   */
  userInfo?: SendNotificationsRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      notificationUnicastRequest: 'NotificationUnicastRequest',
      tenantInfo: 'TenantInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: SendNotificationsRequestDeviceInfo,
      notificationUnicastRequest: SendNotificationsRequestNotificationUnicastRequest,
      tenantInfo: SendNotificationsRequestTenantInfo,
      userInfo: SendNotificationsRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.notificationUnicastRequest && typeof (this.notificationUnicastRequest as any).validate === 'function') {
      (this.notificationUnicastRequest as any).validate();
    }
    if(this.tenantInfo && typeof (this.tenantInfo as any).validate === 'function') {
      (this.tenantInfo as any).validate();
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

