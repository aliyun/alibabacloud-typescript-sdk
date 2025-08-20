// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendNotificationsRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12**45
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
   * DAFE****ce3ej=
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
   * @example
   * false
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
   * {"nick":"张三"}
   */
  placeHolder?: { [key: string]: string };
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 12**45
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
   * HOFF****my7Iw=
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
   * This parameter is required.
   */
  deviceInfo?: SendNotificationsRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  notificationUnicastRequest?: SendNotificationsRequestNotificationUnicastRequest;
  tenantInfo?: SendNotificationsRequestTenantInfo;
  /**
   * @remarks
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

