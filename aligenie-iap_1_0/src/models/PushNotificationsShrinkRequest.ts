// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushNotificationsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  notificationUnicastRequestShrink?: string;
  tenantInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      notificationUnicastRequestShrink: 'NotificationUnicastRequest',
      tenantInfoShrink: 'TenantInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationUnicastRequestShrink: 'string',
      tenantInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

