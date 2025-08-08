// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmNotificationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * deab3673236843a3b378c7d8d25c5f01
   */
  notificationRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      notificationRequestId: 'NotificationRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationRequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

