// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushNotificationsRequestNotificationUnicastRequestSendTarget extends $dara.Model {
  /**
   * @example
   * 2VpiDQ6aMjxz******Eo7r6e08oIVZ3fKrm5TyEfY=
   */
  targetIdentity?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * apk包名
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
   * @example
   * true
   */
  isDebug?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2iU81*****G9elJ
   */
  messageTemplateId?: string;
  /**
   * @example
   * 2
   */
  organizationId?: string;
  /**
   * @example
   * {"nick":"张三"}
   */
  placeHolder?: { [key: string]: string };
  /**
   * @remarks
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
   * This parameter is required.
   */
  notificationUnicastRequest?: PushNotificationsRequestNotificationUnicastRequest;
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

