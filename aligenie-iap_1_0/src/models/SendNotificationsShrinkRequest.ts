// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendNotificationsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Device identity information
   * 
   * This parameter is required.
   */
  deviceInfoShrink?: string;
  /**
   * @remarks
   * Input parameter object for message push.
   * 
   * This parameter is required.
   */
  notificationUnicastRequestShrink?: string;
  /**
   * @remarks
   * Identity information.
   */
  tenantInfoShrink?: string;
  /**
   * @remarks
   * User Identifier information
   * 
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      notificationUnicastRequestShrink: 'NotificationUnicastRequest',
      tenantInfoShrink: 'TenantInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      notificationUnicastRequestShrink: 'string',
      tenantInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

