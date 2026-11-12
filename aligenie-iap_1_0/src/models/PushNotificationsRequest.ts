// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushNotificationsRequestNotificationUnicastRequestSendTarget extends $dara.Model {
  /**
   * @remarks
   * The identity value corresponding to the Push Target Type.
   * 
   * @example
   * 2VpiDQ6aMjxz******Eo7r6e08oIVZ3fKrm5TyEfY=
   */
  targetIdentity?: string;
  /**
   * @remarks
   * The type of the Push Target, indicating the type when obtaining the corresponding device or User Identifier:  
   * - `DEVICE_UNION_ID`: device unionId  
   * - `DEVICE_OPEN_ID`: device openId  
   * - `USER_UNION_ID`: user unionId  
   * - `USER_OPEN_ID`: user openId
   * 
   * @example
   * DEVICE_OPEN_ID
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      targetIdentity: 'TargetIdentity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetIdentity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsRequestNotificationUnicastRequest extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type.  
   * - When the encoding type is SKILL_ID, the value is the skill ID obtained from the webhook service.  
   * - When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * apk包名
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the Tmall Genie device ID, and each method corresponds to a different encoding type:  
   * - PACKAGE_NAME: APK package name  
   * - SKILL_ID: Skill ID
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * Debug flag. When the skill application is in the debug phase, setting this flag determines whether the retrieved skill application information is from the editing state or the online state.
   * 
   * @example
   * true
   */
  isDebug?: boolean;
  /**
   * @remarks
   * Message template ID obtained when applying for a message template on the Tmall Genie Application Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 2iU81*****G9elJ
   */
  messageTemplateId?: string;
  /**
   * @remarks
   * Organization Identifier. This parameter is required only when the push type is `XX_UNION_XX`. If you obtain CatGenie device or user identifiers through multiple channels and need interoperability among them, you must request an organization from the platform. After approval, the platform will assign an organization identifier.
   * 
   * @example
   * 2
   */
  organizationId?: string;
  /**
   * @remarks
   * Placeholder information. For example, for the template ["Hello, {nick}!"], this could be {"nick":"Sweetie"}. Additionally, within the placeholder parameters, you can append parameters to the application launch link to support hyperlinking to a specific address, such as: `{"nick":"Sweetie","_URL_SUFFIX_":"xxx"}`. The hyperlink address in the message pop-up will then be: application launch link + `${_URL_SUFFIX_}`. This feature only works for applications that have configured a launch link.
   * 
   * @example
   * {"nick":"张三"}
   */
  placeHolder?: { [key: string]: string };
  /**
   * @remarks
   * The target information for message push.
   * 
   * This parameter is required.
   */
  sendTarget?: PushNotificationsRequestNotificationUnicastRequestSendTarget;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      isDebug: 'IsDebug',
      messageTemplateId: 'MessageTemplateId',
      organizationId: 'OrganizationId',
      placeHolder: 'PlaceHolder',
      sendTarget: 'SendTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      isDebug: 'boolean',
      messageTemplateId: 'string',
      organizationId: 'string',
      placeHolder: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sendTarget: PushNotificationsRequestNotificationUnicastRequestSendTarget,
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

export class PushNotificationsRequestTenantInfo extends $dara.Model {
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

export class PushNotificationsRequest extends $dara.Model {
  /**
   * @remarks
   * Input parameter object for message push.
   * 
   * This parameter is required.
   */
  notificationUnicastRequest?: PushNotificationsRequestNotificationUnicastRequest;
  /**
   * @remarks
   * Identity information.
   */
  tenantInfo?: PushNotificationsRequestTenantInfo;
  static names(): { [key: string]: string } {
    return {
      notificationUnicastRequest: 'NotificationUnicastRequest',
      tenantInfo: 'TenantInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationUnicastRequest: PushNotificationsRequestNotificationUnicastRequest,
      tenantInfo: PushNotificationsRequestTenantInfo,
    };
  }

  validate() {
    if(this.notificationUnicastRequest && typeof (this.notificationUnicastRequest as any).validate === 'function') {
      (this.notificationUnicastRequest as any).validate();
    }
    if(this.tenantInfo && typeof (this.tenantInfo as any).validate === 'function') {
      (this.tenantInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

